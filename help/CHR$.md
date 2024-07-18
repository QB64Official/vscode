## CHR$
---

### The CHR$ function returns the character associated with a certain character code as a STRING .

#### SYNTAX

`result$ = CHR$ ( code% )`

#### DESCRIPTION
* Valid ASCII code% numbers range from 0 to 255.
* The character code of a character can be found using the [ASC](./ASC.md) (function) .
* Some control codes below 32 will not [PRINT](./PRINT.md) or will move the screen cursor, unless [_CONTROLCHR](./_CONTROLCHR.md) [OFF](./OFF.md) is used.


#### EXAMPLES
##### Example 1: Outputs the characters of several character codes:
```vb
PRINT CHR$(65); CHR$(65 + 32)
PRINT CHR$(66); CHR$(66 + 32)
```
  
```vb
Aa
Bb
```
  
##### Example 2: To cut down on typing CHR$(???) all day, define often used characters as variables such as Q$ = CHR$(34) as shown.
```vb
DIM Q AS STRING * 1   'define as one byte string(get rid of $ type suffix too)
Q = CHR$(34)          'Q will now represent the elusive quotation mark in a string

PRINT "This text uses "; Q; "quotation marks"; Q; " that could have caused a syntax error!"
```
  
```vb
This text uses "quotation marks" that could have caused a syntax error!
```
  
##### Example 3: Using ASC and CHR$ to encrypt a text file size up to 32K bytes
```vb
OPEN FileName$ FOR INPUT AS #1 ' FileName to be encrypted
IF LOF(1) <= 32000 THEN Text$ = INPUT$(LOF(1), 1) ' get Text as one string
CLOSE #1
Send$ = "" ' clear value
FOR i = 1 TO LEN(Text$)
   Letter$ = MID$(Text$, i, 1) ' get each character in the text
   Code = ASC(Letter$)
   IF (Code > 64 AND Code < 91) OR (Code > 96 AND Code < 123) THEN
       Letter$ = CHR$(Code + 130) ' change letter's ASCII character by 130
   END IF
   Send$ = Send$ + Letter$ ' reassemble string with just letters encrypted
NEXT i
OPEN FileName$ FOR OUTPUT AS #1 ' erase FileName to be encrypted
PRINT #1, Send$   ' Text as one string
CLOSE #1
```
  
##### Example 4: Decrypting the above encrypted text file (32K byte file size limit).
```vb
OPEN FileName$ FOR INPUT AS #1       ' FileName to be decrypted
   Text$ = INPUT$(LOF(1), 1)         ' open Text as one string
CLOSE #1
Send$ = ""
FOR i = 1 TO LEN(Text$)
   Letter$ = MID$(Text$, i, 1)
   Code = ASC(Letter$)
   IF (Code > 194 AND Code < 221) OR (Code > 226 AND Code < 253) THEN
       Letter$ = CHR$(Code - 130)  ' change back to a Letter character
   END IF
   Send$ = Send$ + Letter$ ' reassemble string as normal letters
   NEXT i
OPEN FileName$ FOR OUTPUT AS #1 ' Erase file for decrypted text
   PRINT #1, Send$ ' place Text as one string
CLOSE #1
```
  


#### SEE ALSO
* [ASC](./ASC.md) , [ASC](./ASC.md) (function)
* INKEY$
* ASCII character codes
