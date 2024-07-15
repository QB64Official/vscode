# _DROPPEDFILE

The _DROPPEDFILE function returns the list of items (files or folders) dropped in a program's window after [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md) is enabled.

  

## Syntax

*Syntax 1*

*nextItem$* = _DROPPEDFILE
*Syntax 2*

*nextItem$* = _DROPPEDFILE(*index&*)
  

## Description

* After [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md) is enabled, once [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md) is greater than 0 the list of dropped items will be available for retrieval with _DROPPEDFILE
* When using _DROPPEDFILE to read the list sequentially (without specifying an *index&*), an empty string ("") indicates the list is over and then [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md) gets reset to 0.
* When using _DROPPEDFILE with an index (which goes from 1 to [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md)), you must call [_FINISHDROP](_FINISHDROP.md) after you finish working with the list.
* Because it returns a string, _DROPPEDFILE also accepts being followed by a string suffix (_DROPPEDFILE**$**)
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Availability

* **Version 1.3 and up**.

  

## Examples

*Example:* Accepting files dragged from a folder and processing the list received by specifying an index.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(128, 25, 0)  [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md) 'enables drag/drop functionality [PRINT](PRINT.md) "Drag files from a folder and drop them in this window..."  [DO](DO.md)     [IF](IF.md) [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md) [THEN](THEN.md)         [FOR](FOR.md) i = 1 [TO](TO.md) [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md)             a$ = _DROPPEDFILE(i)             [COLOR](COLOR.md) 15             [PRINT](PRINT.md) i,             [IF](IF.md) [_FILEEXISTS](_FILEEXISTS.md)(a$) [THEN](THEN.md)                 [COLOR](COLOR.md) 2: [PRINT](PRINT.md) "file",             [ELSE](ELSE.md)                 [IF](IF.md) [_DIREXISTS](_DIREXISTS.md)(a$) [THEN](THEN.md)                     [COLOR](COLOR.md) 3: [PRINT](PRINT.md) "folder",                 [ELSE](ELSE.md)                     [COLOR](COLOR.md) 4: [PRINT](PRINT.md) "not found", 'highly unlikely, but who knows?                 [END IF](END IF.md)             [END IF](END IF.md)             [COLOR](COLOR.md) 15             [PRINT](PRINT.md) a$         [NEXT](NEXT.md)         [_FINISHDROP](_FINISHDROP.md)     [END IF](END IF.md)      [_LIMIT](_LIMIT.md) 30 [LOOP](LOOP.md)  
```

  

## See also

* [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md), [_TOTALDROPPEDFILES](_TOTALDROPPEDFILES.md), [_FINISHDROP](_FINISHDROP.md)
* [_FILEEXISTS](_FILEEXISTS.md), [_DIREXISTS](_DIREXISTS.md)

  
