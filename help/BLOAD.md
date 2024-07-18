## BLOAD
---

### BLOAD loads a binary graphics file created by BSAVE to an array.

#### SYNTAX

`BLOAD fileName$ , VARPTR ( imageArray%( index ) )`

#### PARAMETERS
* fileName$ is the name of the file that the image should be BSAVEd to.
* imageArray%(index) is the [INTEGER](./INTEGER.md) array start index to store the image loaded.


#### DESCRIPTION
* There must be an [INTEGER](./INTEGER.md) array of adequate size (up to 26K) to hold the graphic data.
* A [DEF](./DEF.md) [SEG](./SEG.md) pointing to the array is required. [DEF](./DEF.md) [SEG](./SEG.md) = [VARSEG](./VARSEG.md) (imageArray%(index))
* index is the starting image element of the Array. Can also include RGB color settings at the start index.
* Fullscreen images in [SCREEN](./SCREEN.md) 12 require 3 file BLOADs. A 26K array can hold 1/3 of screen.
* Custom RGB color settings can be embedded(indexed) at the start of the image array.
* [BLOAD](./BLOAD.md) can be used to load any array that was saved with [BSAVE](./BSAVE.md) , not just graphics.
* Array sizes are limited to 32767 Integer elements due to use of [VARPTR](./VARPTR.md) in QBasic and QB64' s emulated conventional memory.


#### EXAMPLES
##### Example 1: Loading data to an array from a BSAVED file.
```vb
DEF SEG = VARSEG(Array(0))
  BLOAD filename$, VARPTR(Array(LBOUND(Array))) ' changeable index
DEF SEG
```
  
##### Example 2: Using a QB default colored image.
```vb
DEF SEG = VARSEG(Image%(0)) ' pointer to first image element of an array
  BLOAD FileName$, VARPTR(Image%(0)) ' place data into array at index position 0
  PUT(Col, Row), Image%(0), PSET ' Put the image on the screen from index 0
DEF SEG
```
  


#### SEE ALSO
* [BSAVE](./BSAVE.md) , [OPEN](./OPEN.md) , [BINARY](./BINARY.md)
* [PUT](./PUT.md) , [GET](./GET.md) (file statement)
* [GET](./GET.md) (graphics statement) , [PUT](./PUT.md) (graphics statement)
* [VARSEG](./VARSEG.md) , [VARPTR](./VARPTR.md)
* [DEF](./DEF.md) [SEG](./SEG.md)
* Text Using Graphics
