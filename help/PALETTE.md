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

## [PALETTE](PALETTE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PALETTE)
---
<blockquote>

### The PALETTE statement can swap color settings, set colors to default or set the red, green and blue color components of palette colors.

</blockquote>

#### DESCRIPTION

<blockquote>

*  red% , green% and blue% values can range from 0 to 63. Many color shades are possible in non- DAC color attributes.  (Valid for screens 11, 12, 13, and 256 only.)
*  If the red% , green% and blue% color intensity settings are all the same value the resulting color is a shade of grey.  (Valid for screens 11, 12, 13, and 256 only.)
*  A swap is often used with DAC color attributes that cannot change RGB settings. Only the RGB color settings are swapped from original existingAttribute% to newAttribute% . Screens 0 thru 9 support swaps.
*  [PALETTE](PALETTE.md)  without any value sets any changed RGB settings back to the default color settings, including DAC colors.
*  [PALETTE](PALETTE.md) [USING](USING.md)  can be used when color intensity values are stored in an array .
*  QB64 implements the [_PALETTECOLOR](PALETTECOLOR.md)  statement to provide extended [PALETTE](PALETTE.md)  functionality.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_PALETTECOLOR](PALETTECOLOR.md) 
*  [PALETTE](PALETTE.md) [USING](USING.md) 
*  [COLOR](COLOR.md) 
*  [OUT](OUT.md)  , [INP](INP.md) 
*  [SCREEN](SCREEN.md) 

</blockquote>
