## _PI
---

### The _PI function returns π as a _FLOAT value with an optional multiplier parameter.

#### SYNTAX

`circumference = _PI [( multiplier )]`

#### PARAMETERS
* Optional multiplier ( 2 * radius in above syntax) allows multiplication of the π value.


#### DESCRIPTION
* Function can be used in to supply π or multiples in a program.
* Accuracy is determined by the return variable type [AS](./AS.md) [SINGLE](./SINGLE.md) , [DOUBLE](./DOUBLE.md) or [_FLOAT](./_FLOAT.md) .
* The π value can also be derived using 4 * [ATN](./ATN.md) (1) for a [SINGLE](./SINGLE.md) value.


#### EXAMPLES
##### Example: Calculating the area of a circle using a SINGLE variable in this case.
```vb
radius = 5
circlearea = _PI(radius ^ 2)
PRINT circlearea
```
  
```vb
78.53982
```
  


#### SEE ALSO
* [_ATAN2](./_ATAN2.md) , [TAN](./TAN.md)
* [ATN](./ATN.md)
* [SIN](./SIN.md) , [COS](./COS.md)
