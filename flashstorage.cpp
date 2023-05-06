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
    ManagedString get(ManagedString key) {
        KeyValuePair *pair = uBit.storage.get(key);
        if (pair == NULL) {
            return ManagedString("");
        } else{
            return ManagedString((char*)pair->value);
        }
    }

    //% 
    void remove(ManagedString key) {
        uBit.storage.remove(key);
    }

    //% 
    int size() {
        return uBit.storage.size();
    }

    //% 
    void put(ManagedString key, ManagedString value) {
        uBit.storage.put(key, (uint8_t*)value.toCharArray(), value.length());
    }
}