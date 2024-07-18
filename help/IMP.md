## IMP
---

### The IMP logical operator converts the result of two comparative values and returns a bit result.

#### SYNTAX

`result = firstValue IMP secondValue`

#### DESCRIPTION
* Returns a different result from [AND](./AND.md) , [OR](./OR.md) or [XOR](./XOR.md) - see truth table below.
* Evaluates if firstValue imp lies secondValue .
	* If firstValue is true then secondValue must also be true.
	* So if firstValue is true, and secondValue false, then the condition is false, otherwise it is true (see table below).


#### SEE ALSO
* Binary
* Boolean
