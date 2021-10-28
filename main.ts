input.onButtonPressed(Button.A, function () {
    Advertisment.scrollImage(1, 200)
    basic.clearScreen()
    basic.showString("BOKIA")
})
let Advertisment: Image = null
Advertisment = images.createBigImage(`
    . . . . . . . . . .
    # # # # . # # # # #
    # # # # # . # # # #
    . . . . . . . . . .
    . . . . . . . . . .
    `)
