## _HYPOT
---

### The _HYPOT function returns the hypotenuse of a right-angled triangle whose legs are x and y.

#### SYNTAX

`result! = _HYPOT ( x , y )`

#### PARAMETERS
* x and y are the floating point values corresponding to the legs of a right-angled (90 degree) triangle for which the hypotenuse is computed.


#### DESCRIPTION
* The function returns what would be the square root of the sum of the squares of x and y (as per the Pythagorean theorem).
* The hypotenuse is the longest side between the two 90 degree angle sides


#### EXAMPLES
##### Example:
```vb
DIM leg_x AS DOUBLE, leg_y AS DOUBLE, result AS DOUBLE
leg_x = 3
leg_y = 4
result = _HYPOT(leg_x, leg_y)
PRINT USING "## , ## and ## form a right-angled triangle."; leg_x; leg_y; result
```
  
```vb
3 , 4 and 5 form a right-angled triangle.
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [ATN](./ATN.md) (arctangent)
* [_PI](./_PI.md) (function)
* Mathematical Operations
* C++ reference for hypot() - source of the text and sample above
