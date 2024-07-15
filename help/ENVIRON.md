# ENVIRON

The ENVIRON statement is used to temporarily set or change an environmental string value.

  

## Syntax

ENVIRON *stringExpression$*
  

## Description

* The *stringExpression$* must include the environmental parameter ID and the setting:
	+ Using an **=** sign: ENVIRON "parameterID=setting"
	+ Using a space: ENVIRON "parameterID setting"
* If the parameter ID did not previously exist in the environmental string table, it is appended to the end of the table.
* If a parameter ID did exist, it is deleted and the new value is appended to end of the list.
* Any changes made at runtime are discarded when your program ends.

  

## See also

* [ENVIRON$](ENVIRON$.md)
* [Windows Environment](Windows Environment.md)

  
