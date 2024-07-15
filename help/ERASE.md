# ERASE

The ERASE statement is used to clear all data from an array. [$STATIC]($STATIC.md) [array](array.md) dimensions are not affected.

  

## Syntax

ERASE *arrayName* [, *arrayName2*...]
  

## Description

* All string array elements become null strings ("") and all numerical array elements become 0.
* Multiple arrays can be erased using commas between the array names.
* [Dynamic](Dynamic.md) arrays must be [REDIMensioned](REDIMensioned.md) if they are referenced after erased.
* Dimension subprocedure arrays as [STATIC](STATIC.md) to use ERASE and not have to REDIM.
* You do not have to include array brackets in an ERASE call.

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [DIM](DIM.md), [REDIM](REDIM.md)
* [CLEAR](CLEAR.md)
* [STATIC](STATIC.md)
* [$DYNAMIC]($DYNAMIC.md)
* [Arrays](Arrays.md)

  
