input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    radio.sendString("A")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    radio.sendString("B")
})
radio.setGroup(1)
led.setBrightness(20)
basic.forever(function () {
	
})
