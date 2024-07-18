## LCASE$
---

### The LCASE$ function outputs an all-lowercase version of a STRING .

#### SYNTAX

`result$ = LCASE$ ( text$ )`

#### DESCRIPTION
* Normally used to guarantee that user input is not capitalized.
* Does not affect non-alphabetical characters.


#### EXAMPLES
##### Example: The following code guarantees that all user letter entries will be lower case:
```vb
PRINT "Do you want to continue? (y/n)"

DO
   K$ = LCASE$(INKEY$)
LOOP UNTIL K$ = "y" OR K$ = "n"
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* UCASE$ (upper case)
* INKEY$
* [INPUT](./INPUT.md)$
