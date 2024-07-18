## OPTION _EXPLICITARRAY
---

### OPTION _EXPLICITARRAY instructs the compiler to require arrays to be properly dimensioned with DIM or REDIM before first use. However, it doesn't require regular variables to be declared.

#### SYNTAX

`OPTION _EXPLICITARRAY`

#### DESCRIPTION
* Normally statements like x(2) = 3 will implicitly create an array x(). [OPTION](./OPTION.md) [_EXPLICITARRAY](./_EXPLICITARRAY.md) requires proper dimensioning for the array, helping to catch mistyped array and function names.
* Unlike [OPTION](./OPTION.md) [_EXPLICIT](./_EXPLICIT.md) , simple variables can still be used without a declaration. Example: i = 1


#### EXAMPLES
##### Example: Avoiding simple typos with OPTION _EXPLICITARRAY results shown in the QB64 IDE Status area.
```vb
OPTION _EXPLICITARRAY
x = 1 'This is fine, it's not an array so not affected

DIM z(5)
z(2) = 3 'All good here, we've explicitly DIMmed our array

y(2) = 3 'This now generates an error
```
  
##### QB64 IDE Status will show: Array 'y' (SINGLE) not defined on line 7


#### SEE ALSO
* [OPTION](./OPTION.md) [_EXPLICIT](./_EXPLICIT.md)
* [DIM](./DIM.md) , [REDIM](./REDIM.md)
* [SHARED](./SHARED.md)
* [STATIC](./STATIC.md)
