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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [Program_ScreenShots](Program_ScreenShots.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Program ScreenShots)
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

*  The values of x1%, y%1, x2% and y2% can be any [ON](ON.md)  [SCREEN](SCREEN.md)  area coordinates in the [SCREEN](SCREEN.md)  mode used.
*  You MUST subtract one when using the QB64 FULL [SCREEN](SCREEN.md) [_WIDTH]( [WIDTH](WIDTH.md) .md)  and [_HEIGHT](HEIGHT.md)  values! Otherwise [POINT](POINT.md)  will return an Illegal function error ! The maximum is one pixel less than the [SCREEN](SCREEN.md)  resolution or the [SCREEN](SCREEN.md)  dimensions.
*  Both SUBs can be used in QB64 or QBasic! The FourBit [SUB](SUB.md)  takes about 8 seconds in QB.
*  FourBit [SUB](SUB.md)  creates 4 BPP(16 color) and EightBit [SUB](SUB.md)  creates 8 BPP(256 color) bitmaps.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LOADIMAGE](LOADIMAGE.md) 
*  [POINT](POINT.md)  , [PUT](PUT.md) 

</blockquote>
