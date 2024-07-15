# _MEMELEMENT

The _MEMELEMENT function returns a [_MEM](_MEM.md) block referring to a variable's memory, but not past it.

  

## Syntax

*memoryBlock* = _MEMELEMENT(*referenceVariable*)
  

* The *referenceVariable* parameter designates the existing variable name using the memory block.
* _MEMELEMENT is the same as [_MEM](_MEM.md) but in an array it returns the specifications of an element, not the entire array.
* All values created by memory functions MUST be freed using [_MEMFREE](_MEMFREE.md) with a valid [_MEM](_MEM.md) variable type.
* The _MEMELEMENT type contains the following **read-only** elements where *name* is the variable name:

*name***.OFFSET** is the beginning offset of the memory block AS [_OFFSET](_OFFSET.md)
*name***.SIZE** returns the largest available region of memory of the ELEMENT in bytes AS [_OFFSET](_OFFSET.md)
*name***.ELEMENTSIZE** is the [_BYTE](_BYTE.md) size of the elements within the block AS [_OFFSET](_OFFSET.md)
* 2 = [INTEGER](INTEGER.md) values have an element size of 2 bytes
* 4 = [LONG](LONG.md) integer and [SINGLE](SINGLE.md) float values have an element size of 4 bytes
* 8 = [DOUBLE](DOUBLE.md) float and [_INTEGER64](_INTEGER64.md) values have an element size of 8 bytes
* 32 = [_FLOAT](_FLOAT.md) values have an element size of 32 bytes
* [LEN](LEN.md) = [STRING](STRING.md) or [_OFFSET](_OFFSET.md) byte sizes vary so use [LEN](LEN.md)(variable) for the number of bytes.

*name***.TYPE** is the type (represented as bits combined to form a value) AS [LONG](LONG.md) (see below).
  

## .TYPE values (version 1.000 and up)

* 0 = UDT ([user defined type](user defined type.md)) or memory created by [_MEMNEW](_MEMNEW.md)
* 1 = 1 bit ELEMENT.SIZE=1 *Only used along with specific types (currently integers or floats)
* 2 = 2 bit. ELEMENT.SIZE=2 *
* 4 = 4 bit. ELEMENT.SIZE=4 *
* 8 = 8 bit. ELEMENT.SIZE=8 *
* 16 = 16 bit. ELEMENT.SIZE=16 *
* 32 = 32 bit. ELEMENT.SIZE=32 *
* 64 = 64 bit. ELEMENT.SIZE=64 *
* 128 = 128 bit. ELEMENT.SIZE=128 *
* 256 = 256 bit. ELEMENT.SIZE=256 *
* 512(+ bit*) = integer types only(ie. whole numbers)
* 1024(+ bit*) = floating point types only(ie. numbers that can have a decimal point)
* 2048 = [STRING](STRING.md) type only
* 4096(+ 512 + bit*) = [_UNSIGNED](_UNSIGNED.md) integer type only
* 8192 = [_MEM](_MEM.md) type only
* 16384(+ 512 + bit*)= [_OFFSET](_OFFSET.md) type only

*Note: If a future integer, float or other type doesn't have a size that is 1,2,4,8,16,32,64,128 or 256 it won't have a size-bit set.*

### Versions prior to 1.000

* 1 = Integer types such as [_BYTE](_BYTE.md), [INTEGER](INTEGER.md), [LONG](LONG.md), [_INTEGER64](_INTEGER64.md) or [_OFFSET](_OFFSET.md)
* 2 = [_UNSIGNED](_UNSIGNED.md) variable types. Value must be added to the variable type value.(2 cannot be used by itself)
* 3 = ALL [_UNSIGNED](_UNSIGNED.md) [INTEGER](INTEGER.md) type values.(add 1 + 2)
* 4 = Floating point types such as [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) or [_FLOAT](_FLOAT.md)
* 8 = [STRING](STRING.md)
* 0 = unknown(eg. created with [_MEMNEW](_MEMNEW.md)) or [user-defined-types](user-defined-types.md)

  

## Examples

*Example:* Comparing the specifications returned by [_MEM](_MEM.md) and _MEMELEMENT from an array.

``` [DIM](DIM.md) a(1 [TO](TO.md) 100) [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)  [DIM](DIM.md) m1 [AS](AS.md) [_MEM](_MEM.md) [DIM](DIM.md) m2 [AS](AS.md) [_MEM](_MEM.md)  m1 = [_MEM](_MEM.md) "MEM (function)")(a(50)) 'function returns information about array up to specific element [PRINT](PRINT.md) m1.OFFSET, m1.SIZE, m1.TYPE, m1.ELEMENTSIZE  m2 = _MEMELEMENT(a(50)) 'function returns information about the specific element [PRINT](PRINT.md) m2.OFFSET, m2.SIZE, m2.TYPE, m2.ELEMENTSIZE  [END](END.md)  
```

Output using VERSION .954 ONLY .TYPE values: 1 (integer) + 2 (unsigned)

``` 28377205        51        3        1 28377205        1         3        1  
```

*Explanation:* [_MEM](_MEM.md) returns the info about the array to that element while _MEMELEMENT returns info about that element only.
* [_MEM](_MEM.md) value returns the available array .SIZE as 51 bytes from the designated array element.
* _MEMELEMENT value returns the available element .SIZE as one byte.

  

## See also

* [_MEM](_MEM.md)
* [_MEMNEW](_MEMNEW.md)
* [_MEMGET](_MEMGET.md), [_MEMPUT](_MEMPUT.md)
* [_MEMFREE](_MEMFREE.md)

  
