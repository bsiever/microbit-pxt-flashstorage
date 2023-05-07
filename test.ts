serial.writeLine("starting...")
serial.writeLine("Press A to read value for key and size")
serial.writeLine("Press B to set key/value")
serial.writeLine("Press AB to remove it")

input.onButtonPressed(Button.A, function () {
    let value = flashstorage.get("key");
    serial.writeLine("value= " + value);
    let size = flashstorage.size();
    serial.writeLine("size= " + size);
})

input.onButtonPressed(Button.B, function () {
    flashstorage.put("key", "set");
    serial.writeLine("set");
})

input.onButtonPressed(Button.AB, function () {
    flashstorage.remove("key");
    serial.writeLine("removed");
})



