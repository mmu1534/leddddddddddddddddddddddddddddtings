let xvariable = 0
input.onGesture(Gesture.Shake, function () {
    xvariable = 0
})
basic.forever(function () {
    for (let xindex = 0; xindex <= 4; xindex++) {
        led.plot(xindex, 0)
        basic.pause(100)
        led.unplot(xindex, 0)
        basic.pause(100)
    }
    for (let xindex = 0; xindex <= 4; xindex++) {
        led.plot(xindex, 4)
        basic.pause(100)
        led.unplot(xindex, 4)
        basic.pause(100)
    }
})
