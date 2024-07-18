## _TRIM$
---

### The _TRIM$ function removes both leading and trailing space characters from a STRING value.

#### SYNTAX

`return$ = _TRIM$ ( text$ )`

#### DESCRIPTION
* Shorthand to using LTRIM$ ( RTRIM$ ("text"))
* text$ is the [STRING](./STRING.md) value to trim.
* If text$ contains no leading or trailing space characters, it is returned unchanged.
* Convert fixed length [STRING](./STRING.md) values by using a different return$ variable.


#### EXAMPLES
##### Example: Demonstrating how _TRIM$(text$) can replace LTRIM$(RTRIM$(text$)):
```vb
text$ = SPACE$(10) + "some text" + SPACE$(10)
PRINT "[" + text$ + "]"
PRINT "[" + RTRIM$(text$) + "]"
PRINT "[" + LTRIM$(text$) + "]"
PRINT "[" + LTRIM$(RTRIM$(text$)) + "]"
PRINT "[" + _TRIM$(text$) + "]"
```
  
```vb
[          some text          ]
[          some text]
[some text          ]
[some text]
[some text]
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* RTRIM$ , LTRIM$
