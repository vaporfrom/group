input.onButtonPressed(Button.A, function () {
    X += 1
    if (X > 4) {
        X = 0
    }
})
input.onGesture(Gesture.LogoUp, function () {
    X = 2
})
input.onGesture(Gesture.TiltLeft, function () {
    X = 4
})
input.onButtonPressed(Button.B, function () {
    X += -1
    if (X < 0) {
        X = 4
    }
})
input.onGesture(Gesture.TiltRight, function () {
    X = 3
})
input.onGesture(Gesture.LogoDown, function () {
    X = 1
})
let X = 0
X = 0
basic.forever(function () {
    if (X == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (X == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (X == 3) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (X == 4) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
