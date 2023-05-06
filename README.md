# i2c2

```package
pins=github:bsiever/microbit-pxt-flashstorage
```

This extension allows persistent [flash storage](https://lancaster-university.github.io/microbit-docs/ubit/storage/) to be used from blocks.

**Storage is usually erased on reprogramming!!!**


# Getting the size() 

```sig
flashstorage.size() : number
```



# Set a key value pair

```sig
flashstorage.set(key : string,  value : string) : void
```

# Getting a value for a key

```sig
flashstorage.get(key : string) : string
```

Returns the empty string if there is no value associated with the key (or if the value is actually the empty string)

# Removing a key/value pair

```sig
flashstorage.remove(key : string) : void
```

If present, remove the given key and associated value.



# Acknowledgements 


Icon based on [Font Awesome icon 0xF074](https://www.iconfinder.com/icons/213043/f074_icon) SVG.

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
