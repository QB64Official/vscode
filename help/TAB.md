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

*  Space characters are printed until the print cursor reaches the designated column% , overwriting existing characters.
*  If a subsequent [TAB](TAB.md)  column% is less than the current position, [TAB](TAB.md)  moves the next print to that column on the next row.
*  ASCII CHR$ (9) can be substituted for sequencial 9 space column moves.
*  Comma [PRINT](PRINT.md)  spacing is up to 15 column places (IE: [TAB](TAB.md) (15)) to a maximum column of 57.
*  When printing to a file, a carriage return( CHR$ (13)) and linefeed( CHR$ (10)) character are output when it moves to the next row.
*  Note: QBasic did not allow a [TAB](TAB.md)  to be added to a string value. In [PRINT](PRINT.md)  statements the plus would be changed to a semicolon .


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

##### Example: Comparing TAB to comma print spacing which moves the next text print 15 columns.
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

*  [PRINT](PRINT.md)  , [LPRINT](LPRINT.md) 
*  [SPC](SPC.md)  , [SPACE\$](SPACE\$.md) 
*  [STRING\$](STRING\$.md) 
*  CHR$ , ASCII

</blockquote>
