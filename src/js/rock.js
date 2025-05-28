import { Actor, Engine, EngineEvents, Sprite, Vector } from "excalibur"
import { Resources } from "./resources"

export class Rock extends Actor {

    constructor() {
        super({ width: Resources.Rock.width, height: Resources.Rock.height });

        this.sprite = Resources.Rock.toSprite();
        this.graphics.use(this.sprite);

        // this.pos = new Vector(800, 285);
        // this.vel = new Vector(-150, 0);
        this.pos = new Vector(500, 285)
        this.vel = new Vector(-50, 0)


        this.scale = new Vector(0.9, 0.9);



        this.on("exitviewport", (e) => this.resetPosition(e))
    }

    // onInitialize(engine) {

    //     this.counter = 0
    // }

    // onPostUpdate(engine) {
    //     this.counter++

    //     // Na 120 frames (~2 seconden bij 60 FPS)
    //     if (this.counter > 1) {
    //         this.counter = 0
    //         // const rock = new Rock()
    //         // engine.add(rock)

    //     }
    // }

    resetPosition(e) {
        const rightside = this.scene.engine.drawWidth
        this.pos = new Vector(Math.random() * 1280 + rightside, 285);
        this.vel = new Vector(-50, 0);
        this.acc = new Vector(-3, 0)
    }


} 