# CHR$

The CHR$ function returns the character associated with a certain [character code](character code.md) as a [STRING](STRING.md).

  

## Syntax

*result$* = CHR$(*code%*)
  

## Description

* Valid ASCII *code%* numbers range from 0 to 255.
* The character code of a character can be found using the [ASC (function)](ASC (function).md) "ASC (function)").
* Some control codes below 32 will not [PRINT](PRINT.md) or will move the screen cursor, unless [_CONTROLCHR OFF](_CONTROLCHR OFF.md) is used.

  

## Examples

*Example 1:* Outputs the characters of several character codes:

``` [PRINT](PRINT.md) CHR$(65); CHR$(65 + 32) [PRINT](PRINT.md) CHR$(66); CHR$(66 + 32)  
```

``` Aa Bb  
```

Explanation: 65 is the ASCII code for "A" and 65 + 32 is the ASCII code for "a". 66 is the ASCII code for "B" and 66 + 32 is the ASCII code for "b"
  

*Example 2:* To cut down on typing CHR$(???) all day, define often used characters as variables such as Q$ = CHR$(34) as shown.

```   [DIM](DIM.md) Q AS [STRING](STRING.md) * 1   'define as one byte string(get rid of $ type suffix too) Q = CHR$(34)          'Q will now represent the elusive quotation mark in a string  PRINT "This text uses "; Q; "quotation marks"; Q; " that could have caused a syntax error!"   
```

``` This text uses "quotation marks" that could have caused a syntax error!  
```

  

*Example 3:* Using [ASC](ASC.md) "ASC (function)") and CHR$ to *encrypt* a text file size up to 32K bytes

``` [OPEN](OPEN.md) FileName$ [FOR](FOR.md) [INPUT](INPUT.md) "INPUT (file mode)") [AS](AS.md) #1 ' FileName to be encrypted [IF](IF.md) [LOF](LOF.md)(1) <= 32000 [THEN](THEN.md) Text$ = [INPUT$](INPUT$.md)([LOF](LOF.md)(1), 1) ' get Text as one string [CLOSE](CLOSE.md) #1 Send$ = "" ' clear value [FOR](FOR.md) i = 1 [TO](TO.md) [LEN](LEN.md)(Text$)     Letter$ = [MID$](MID$.md) "MID$ (function)")(Text$, i, 1) ' get each character in the text     Code = [ASC](ASC.md) "ASC (function)")(Letter$)     [IF](IF.md) (Code > 64 [AND](AND.md) "AND (boolean)") Code < 91) [OR](OR.md) "OR (boolean)") (Code > 96 [AND](AND.md) "AND (boolean)") Code < 123) [THEN](THEN.md)         Letter$ = CHR$(Code + 130) ' change letter's ASCII character by 130     [END IF](END IF.md)     Send$ = Send$ + Letter$ ' reassemble string with just letters encrypted [NEXT](NEXT.md) i [OPEN](OPEN.md) FileName$ [FOR](FOR.md) [OUTPUT](OUTPUT.md) [AS](AS.md) #1 ' erase FileName to be encrypted [PRINT](PRINT.md) "PRINT (file statement)") #1, Send$   ' Text as one string [CLOSE](CLOSE.md) #1  
```

*Warning: The routine above will change an original text file to be unreadable. Use a second file name to preserve the original file.*
  

*Example 4:* **Decrypting** the above encrypted text file (32K byte file size limit).

``` [OPEN](OPEN.md) FileName$ [FOR](FOR.md) [INPUT](INPUT.md) "INPUT (file mode)") [AS](AS.md) #1       ' FileName to be decrypted     Text$ = [INPUT$](INPUT$.md)([LOF](LOF.md)(1), 1)         ' open Text as one string [CLOSE](CLOSE.md) #1 Send$ = "" [FOR](FOR.md) i = 1 [TO](TO.md) [LEN](LEN.md)(Text$)     Letter$ = [MID$](MID$.md) "MID$ (function)")(Text$, i, 1)     Code = [ASC](ASC.md) "ASC (function)")(Letter$)     [IF](IF.md) (Code > 194 [AND](AND.md) "AND (boolean)") Code < 221) [OR](OR.md) "OR (boolean)") (Code > 226 [AND](AND.md) "AND (boolean)") Code < 253) [THEN](THEN.md)         Letter$ = CHR$(Code - 130)  ' change back to a Letter character     [END IF](END IF.md)     Send$ = Send$ + Letter$ ' reassemble string as normal letters     [NEXT](NEXT.md) i [OPEN](OPEN.md) FileName$ [FOR](FOR.md) [OUTPUT](OUTPUT.md) [AS](AS.md) #1 ' Erase file for decrypted text     [PRINT](PRINT.md) "PRINT (file statement)") #1, Send$ ' place Text as one string [CLOSE](CLOSE.md) #1  
```

*Explanation:* Examples 3 and 4 encrypt and decrypt a file up to 32 thousand bytes. [INPUT$](INPUT$.md) can only get strings less than 32767 characters. The upper and lower case letter characters are the only ones altered, but the encryption and decryption rely on the fact that most text files do not use the code characters above 193. You could alter any character from ASCII 32 to 125 without problems using the 130 adder. No [ASCII](ASCII.md) code above 255 is allowed. Don't alter the codes below code 32 as they are control characters. Specifically, characters 13 and 10 (CrLf) may be used for line returns in text files.
  

## See also

* [ASC](ASC.md), [ASC (function)](ASC (function).md) "ASC (function)")
* [INKEY$](INKEY$.md)
* [ASCII character codes](ASCII character codes.md)

  
