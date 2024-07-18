## _MOUSEWHEEL
---

### The _MOUSEWHEEL function returns a positive or negative INTEGER value indicating mouse scroll events since the last read of _MOUSEINPUT .

#### SYNTAX

`scrollAmount% = _MOUSEWHEEL`

#### DESCRIPTION
* Returns -1 when scrolling up and 1 when scrolling down with 0 indicating no movement since last read.
* After an event has been read, the value resets to 0 automatically so cumulative position values must be added.
* If no movement on the wheel has occurred since the last [_MOUSEINPUT](./_MOUSEINPUT.md) read, [_MOUSEWHEEL](./_MOUSEWHEEL.md) returns 0.


#### EXAMPLES
```vb
DO
   _LIMIT 50
   DO WHILE _MOUSEINPUT
       Scroll = Scroll + _MOUSEWHEEL
       LOCATE 10, 20: PRINT Scroll
   LOOP
LOOP UNTIL INKEY$ = CHR$(13) ' press Enter to quit
```
  
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
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_MOUSEX](./_MOUSEX.md) , [_MOUSEY](./_MOUSEY.md) , [_MOUSEBUTTON](./_MOUSEBUTTON.md)
* [_MOUSEINPUT](./_MOUSEINPUT.md) , [_MOUSEMOVE](./_MOUSEMOVE.md)
* [_MOUSESHOW](./_MOUSESHOW.md) , [_MOUSEHIDE](./_MOUSEHIDE.md)
* Controller Devices
