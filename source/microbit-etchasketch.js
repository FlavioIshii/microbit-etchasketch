let new_y = 0
let new_x = 0
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
function blink2() {
    led.unplot(new_x, new_y)
    basic.pause(200)
    led.plot(new_x, new_y)
    basic.pause(200)
}
input.onGesture(Gesture.TiltLeft, function () {
    led.plot(new_x, new_y)
    if (new_x > 0) {
        new_x = new_x - 1
    }
})
input.onGesture(Gesture.TiltRight, function () {
    led.plot(new_x, new_y)
    if (new_x < 4) {
        new_x = new_x + 1
    }
})
input.onGesture(Gesture.LogoDown, function () {
    led.plot(new_x, new_y)
    if (new_y > 0) {
        new_y = new_y - 1
    }
})
input.onGesture(Gesture.LogoUp, function () {
    led.plot(new_x, new_y)
    if (new_y < 4) {
        new_y = new_y + 1
    }
})
new_x = 2
new_y = 4
basic.forever(function () {
    blink2()
})
