## SCREEN (function)
---
<blockquote>

### The SCREEN function returns the ASCII code of a text character or the color attribute at a set text location on the screen.

</blockquote>

#### SYNTAX

<blockquote>

`codeorcolor% = SCREEN ( row% , column% [, colorflag%] )`

</blockquote>

#### PARAMETERS

<blockquote>

* row and column are the [INTEGER](./INTEGER.md) text coordinates of the [SCREEN](./SCREEN.md) mode used.
* Optional colorflag [INTEGER](./INTEGER.md) value can be omitted or 0 for ASCII code values or 1 for color attributes.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Finding the text foreground and background colors in SCREEN 0 only:
```vb
SCREEN 0
COLOR 0, 15
CLS

PRINT "SCREEN ="; SCREEN(1, 1, 1)
PRINT "FG color:"; SCREEN(1, 1, 1) AND 15 'low nibble
PRINT "BG color:"; SCREEN(1, 1, 1) \ 16 'high nibble
```
  


##### Example 1: Finding the text foreground and background colors in SCREEN 0 only:
```vb
SCREEN = 112
FG color: 0
BG color: 7
```
  


##### Example 2: Reading the ASCII code and color of a text character using the SCREEN function. Graphic colors were not reliable in QBasic!
```vb
SCREEN 12
row = 10: column = 10

COLOR 9: LOCATE row, column: PRINT "Hello"
code% = SCREEN(row, column, 0)     ' character code return parameter 0
attrib% = SCREEN(row, column, 1)   ' character color return parameter 1
COLOR 14: LOCATE 15, 10: PRINT "ASCII:"; code%, "COLOR:"; attrib%
END
```
  


##### Example 2: Reading the ASCII code and color of a text character using the SCREEN function. Graphic colors were not reliable in QBasic!
```vb
Hello



        ASCII: 72     COLOR: 9
```
  


##### Example 3: Finding the current program path placed on the screen using FILES and the SCREEN function in SCREEN 0.
```vb
SCREEN 0, 0, 0, 0
CLS
PRINT "This is a directory test..."
SCREEN 0, 0, 1, 0
COLOR 0 'blank out the screen text
FILES "qb64.exe"        'the current program's filename can also be used
FOR i = 1 TO 80
 a$ = a$ + CHR$(SCREEN(1, i)) 'scan the black text on the screen
NEXT
CLS
COLOR 7
a$ = RTRIM$(a$)
SLEEP
SCREEN 0, 0, 0, 0
LOCATE 3, 1: PRINT "The current directory is: "; a$
END
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [PRINT](./PRINT.md) , [SCREEN](./SCREEN.md)
* [COLOR](./COLOR.md) , CHR$ , [POINT](./POINT.md)
* [CSRLIN](./CSRLIN.md) , [POS](./POS.md) , ASCII
* Screen Memory

</blockquote>
