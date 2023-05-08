

//% color="#B19200" 
//% icon="\ue0b7"
//% block="Flash Storage"
namespace flashstorage {

    let simMap : any = null

    //% blockId="flash pairs stored" block="flash pairs stored"
    //% shim=flashstorage::size
    export function size() : number {
        return simMap ? simMap.size : 0;
    }

    //% blockId="flash get or default" block="flash get %key or use %defaultValue if key not saved"
    export function getOrDefault(key: string, defaultValue: string): string {
        let value = get(key)
        return value.length == 0 ? defaultValue : value;
    }

    //% blockId="flash remove key" block="flash remove key %key"
    //% shim=flashstorage::remove
    export function remove(key: string) : void {
        if (simMap) simMap.delete(key);
    }

    //% blockId="flash get key" block="flash get key %key"
    //% shim=flashstorage::get
    export function get(key: string) : string {
        return simMap ? simMap[key] : "";
    }


    //% blockId="flash put value for key" block="flash key %key's value to %value"
    //% shim=flashstorage::put
    export function put(key: string, value: string) {
        if (!simMap) simMap = {};
        simMap[key] = value;
    }
}
