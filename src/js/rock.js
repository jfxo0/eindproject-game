import { Actor, Engine, EngineEvents, Sprite, Vector } from "excalibur"
import { Resources } from "./resources"

export class Rock extends Actor {
    counter;
    constructor() {
        super({ width: Resources.Rock.width, height: Resources.Rock.height });

        this.sprite = Resources.Rock.toSprite();
        this.graphics.use(this.sprite);

        // this.pos = new Vector(800, 285);
        // this.vel = new Vector(-150, 0);
        this.pos = new Vector(700, 480)
        this.vel = new Vector(-50, 0)


        this.scale = new Vector(0.8, 0.8);



        this.on("exitviewport", (e) => this.resetPosition(e))
    }


    // onPostUpdate() {
    //     this.counter++
    //     if (this.counter > 900) {
    //         this.add(new Rock())
    //         this.counter = 0
    //         console.log('new enemy')
    //     }
    // }

    resetPosition(e) {
        const rightside = this.scene.engine.drawWidth
        this.pos = new Vector(Math.random() * 1280 + rightside, 480);
        this.vel = new Vector(-50, 0);
        this.acc = new Vector(-3, 0)
    }


} 