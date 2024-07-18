## LEFT$
---

### The LEFT$ string function returns a number of characters from the left of a STRING .

#### SYNTAX

`LEFT$ ( stringValue$ , numberOfCharacters% )`

#### PARAMETERS
* stringValue$ can be any [STRING](./STRING.md) literal or variable.
* numberOfCharacters% [INTEGER](./INTEGER.md) determines the number of characters to return from left of string.


#### DESCRIPTION
* If the number of characters exceeds the string length the entire string is returned. Use [LEN](./LEN.md) to determine a string's length.
* LEFT$ returns always start at the first character of the string, even if it's a space. LTRIM$ can remove leading spaces.
* numberOfCharacters% cannot be a negative value.


#### EXAMPLES
##### Example 1: Getting the left portion of a string value.
```vb
name$ = "Tom Williams"

First$ = LEFT$(name$, 3)

PRINT First$
```
  
```vb
Tom
```
  
##### Example 2: A replace function using LEFT$ and RIGHT$ with INSTR to insert a different length word into an existing string.
```vb
text$ = "This is my sentence to change my words."
PRINT text$
oldword$ = "my"
newword$ = "your"

x = Replace(text$, oldword$, newword$)
IF x THEN PRINT text$; x

END

FUNCTION Replace (text$, old$, new$) 'can also be used as a SUB without the count assignment
DO
 find = INSTR(start + 1, text$, old$) 'find location of a word in text
 IF find THEN
   count = count + 1
   first$ = LEFT$(text$, find - 1) 'text before word including spaces
   last$ = RIGHT$(text$, LEN(text$) - (find + LEN(old$) - 1)) 'text after word
   text$ = first$ + new$ + last$
 END IF
 start = find
LOOP WHILE find
Replace = count 'function returns the number of replaced words. Comment out in SUB
END FUNCTION
```
  
```vb
This is my sentence to change my words.
This is your sentence to change your words.
```
  


#### SEE ALSO
* RIGHT$ , MID$ (function)
* LTRIM$ , RTRIM$
* [INSTR](./INSTR.md) , [LEN](./LEN.md)
