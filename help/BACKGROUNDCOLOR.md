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


## [_BACKGROUNDCOLOR](BACKGROUNDCOLOR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BACKGROUNDCOLOR)
---
<blockquote>

### The _BACKGROUNDCOLOR function returns the current background color for an image handle or page.

</blockquote>

#### SYNTAX

<blockquote>

`col~& = _BACKGROUNDCOLOR [( imageHandle& )]`

</blockquote>

#### PARAMETERS

<blockquote>


* If imageHandle& is omitted, it is assumed to be the current write page or image designated by [_DEST](DEST.md) .
* If imageHandle& is an invalid handle, an Invalid handle error occurs. Check handle values first. Zero designates the current screen.
</blockquote>

#### DESCRIPTION

<blockquote>


* Use it to get the current background color to restore it later in a program.
* In legacy [SCREEN](SCREEN.md) modes and in [_NEWIMAGE](NEWIMAGE.md) 256 colors mode the color attribute/palette index is returned.
* In [_NEWIMAGE](NEWIMAGE.md) 32-bit mode the [_RGBA32](RGBA32.md) value ( &H00 00 00 00 to &HFF FF FF FF ) is returend, make sure to store it in an [_UNSIGNED](UNSIGNED.md) [LONG](LONG.md) variable (as seen in the syntax above with the ~& suffix), otherwise the blue component may be lost.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN 0
COLOR 1, 3 'set color 1 as foreground, color 3 as background
CLS
col~& = _BACKGROUNDCOLOR
PRINT col~&
```
  
<br>

```vb
3
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_DEFAULTCOLOR](DEFAULTCOLOR.md)
* [COLOR](COLOR.md) , [_DEST](DEST.md)
* [SCREEN](SCREEN.md) , [SCREEN](SCREEN.md) (function)
* Color Dialog Box
</blockquote>
