import { Scene, Label, Vector, Color, Font, Keys } from 'excalibur';

export class GameOver extends Scene {

    onInitialize(engine) {
        const centerX = engine.drawWidth / 2;
        const centerY = engine.drawHeight / 2;

        const label = new Label({
            text: 'Game Over',
            pos: new Vector(centerX, centerY - 40),
            color: Color.Red,
            font: new Font({
                family: 'Arial',
                size: 48,
            }),
            textAlign: 'center',
        });

        const restartLabel = new Label({
            text: 'Press [SPACE_BAR] to Restart',
            pos: new Vector(centerX, centerY + 20),
            color: Color.White,
            font: new Font({
                family: 'Arial',
                size: 24,
            }),
            textAlign: 'center',
        });

        this.add(label);
        this.add(restartLabel);

        // Voeg input toe om opnieuw te starten
        engine.input.keyboard.on('press', (event) => {
            if (engine.input.keyboard.wasPressed(Keys.Space)) {
                engine.goToScene('game');  // verander 'main' naar je startscene naam
            }
        });
    }
}
