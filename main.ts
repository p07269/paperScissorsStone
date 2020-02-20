let baauZinDum = 0
input.onGesture(Gesture.Shake, function () {
    baauZinDum = Math.randomRange(1, 3)
    if (1 == baauZinDum) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
    } else if (2 == baauZinDum) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (3 == baauZinDum) {
        basic.showLeds(`
            # . . # #
            . # . # #
            . . # . .
            . # . # #
            # . . # #
            `)
    }
})
