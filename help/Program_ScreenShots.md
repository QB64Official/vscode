## Program ScreenShots
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`EightBit Minimum_Column%, Minimum_Row%, Maximum_Column%, Maximum_Row%, NewFileName$`

</blockquote>

#### DESCRIPTION

<blockquote>

* The values of x1%, y%1, x2% and y2% can be any [ON](./ON.md) [SCREEN](./SCREEN.md) area coordinates in the screen mode used.
* You MUST subtract one when using the QB64 FULL [SCREEN](./SCREEN.md) [_WIDTH](./_WIDTH.md) and [_HEIGHT](./_HEIGHT.md) values! Otherwise [POINT](./POINT.md) will return an Illegal function error ! The maximum is one pixel less than the [SCREEN](./SCREEN.md) resolution or the screen dimensions.
* Both SUBs can be used in QB64 or QBasic! The FourBit [SUB](./SUB.md) takes about 8 seconds in QB.
* FourBit [SUB](./SUB.md) creates 4 BPP(16 color) and EightBit [SUB](./SUB.md) creates 8 BPP(256 color) bitmaps.


</blockquote>

#### SEE ALSO

<blockquote>

* [_LOADIMAGE](./_LOADIMAGE.md)
* [POINT](./POINT.md) , [PUT](./PUT.md)

</blockquote>
