import { Actor, Label, Vector, Font, Color, Sprite, Rectangle } from "excalibur";
import { UI } from "./ui";
import { Resources } from "./resources";

export class Heart extends Actor {
    constructor(posX) {
        super({
            pos: new Vector(posX, -40), // relatief boven de speler
            width: 32,
            height: 32
        });

        const sprite = new Sprite({
            image: Resources.Heart,
            sourceRect: new Rectangle(0, 0, 32, 32),
            destSize: { width: 32, height: 32 }
        });

        this.graphics.use(sprite);
    }
}
