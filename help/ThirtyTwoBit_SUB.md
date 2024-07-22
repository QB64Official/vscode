## ThirtyTwoBit SUB
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`ThirtyTwoBit left_column%, top_row%, right_column%, bottom_row%, handle&, new_filename$`

</blockquote>

#### DESCRIPTION

<blockquote>

* Copies portions or all of a Screen or image using the handle value to a new bitmap. SaveImage [SUB](./SUB.md) does full screen only!
* Make sure the maximum coordinates used are one less than the screen image's size or an Illegal Function call error will occur!
* A handle value of 0 will copy the present portion of the main program screen while the screen's handle may hold a previous image.
* Can be used with 4, 8 or 24/32 bit colors. 4 BPP = 16 colors, 8 BPP = 256 colors and 24/32 BPP has 16 million colors.


</blockquote>

#### SEE ALSO

<blockquote>

* [_LOADIMAGE](./_LOADIMAGE.md)
* SaveImage [SUB](./SUB.md)
* Program ScreenShots
* ThirtyTwoBit MEM [SUB](./SUB.md)
* Bitmaps

</blockquote>
