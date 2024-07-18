## _STRICMP
---

### The _STRICMP function compares the relationship between two strings, ignoring upper or lower case letters.

#### SYNTAX

`comparison% = _STRICMP ( string1$ , string2$ )`

#### DESCRIPTION
* Function returns -1 when string1$ is less than string2$ , 0 when equal or 1 when string1$ is greater than string2$ .
* Alphabet comparisons will be evaluated without regard to the letter case in the 2 strings.


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_STRCMP](./_STRCMP.md)
* STR$
* [STRING](./STRING.md)
* ASCII
