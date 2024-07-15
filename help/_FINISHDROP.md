# _FINISHDROP

The _FINISHDROP statement resets [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md) and clears the [_DROPPEDFILE](_DROPPEDFILE.md) list of items (files/folders).

  

## Syntax

_FINISHDROP
  

## Description

* When using [_DROPPEDFILE](_DROPPEDFILE.md) with an index (which goes from 1 to [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md)), you must call _FINISHDROP after you finish working with the list in order to prepare for the next drag/drop operation.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Availability

* **Version 1.3 and up**.

  

## Examples

*Example:* Accepting files dragged from a folder and processing the list received by specifying an index.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(128, 25, 0)  [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md) 'enables drag/drop functionality [PRINT](PRINT.md) "Drag files from a folder and drop them in this window..."  [DO](DO.md)     [IF](IF.md) [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md) [THEN](THEN.md)         [FOR](FOR.md) i = 1 [TO](TO.md) [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md)             a$ = [_DROPPEDFILE](_DROPPEDFILE.md)(i)             [COLOR](COLOR.md) 15             [PRINT](PRINT.md) i,             [IF](IF.md) [_FILEEXISTS](_FILEEXISTS.md)(a$) [THEN](THEN.md)                 [COLOR](COLOR.md) 2: [PRINT](PRINT.md) "file",             [ELSE](ELSE.md)                 [IF](IF.md) [_DIREXISTS](_DIREXISTS.md)(a$) [THEN](THEN.md)                     [COLOR](COLOR.md) 3: [PRINT](PRINT.md) "folder",                 [ELSE](ELSE.md)                     [COLOR](COLOR.md) 4: [PRINT](PRINT.md) "not found", 'highly unlikely, but who knows?                 [END IF](END IF.md)             [END IF](END IF.md)             [COLOR](COLOR.md) 15             [PRINT](PRINT.md) a$         [NEXT](NEXT.md)         _FINISHDROP 'If _FINISHDROP isn't called here then _TOTALDROPPEDFILES never gets reset.     [END IF](END IF.md)      [_LIMIT](_LIMIT.md) 30 [LOOP](LOOP.md)  
```

  

## See also

* [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md), [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md), [_DROPPEDFILE](_DROPPEDFILE.md)
* [_FILEEXISTS](_FILEEXISTS.md), [_DIREXISTS](_DIREXISTS.md)

  
