# OPTION _EXPLICIT

OPTION _EXPLICIT instructs the compiler to require variable declaration with [DIM](DIM.md), [REDIM](REDIM.md) or an equivalent statement.

  

## Syntax

OPTION _EXPLICIT
  

## Description

* With OPTION _EXPLICIT you can avoid typos by having QB64 immediately warn in the **Status area** of new variables used without previous declaration.
* The use of OPTION _EXPLICIT does also enforce the requirement to [DIM](DIM.md) or [REDIM](REDIM.md) any arrays before first use, no extra [OPTION _EXPLICITARRAY](OPTION _EXPLICITARRAY.md) is needed.
* Enable OPTION _EXPLICIT temporarily even if a program source file doesn't contain the directive by specifying the **-e** switch when compiling via command line (*qb64 -c file.bas -e*).

### Errors

* If used, OPTION _EXPLICIT must be the very first statement in your program. No other statements can precede it (except for [$NOPREFIX]($NOPREFIX.md) or comment lines started with an [apostrophe](apostrophe.md) or [REM](REM.md)).
* Do not use OPTION _EXPLICIT in [$INCLUDEd]($INCLUDEd.md) modules.

  

## Examples

*Example:* Avoiding simple typos with OPTION _EXPLICIT results shown in the QB64 IDE Status area.

``` OPTION _EXPLICIT  [DIM](DIM.md) myVariable [AS](AS.md) [INTEGER](INTEGER.md)  myVariable = 5  [PRINT](PRINT.md) myVariabe  
```

*QB64 IDE Status will show:*
**Variable 'myVariabe' (SINGLE) not defined on line 4**

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [OPTION _EXPLICITARRAY](OPTION _EXPLICITARRAY.md)
* [DIM](DIM.md), [REDIM](REDIM.md)
* [SHARED](SHARED.md)
* [STATIC](STATIC.md)

  
