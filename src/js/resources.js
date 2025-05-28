import { ImageSource, Sound, Resource, Loader, ImageWrapping } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    Bg: new ImageSource('images/background.png', { wrapping: ImageWrapping.Repeat }),
    Player: new ImageSource('images/players/Pink_Monster/Pink_Monster_Run_6.png'),
    Death: new ImageSource('images/players/Pink_Monster/Pink_Monster_Death_8.png'),
    Idle: new ImageSource('images/players/Pink_Monster/Pink_Monster_Idle_4.png'),
    Jump: new ImageSource('images/players/Pink_Monster/Pink_Monster_Jump_8.png'),
    Hurt: new ImageSource('images/players/Pink_Monster/Pink_Monster_Hurt_4.png'),
    Roll: new ImageSource('images/players/Pink_Monster/roll4.png'),
    Rock: new ImageSource('images/rocks/PNG/canyon_rocks/canyon_rock2.png'),
    Rock2: new ImageSource('public/images/rocks/PNG/canyon_rocks/canyon_rock1.png'),
    Heart: new ImageSource('images/heart.png', { wrapping: ImageWrapping.Repeat }),
    Platform: new ImageSource('images/platform.png', { wrapping: ImageWrapping.Repeat })
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }