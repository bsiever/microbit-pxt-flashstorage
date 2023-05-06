

//% color=#0000FF 
//% icon="\ue0b7"
//% block="Flash Storage"
namespace flashstorage {
    //% blockId="flash size remaining" block="flash size remaining"
    //% shim=flashstorage::size
    export function size() : number {
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        return 0;
    }


    //% blockId="flash remove key" block="flash remove key %key"
    //% shim=flashstorage::remove
    export function remove(key: string) : void {
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        0;
    }

    //% blockId="flash get key" block="flash get key %key"
    //% shim=flashstorage::get
    export function get(key: string) : string {
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        return "";
    }


    //% blockId="flash put value for key" block="flash put %value for key %key"
    //% shim=flashstorage::put
    export function put(key: string, value: string) {
        // Per https://github.com/microsoft/pxt-microbit/issues/4292
        0;
    }
}
