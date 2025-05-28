import { Actor, Animation, CollisionType, DegreeOfFreedom, Keys, range, SpriteSheet, Vector } from "excalibur"
import { Resources } from "./resources"
import { Rock } from "./rock"

export class Player extends Actor {

    score = 0;
    #lives = 3
    gameOver = false;

    constructor() {

        super({ width: 20, height: 30 })

        const spriteSheetRun = SpriteSheet.fromImageSource({
            image: Resources.Player,
            grid: { rows: 1, columns: 6, spriteWidth: 32, spriteHeight: 32 }
        })

        const spriteSheetIdle = SpriteSheet.fromImageSource({
            image: Resources.Idle,
            grid: { rows: 1, columns: 4, spriteWidth: 32, spriteHeight: 32 }
        })

        const spriteSheetJump = SpriteSheet.fromImageSource({
            image: Resources.Jump,
            grid: { rows: 1, columns: 8, spriteWidth: 32, spriteHeight: 32 }
        })

        const spriteSheetRoll = SpriteSheet.fromImageSource({
            image: Resources.Roll,
            grid: { rows: 1, columns: 6, spriteWidth: 32, spriteHeight: 32 }
        })

        const spriteSheetDeath = SpriteSheet.fromImageSource({
            image: Resources.Death,
            grid: { rows: 1, columns: 8, spriteWidth: 32, spriteHeight: 32 }
        })


        const idle = Animation.fromSpriteSheet(spriteSheetIdle, range(0, 3), 100);
        let left = Animation.fromSpriteSheet(spriteSheetRun, range(0, 5), 80);
        let right = left.clone()
        left.flipHorizontal = true
        const jump = Animation.fromSpriteSheet(spriteSheetJump, range(0, 7), 80);
        const roll = Animation.fromSpriteSheet(spriteSheetRoll, range(0, 5), 100);
        const death = Animation.fromSpriteSheet(spriteSheetDeath, range(0, 7), 80);

        this.graphics.add("idle", idle);
        this.graphics.add("runleft", left);
        this.graphics.add("runright", right);
        this.graphics.add("jump", jump);
        this.graphics.add("roll", roll);
        this.graphics.add("death", death);
        this.graphics.use(idle);

        this.on("exitviewport", () => this.kill())

    }

    onInitialize(engine) {
        this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        // this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
        this.scale = new Vector(2.35, 2.35);
        this.pos = new Vector(20, 285)
        this.vel = new Vector(0, 0)
        this.on("collisionstart", (event) => this.handleCollision(event));
    }


    onPreUpdate(engine, delta) {

        let xspeed = 0
        let yspeed = 0
        this.graphics.use('idle')

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.use('runleft')
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.use('runright')
        }

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            this.body.applyLinearImpulse(new Vector(0, -250))

            this.graphics.use('jump')

        }

        if (engine.input.keyboard.isHeld(Keys.Down)) {
            xspeed = 10
            this.graphics.use('roll')
            console.log(`roll`)
        }

        this.vel = new Vector(xspeed, yspeed)

        // if (this.pos.y > 1000) {
        //     engine.gameOver()
        // }

    }


    updateScore() {
        if (!this.gameOver) {
            this.score++;
            this.scene?.engine.ui.updateScore();
        }
    }

    showHearts() {
        this.scene.engine.heart.showHearts(3);
        console.log('hearts')
    }

    handleCollision(event) {

        if (event.other.owner instanceof Rock) {
            // this.gameOver = true;
            // console.log('gameover')

            // this.graphics.use('death')
            // event.other.owner.kill()

            this.scene?.engine.gameOver();
            // this.score = 0;
            // this.scene?.engine.ui.updateScore();
            // console.log('collission')

        }

    }
}