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


## [OUT](OUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OUT)
---
<blockquote>

### OUT writes values to register and port hardware addresses.

</blockquote>

#### SYNTAX

<blockquote>

`OUT registerAddress% , value%`

</blockquote>

#### PARAMETERS

<blockquote>


* registerAddress% is a value expressed as a decimal [INTEGER](INTEGER.md) or hexadecimal .
* The [INTEGER](INTEGER.md) value% sent is normally only 0 to 255 per byte register (8 bit) address.
</blockquote>

#### DESCRIPTION

<blockquote>


* QB64 has limited access to registers. VGA memory and registers are emulated.
* [OUT](OUT.md) can be used to change color port and a limited number of other port settings in QB64.
* Some settings may be set in a specific order to gain access to settings and [INP](INP.md) reads.
* [SCREEN](SCREEN.md) modes determine the number of available color palette attributes from 2 to 256 in [SCREEN](SCREEN.md) 13.
* Windows NT may block access to Parallel printer and Serial ports. See Port Access Libraries or other DLLs.
* [_PALETTECOLOR](PALETTECOLOR.md) can also be used to set RGB intensity values using 32 bit color values.
* [OUT](OUT.md) can toggle the blinking attribute of [SCREEN](SCREEN.md) 0 color 16-31 for legacy code. [_BLINK](BLINK.md) is the preferred method. (starting with build 20170816/61).

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Reading the default RGB color settings of color attribute 15.
```vb
OUT &H3C7, 15      'set color port attribute 15 for a read
red% = INP(&H3C9)
green% = INP(&H3C9)
blue% = INP(&H3C9)
PRINT red%, green%, blue%
```
  
<br>

```vb
63       63       63
```
  
<br>



##### Example 2: Changing the color intensity settings of the SCREEN background COLOR 0 to bright white.
```vb
OUT &H3C8, 0  'attribute number. 0 for black screen background
OUT &H3C9, 63 'red
OUT &H3C9, 63 'green
OUT &H3C9, 63 'blue
```
  
<br>



##### Example 3: Toggling blinking colors in SCREEN beginning with build 20170816/61
```vb
OUT &H3C0, &H10  'disables blinking and enables high intensity backgrounds (colors 16-31)
OUT &H3C0, 2 ^ 3 'reenables blinking and disables high intensity backgrounds  (colors 16-31)
```
  
<br>



##### Example 4: Restoring colors to a bitmap from the Red, Green and Blue BSAVEd indexed array of color values.
```vb
SCREEN 12
OUT &H3C8, 0 ' set color port for output at attribute 0
FOR i = 0 TO 47 ' 48 RGB values is (3 * 16) -1 color attributes from 0 in screen 12
OUT &H3C9, Image%(i) ' changes to next attribute after 3 RGB loops
NEXT
PUT(clm, row), Image(48) PSET
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PALETTE](PALETTE.md) , [_PALETTECOLOR](PALETTECOLOR.md)
* [INP](INP.md)
* [PEEK](PEEK.md)
* [POKE](POKE.md)
* [COLOR](COLOR.md) , [SCREEN](SCREEN.md)
* [BSAVE](BSAVE.md) , [BLOAD](BLOAD.md)
* [_BLINK](BLINK.md) , [_BLINK](BLINK.md) (function)
* Port Access Libraries
</blockquote>
