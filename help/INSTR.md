## INSTR
---

### The INSTR function searches for the first occurence of a search STRING within a base string and returns the position it was found.

#### SYNTAX

`position% = INSTR ([ start% ,] baseString$ , searchString$ )`

#### PARAMETERS
* The optional literal or variable [INTEGER](./INTEGER.md) start% indicates where in the baseString$ the search must start.
* The baseString$ is a literal or variable [STRING](./STRING.md) value to be searched for an exact match including letter cases .
* The searchString$ is a literal or variable [STRING](./STRING.md) value being searched.


#### DESCRIPTION
* The function returns the position% in the baseString$ where the searchString$ was found.
* position% will be 0 if the search found no matches in the base string.
* [INSTR](./INSTR.md) returns 0 if an empty baseString$ is passed, and returns 1 with an empty searchString$ .
* The start% position is useful when making multiple searches in the same string. See the example below.
* The searchString$ should be smaller or equal in length to the baseString$ , or 0 is returned.
* Non-zero position% return values can be used as a new start position by adding 1 to re-search the base string. See the example below.
* In a loop, [INSTR](./INSTR.md) can search an entire file for occurences of certain words. See the MID$ statement example.


#### EXAMPLES
##### Example: Reading more than one instance of a word in a string using the INSTR return value as the start value plus 1.
```vb
text$ = "The cats and dogs where playing, even though dogs don't like cats."
DO
 findcats% = INSTR(findcats% + 1, text$, "cats") ' find another occurance after
 IF findcats% THEN PRINT "There is 'cats' in the string at position:"; findcats%
LOOP UNTIL findcats% = 0

findmonkey% = INSTR(text$, "monkeys")  ' find any occurance?
PRINT findmonkey%; "'monkeys' were found so it returned:"; findmonkey%
```
  
```vb
There is 'cats' in the string at position: 5
There is 'cats' in the string at position: 62
0 'monkeys' were found so INSTR returned: 0
```
  


#### SEE ALSO
* [_INSTRREV](./_INSTRREV.md) , MID$ (function)
* LEFT$ , RIGHT$
* LCASE$ , UCASE$
* [STRING](./STRING.md) , [INTEGER](./INTEGER.md)
