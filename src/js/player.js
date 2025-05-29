import { Actor, Animation, CollisionType, DegreeOfFreedom, Keys, range, SpriteSheet, Vector } from "excalibur"
import { Resources } from "./resources"
import { Rock } from "./rock"
import { Platform } from "./platform";

export class Player extends Actor {

    isOnGround;
    score;
    #lives;
    gameOver = false;

    constructor() {

        super({ width: 20, height: 33 })

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

        this.#lives = 3;

        this.on("exitviewport", () => this.restartGame())

    }

    onInitialize(engine) {
        // this.body.useGravity = true;
        this.body.collisionType = CollisionType.Active;
        // this.body.limitDegreeOfFreedom.push(DegreeOfFreedom.Rotation)
        this.scale = new Vector(2.35, 2.35);
        this.pos = new Vector(20, 200)
        this.vel = new Vector(0, 0)
        this.score = 0;
        this.on("collisionstart", (event) => this.handleCollision(event));
        this.scene?.engine.on("postupdate", (event) => this.addPoint(event))

    }


    onPreUpdate(engine, delta) {

        let xspeed = 0
        // this.isOnGround = false;
        this.graphics.use('idle')

        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -300
            this.graphics.use('runleft')
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 300
            this.graphics.use('runright')
        }



        if (engine.input.keyboard.isHeld(Keys.Down)) {
            xspeed = 10
            this.graphics.use('roll')
            console.log(`roll`)
        }

        if (engine.input.keyboard.wasPressed(Keys.Space) && this.isOnGround) {
            console.log('jump')
            this.body.applyLinearImpulse(new Vector(0, -180 * delta))
            this.graphics.use('jump')
            this.isOnGround = false
            console.log('is not on the ground')
        }


        else {
            // console.log('ur not on the ground')
        }


        this.vel = new Vector(xspeed, this.vel.y)
    }


    loseLife() {
        this.#lives--;
        if (this.#lives <= 0) {
            this.gameOver = true;
            this.scene?.engine.goToScene('game-over');
        }
    }

    addPoint() {
        // if (!this.handleCollision) {
        //     this.score++
        //     this.scene?.engine.ui.updateScore(this.score);
        // }
        this.score += 1 / 60; // 60 punt per seconden -> daarom delen door 60 !!! -> nu 1 punt per seconden
        this.scene?.engine.ui.updateScore(Math.floor(this.score)); // Math.floor = geen decimalen
    }

    restartGame() {

        this.scene?.engine.gameOver();
    }


    handleCollision(event) {

        if (event.other.owner instanceof Rock) {

            this.loseLife;

            this.score = 0;
            this.scene?.engine.ui.updateScore(this.score);

            this.scene?.engine.gameOver();
            event.other.owner.kill()
            // console.log('collission')

        } else if (event.other.owner instanceof Platform) {
            this.isOnGround = true;
            console.log('is on the ground')
            // this.score++;
            // this.scene?.engine.ui.updateScore(this.score);
        }


    }
}