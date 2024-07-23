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


## [WIDTH](WIDTH.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/WIDTH)
---
<blockquote>

### The WIDTH statement changes the text dimensions of certain SCREEN modes or devices.

</blockquote>

#### PARAMETERS

<blockquote>


* When parameters are not specified, columns defaults to 80 with 25 (30 in [SCREEN](SCREEN.md) 11 or 12) rows.
</blockquote>

#### DESCRIPTION

<blockquote>


* [WIDTH](WIDTH.md) should be used after a program [SCREEN](SCREEN.md) statement. It does not affect screen graphics or graphic coordinates.
* Affects [SCREEN](SCREEN.md) 0 Window size and alters the text block size of each screen mode listed in QBasic:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
$CONSOLE:ONLY
WIDTH 80, 25, 300, 100
CLS
FOR i = 1 TO 97
PRINT i
NEXT
PRINT STRING$(100, "0") + STRING$(100, "1") + STRING$(100, "2") 'print the 100's placeholders
FOR j = 1 TO 3
FOR i = 0 TO 9
PRINT STRING$(10, _TRIM$(STR$(i))); 'print the 10's placeholders
NEXT
NEXT

FOR j = 1 TO 30
FOR i = 0 TO 9
PRINT _TRIM$(STR$(i)); 'print the 1's placeholders.
NEXT
NEXT

SLEEP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [SCREEN](SCREEN.md) , [COLOR](COLOR.md) , [OUT](OUT.md)
* [_PRINTWIDTH](PRINTWIDTH.md)
* [_WIDTH](WIDTH.md) (function) , [_HEIGHT](HEIGHT.md)
* [_FONT](FONT.md) , [_FONTWIDTH](FONTWIDTH.md) , [_FONTHEIGHT](FONTHEIGHT.md)
</blockquote>
