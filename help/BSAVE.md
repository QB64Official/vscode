# BSAVE

BSAVE saves the contents of an image array to a [BINARY](BINARY.md) file.

  

## Syntax

BSAVE *saveFile$*, [VARPTR](VARPTR.md)(*array(index)*), *fileSize&*
### Legacy support

* **QB64** can save larger arrays directly to binary files using [PUT](PUT.md) # and [GET](GET.md) # without **BSAVE**. For that reason, **BSAVE** isn't recommended practice anymore and is supported to maintain compatibility with legacy code.

  

## Parameters

* *saveFile$* is the STRING file name of the file designated to be created.
* *array(index)* is the image [array](array.md) that already holds the [GET](GET.md) "GET (graphics statement)") image data.
* *fileSize&* must be a bit over twice the size of the elements used in an [INTEGER](INTEGER.md) [array](array.md).

  

## Description

* To place image data into the array, use [GET](GET.md) "GET (graphics statement)") to store a box area image of the screen.
* [SCREEN](SCREEN.md) 12 can only GET 1/3 of the screen image at one time using a 26K array.
* Image arrays are [DIMensioned](DIMensioned.md) as [INTEGER](INTEGER.md). Use [DEFINT](DEFINT.md) when working with large graphic arrays.
* Any arrays can be saved, but image arrays are most common.
* [DEF SEG](DEF SEG.md) = [VARSEG](VARSEG.md) must be used to designate the array segment position in memory.
* [VARPTR](VARPTR.md) returns the array index offset of the memory segment. Array sizes are limited to 32767 Integer elements due to the use of [VARPTR](VARPTR.md) in QBasic and **QB64'**s emulated conventional memory.
* BSAVE files can later be opened with [BLOAD](BLOAD.md).

  

## Examples

*Example 1:* Saving array data to a file quickly.

```  LB% = [LBOUND](LBOUND.md)(Array)  bytes% = [LEN](LEN.md)(Array(LB%))  filesize& = (([UBOUND](UBOUND.md)(Array) - LB%) + 1) * bytes%  [DEF SEG](DEF SEG.md) = [VARSEG](VARSEG.md)(Array(0))   BSAVE filename$, [VARPTR](VARPTR.md)(Array(LB%)), filesize&  ' changeable index  [DEF SEG](DEF SEG.md)  
```

*Explanation:* Procedure determines the filesize from the array size automatically. [LBOUND](LBOUND.md) is used with [UBOUND](UBOUND.md) to determine array size and byte size. Works with any type of array except variable-length strings. Used for saving program data fast.
  

*Example 2:* BSAVEing a bitmap and calculating the file size

```  [DEF SEG](DEF SEG.md) = [VARSEG](VARSEG.md)(Image(0))  [PSET](PSET.md)(BMPHead.PWidth - 1, BMPHead.PDepth - 1)  'color lower right corner if black  [GET](GET.md) "GET (graphics statement)") (0, 0)-(BMPHead.PWidth - 1, BMPHead.PDepth - 1), Image(NColors * 3) ' for 16 or 256 colors  [FOR](FOR.md) a& = 26000 [TO](TO.md) 0 [STEP](STEP.md) -1    [IF](IF.md) Image(a&) [THEN](THEN.md) ArraySize& = a&: [EXIT FOR](EXIT FOR.md)  [NEXT](NEXT.md)  BSAVE SaveName$, [VARPTR](VARPTR.md)(Image(0)), (2 * ArraySize&) + 200 'file size  [DEF SEG](DEF SEG.md)  
```

*Explanation:* The [FOR](FOR.md) loop reads backwards through the image array until it finds a value not 0. The [LONG](LONG.md) *ArraySize&* value is doubled and 200 is added. *BMPhead.PWidth* and *BMPhead.PDepth* are found by reading the bitmap's information header using a [TYPE](TYPE.md) definition. See [Bitmaps](Bitmaps.md).
  

*Example 3:* Using [PUT](PUT.md) and [GET](GET.md) to write and read array data from a file without using BSAVE or [BLOAD](BLOAD.md):

``` [KILL](KILL.md) "example2.BIN" 'removes old image file!  [SCREEN](SCREEN.md) 13 [OPTION BASE](OPTION BASE.md) 0 [REDIM](REDIM.md) Graphic%(1001) 'REDIM makes array resize-able later  [LINE](LINE.md) (0, 0)-(10, 10), 12, B 'create image [GET](GET.md) "GET (graphics statement)")(0, 0)-[STEP](STEP.md)(10, 10), Graphic%() 'get image to array  [FOR](FOR.md) i% = 1000 [TO](TO.md) 0 [STEP](STEP.md) -1 'reverse read array for size needed     [IF](IF.md) Graphic%(i%) <> 0 [THEN](THEN.md) [EXIT](EXIT.md) [FOR](FOR.md) 'find image color not black [NEXT](NEXT.md) size% = i% + 4 'size plus 2 integers(4  bytes) for dimensions [REDIM](REDIM.md) [_PRESERVE](_PRESERVE.md) Graphic%(size%) 'resize existing array in QB64 only!  [OPEN](OPEN.md) "example2.BIN" [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #1 ' [PUT](PUT.md) to a file [PUT](PUT.md) #1, , Graphic%() [CLOSE](CLOSE.md)  [OPEN](OPEN.md) "example2.BIN" [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) #2 'GET array and [PUT](PUT.md) to screen [DIM](DIM.md) CopyBin%([LOF](LOF.md)(2) \ 2) 'create new array sized by half of file size [GET](GET.md) #2, , CopyBin%() [PUT](PUT.md) "PUT (graphics statement)")(100, 100), CopyBin%(), [PSET](PSET.md) fsize% = [LOF](LOF.md)(2) [CLOSE](CLOSE.md)  K$ = [INPUT$](INPUT$.md)(1) 'Press any key [FOR](FOR.md) i = 0 [TO](TO.md) 20 'read all 3 arrays     [PRINT](PRINT.md) Graphic%(i); CopyBin%(i) [NEXT](NEXT.md) [PRINT](PRINT.md) "Array:"; size%, "File:"; fsize%  
```

*Explanation:* A 10 by 10 pixel box is saved to an array using the [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)") and written to a BINARY file using [PUT](PUT.md) #1. Then [GET](GET.md) #1 places the file contents into another INTEGER array and places it on the screen with the [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)").
The array contents: 88 is the width in the GET array for [SCREEN](SCREEN.md) 13 which needs divided by 8 in that mode only. The area is actually 11 X 11. The array size needed can be found by looping backwards through the array until a color value is found. **IF array(i) <> 0 THEN EXIT FOR** (66 integers) or by dividing the created BINARY file size in half (134 bytes) when known to be array sized already.
  

## See also

* [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)"), [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)")
* [BLOAD](BLOAD.md), [OPEN](OPEN.md), [BINARY](BINARY.md)
* [GET](GET.md), [PUT](PUT.md) (file statements)
* [VARSEG](VARSEG.md), [VARPTR](VARPTR.md)
* [DEF SEG](DEF SEG.md), [TYPE](TYPE.md)
* [Text Using Graphics](Text Using Graphics.md)

  
