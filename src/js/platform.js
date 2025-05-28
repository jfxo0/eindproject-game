import { Actor, Sprite, Vector } from "excalibur";
import { Background } from "./background";
import { Resources } from "./resources";

export class Platform extends Actor {

    constructor() {
        super()
        const sprite = Resources.Platform.toSprite();
        this.graphics.use(sprite);
        this.pos = new Vector(0, 55)
        this.vel = new Vector(-30, 0)
    }


    // onInitialize(engine) {

    //     this.sprite = new Sprite({
    //         image: Resources.Platform,
    //         sourceView: { x: 0, y: 0, width: engine.drawWidth, height: engine.drawHeight }
    //     })
    //     this.graphics.use(this.sprite)
    //     this.anchor = Vector.Zero

    //     console.log('there is a background')

    // }

    // onPostUpdate(engine, delta) {
    //     this.sprite.sourceView.x += .05 * delta;
    // }

}