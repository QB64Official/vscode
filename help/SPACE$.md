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


## [SPACE\$](SPACE\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SPACE%24)
---
<blockquote>

### The SPACE$ function returns a STRING consisting of a number of space characters.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = SPACE$( count& )`

</blockquote>

#### PARAMETERS

<blockquote>


* count& is the number of space characters to repeat. Cannot use negative values!
</blockquote>

#### DESCRIPTION

<blockquote>


* Semicolons can be used to combine spaces with text [STRING](STRING.md) or numerical values.
* Concatenation using + can be used to combine [STRING](STRING.md) text values only.
* Spaces are often used to erase previous text PRINTs from the screen.
* The function result can also be used to [GET](GET.md) and [PUT](PUT.md) a number of bytes as zero characters: bytes$ = SPACE$(numbytes)
* Spaces can also be made using [SPC](SPC.md) , [CHR&dollar;](CHR&dollar;.md) (32) or [STRING&dollar;](STRING&dollar;.md) (n%, 32).

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: How to space text in a PRINT statement using SPACE\$ with string concatenation .
```vb
FOR count% = 0 TO 3
PRINT "abc" + SPACE$( count% ) + "def"
NEXT count%
```
  
<br>

```vb
abcdef
abc def
abc  def
abc   def
```
  
<br>



##### Example 2: In SCREEN 0 SPACE\$ can be used to change the background color to make an American flag.
```vb
USA flag centered on screen with thin horizontal red & white stripes
' blue corner field with randomly twinkling stars
CLS
LOCATE 25, 1
PRINT "Press any key to stop twinkling";
COLOR , 4
z = 15
FOR x = 5 TO 19          '13 red & white stripes (x =5 to 21 for 15 stripes)
IF z = 15 THEN z = 4 ELSE z = 15
COLOR , z
LOCATE x, 15
PRINT SPACE$(55)
NEXT x
FOR x = 5 TO 11          'blue field in upper left quadrant (x = 5 to 13 to hold all 50 stars)
COLOR 15, 1            'sits above 4th white stripe
LOCATE x, 15
PRINT SPACE$(23)
NEXT x
DO
stop$ = INKEY$
FOR x = 5 TO 10 STEP 2  '39 stars staggered across blue field (50 stars if x = 5 to 12)
w = 16
FOR y = 1 TO 6      '5 rows of 6 stars
r = INT(RND * 6)
IF r = 0 THEN z = 31 ELSE z = 15
IF stop$ = "" THEN COLOR z ELSE COLOR 15
LOCATE x, w
w = w + 4
PRINT "*";
NEXT y
w = 18
FOR y = 1 TO 5      '5 rows of 5 stars
r = INT(RND * 6)
IF r = 0 THEN z = 31 ELSE z = 15
IF stop$ = "" THEN COLOR z ELSE COLOR 15
LOCATE x + 1, w
w = w + 4
PRINT "*";
NEXT y
NEXT x
w = 16
FOR y = 1 TO 6          '1 row of 6 stars
r = INT(RND * 6)
IF r = 0 THEN z = 31 ELSE z = 15
IF stop$ = "" THEN COLOR z ELSE COLOR 15
LOCATE x, w
w = w + 4
PRINT "*";
NEXT y
t = TIMER
DO WHILE t + .2 >= TIMER: LOOP
LOOP WHILE stop$ = ""
COLOR 7, 0
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRINT](PRINT.md) , [PRINT](PRINT.md) [USING](USING.md)
* [STRING&dollar;](STRING&dollar;.md) , [CLS](CLS.md)
* [SPC](SPC.md) , [TAB](TAB.md)
</blockquote>
