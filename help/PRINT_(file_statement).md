## PRINT (file statement)
---
<blockquote>

### The PRINT # statement prints numeric or string expressions to a sequential file, IO port or device.

</blockquote>

#### SYNTAX

<blockquote>

`PRINT # fileNumber& , [ [ expression ] [{;|,] ... ]`

</blockquote>

#### PARAMETERS

<blockquote>

* fileNumber& is the file number of a file or device opened for writing. See [OPEN](./OPEN.md) .
* expression is a numeric or string expression to be written to the file. Quotes will be removed from strings.
* The print statement can be followed by a semicolon to stop the print cursor or a comma to tab the next print.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Prints data to a text file sequentially and reads it back to the program screen as one line of text.
```vb
filename$ = "testfile.dat"
x = 1: y = 2: z$ = "Three"

OPEN filename$ FOR OUTPUT AS #1 'opens and clears an existing file or creates new empty file

PRINT #1, x, y, z$

CLOSE #1

PRINT "File created with data. Press a key!"

K$ = INPUT$(1) 'press a key

OPEN filename$ FOR INPUT AS #2 'opens a file to read it

LINE INPUT #2, text$

CLOSE #2

PRINT text$
WRITE text$

END
```
  


##### Example: Prints data to a text file sequentially and reads it back to the program screen as one line of text.
```vb
1             2            Three
```
  


##### Example: Prints data to a text file sequentially and reads it back to the program screen as one line of text.
```vb
1             2            Three
" 1             2            Three"
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [SPC](./SPC.md) , SPACE$ , [TAB](./TAB.md)
* [PRINT](./PRINT.md) #, [USING](./USING.md)
* [PRINT](./PRINT.md)
* [WRITE](./WRITE.md) # , [INPUT](./INPUT.md) #
* [LINE](./LINE.md) [INPUT](./INPUT.md) #
* [OPEN](./OPEN.md) , [LPRINT](./LPRINT.md) , [WRITE](./WRITE.md)

</blockquote>
