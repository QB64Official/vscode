# STR$

The **STR$** function returns the [STRING](STRING.md) representation of a numerical value.

  

## Syntax

result$ = **STR$(***number***)**
  

## Parameters

* *number* is any numerical type value to convert.

  

## Description

* Returns any type number value with leading sign(space/minus) or decimal point when one exists in the numerical value.
* If *number* is positive, the [STRING](STRING.md) value returned will have a leading space character which can be removed using [LTRIM$](LTRIM$.md).
* If *number* is negative, the minus sign will precede the number instead of a space which [LTRIM$](LTRIM$.md) will not remove.
* Trimming a STR$ string number using [RTRIM$](RTRIM$.md) is not required as [PRINT](PRINT.md) creates the undocumented trailing number space.

  

## Examples

``` [PRINT](PRINT.md) STR$( 1.0 ) [PRINT](PRINT.md) STR$( 2.3 ) [PRINT](PRINT.md) STR$( -4.5 )  
```

```  1  2.3 -4.5  
```

  

``` a = 33 [PRINT](PRINT.md) STR$(a) + "10" + "1" + "who" + STR$(a) + STR$(a) + [LTRIM$](LTRIM$.md)(STR$(a))  
```

```  33101who 33 3333  
```

  

## See also

* [VAL](VAL.md), [STRING](STRING.md)
* [LTRIM$](LTRIM$.md), [MID$ (function)](MID$ (function).md) "MID$ (function)")
* [RIGHT$](RIGHT$.md), [LEFT$](LEFT$.md)
* [HEX$](HEX$.md), [OCT$](OCT$.md)

  
