game.startCountdown(10000)
let coin = game.createSprite(randint(0, 4), randint(0, 4))
let char = game.createSprite(2, 2)
coin.set(LedSpriteProperty.Brightness, 150)
while (true) {
    if (coin.isTouching(char)) {
        game.addScore(1)
        coin.set(LedSpriteProperty.X, randint(0, 4))
        coin.set(LedSpriteProperty.Y, randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        char.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        char.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) > 0) {
        char.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.Y) < 0) {
        char.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
}
