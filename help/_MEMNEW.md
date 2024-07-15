# _MEMNEW

The _MEMNEW function allocates new memory and returns a [_MEM](_MEM.md) memory block referring to it.

  

## Syntax

*memoryBlock* = _MEMNEW(*byteSize*)
  

## Parameters

* The *byteSize* parameter is the desired byte size of the memory block based on the variable [type](type.md) it will hold.

  

## Description

* The *memoryBlock* value created holds the elements .OFFSET, .SIZE, .TYPE and .ELEMENTSIZE.
* _MEMNEW does not clear the data previously in the memory block it allocates, for speed purposes.
* To clear previous data from a new memory block, use [_MEMFILL](_MEMFILL.md) with a byte value of 0.
* When a new memory block is created the memory .TYPE value will be 0.
* **If the read only memory block .SIZE is 0, the memory block was not created.**
* **All values created by memory functions must be freed using [_MEMFREE](_MEMFREE.md) with a valid [_MEM](_MEM.md) variable.**

  

## Examples

*Example:* Shows how [SINGLE](SINGLE.md) numerical values can be passed, but non-fixed [STRING](STRING.md) lengths cannot get the value.

``` [DIM](DIM.md) m [AS](AS.md) [_MEM](_MEM.md) [DIM](DIM.md) f [AS](AS.md) [STRING](STRING.md) * 5 m = _MEMNEW(5) 'create new memory block of 5 bytes a = 12345.6 [_MEMPUT](_MEMPUT.md) m, m.OFFSET, a 'put single value [_MEMGET](_MEMGET.md) m, m.OFFSET, b 'get single value [PRINT](PRINT.md) "b = "; b c$ = "Doggy" [_MEMPUT](_MEMPUT.md) m, m.OFFSET, c$ 'put 5 byte string value [_MEMGET](_MEMGET.md) m, m.OFFSET, d$ 'get unfixed length string value [_MEMGET](_MEMGET.md) m, m.OFFSET, f  'get 5 byte string value e$ = [_MEMGET](_MEMGET.md) "MEMGET (function)")(m, m.OFFSET, [STRING](STRING.md) * 5) 'get 5 byte string value [PRINT](PRINT.md) "d$ = "; d$; [LEN](LEN.md)(d$) 'prints empty string [PRINT](PRINT.md) "e$ = "; e$; [LEN](LEN.md)(e$) [PRINT](PRINT.md) "f = "; f; [LEN](LEN.md)(f)  
```

``` b =  12345.6 d$ =  0 e$ = Doggy 5 f = Doggy 5  
```

  

## See also

* [_MEM](_MEM.md), [_MEMPUT](_MEMPUT.md)
* [_MEMGET](_MEMGET.md), [_MEMGET (function)](_MEMGET (function).md) "MEMGET (function)")
* [_MEMFILL](_MEMFILL.md), [_MEMFREE](_MEMFREE.md)

  
