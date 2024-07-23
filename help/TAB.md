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


## [TAB](TAB.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/TAB)
---
<blockquote>

### The TAB function is used in PRINT and LPRINT statements to move to a specified column position.

</blockquote>

#### SYNTAX

<blockquote>

`TAB ( column% )`

</blockquote>

#### DESCRIPTION

<blockquote>


* Space characters are printed until the print cursor reaches the designated column% , overwriting existing characters.
* If a subsequent [TAB](TAB.md) column% is less than the current position, [TAB](TAB.md) moves the next print to that column on the next row.
* ASCII [CHR&dollar;](CHR&dollar;.md) (9) can be substituted for sequencial 9 space column moves.
* Comma [PRINT](PRINT.md) spacing is up to 15 column places (IE: TAB(15)) to a maximum column of 57.
* When printing to a file, a carriage return( [CHR&dollar;](CHR&dollar;.md) (13)) and linefeed( [CHR&dollar;](CHR&dollar;.md) (10)) character are output when it moves to the next row.
* Note: QBasic did not allow a [TAB](TAB.md) to be added to a string value. In [PRINT](PRINT.md) statements the plus would be changed to a semicolon .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Comparing TAB to comma print spacing which moves the next text print 15 columns.
```vb
PRINT TAB(15); "T" 'TAB spacing

PRINT , "T" 'comma spacing

PRINT TAB(15); "T"; TAB(20); "A"; TAB(15); "B" 'semicolons add nothing to position

PRINT TAB(15); "T", TAB(20); "A"; TAB(15); "B" 'comma moves column position beyond 20
```
  
<br>

```vb
T
T
T    A
B
T
A
B
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRINT](PRINT.md) , [LPRINT](LPRINT.md)
* [SPC](SPC.md) , [SPACE&dollar;](SPACE&dollar;.md)
* [STRING&dollar;](STRING&dollar;.md)
* [CHR&dollar;](CHR&dollar;.md) , ASCII
</blockquote>
