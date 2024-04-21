input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (matrix.burnChar(
    matrix.charCodeAt("α", 0),
    matrix.matrix5x8(`
        . # . . #
        # . # . #
        # . . # .
        # . . # .
        . # # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    )) {
        basic.setLedColor(0x00ff00)
    } else {
        basic.setLedColor(0xff0000)
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showString(matrix.formatHex(matrix.charCodeAt("α", 0), NumberFormat.UInt16BE))
})
matrix.init(matrix.ePages.y128)
matrix.paintEEPROM(matrix.matrix_eEEPROM_Startadresse(matrix.eEEPROM_Startadresse.F800), 0, 15)
matrix.displayMatrix()
