## XOR (boolean)
---

### XOR evaluates two conditions and if either of them is True then it returns True, if both of them are True then it returns False, if both of them are False then it returns False.

#### SYNTAX

`condition XOR condition2`

#### DESCRIPTION
* Either condition or condition2 must be True for the evaluation to return True.
* It is called "exclusive [OR](./OR.md)" because the conditions cannot both be True for it to return True like the [OR](./OR.md) evaluation.
* condition and condition2 can themselves contain [XOR](./XOR.md) evaluations.


#### EXAMPLES
##### Example: Dilemma...
```vb
True = NOT False
AndersWon = True
PeterWon = True
IF AndersWon = True XOR PeterWon = True THEN
PRINT "Thank you for your honesty!"
ELSE
PRINT "You can't both have won (or lost)!"
END IF
```
  
```vb
You can't both have won (or lost)!
```
  


#### SEE ALSO
* [OR](./OR.md) (boolean) , [AND](./AND.md) (boolean)
* [IF](./IF.md)...[THEN](./THEN.md)
