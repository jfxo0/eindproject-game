import { Actor, Label, Vector, Font, Color, Sprite, Rectangle } from "excalibur";
import { UI } from "./ui";
import { Resources } from "./resources";

export class Heart extends Actor {
    constructor(posX) {
        super({
            pos: new Vector(posX, -40),
            width: 32,
            height: 32
        });

        const sprite = new Sprite({
            image: Resources.Heart,
            // sourceView: { x: 0, y: 0, width: 32, height: 32 },
            sourceRect: new Rectangle(0, 0, 32, 32), // Knip dit stukje uit de afbeelding
            destSize: { width: 32, height: 32 }
        });

        this.graphics.use(sprite);
        // console.log(sourceView)


    }


}
