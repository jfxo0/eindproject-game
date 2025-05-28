import { Actor, CollisionType, Color, Sprite, Vector } from "excalibur";
import { Background } from "./background";
import { Resources } from "./resources";

export class Platform extends Actor {


    constructor(x, y) {
        super({
            x, y,
            width: 2000,
            height: 150,
            // color: Color.Cyan
        });

        // const sprite = Resources.Platform.toSprite()
        // this.graphics.use(sprite);
    }

    onInitialize(engine) {
        this.body.collisionType = CollisionType.Fixed;
        // this.body.mass = 80;
        // this.body.bounciness = 1;
        // this.body.friction = 0;

    }


    // onInitialize(engine) {

    //     this.sprite = new Sprite({
    //         image: Resources.Platform,
    //         sourceView: { x: 0, y: 0.01, width: engine.width, height: engine.width }
    //     })

    //     // this.anchor = Vector.Zero
    //     this.graphics.use(this.sprite)
    //     console.log('there is a background')

    // }

    // // onInitialize(engine) {

    // //     // this.body.collisionType = CollisionType.Fixed;
    // // }

    // onPostUpdate(engine, delta) {
    //     this.body.CollisionType = CollisionType.Fixed;
    //     this.sprite.sourceView.x += .05 * delta;

    // }


}