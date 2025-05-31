import { Actor, Animation, CollisionType, range, SpriteSheet, Vector } from "excalibur";
import { Resources } from "./resources";
import { Player } from "./player";
import { Rock } from "./rock";

export class Pickup extends Actor {
    counter;

    constructor() {
        super({
            width: 32,
            height: 32,
            collisionType: CollisionType.Passive
        });

        this.graphics.use(Resources.health.toSprite())

        const spriteSheetHealth = SpriteSheet.fromImageSource({
            image: Resources.health,
            grid: { rows: 1, columns: 4, spriteWidth: 32, spriteHeight: 32 }
        })

        const health = Animation.fromSpriteSheet(spriteSheetHealth, range(0, 3), 100);
        this.graphics.add("health", health);
        this.graphics.use(health);

        this.pos = new Vector(Math.random() * 500, 480)
        this.vel = new Vector(-50, 0)
        this.on("exitviewport", (e) => this.resetPosition(e))
    }


    resetPosition(e) {
        const rightside = this.scene.engine.drawWidth
        this.pos = new Vector(Math.random() * 1280 + rightside, 480);
        this.vel = new Vector(-50, 0);
    }

}