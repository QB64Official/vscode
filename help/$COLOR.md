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


## [\$COLOR](\$COLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24COLOR)
---
<blockquote>

### $COLOR is a metacommand that adds named color constants into a program, which then can be used instead of hardcoded literal color values.

</blockquote>

#### SYNTAX

<blockquote>

`$COLOR : {0|32}`

</blockquote>

#### PARAMETERS

<blockquote>


* The one and only parameter is a literal number designating either to include [SCREEN](SCREEN.md) 0 based color indexes, or full [_RGB32](RGB32.md) color values with full (opaque) alpha.
</blockquote>

#### DESCRIPTION

<blockquote>


* $COLOR:0 adds constants for the colors 0-15 available in [SCREEN](SCREEN.md) 0 , these do also match for the first 16 colors on 8-Bit (256 colors) graphic screens as long as they are not changed using [PALETTE](PALETTE.md) or [_PALETTECOLOR](PALETTECOLOR.md) . For the actual constant names see $COLOR:0 Name Table .
* $COLOR:32 adds constants for full 32-Bit color values as used on 32-Bit screens created via [_NEWIMAGE](NEWIMAGE.md) , similar to HTML color names. For the actual constant names see $COLOR:32 Name Table .
* Prior to QB64-PE v0.5.0, [&dollar;COLOR](&dollar;COLOR.md) was not compatible with [&dollar;NOPREFIX](&dollar;NOPREFIX.md) .
* Since QB64-PE v0.5.0, [&dollar;COLOR](&dollar;COLOR.md) can now be used with [&dollar;NOPREFIX](&dollar;NOPREFIX.md) , with a few notable differences to three conflicting colors -- Red, Green, Blue.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
$COLOR:0

COLOR BrightWhite, Red
PRINT "Bright white on red."
```
  
<br>

```vb
Bright white on red.
```
  
<br>

```vb
SCREEN _NEWIMAGE(640, 400, 32)
$COLOR:32

COLOR CrayolaGold, DarkCyan
PRINT "CrayolaGold on DarkCyan."
```
  
<br>

```vb
CrayolaGold on DarkCyan.
```
  
<br>

```vb
$NOPREFIX

SCREEN NEWIMAGE(640, 400, 32)
$COLOR:32

COLOR NP_Red, White 'notice the NP_ in front of Red?
'This is to distinguish the color from the command with $NOPREFIX.
PRINT "Red on White."
```
  
<br>

```vb
Red on White.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [COLOR](COLOR.md)
* [SCREEN](SCREEN.md) , [_NEWIMAGE](NEWIMAGE.md)
* Metacommand
* $COLOR:0 Name Table
* $COLOR:32 Name Table
</blockquote>
