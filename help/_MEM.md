# _MEM

The _MEM variable type can be used when working with memory blocks. It has no variable [type](type.md) suffix.

  

## Syntax

[DIM](DIM.md) m [AS](AS.md) _MEM
  

## Description

*Variable TYPE:*

* Memory DOT values are actually part of the built in memory variable [type](type.md) in QB64. The following [TYPE](TYPE.md) is built in:

``` TYPE memory_type   OFFSET AS _OFFSET       'start location of block(changes with byte position)   SIZE AS _OFFSET         'size of block remaining at offset(changes with position)   TYPE AS _OFFSET         'type description of variable used(never changes)   ELEMENTSIZE AS _OFFSET  'byte size of values inside the block(never changes)   IMAGE AS LONG           'the image handle used when _MEMIMAGE(handle) is used   SOUND AS LONG           'the sound handle used when _MEMSOUND(handle) is used END TYPE  The above [TYPE](TYPE.md) is for clarification purposes only. It **doesn't need** to be pasted ina program to use _MEM.  **IMPORTANT NOTE:** *As of Build 20170802/57 onward (early v1.2 development), mem.TYPE hasbeen changed to be an _OFFSET, just as mem.SIZE and mem.ELEMENTSIZE.*  
```

### Usage

* The _MEM type contains the following **read-only** elements where *name* is the _MEM variable name:

*name***.OFFSET** is the current start position in the memory block AS [_OFFSET](_OFFSET.md). Add bytes to change position.
*name***.SIZE** is the remaining size of the block at current position in bytes AS [_OFFSET](_OFFSET.md)
*name***.TYPE** is the type (represented as bits combined to form a value) AS [_OFFSET](_OFFSET.md):
  

## .TYPE values (version 1.000 and up incl. all QB64-PE releases)

* [bit 0] 1* byte types (_BYTE)
* [bit 1] 2* byte types (INTEGER)
* [bit 2] 4* byte types (LONG or SINGLE)
* [bit 3] 8* byte types (DOUBLE or _INTEGER64)
* [bit 4] 16* byte types (reserved for future use)
* [bit 5] 32* byte types (_FLOAT)
* [bit 6] 64* byte types (reserved for future use)
* [bit 7] 128 = integer types (_BYTE, INTEGER, LONG, _INTEGER64) (added to *)
* [bit 8] 256 = floating point types (SINGLE, DOUBLE, _FLOAT) (added to *)
* [bit 9] 512 = STRING types (fixed length or variable length)
* [bit 10] 1024 = _UNSIGNED types (added to *+128)
* [bit 11] 2048 = pixel data usually from _MEMIMAGE (added to 1+128+1024 for 256 color screens, or 2+128+1024 for text screens, or 4+128+1024 for 32-bit color screens)
* [bit 12] 4096 = _MEM TYPE structure (NOT added to 32768)
* [bit 13] 8192 = _OFFSET type (added to 4+128+[1024] or 8+128+[1024] or future_size+128+[1024])
* [bit 14] 16384 = data created/defined by _MEMNEW(size) or _MEMNEW(offset,size)
* [bit 15] 32768 = a custom, user defined type (ie. created with TYPE name ... END TYPE)
* [bit 16] 65536 = an array of data (added to other type values defining the array's data type)

*Note: If a future integer, float or other type doesn't have a size that is 1,2,4,8,16,32,64,128 or 256 it won't have a size-bit set.*

### Versions prior to 1.000 (never use with QB64-PE releases)

* 1 = Integer types such as [_BYTE](_BYTE.md), [INTEGER](INTEGER.md), [LONG](LONG.md), [_INTEGER64](_INTEGER64.md) or [_OFFSET](_OFFSET.md)
* 2 = [_UNSIGNED](_UNSIGNED.md) variable types. Value must be added to the variable type value.(2 cannot be used by itself)
* 3 = ALL [_UNSIGNED](_UNSIGNED.md) [INTEGER](INTEGER.md) type values.(add 1 + 2)
* 4 = Floating point types such as [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md) or [_FLOAT](_FLOAT.md)
* 8 = [STRING](STRING.md)
* 0 = unknown(eg. created with [_MEMNEW](_MEMNEW.md)) or [user-defined-types](user-defined-types.md)

* **Note: [_OFFSET](_OFFSET.md) values cannot be cast to other variable [types](types.md) reliably. _MEM is a reserved custom variable [type](type.md).**
* **[_MEM](_MEM.md) "MEM (function)") cannot reference variable length [STRING](STRING.md) variable values. String values must be designated as a fixed-[length](length.md) string.**

  

## Examples

*Example 1:* Demonstration of .IMAGE to determine an image's dimensions, .TYPE to verify the type and [_MEMEXISTS](_MEMEXISTS.md) to check image has not been freed

``` 'The $UNSTABLE command may not be necessary if HTTP integration has been fully accepted into QB64PE. 'Feel free to remark it out if the IDE flags the following line with an ERROR message. 'And kindly report the issue on our forums or Discord so that we can update this page to keep it as 100% relevant, as possible.  [$UNSTABLE]($UNSTABLE.md):HTTP  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(500, 500, 32)  Image$ = Download$("https://qb64phoenix.com/qb64wiki/resources/assets/peWikiLogo.png", statusCode&) 'Let's try and download the QB64PE Logo from the web [IF](IF.md) statusCode& = 200 [THEN](THEN.md) '                                      200 says a proper connection was made to the web page in question     i = [_LOADIMAGE](_LOADIMAGE.md)(Image$, 32, "memory") '                       and then we load it for use as a registered imange [ELSE](ELSE.md)     [PRINT](PRINT.md) "HTTP ERROR"; statusCode '                             can't get a proper connection to our webpage, so we don't have an image to work with.     [END](END.md) '                                                        end and go report the issue on the forums, if you'd be so kind, dear user. [END IF](END IF.md)  [_PUTIMAGE](_PUTIMAGE.md) (0, 0)-(500, 500), i '                                 put the image on the screen so we can view it [DIM](DIM.md) m [AS](AS.md) _MEM: m = [_MEMIMAGE](_MEMIMAGE.md)(i) '                                make a memblock and point it towards our image   '                                                           **** try uncommenting the following line and see what happens **** '_MEMFREE m   [IF](IF.md) m.TYPE [AND](AND.md) "AND (boolean)") 2048 [THEN](THEN.md)     [PRINT](PRINT.md) "this is/was an image"     [IF](IF.md) [_MEMEXISTS](_MEMEXISTS.md)(m) [THEN](THEN.md) '                                      check if memory m is still available         [PRINT](PRINT.md) t [AND](AND.md) 7; "bytes per pixel"         [PRINT](PRINT.md) "image handle "; m.IMAGE         [PRINT](PRINT.md) "image width"; [_WIDTH](_WIDTH.md) "WIDTH (function)")(m.IMAGE)         [PRINT](PRINT.md) "image height"; [_HEIGHT](_HEIGHT.md)(m.IMAGE)     [ELSE](ELSE.md) '                                                       if we removed the remark from the _MEMFREE above, we'll see the following message         [PRINT](PRINT.md) "Memory already freed!"     [END IF](END IF.md) [END IF](END IF.md)   ' Content of the HTTP response is returned. ' The statusCode is also assigned. [FUNCTION](FUNCTION.md) Download$ (url [AS](AS.md) [STRING](STRING.md), statusCode [AS](AS.md) [LONG](LONG.md))     [DIM](DIM.md) h [AS](AS.md) [LONG](LONG.md), content [AS](AS.md) [STRING](STRING.md), s [AS](AS.md) [STRING](STRING.md)     h = [_OPENCLIENT](_OPENCLIENT.md)("HTTP:" + url)      statusCode = [_STATUSCODE](_STATUSCODE.md)(h)      [WHILE](WHILE.md) [NOT](NOT.md) [EOF](EOF.md)(h)         [_LIMIT](_LIMIT.md) 60         [GET](GET.md) #h, , s         content = content + s     [WEND](WEND.md)     [CLOSE](CLOSE.md) #h      Download$ = content [END FUNCTION](END FUNCTION.md)  
```

  

*Example 2:* Converts the current [destination](destination.md) [SCREEN](SCREEN.md) 13 image memory altered by [PSET](PSET.md) to a [STRING](STRING.md) value. SCREEN 13 only.

``` [SCREEN](SCREEN.md) 13 [PSET](PSET.md) (0, 0), [ASC](ASC.md) "ASC (function)")("H") 'put the ASCII value of "H" into the top left corner of screen, which is the first byte of screen image memory [PSET](PSET.md) (1, 0), [ASC](ASC.md) "ASC (function)")("E") 'put the ASCII value of "E" into the 2nd byte of screen image memory [PSET](PSET.md) (2, 0), [ASC](ASC.md) "ASC (function)")("L") 'put the ASCII value of "L" into the 3nd byte of screen image memory [PSET](PSET.md) (3, 0), [ASC](ASC.md) "ASC (function)")("L") 'put the ASCII value of "L" into the 4th byte of screen image memory [PSET](PSET.md) (4, 0), [ASC](ASC.md) "ASC (function)")("O") 'put the ASCII value of "O" into the 5th byte of screen image memory                                                                                                                                                                                                            'put the ASCII value of "E" into the 2nd byte of screen image memory  [DIM](DIM.md) m [AS](AS.md) _MEM '                         define m as a mem block m = [_MEMIMAGE](_MEMIMAGE.md)(0) '                      point m to where our screen exists in memory  x1$ = [_MEMGET](_MEMGET.md) "MEMGET (function)")(m, m.OFFSET, [STRING](STRING.md) * 5) 'm is the mem block that we're wanting to get information from '                                       m.OFFSET is the mem block m starting position '                                       STRING * 5 is the size and type of information that we want to get from that position in memory.  [LOCATE](LOCATE.md) 2, 1 [PRINT](PRINT.md) [LEN](LEN.md)(x1$) '                        prints 5 bytes as we deliberately fetched STRING * 5 bytes with our _MEMGET above. [PRINT](PRINT.md) x1$ '                             prints the contents of that 5-byte string which we got above -- which is "HELLO" as CHR$() string character values [_MEMFREE](_MEMFREE.md) m  
```

```  5 HELLO   
```

  

*Example 3:* Using _MEM to convert _OFFSET to _INTEGER64.

``` [DIM](DIM.md) x [AS](AS.md) [INTEGER](INTEGER.md) [DIM](DIM.md) m [AS](AS.md) _MEM m = [_MEM](_MEM.md) "MEM (function)")(x) [PRINT](PRINT.md) m.OFFSET [PRINT](PRINT.md) ConvertOffset(m.OFFSET)   [FUNCTION](FUNCTION.md) ConvertOffset&& (value [AS](AS.md) [_OFFSET](_OFFSET.md) "OFFSET (function)"))     [$CHECKING]($CHECKING.md):[OFF](OFF.md)     [DIM](DIM.md) m [AS](AS.md) _MEM 'Define a memblock     m = [_MEM](_MEM.md) "MEM (function)")(value) 'Point it to use value     [$IF]($IF.md) 64BIT [THEN](THEN.md)         [DIM](DIM.md) temp [AS](AS.md) [_INTEGER64](_INTEGER64.md) 'On 64 bit OSes, an OFFSET is 8 bytes in size.     [$ELSE]($ELSE.md)         [DIM](DIM.md) temp [AS](AS.md) [LONG](LONG.md) '      However, on 32 bit OSes, an OFFSET is only 4 bytes.     [$END IF]($END IF.md)      [_MEMGET](_MEMGET.md) m, m.OFFSET, temp 'Once we've sized our variable correctly, let's get it     ConvertOffset&& = temp '   And then assign that long value to ConvertOffset&&     [_MEMFREE](_MEMFREE.md) m '               Free the memblock     [$CHECKING]($CHECKING.md):[ON](ON.md) [END FUNCTION](END FUNCTION.md)  
```

  

*Explanation:* The above will print two numbers which should match. These numbers will vary, as they're representations of where X is stored in memory, and that position is going to vary every time the program is run. What it should illustrate, however, is a way to convert _OFFSET to _INTEGER64 values, which can sometimes be useful when trying to run calculations involving mem.SIZE, mem.TYPE, or mem.ELEMENTSIZE.

  

## See also

* [_MEM (function)](_MEM (function).md) "MEM (function)"), [_MEMELEMENT](_MEMELEMENT.md)
* [_MEMNEW](_MEMNEW.md), [_MEMCOPY](_MEMCOPY.md), [_MEMFREE](_MEMFREE.md)
* [_MEMGET](_MEMGET.md), [_MEMPUT](_MEMPUT.md), [_MEMFILL](_MEMFILL.md)
* [_MEMIMAGE](_MEMIMAGE.md), [_MEMSOUND](_MEMSOUND.md)

  
