input.onButtonPressed(Button.A, function () {
    X += 1
    if (X > 4) {
        X = 0
    }
})
input.onGesture(Gesture.LogoUp, function () {
    X = 1
})
input.onGesture(Gesture.TiltLeft, function () {
    X = 3
})
input.onButtonPressed(Button.B, function () {
    X += -1
    if (X < 0) {
        X = 4
    }
})
input.onGesture(Gesture.TiltRight, function () {
    X = 4
})
input.onGesture(Gesture.LogoDown, function () {
    X = 2
})
let X = 0
X = 0
basic.forever(function () {
    basic.clearScreen()
    basic.showNumber(X)
    basic.clearScreen()
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
