## RIGHT$
---

### The RIGHT$ function returns a set number of characters in a STRING variable starting from the end and counting backwards.

#### SYNTAX

`RIGHT$( stringvalue$, numberofcharacters% )`

#### PARAMETERS
* The stringvalue$ can be any string of ASCII characters as a [STRING](./STRING.md) variable.
* The numberofcharacters [INTEGER](./INTEGER.md) value determines the number of characters to return from the right end of the string.


#### DESCRIPTION
* If the number of characters exceeds the string length( [LEN](./LEN.md) ) the entire string is returned.
* RIGHT$ returns always start at the last character of the string, even if a space. RTRIM$ can remove ending spaces.
* Number of characters cannot be a negative value.


#### SEE ALSO
* LEFT$ , MID$ (function)
* LTRIM$ , RTRIM$
* [INSTR](./INSTR.md) , HEX$
