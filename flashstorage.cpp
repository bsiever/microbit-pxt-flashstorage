/**
* Bill Siever
* 2021-10-02 Initial Version
*
* Development environment specifics:
* Written in Microsoft PXT
*
* This code is released under the [MIT License](http://opensource.org/licenses/MIT).
* Please review the LICENSE.md file included with this example. If you have any questions 
* or concerns with licensing, please contact techsupport@sparkfun.com.
* Distributed as-is; no warranty is given.
*/

#include "pxt.h"
#include "MicroBit.h"

using namespace pxt;

namespace flashstorage { 
    

    //% 
    String get(String key) {
        if(!key) return PSTR("");
        KeyValuePair *pair = uBit.storage.get(key->getUTF8Data());
        if (pair == NULL) {
            return PSTR("");
        } else{
            String s = PSTR((char*)pair->value);
            delete pair;
            return s;
        }
    }

    //% 
    void remove(String key) {
        if(!key) return;
        uBit.storage.remove(key->getUTF8Data());
    }

    //% 
    int size() {
        int size = uBit.storage.size();
        return size;
    }

    //% 
    void put(String key, String value) {
        if(!key) return;
        if(!value) {
            remove(key);
            return;
        }
        uBit.storage.put(key->getUTF8Data(), (uint8_t*)value->getUTF8Data(), value->getUTF8Size());
    }
}