## BSAVE
---

### BSAVE saves the contents of an image array to a BINARY file.

#### SYNTAX

`BSAVE saveFile$ , VARPTR ( array(index) ), fileSize&`

#### PARAMETERS
* saveFile$ is the [STRING](./STRING.md) file name of the file designated to be created.
* array(index) is the image array that already holds the [GET](./GET.md) image data.
* fileSize& must be a bit over twice the size of the elements used in an [INTEGER](./INTEGER.md) array .


#### DESCRIPTION
* To place image data into the array, use [GET](./GET.md) to store a box area image of the screen.
* [SCREEN](./SCREEN.md) 12 can only [GET](./GET.md) 1/3 of the screen image at one time using a 26K array.
* Image arrays are DIMensioned as [INTEGER](./INTEGER.md) . Use [DEFINT](./DEFINT.md) when working with large graphic arrays.
* Any arrays can be saved, but image arrays are most common.
* [DEF](./DEF.md) [SEG](./SEG.md) = [VARSEG](./VARSEG.md) must be used to designate the array segment position in memory.
* [VARPTR](./VARPTR.md) returns the array index offset of the memory segment. Array sizes are limited to 32767 Integer elements due to the use of [VARPTR](./VARPTR.md) in QBasic and QB64' s emulated conventional memory.
* [BSAVE](./BSAVE.md) files can later be opened with [BLOAD](./BLOAD.md) .


#### EXAMPLES
##### Example 1: Saving array data to a file quickly.
```vb
LB% = LBOUND(Array)
bytes% = LEN(Array(LB%))
filesize& = ((UBOUND(Array) - LB%) + 1) * bytes%
DEF SEG = VARSEG(Array(0))
 BSAVE filename$, VARPTR(Array(LB%)), filesize&  ' changeable index
DEF SEG
```
  
##### Example 2: BSAVEing a bitmap and calculating the file size
```vb
DEF SEG = VARSEG(Image(0))
PSET(BMPHead.PWidth - 1, BMPHead.PDepth - 1)  'color lower right corner if black
GET (0, 0)-(BMPHead.PWidth - 1, BMPHead.PDepth - 1), Image(NColors * 3) ' for 16 or 256 colors
FOR a& = 26000 TO 0 STEP -1
  IF Image(a&) THEN ArraySize& = a&: EXIT FOR
NEXT
BSAVE SaveName$, VARPTR(Image(0)), (2 * ArraySize&) + 200 'file size
DEF SEG
```
  
##### Example 3: Using PUT and GET to write and read array data from a file without using BSAVE or BLOAD :
```vb
KILL "example2.BIN" 'removes old image file!

SCREEN 13
OPTION BASE 0
REDIM Graphic%(1001) 'REDIM makes array resize-able later

LINE (0, 0)-(10, 10), 12, B 'create image
GET(0, 0)-STEP(10, 10), Graphic%() 'get image to array

FOR i% = 1000 TO 0 STEP -1 'reverse read array for size needed
   IF Graphic%(i%) <> 0 THEN EXIT FOR 'find image color not black
NEXT
size% = i% + 4 'size plus 2 integers(4  bytes) for dimensions
REDIM _PRESERVE Graphic%(size%) 'resize existing array in QB64 only!

OPEN "example2.BIN" FOR BINARY AS #1 ' PUT to a file
PUT #1, , Graphic%()
CLOSE

OPEN "example2.BIN" FOR BINARY AS #2 'GET array and PUT to screen
DIM CopyBin%(LOF(2) \ 2) 'create new array sized by half of file size
GET #2, , CopyBin%()
PUT(100, 100), CopyBin%(), PSET
fsize% = LOF(2)
CLOSE

K$ = INPUT$(1) 'Press any key
FOR i = 0 TO 20 'read all 3 arrays
   PRINT Graphic%(i); CopyBin%(i)
NEXT
PRINT "Array:"; size%, "File:"; fsize%
```
  


#### SEE ALSO
* [GET](./GET.md) (graphics statement) , [PUT](./PUT.md) (graphics statement)
* [BLOAD](./BLOAD.md) , [OPEN](./OPEN.md) , [BINARY](./BINARY.md)
* [GET](./GET.md) , [PUT](./PUT.md) (file statements)
* [VARSEG](./VARSEG.md) , [VARPTR](./VARPTR.md)
* [DEF](./DEF.md) [SEG](./SEG.md) , [TYPE](./TYPE.md)
* Text Using Graphics
