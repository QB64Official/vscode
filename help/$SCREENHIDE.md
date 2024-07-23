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


## [\$SCREENHIDE](\$SCREENHIDE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24SCREENHIDE)
---
<blockquote>

### The $SCREENHIDE metacommand can be used to hide the main program window throughout a program.

</blockquote>

#### SYNTAX

<blockquote>

`$SCREENHIDE`

</blockquote>

#### DESCRIPTION

<blockquote>


* [&dollar;SCREENHIDE](&dollar;SCREENHIDE.md) may be used at the start of a program to hide the main program window when using a console window.
* The [_SCREENHIDE](SCREENHIDE.md) statement must be used before [_SCREENSHOW](SCREENSHOW.md) can be used in sections of a program.
* QB64 metacommands cannot be commented out with apostrophe or [REM](REM.md) .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Hiding a program when displaying a message box in Windows.
```vb
$SCREENHIDE
DECLARE DYNAMIC LIBRARY "user32"
FUNCTION MessageBoxA& (BYVAL hWnd%&, BYVAL lpText%&, BYVAL lpCaption%&, BYVAL uType~&)
END DECLARE
DECLARE DYNAMIC LIBRARY "kernel32"
SUB ExitProcess (BYVAL uExitCode~&)
END DECLARE
DIM s0 AS STRING
DIM s1 AS STRING
s0 = "Text" + CHR$(0)
s1 = "Caption" + CHR$(0)
ExitProcess MessageBoxA(0, _OFFSET(s0), _OFFSET(s1), 0)
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;CONSOLE](&dollar;CONSOLE.md) , [&dollar;SCREENSHOW](&dollar;SCREENSHOW.md)
* [_SCREENHIDE](SCREENHIDE.md) , [_SCREENSHOW](SCREENSHOW.md)
* [_CONSOLE](CONSOLE.md)
</blockquote>
