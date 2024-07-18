## WHILE...WEND
---

### The WHILE...WEND statement is used to repeat a block of statements while the condition is met.

#### SYNTAX

`WHILE condition`

#### DESCRIPTION
* condition is a numeric expression used to determine if the loop will execute.
* statements will execute repeatedly while condition is a non-zero value.
* [EXIT](./EXIT.md) [WHILE](./WHILE.md) can be used for emergency exits from the loop in QB64 only.
* A [DO](./DO.md)...[LOOP](./LOOP.md) can use the same [DO](./DO.md) [WHILE](./WHILE.md) condition to get the same results.
* [WHILE](./WHILE.md) loops only run if the [WHILE](./WHILE.md) condition is True.


#### EXAMPLES
##### Example 1: Reading an entire file. Example assumes the program has a file opened as #1
```vb
OPEN "Readme.txt" FOR INPUT AS #1
WHILE NOT EOF(1)
   _LIMIT 1                                    'limit line prints to one per second
   LINE INPUT #1, text$
   IF INKEY$ = CHR$(27) THEN EXIT WHILE        'ESC key exits
   PRINT text$
WEND
```
  
##### Example 2: Clearing the keyboard buffer.
```vb
WHILE INKEY$ <> "" : WEND
```
  


#### SEE ALSO
* [DO](./DO.md)...[LOOP](./LOOP.md)
* [FOR](./FOR.md)...[NEXT](./NEXT.md)
* [UNTIL](./UNTIL.md)
* [_CONTINUE](./_CONTINUE.md)
