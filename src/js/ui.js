import { Actor, Color, Font, Label, Vector } from "excalibur";

export class UI extends Actor {
    label;

    player;

    constructor() {
        super();
        // this.player = player
    }

    onInitialize(engine) {

        this.label = new Label({

            pos: new Vector(490, 30),
            font: new Font({

                size: 30,
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