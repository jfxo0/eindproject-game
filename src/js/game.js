import '../css/style.css'
import { Actor, Engine, Vector, DisplayMode, SolverStrategy } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { Background } from './background.js'
import { Player } from './player.js'
import { Rock } from './rock.js'
import { Rock2 } from './rock2.js'
import { UI } from './ui.js'
import { Hearts } from './hearts.js'
import { Platform } from './platform.js'


export class Game extends Engine {

    counter;
    lives;

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

        this.counter = 0;

        const bg = new Background();
        this.add(bg);

        const platform = new Platform();
        this.add(platform);

        // for (let i = 0; i < 5; i++) {
        const rock = new Rock();
        this.add(rock);
        // }


        // for (let i = 0; i < 5; i++) {
        const rock2 = new Rock2();
        this.add(rock2);
        // }



        console.log("start de game!");

        const player = new Player();
        this.add(player);

        this.ui = new UI(player)
        this.add(this.ui);

        // const hearts = new Hearts();
        // this.add(hearts)
        // hearts.showHearts(3)

    }

    onPostUpdate() {
        // this.counter++
        // if (this.counter > 120) {
        //     this.add(new Rock())
        //     this.add(new Rock2())
        //     this.counter = 0
        // }
    }

    gameOver() {
        for (let actor of this.currentScene.actors) {
            actor.kill()
        }
        this.startGame()
    }

}

new Game()
