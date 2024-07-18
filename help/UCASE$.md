## UCASE$
---

### The UCASE$ function outputs an all-uppercase version of a STRING .

#### SYNTAX

`result$ = UCASE$ ( text$ )`

#### DESCRIPTION
* Used to guarantee that all alphabetical characters in a [STRING](./STRING.md) are capitalized.
* Does not affect non-alphabetical characters.


#### EXAMPLES
##### Example: The following code guarantees that all letter key entries are capitalized:
```vb
PRINT "Do you want to continue? (y/n)"

DO
   K$ = UCASE$(INKEY$)
LOOP UNTIL K$ = "Y" OR K$ = "N"
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* LCASE$
* INKEY$
* [INPUT](./INPUT.md)$
