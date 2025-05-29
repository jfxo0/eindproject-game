import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy, Label, Font, Color } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Player } from './player.js'
import { Rock } from './rock.js'
import { Rock2 } from './rock2.js'
import { UI } from './ui.js'
import { Hearts } from './hearts.js'
import { Platform } from './platform.js'


export class Game extends Engine {

    ui;

    constructor() {
        super({
            width: 640,
            height: 360,
            maxFps: 60,
            displayMode: DisplayMode.FitScreen,
            physics: {
                solver: SolverStrategy.Arcade,
                gravity: new Vector(0, 800)
            }
        })

        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
        this.score = 0;
        const bg = new Background();
        this.add(bg);

        const platform = new Platform(0, 400);
        this.add(platform);

        const player = new Player();
        this.add(player);

        const rock = new Rock();
        this.add(rock);


        // const rock2 = new Rock2();
        // this.add(rock2);

        console.log("start de game!");

        this.ui = new UI()
        this.add(this.ui);

        // const hearts = new Hearts();
        // hearts.showHearts(3)
        // this.add(hearts);
        // this.add('game-over', new GameOver())

    }


    gameOver() {
        for (let actor of this.currentScene.actors) {
            actor.kill()
        }
        this.startGame()
    }

}

new Game()
