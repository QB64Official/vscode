# OPTION _EXPLICITARRAY

OPTION _EXPLICITARRAY instructs the compiler to require arrays to be properly dimensioned with [DIM](DIM.md) or [REDIM](REDIM.md) before first use. However, it doesn't require regular variables to be declared.

  

## Syntax

OPTION _EXPLICITARRAY
  

## Description

* Normally statements like x(2) = 3 will implicitly create an array x(). OPTION _EXPLICITARRAY requires proper dimensioning for the array, helping to catch mistyped array and function names.
* Unlike [OPTION _EXPLICIT](OPTION _EXPLICIT.md), simple variables can still be used without a declaration. Example: i = 1

### Errors

* If used, OPTION _EXPLICITARRAY must be the very first statement in your program. No other statements can precede it (except for [$NOPREFIX]($NOPREFIX.md) or comment lines started with an [apostrophe](apostrophe.md) or [REM](REM.md)).
* Do not use OPTION _EXPLICITARRAY in [$INCLUDEd]($INCLUDEd.md) modules.

  

## Examples

*Example:* Avoiding simple typos with OPTION _EXPLICITARRAY results shown in the QB64 IDE Status area.

``` OPTION _EXPLICITARRAY x = 1 'This is fine, it's not an array so not affected  [DIM](DIM.md) z(5) z(2) = 3 'All good here, we've explicitly DIMmed our array  y(2) = 3 'This now generates an error  
```

*QB64 IDE Status will show:*
**Array 'y' (SINGLE) not defined on line 7**

  

## See also

* [OPTION _EXPLICIT](OPTION _EXPLICIT.md)
* [DIM](DIM.md), [REDIM](REDIM.md)
* [SHARED](SHARED.md)
* [STATIC](STATIC.md)

  
