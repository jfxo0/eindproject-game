import { Actor, Vector } from "excalibur";
import { Resources } from "./resources";
import { Rock } from "./rock";

export class Rock2 extends Rock {

    constructor() {
        super()
        const sprite = Resources.Rock2.toSprite()
        this.graphics.use(sprite);

        this.pos = new Vector(1200, 480)
        this.scale = new Vector(0.7, 0.7)
        this.vel = new Vector(-50, 0)
        // this.pos = new Vector(Math.random() * 700, 285);
        this.on("exitviewport", (e) => this.resetPosition(e));
    }


    resetPosition(e) {
        const rightside = this.scene.engine.drawWidth
        this.pos = new Vector(Math.random() * 1200 + rightside, 480);
        this.acc = new Vector(-3, 0);
        // this.vel = new Vector(-80, 0);
        // this.acc = new Vector(-40, 0)
    }

}