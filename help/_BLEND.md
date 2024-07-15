# _BLEND

The _BLEND statement turns on 32 bit alpha blending for an image or screen mode and is on by default.

  

## Syntax

_BLEND [*imageHandle&*]
  

## Parameters

* *imageHandle&* refers to an image in memory. If not specified, the current destination page (See [_DEST](_DEST.md)) is affected.

  

## Description

* Alpha blending is on by default when loading a .PNG image to a 32-bit surface.
* Normally it is used to turn blending on after a previous [_DONTBLEND](_DONTBLEND.md) call.
* _BLEND can only be used on 32-bit surfaces, otherwise it will produce the error [Illegal Function Call](Illegal Function Call.md).
* **Note: [_DONTBLEND](_DONTBLEND.md) is faster than the default _BLEND unless you really need to use it in 32 bit.**
* **32 bit screen surface backgrounds (black) have zero [_ALPHA](_ALPHA.md) so that they are transparent when placed over other surfaces.**

  

## Examples

*Example:*

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32)  'CLS , _RGB(128, 128, 128) 'change background color for other results  [_DONTBLEND](_DONTBLEND.md)  bg& = [POINT](POINT.md)(0, 0) [PRINT](PRINT.md) [_RED](_RED.md)(bg&), [_GREEN](_GREEN.md)(bg&), [_BLUE](_BLUE.md)(bg&), [_ALPHA](_ALPHA.md)(bg&)  [LINE](LINE.md) (100, 100)-(200, 200), [_RGBA32](_RGBA32.md)(255, 128, 0, 128), BF  [LINE](LINE.md) (440, 100)-(540, 200), [_RGBA32](_RGBA32.md)(0, 0, 255, 64), BF  K$ = [INPUT$](INPUT$.md)(1)  _BLEND  [LINE](LINE.md) (270, 300)-(370, 400), [_RGBA32](_RGBA32.md)(255, 128, 0, 128), BF m& = [POINT](POINT.md)(303, 302) [PRINT](PRINT.md) [_RED](_RED.md)(m&), [_GREEN](_GREEN.md)(m&), [_BLUE](_BLUE.md)(m&), [_ALPHA](_ALPHA.md)(m&) K$ = [INPUT$](INPUT$.md)(1)  [LINE](LINE.md) (270, 300)-(370, 400), [_RGBA32](_RGBA32.md)(0, 0, 255, 64), BF m& = [POINT](POINT.md)(303, 302) [PRINT](PRINT.md) [_RED](_RED.md)(m&), [_GREEN](_GREEN.md)(m&), [_BLUE](_BLUE.md)(m&), [_ALPHA](_ALPHA.md)(m&)  
```

  

## See also

* [_DONTBLEND](_DONTBLEND.md), [_BLEND (function)](_BLEND (function).md) "BLEND (function)")
* [Images](Images.md)

  
