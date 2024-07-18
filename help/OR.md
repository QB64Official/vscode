## OR
---

### The OR numerical operator returns a comparative bit value of 1 if either value's bit is on.

#### SYNTAX

`result = firstValue OR secondValue`

#### DESCRIPTION
* If both bits are off, it returns 0.
* If one or both bits are on then it returns 1.
* [OR](./OR.md) never turns off a bit and can be used only to turn a bit on.


#### EXAMPLES
##### Example 1: OR always turns bits on! Never off.
```vb
a% = 5 ' 101 binary
b% = 4 ' 100 binary
results% = a% OR b%  ' still 101 binary using OR
PRINT "Results% ="; results%
```
  
```vb
Results% = 5
```
  
##### Example 2: Turning a data register bit on.
```vb
address% = 888    'parallel port data register
  bytevalue% = INP(address%)
  OUT address%, bytevalue% OR 4
```
  


#### SEE ALSO
* [AND](./AND.md) , [XOR](./XOR.md)
* [AND](./AND.md) (boolean) , [OR](./OR.md) (boolean)
* Binary , Boolean
