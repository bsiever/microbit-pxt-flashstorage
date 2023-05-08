# flashstorage

```package
pins=github:bsiever/microbit-pxt-flashstorage
```

Allow persistent [flash storage](https://lancaster-university.github.io/microbit-docs/ubit/storage/) to be used from blocks.

**Storage may be erased on reprogramming!!!**
 
# Getting the size

```sig
flashstorage.size() : number
```

Returns the number of key/value pairs stored.

# Set a key value pair

```sig
flashstorage.set(key : string,  value : string) : void
```

Sets the given key to the provided value. 

# Getting a value for a key

```sig
flashstorage.get(key : string) : string
```

If present, returns the value for the given key.  Returns the empty string if the key is not present.

Returns the empty string if there is no value associated with the key (or if the value is actually the empty string)

# Removing a key/value pair

```sig
flashstorage.remove(key : string) : void
```

If present, remove the given key and associated value.

# Acknowledgements 


Icon based on [Font Awesome icon 0xE0B7](https://fontawesome.com/icons/bolt-lightning?f=classic&s=solid) SVG.

<script src="https://makecode.com/gh-pages-embed.js"></script>
<script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
