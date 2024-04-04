radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        magicbit.MotorRunDual(magicbit.Motors.M1, 255, magicbit.Motors.M2, 255)
        magicbit.MotorRunDual(magicbit.Motors.M3, -255, magicbit.Motors.M4, -255)
    } else if (receivedNumber == 2) {
        magicbit.MotorRunDual(magicbit.Motors.M1, -255, magicbit.Motors.M2, -255)
        magicbit.MotorRunDual(magicbit.Motors.M3, -255, magicbit.Motors.M4, -255)
    } else if (receivedNumber == 3) {
        magicbit.MotorRunDual(magicbit.Motors.M1, -255, magicbit.Motors.M2, -255)
        magicbit.MotorRunDual(magicbit.Motors.M3, 255, magicbit.Motors.M4, 255)
    } else if (receivedNumber == 4) {
        magicbit.MotorRunDual(magicbit.Motors.M1, 255, magicbit.Motors.M2, 255)
        magicbit.MotorRunDual(magicbit.Motors.M3, 255, magicbit.Motors.M4, 255)
    } else if (receivedNumber == 5) {
        magicbit.MotorStopAll()
    } else if (receivedNumber == 6) {
        magicbit.MotorRunDual(magicbit.Motors.M1, -255, magicbit.Motors.M2, 255)
        magicbit.MotorRunDual(magicbit.Motors.M3, 255, magicbit.Motors.M4, -255)
    } else if (receivedNumber == 7) {
        magicbit.MotorRunDual(magicbit.Motors.M1, 255, magicbit.Motors.M2, -255)
        magicbit.MotorRunDual(magicbit.Motors.M3, -255, magicbit.Motors.M4, 255)
    } else if (receivedNumber == 8) {
        magicbit.MotorRunDual(magicbit.Motors.M1, 255, magicbit.Motors.M3, -255)
    } else if (receivedNumber == 9) {
        magicbit.MotorRunDual(magicbit.Motors.M2, 255, magicbit.Motors.M4, -255)
    } else if (receivedNumber == 10) {
        magicbit.MotorRunDual(magicbit.Motors.M1, -255, magicbit.Motors.M3, 255)
    } else if (receivedNumber == 11) {
        magicbit.MotorRunDual(magicbit.Motors.M2, -255, magicbit.Motors.M4, 255)
    }
})
radio.setGroup(1)
