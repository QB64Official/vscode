## RTRIM$
---

### The RTRIM$ function removes trailing space characters from a STRING value.

#### SYNTAX

`return$ = RTRIM$ ( value$ )`

#### DESCRIPTION
* value$ is the [STRING](./STRING.md) value to trim.
* If value$ contains no trailing space characters, value$ is returned unchanged.
* Convert fixed length [STRING](./STRING.md) values by using a different return$ variable.


#### EXAMPLES
##### Trimming a fixed length string value for use by another string variable:
```vb
name$ = RTRIM$(contact.name) ' trims spaces from end of fixed length TYPE value.
```
  
##### Trimming text string ends:
```vb
PRINT RTRIM$("some text") + "."
PRINT RTRIM$("some text   ") + "."
PRINT RTRIM$("Tommy    ")
```
  
```vb
some text.
some text.
Tommy
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* _TRIM$ , LTRIM$ , STR$
* [LSET](./LSET.md) , [RSET](./RSET.md)
