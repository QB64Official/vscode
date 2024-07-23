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


## [_MOUSEWHEEL](MOUSEWHEEL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MOUSEWHEEL)
---
<blockquote>

### The _MOUSEWHEEL function returns a positive or negative INTEGER value indicating mouse scroll events since the last read of _MOUSEINPUT .

</blockquote>

#### SYNTAX

<blockquote>

`scrollAmount% = _MOUSEWHEEL`

</blockquote>

#### DESCRIPTION

<blockquote>


* Returns -1 when scrolling up and 1 when scrolling down with 0 indicating no movement since last read.
* After an event has been read, the value resets to 0 automatically so cumulative position values must be added.
* If no movement on the wheel has occurred since the last [_MOUSEINPUT](MOUSEINPUT.md) read, [_MOUSEWHEEL](MOUSEWHEEL.md) returns 0.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DO
_LIMIT 50
DO WHILE _MOUSEINPUT
Scroll = Scroll + _MOUSEWHEEL
LOCATE 10, 20: PRINT Scroll
LOOP
LOOP UNTIL INKEY$ = CHR$(13) ' press Enter to quit
```
  
<br>

```vb
DIM Array$(100)
LINE INPUT "Enter a file name with 100 or more lines of text: ", file$
OPEN file$ FOR INPUT AS #1
DO UNTIL EOF(1)
inputcount = inputcount + 1
LINE INPUT #1, Array$(inputcount)
IF inputcount = 100 THEN EXIT DO
LOOP
FOR n = 1 TO 21: PRINT Array$(n): NEXT
CLOSE #1
DO
DO WHILE _MOUSEINPUT
IF row >= 0 THEN row = row + _MOUSEWHEEL ELSE row = 0 'prevent under scrolling
IF row > inputcount - 20 THEN row = inputcount - 20 'prevent over scrolling
IF prevrow <> row THEN 'look for a change in row value
IF row > 0 AND row <= inputcount - 20 THEN
CLS: LOCATE 2, 1
FOR n = row TO row + 20
PRINT Array$(n)
NEXT
END IF
END IF
prevrow = row 'store previous row value
LOOP
LOOP UNTIL INKEY$ > ""
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_MOUSEX](MOUSEX.md) , [_MOUSEY](MOUSEY.md) , [_MOUSEBUTTON](MOUSEBUTTON.md)
* [_MOUSEINPUT](MOUSEINPUT.md) , [_MOUSEMOVE](MOUSEMOVE.md)
* [_MOUSESHOW](MOUSESHOW.md) , [_MOUSEHIDE](MOUSEHIDE.md)
* Controller Devices
</blockquote>
