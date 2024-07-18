## _LIMIT
---

### The _LIMIT statement sets the loop repeat rate of a program to so many per second, relinquishing spare CPU cycles to other applications.

#### SYNTAX

`_LIMIT framesPerSecond!`

#### EXAMPLES
##### Example: Limits loop execution to 30 frames per second and limits the program's CPU usage.
```vb
PRINT "To Quit press ESC key!"
DO
   _LIMIT 30
   PRINT CHR$(26);
   IF INKEY$ = CHR$(27) THEN EXIT DO
LOOP
```
  
```vb
To Quit press ESC key!
→→→→→→→→→→→→→→→→→→→→
```
  


#### SEE ALSO
* [_DELAY](./_DELAY.md)
* [TIMER](./TIMER.md) , [ON](./ON.md) [TIMER](./TIMER.md)(n)
* [SLEEP](./SLEEP.md)
