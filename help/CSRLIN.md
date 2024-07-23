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


## [CSRLIN](CSRLIN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CSRLIN)
---
<blockquote>

### The CSRLIN function returns the current text row position of the PRINT cursor.

</blockquote>

#### SYNTAX

<blockquote>

`row% = CSRLIN`

</blockquote>

#### DESCRIPTION

<blockquote>


* The value returned is within the range of 1 to the current number of rows in the [SCREEN](SCREEN.md) mode used.
* In [SCREEN](SCREEN.md) 0 (text mode), the [_HEIGHT](HEIGHT.md) function returns the number of text rows.
* In graphic modes, the number of available text rows can be calculated by dividing [_HEIGHT](HEIGHT.md) (measured in pixels in graphic modes) by [_FONTHEIGHT](FONTHEIGHT.md) : totalRows% = [_HEIGHT](HEIGHT.md) / [_FONTHEIGHT](FONTHEIGHT.md)
* In screen modes that support page flipping, the [CSRLIN](CSRLIN.md) function returns the vertical coordinate of the cursor on the active page.
* x = [POS](POS.md) (0) returns the column location of the cursor.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: A semicolon stops the print cursor immediately after the print.
```vb
LOCATE 5, 5: PRINT "HELLO ";
Y = CSRLIN 'save the row
X = POS(0) 'save the column
LOCATE 10, 10: PRINT "WORLD"
LOCATE Y, X 'restore saved position
PRINT "GOODBYE"
```
  
<br>

```vb
HELLO GOODBYE




WORLD
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SCREEN](SCREEN.md) , [LOCATE](LOCATE.md) , [POS](POS.md)
* [_PRINTSTRING](PRINTSTRING.md) (graphic print)
</blockquote>
