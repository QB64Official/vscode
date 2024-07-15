# _TOTALDROPPEDFILES

The _TOTALDROPPEDFILES function returns the number of items (files or folders) dropped in a program's window after [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md) is enabled.

  

## Syntax

*totalFilesReceived&* = _TOTALDROPPEDFILES
  

## Description

* After [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md) is enabled, _TOTALDROPPEDFILES will return 0 until the user drops files or folders into the program's window.
* When using [_DROPPEDFILE](_DROPPEDFILE.md) to read the list sequentially, _TOTALDROPPEDFILES will be reset to 0 after the last item is retrieved (after [_DROPPEDFILE](_DROPPEDFILE.md) returns an empty string "").
* If using [_DROPPEDFILE](_DROPPEDFILE.md) with an index, you must call [_FINISHDROP](_FINISHDROP.md) after you finish working with the list.
* When using [_DROPPEDFILE](_DROPPEDFILE.md) to read the list with an index, _TOTALDROPPEDFILES will **not** be reset (and the list of items won't be cleared) until [_FINISHDROP](_FINISHDROP.md) is called.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Availability

* **QB64 v1.3 and up**
* **QB64-PE all versions**

  

## Examples

* See example for [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md)

  

## See also

* [_ACCEPTFILEDROP](_ACCEPTFILEDROP.md), [_DROPPEDFILE](_DROPPEDFILE.md), [_FINISHDROP](_FINISHDROP.md)
* [_FILEEXISTS](_FILEEXISTS.md), [_DIREXISTS](_DIREXISTS.md)

  
