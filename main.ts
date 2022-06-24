modules.button1.onEvent(jacdac.ButtonEvent.Down, function () {
    basic.showIcon(IconNames.Heart)
})
modules.button1.onEvent(jacdac.ButtonEvent.Up, function () {
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
