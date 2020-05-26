
> Open this page at [https://lucasmayhew.github.io/blocks/](https://lucasmayhew.github.io/blocks/)

## Usage

### Blink
Blink a LED forever
```blocks
function doSomething () {
    blinker.blink(2, 2, 100)
    basic.pause(300)
    blinker.blink(3, 2, 200)
    blinker.blink(1, 2, 200)
    blinker.blink(2, 1, 200)
    blinker.blink(2, 3, 200)
    basic.pause(300)
    blinker.blink(1, 0, 300)
    blinker.blink(2, 0, 300)
    blinker.blink(3, 0, 300)
    blinker.blink(4, 3, 300)
    blinker.blink(4, 2, 300)
    blinker.blink(4, 1, 300)
    blinker.blink(0, 1, 300)
    blinker.blink(0, 2, 300)
    blinker.blink(0, 3, 300)
    blinker.blink(1, 4, 300)
    blinker.blink(2, 4, 300)
    blinker.blink(3, 4, 300)
}
doSomething()
```

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/lucasmayhew/blocks** and import

## Edit this project ![Build status badge](https://github.com/lucasmayhew/blocks/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/lucasmayhew/blocks** and click import


#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
