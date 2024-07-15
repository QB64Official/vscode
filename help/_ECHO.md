# _ECHO

The _ECHO statement allows outputting text to a [$CONSOLE]($CONSOLE.md) window without having to alternate between [_DEST](_DEST.md) pages.

  

## Syntax

_ECHO {*"text to output"* | *textVariable$*}
  

## Description

* _ECHO is a shorthand to saving current [_DEST](_DEST.md), switching to [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md), [PRINTing](PRINTing.md), then switching back to the previous [_DEST](_DEST.md).
* To output numbers, use the [STR$](STR$.md) function.

  

## Availability

* **QB64 v1.3 and up**
* **QB64-PE all versions**

  

## Examples

``` [$CONSOLE]($CONSOLE.md) [PRINT](PRINT.md) "this will show in the main window" _ECHO "this will show in the console"  
```

  

## See also

* [_DEST](_DEST.md)
* [$CONSOLE]($CONSOLE.md), [_CONSOLE](_CONSOLE.md)
* [STR$](STR$.md)

  
