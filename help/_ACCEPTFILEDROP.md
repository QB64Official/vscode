# _ACCEPTFILEDROP

The _ACCEPTFILEDROP statement prepares a program window to receive files dropped from Windows Explorer in a drag/drop operation.

  

## Syntax

_ACCEPTFILEDROP [{ON|OFF}]
  

## Description

* Calling the statement with no parameters turns drag/dropping ON.
* To know when files have been dropped into your program's window, check that [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md) is greater than 0.
* Use [_DROPPEDFILE](_DROPPEDFILE.md) to read the list, either sequentially or by index.
* If using [_DROPPEDFILE](_DROPPEDFILE.md) with an index, you must call [_FINISHDROP](_FINISHDROP.md) after you finish working with the list.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Availability

* **Version 1.3 and up**.

  

## Examples

*Example:* Accepting files dragged from a folder and processing the list received sequentially.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(128, 25, 0)  _ACCEPTFILEDROP 'enables drag/drop functionality [PRINT](PRINT.md) "Drag files from a folder and drop them in this window..."  [DO](DO.md)     [IF](IF.md) [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md) [THEN](THEN.md)         [FOR](FOR.md) i = 1 [TO](TO.md) [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md)             a$ = [_DROPPEDFILE](_DROPPEDFILE.md) 'reads the list sequentially; when the result is empty ("") it means the list is over             [COLOR](COLOR.md) 15             [PRINT](PRINT.md) i,             [IF](IF.md) [_FILEEXISTS](_FILEEXISTS.md)(a$) [THEN](THEN.md)                 [COLOR](COLOR.md) 2: [PRINT](PRINT.md) "file",             [ELSE](ELSE.md)                 [IF](IF.md) [_DIREXISTS](_DIREXISTS.md)(a$) [THEN](THEN.md)                     [COLOR](COLOR.md) 3: [PRINT](PRINT.md) "folder",                 [ELSE](ELSE.md)                     [COLOR](COLOR.md) 4: [PRINT](PRINT.md) "not found", 'highly unlikely, but who knows?                 [END IF](END IF.md)             [END IF](END IF.md)             [COLOR](COLOR.md) 15             [PRINT](PRINT.md) a$         [NEXT](NEXT.md)     [END IF](END IF.md)      [_LIMIT](_LIMIT.md) 30 [LOOP](LOOP.md)  
```

  

## See also

* [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md), [_DROPPEDFILE](_DROPPEDFILE.md), [_FINISHDROP](_FINISHDROP.md)
* [_FILEEXISTS](_FILEEXISTS.md), [_DIREXISTS](_DIREXISTS.md)

  
