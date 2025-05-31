import { Actor, Color, Font, Label, Vector } from "excalibur";

export class UI extends Actor {
    label;

    constructor() {
        super();
    }

    onInitialize(engine) {

        this.label = new Label({

            pos: new Vector(620, 30),
            font: new Font({

                size: 50,
                family: 'Open Sans',
                color: Color.White

            })

        });

        this.addChild(this.label);
    }

    updateScore(score) {
        this.label.text = `Score ${score}`;
    }

}