import { Actor, CollisionType, Color, Sprite, Vector } from "excalibur";
import { Background } from "./background";
import { Resources } from "./resources";

export class Platform extends Actor {


    constructor(x, y) {
        super({
            x, y,
            width: 6000,
            height: 150,
        });

        // const sprite = Resources.Platform.toSprite()
        // this.graphics.use(sprite);
    }

    onInitialize(engine) {
        // this.body.bounciness = 1;
        this.body.collisionType = CollisionType.Fixed;
        // this.body.mass = 80;

        // this.body.friction = 0;

    }
}