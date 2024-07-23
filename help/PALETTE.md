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


## [PALETTE](PALETTE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PALETTE)
---
<blockquote>

### The PALETTE statement can swap color settings, set colors to default or set the red, green and blue color components of palette colors.

</blockquote>

#### DESCRIPTION

<blockquote>


* red% , green% and blue% values can range from 0 to 63. Many color shades are possible in non- DAC color attributes.  (Valid for screens 11, 12, 13, and 256 only.)
* If the red% , green% and blue% color intensity settings are all the same value the resulting color is a shade of grey.  (Valid for screens 11, 12, 13, and 256 only.)
* A swap is often used with DAC color attributes that cannot change RGB settings. Only the RGB color settings are swapped from original existingAttribute% to newAttribute% . Screens 0 thru 9 support swaps.
* [PALETTE](PALETTE.md) without any value sets any changed RGB settings back to the default color settings, including DAC colors.
* [PALETTE](PALETTE.md) [USING](USING.md) can be used when color intensity values are stored in an array .
* QB64 implements the [_PALETTECOLOR](PALETTECOLOR.md) statement to provide extended palette functionality.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Displaying all 64 DAC color hues as backgrounds in SCREEN 9 using a PALETTE swap.
```vb
SCREEN 9 ' background is default black
LOCATE 20, 33: PRINT "Press any Key!"
FOR i = 0 TO 63
a$ = INPUT$(1) ' wait for a keypress
PALETTE 0, i
NEXT
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_PALETTECOLOR](PALETTECOLOR.md)
* [PALETTE](PALETTE.md) [USING](USING.md)
* [COLOR](COLOR.md)
* [OUT](OUT.md) , [INP](INP.md)
* [SCREEN](SCREEN.md)
</blockquote>
