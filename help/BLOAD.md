# BLOAD

BLOAD loads a binary graphics file created by [BSAVE](BSAVE.md) to an array.

  

## Syntax

BLOAD *fileName$*, [VARPTR](VARPTR.md)(*imageArray%(*index*)*)
### Legacy support

* **QB64** can load larger arrays directly from binary files using [PUT](PUT.md) # and [GET](GET.md) # without **BLOAD**. For that reason, **BLOAD** isn't recommended practice anymore and is supported to maintain compatibility with legacy code.

  

## Parameters

* *fileName$* is the name of the file that the image should be [BSAVEd](BSAVEd.md) to.
* *imageArray%(index)* is the [INTEGER](INTEGER.md) [array](array.md) start index to store the image loaded.

  

## Description

* There must be an [INTEGER](INTEGER.md) array of adequate size (up to 26K) to hold the graphic data.
* A [DEF SEG](DEF SEG.md) pointing to the array is required. [DEF SEG](DEF SEG.md) = [VARSEG](VARSEG.md)(imageArray%(index))
* *index* is the starting image element of the Array. Can also include RGB color settings at the start index.
* Fullscreen images in [SCREEN](SCREEN.md) 12 require 3 file BLOADs. A 26K array can hold 1/3 of screen.
* Custom RGB color settings can be embedded(indexed) at the start of the image array.
* BLOAD can be used to load any array that was saved with [BSAVE](BSAVE.md), not just graphics.
* Array sizes are limited to 32767 Integer elements due to use of [VARPTR](VARPTR.md) in QBasic and **QB64'**s emulated conventional memory.

  

## Examples

*Example 1:* Loading data to an array from a BSAVED file.

```  [DEF SEG](DEF SEG.md) = [VARSEG](VARSEG.md)(Array(0))    BLOAD filename$, [VARPTR](VARPTR.md)(Array([LBOUND](LBOUND.md)(Array))) ' changeable index  [DEF SEG](DEF SEG.md)  
```

*Explanation:* Referance any type of array that matches the data saved. Can work with Integer, Single, Double, Long, fixed length Strings or [TYPE](TYPE.md) arrays. [LBOUND](LBOUND.md) determines the starting offset of the array or another index could be used.
  

*Example 2:* Using a QB default colored image.

```  [DEF SEG](DEF SEG.md) = [VARSEG](VARSEG.md)(Image%(0)) ' pointer to first image element of an array    BLOAD FileName$, [VARPTR](VARPTR.md)(Image%(0)) ' place data into array at index position 0    [PUT](PUT.md) "PUT (graphics statement)")(Col, Row), Image%(0), PSET ' Put the image on the screen from index 0  [DEF SEG](DEF SEG.md)  
```

*Note:* [PSET](PSET.md) is used as a [PUT](PUT.md) "PUT (graphics statement)") action that places the image over any background objects.
  

## See also

* [BSAVE](BSAVE.md), [OPEN](OPEN.md), [BINARY](BINARY.md)
* [PUT](PUT.md), [GET](GET.md) (file statement)
* [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)"), [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)")
* [VARSEG](VARSEG.md), [VARPTR](VARPTR.md)
* [DEF SEG](DEF SEG.md)
* [Text Using Graphics](Text Using Graphics.md)

  
