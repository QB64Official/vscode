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


## [_CONSOLE](CONSOLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CONSOLE)
---
<blockquote>

### The _CONSOLE statement can be used to turn a console window ON/OFF.

</blockquote>

#### SYNTAX

<blockquote>

`_CONSOLE {OFF|ON}`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Hiding and displaying a console window. Use _DELAY to place console in front of main program window.
```vb
$CONSOLE
_CONSOLE OFF 'close original console
_DELAY 2
_CONSOLE ON 'place console above program window

_DEST _CONSOLE
INPUT "Enter your name: ", nme$ 'get program input
_CONSOLE OFF 'close console

_DEST 0 'destination program window
PRINT nme$
END
```
  
<br>



##### Example 2: _CONSOLETITLE can be used to create a console title, but it must be redone every time the console window is restored once turned off:
```vb
$CONSOLE

_CONSOLETITLE "firstone"
_DELAY 10

_CONSOLE OFF
_DELAY 10

_CONSOLE ON
_CONSOLETITLE "secondone"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;CONSOLE](&dollar;CONSOLE.md) , [_CONSOLETITLE](CONSOLETITLE.md)
* [&dollar;SCREENHIDE](&dollar;SCREENHIDE.md) , [&dollar;SCREENSHOW](&dollar;SCREENSHOW.md) (QB64 Metacommands )
* [_SCREENHIDE](SCREENHIDE.md) , [_SCREENSHOW](SCREENSHOW.md)
* [_DEST](DEST.md) , [_ECHO](ECHO.md)
</blockquote>
