
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */



/**
 * Anmashon blocks
 */
//% weight=80 color=#0fbc11 icon=""
namespace blinker {
    /**
     *blink a led at a prticrler intvel
     * 
     */
    //% block="blink at x $x y $y every $interva ms"
    export function blink(x:number ,y: number, interva: number): void {
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interva)

    }

  
}
