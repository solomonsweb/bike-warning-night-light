input.onButtonPressed(Button.A, function () {
    a = 1
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.B, function () {
    b = 0
    a = 0
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerDown), music.PlaybackMode.InBackground)
})
let light2 = 0
let b = 0
let a = 0
led.enable(true)
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
basic.forever(function () {
    if (a == 1) {
        if (light2 < 100) {
            while (a == 1) {
                basic.pause(1000)
                led.enable(true)
                basic.pause(1000)
                led.enable(false)
            }
        }
    }
})
basic.forever(function () {
    light2 = input.lightLevel()
})
