<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [BSAVE](BSAVE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/BSAVE)
---
<blockquote>

### BSAVE saves the contents of an image array to a BINARY file.

</blockquote>

#### SYNTAX

<blockquote>

`BSAVE saveFile$ , VARPTR ( array(index) ), fileSize&`

</blockquote>

#### PARAMETERS

<blockquote>


* saveFile$ is the [STRING](STRING.md) file name of the file designated to be created.
* array(index) is the image array that already holds the [GET](GET.md) image data.
* fileSize& must be a bit over twice the size of the elements used in an [INTEGER](INTEGER.md) array .
</blockquote>

#### DESCRIPTION

<blockquote>


* To place image data into the array, use [GET](GET.md) to store a box area image of the screen.
* [SCREEN](SCREEN.md) 12 can only [GET](GET.md) 1/3 of the screen image at one time using a 26K array.
* Image arrays are DIMensioned as [INTEGER](INTEGER.md) . Use [DEFINT](DEFINT.md) when working with large graphic arrays.
* Any arrays can be saved, but image arrays are most common.
* [DEF](DEF.md) [SEG](SEG.md) = [VARSEG](VARSEG.md) must be used to designate the array segment position in memory.
* [VARPTR](VARPTR.md) returns the array index offset of the memory segment. Array sizes are limited to 32767 Integer elements due to the use of [VARPTR](VARPTR.md) in QBasic and QB64' s emulated conventional memory.
* [BSAVE](BSAVE.md) files can later be opened with [BLOAD](BLOAD.md) .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Saving array data to a file quickly.
```vb
LB% = LBOUND(Array)
bytes% = LEN(Array(LB%))
filesize& = ((UBOUND(Array) - LB%) + 1) * bytes%
DEF SEG = VARSEG(Array(0))
BSAVE filename$, VARPTR(Array(LB%)), filesize&  ' changeable index
DEF SEG
```
  
<br>



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
  
<br>



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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [GET](GET.md) (graphics statement) , [PUT](PUT.md) (graphics statement)
* [BLOAD](BLOAD.md) , [OPEN](OPEN.md) , [BINARY](BINARY.md)
* [GET](GET.md) , [PUT](PUT.md) (file statements)
* [VARSEG](VARSEG.md) , [VARPTR](VARPTR.md)
* [DEF](DEF.md) [SEG](SEG.md) , [TYPE](TYPE.md)
* Text Using Graphics
</blockquote>
