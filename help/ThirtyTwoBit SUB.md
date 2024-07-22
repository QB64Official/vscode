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

## [ThirtyTwoBit_SUB](ThirtyTwoBit_SUB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ThirtyTwoBit SUB)
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

*  Copies portions or all of a Screen or image using the handle value to a new bitmap. SaveImage [SUB](SUB.md)  does full screen only!
*  Make sure the maximum coordinates used are one less than the screen image's size or an Illegal Function call error will occur!
*  A handle value of 0 will copy the present portion of the main program screen while the screen's handle may hold a previous image.
*  Can be used with 4, 8 or 24/32 bit colors. 4 BPP = 16 colors, 8 BPP = 256 colors and 24/32 BPP has 16 million colors.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LOADIMAGE](LOADIMAGE.md) 
*  SaveImage [SUB](SUB.md) 
*  Program ScreenShots
*  ThirtyTwoBit MEM [SUB](SUB.md) 
*  Bitmaps

</blockquote>
