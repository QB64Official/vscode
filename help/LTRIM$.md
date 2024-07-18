## LTRIM$
---

### The LTRIM$ function removes leading space characters from a STRING value.

#### SYNTAX

`return$ = LTRIM$ ( text$ )`

#### DESCRIPTION
* text$ is the [STRING](./STRING.md) value to trim.
* If text$ contains no leading space characters, it is returned unchanged.
* Convert fixed length [STRING](./STRING.md) values by using a different return$ variable.
* Can be used to trim the leading space of a positive numerical value converted to a string value by STR$ .


#### EXAMPLES
##### Example 1: Trimming a positive string number.
```vb
value = 12345
number$ = LTRIM$(STR$(value)) 'converting number to string removes right PRINT space
PRINT "[" + number$ + "]"
```
  
```vb
[12345]
```
  
##### Example 2: Trimming leading spaces from text strings.
```vb
PRINT LTRIM$("some text")
PRINT LTRIM$("   some text")
```
  
```vb
some text
some text
```
  
##### Example 3: A TRIM$ function to trim spaces off of both ends of a string.
```vb
text$ = "        Text String           "
trimmed$ = TRIM$(text$)
PRINT CHR$(26) + trimmed$ + CHR$(27)
FUNCTION TRIM$(text$)
TRIM$ = LTRIM$(RTRIM$(text$))
END FUNCTION
```
  
```vb
→Text String←
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* _TRIM$ , RTRIM$ , STR$
* LEFT$ , RIGHT$
* HEX$ , MID$ (function)
