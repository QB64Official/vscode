# _MEMGET

The _MEMGET statement reads a portion of a memory block at an OFFSET position into a variable, array or user defined type.

  

## Syntax

_MEMGET *memoryBlock*, *bytePosition*, *destinationVariable*
  

* *memoryBlock* is a [_MEM](_MEM.md) variable type memory block name created by [_MEMNEW](_MEMNEW.md) or the [_MEM](_MEM.md) "MEM (function)") function.
* *bytePosition* is the *memoryBlock*.[OFFSET](OFFSET.md) memory start position plus any bytes to move into the block.
* *destinationVariable* is the variable assigned to hold the data. The number of bytes read is determined by the variable [type](type.md) used.

  

## Description

* The _MEMGET statement is similar to the [GET](GET.md) statement used in files, but the position is required.
* The memory block name.[OFFSET](OFFSET.md) returns the starting byte position of the block. Add bytes to move into the block.
* The variable type held in the memory block can determine the next *bytePosition* to read.
* [LEN](LEN.md) can be used to determine the byte size of numerical or user defined [Variable Types](Variable Types.md) regardless of the value held.
* [STRING](STRING.md) values should be of a defined length. Variable length strings can actually move around in memory and not be found.

  

{{PageExamples
*Example:* Shows how to read the PSET color values from a program's [SCREEN](SCREEN.md) memory to an array.

``` [SCREEN](SCREEN.md) 13 [PSET](PSET.md) (0, 0), 123 [PSET](PSET.md) (1, 0), 222 'create screen image  'here is an array [DIM](DIM.md) screen_array(319, 199) [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md) 'use screen dimensions from 0  'here's how we can copy the screen to our array [DIM](DIM.md) m [AS](AS.md) [_MEM](_MEM.md) m = [_MEMIMAGE](_MEMIMAGE.md)  '0 or no handle necessary when accessing the current program screen _MEMGET m, m.OFFSET, screen_array()  'here's the proof [PRINT](PRINT.md) screen_array(0, 0) 'print 123 [PRINT](PRINT.md) screen_array(1, 0) 'print 222 [END](END.md)  
```

  

## See also

* [_MEMGET (function)](_MEMGET (function).md) "MEMGET (function)")
* [_MEMPUT](_MEMPUT.md)
* [_MEM](_MEM.md)
* [_MEMIMAGE](_MEMIMAGE.md)
* [_MEMFREE](_MEMFREE.md)

  
