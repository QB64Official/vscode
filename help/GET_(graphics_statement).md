## GET (graphics statement)
---
<blockquote>

### The GET statement is used in graphics to store a box area image of the screen into an INTEGER array.

</blockquote>

#### SYNTAX

<blockquote>

`GET [STEP] ( column1 , row1 )-[STEP]( column2 , row2 ), array ([ index ])[, offscreenColor ]`

</blockquote>

#### PARAMETERS

<blockquote>

* column and row [INTEGER](./INTEGER.md) coordinates for the box area must be on the screen except when using an offscreenColor .
* [INTEGER](./INTEGER.md) array sizes must be large enough (use width * height of the box area + 4) to hold the data or an error will occur.
* The array index offset is optional. If the offset is zero the brackets may be empty.
* The offscreenColor pixels will be returned as the designated color when part of an image is off screen.

</blockquote>

#### DESCRIPTION

<blockquote>

* The [STEP](./STEP.md) keyword can be used to for coordinates relative to the last graphic coordinates used.
* A graphic screen mode must be used. See the [SCREEN](./SCREEN.md) statement for graphic screen dimensions.
* QB64' [GET](./GET.md) statements can use coordinates off of the screen when an offscreenColor is designated. [STEP](./STEP.md) can be used for relative coordinates.
* The [GET](./GET.md) box coordinates are set just like a [LINE](./LINE.md) box statement is placed. You can use a box to find the correct [GET](./GET.md) area.
* Once [GET](./GET.md) has placed the pixel image data in the array, [PUT](./PUT.md) the image or [BSAVE](./BSAVE.md) it to a file.
* Once the image is stored in an array [PUT](./PUT.md) can be used to place the image on the screen.
* A [_SOURCE](./_SOURCE.md) handle can be set to [GET](./GET.md) image areas other than the ones on the current screen. Use [_DEST](./_DEST.md) to [PUT](./PUT.md) images there.
* To [GET](./GET.md) more than one image to the same array, designate an offset index that is not being used and is large enough to hold the data.
* The [INTEGER](./INTEGER.md) array size can be calculated as slightly larger than the box area width times the height. A closer estimate can be done by reading the array indices from [UBOUND](./UBOUND.md) to [LBOUND](./LBOUND.md) after a [GET](./GET.md) of a white box area. In QB64, a [LONG](./LONG.md) array can be used for large or full screen images.
* RGB color settings can be embedded at the beginning of the array for transferring custom colors. Specify an index for [GET](./GET.md) image data to be stored after any extra information added to the beginning of the array.
* In QB64, [_PUTIMAGE](./_PUTIMAGE.md) is recommended over [PUT](./PUT.md) as it can also do the [GET](./GET.md) operation directly from the image source without requiring an array.
* [PUT](./PUT.md) and [GET](./GET.md) file statements can also write and read image array data using [BINARY](./BINARY.md) files instead of using [BSAVE](./BSAVE.md) or [BLOAD](./BLOAD.md) .


</blockquote>

#### SEE ALSO

<blockquote>

* [_PUTIMAGE](./_PUTIMAGE.md) , [_LOADIMAGE](./_LOADIMAGE.md) , [_SAVEIMAGE](./_SAVEIMAGE.md)
* [_MAPTRIANGLE](./_MAPTRIANGLE.md)
* [POINT](./POINT.md) , [PUT](./PUT.md) , [STEP](./STEP.md)
* [BSAVE](./BSAVE.md) , [BLOAD](./BLOAD.md)
* Scancodes , Creating Sprite Masks (for non-box shaped sprites)
* Bitmaps , [GET](./GET.md) and [PUT](./PUT.md) Demo

</blockquote>
