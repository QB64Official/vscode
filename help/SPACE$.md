## SPACE$
---

### The SPACE$ function returns a STRING consisting of a number of space characters.

#### SYNTAX

`result$ = SPACE$( count& )`

#### PARAMETERS
* count& is the number of space characters to repeat. Cannot use negative values!


#### DESCRIPTION
* Semicolons can be used to combine spaces with text [STRING](./STRING.md) or numerical values.
* Concatenation using + can be used to combine [STRING](./STRING.md) text values only.
* Spaces are often used to erase previous text PRINTs from the screen.
* The function result can also be used to [GET](./GET.md) and [PUT](./PUT.md) a number of bytes as zero characters: bytes$ = SPACE$(numbytes)
* Spaces can also be made using [SPC](./SPC.md) , CHR$ (32) or [STRING](./STRING.md)$ (n%, 32).


#### EXAMPLES
##### Example 1: How to space text in a PRINT statement using SPACE$ with string concatenation .
```vb
FOR count% = 0 TO 3
   PRINT "abc" + SPACE$( count% ) + "def"
NEXT count%
```
  
```vb
abcdef
abc def
abc  def
abc   def
```
  
##### Example 2: In SCREEN 0 SPACE$ can be used to change the background color to make an American flag.
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
  


#### SEE ALSO
* [PRINT](./PRINT.md) , [PRINT](./PRINT.md) [USING](./USING.md)
* [STRING](./STRING.md)$ , [CLS](./CLS.md)
* [SPC](./SPC.md) , [TAB](./TAB.md)
