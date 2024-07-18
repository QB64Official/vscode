## ELSEIF
---

### ELSEIF is used in an IF...THEN block statement to offer an alternative condition.

#### SYNTAX

`IF condition THEN {code} ⋮`

#### DESCRIPTION
* [ELSEIF](./ELSEIF.md) statements require a separate code block line with [THEN](./THEN.md) for each alternative condition.
* There can be more than one [ELSE](./ELSE.md) [IF](./IF.md) statement in a single-line [IF](./IF.md) statement.
* If there is only one possible alternative condition (such as 0 or [NOT](./NOT.md) 0), use [ELSE](./ELSE.md) instead.
* If the comparisons are based on multiple conditions being true, it may require many [ELSEIF](./ELSEIF.md) comparisons. [ELSE](./ELSE.md) could help cover some of those conditions.
* You can use [SELECT](./SELECT.md) [CASE](./CASE.md) when [IF](./IF.md) blocks have a long list of alterative [ELSEIF](./ELSEIF.md) conditions.


#### EXAMPLES
##### Example 1: IF statement using ELSE IF in one statement line.
```vb
IF x = 100 THEN COLOR 10: PRINT x ELSE IF x > 100 THEN COLOR 12: PRINT x ELSE PRINT "< 100"
```
  
##### Example 2: IF statement block
```vb
IF x = 100 THEN ' must place ANY code on next line!
 COLOR 10: PRINT x
ELSEIF x > 100 THEN COLOR 12: PRINT x
ELSE : PRINT "< 100"
END IF
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [ELSE](./ELSE.md) , [END](./END.md) [IF](./IF.md)
* [IF](./IF.md)...[THEN](./THEN.md)
