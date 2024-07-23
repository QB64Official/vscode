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


## [ASC (function)](ASC_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ASC%20%28function%29)
---
<blockquote>

### The ASC function returns the ASCII code number of a certain STRING text character.

</blockquote>

#### SYNTAX

<blockquote>

`code% = ASC ( text$ [, position% ])`

</blockquote>

#### DESCRIPTION

<blockquote>


* The text$ parameter must have a length of at least 1 byte or an error occurs.
* In QB64 only the optional position% parameter specifies the character in a string to be returned. Must be greater than 0.
* If the optional position% parameter is omitted, [ASC](ASC.md) will return the ASCII code of the first character.
* ASCII code  values returned range from 0 to 255.
* In QB64 , the [ASC](ASC.md) function reads string byte positions about 5 times faster than [MID&dollar;](MID&dollar;.md) when parsing strings character wise. See [MID&dollar;](MID&dollar;.md) Example 2 .

</blockquote>

#### EXAMPLES

<blockquote>

```vb
PRINT ASC("A")
PRINT ASC("Be a rockstar")
PRINT ASC("QB64 is not only COMPATIBLE, it can find any part of the string!", 18)
```
  
<br>

```vb
65
66
67
```
  
<br>

```vb
Explanation
The ASCII code for "A" is 65 and the ASCII code for "B" is 66,
ASCII code for "C" is 67 and the "C" is at position 18 in the string.
```
  
<br>

```vb
Q$ = CHR$(34) ' quote character
COLOR 10: LOCATE 5, 22: PRINT "Press some keys or combinations!"
COLOR 13: LOCATE 23, 30: PRINT "Escape key Quits"
DO
DO: key$ = INKEY$: LOOP UNTIL key$ <> "" ' prevent ASC empty string read error
code% = ASC(key$): COLOR 11: LOCATE 10, 10
IF code% THEN    ' ASC returns any value greater than 0
PRINT "CHR$(" + LTRIM$(STR$(code%)) + ")" + SPACE$(13):
IF code% > 8 AND code% < 14 THEN code% = 32    ' unprintable control codes
COLOR 14: LOCATE 10, 50: PRINT CHR$(code%) + SPACE$(13)
ELSE: PRINT "CHR$(0) + CHR$(" + LTRIM$(STR$(ASC(key$, 2))) + ")"
COLOR 14: LOCATE 10, 50: PRINT "CHR$(0) + " + Q$ + CHR$(ASC(key$, 2)) + Q$
END IF
LOOP UNTIL code% = 27  '
```
  
<br>

```vb
Explanation
The keypress read loop checks that ASC will not read an empty
string. That would create a program error. Normal byte codes returned
are indicated by the IF statement when ASC returns a value.
Otherwise the routine will return the two byte ASCII code. The
extended keyboard keys (Home pad, Arrow pad and Number pad), Function
keys or Ctrl, Alt or Shift key combinations will return two byte codes.
Ctrl + letter combinations will return control character codes 1 to 26.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [ASC](ASC.md)
* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
* [MID&dollar;](MID&dollar;.md) , [MID&dollar;](MID&dollar;.md) (function)
* [CHR&dollar;](CHR&dollar;.md) , [INKEY&dollar;](INKEY&dollar;.md)
* [VAL](VAL.md) , [STRING&dollar;](STRING&dollar;.md)
* ASCII , [_MAPUNICODE](MAPUNICODE.md)
* Scancodes
</blockquote>
