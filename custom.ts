
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */



/**
 * Anmashon blocks
 */
//% weight=80 color=#c93413  icon=""
namespace blinker {
    /**
     *blink a led at a prticrler intvel
     * 
     */
    //% block="blink forever at x $x y $y every $interva ms"
    export function blink(x:number ,y: number, interva: number): void {
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interva)

    }

 /**
     *blink a LED at a prticrler intvel 
     * 
     */
    //% block="blink  at x $x y $y every $interva ms and blinks $loop"
    export function blinker(x:number ,y: number, interva: number, loop: number): void {
         let sprite11 = game.createSprite(x, y)
        sprite11.setBlink(interva)
        for(let i = 0; i < loop; i++) {
        basic.pause(interva)
        } 
        sprite11.delete()
         
        

    }
    /**
     *blink a led at a prticrler intvel
     * 
     */
    //% block="blink forever at x $x y $y every $interva ms"
    export function blinkere(x:number ,y: number, interva: number): void {
        let sprite = game.createSprite(x, y)
        sprite.setBlink(interva)

    }
}
