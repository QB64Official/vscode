## _ECHO
---

### The _ECHO statement allows outputting text to a $CONSOLE window without having to alternate between _DEST pages.

#### SYNTAX

`_ECHO { "text to output" | textVariable$ }`

#### DESCRIPTION
* [_ECHO](./_ECHO.md) is a shorthand to saving current [_DEST](./_DEST.md) , switching to [_DEST](./_DEST.md) [_CONSOLE](./_CONSOLE.md) , PRINTing , then switching back to the previous [_DEST](./_DEST.md) .
* To output numbers, use the STR$ function.


#### EXAMPLES
```vb
$CONSOLE
PRINT "this will show in the main window"
_ECHO "this will show in the console"
```
  


#### SEE ALSO
* [_DEST](./_DEST.md)
* $[CONSOLE](./CONSOLE.md) , [_CONSOLE](./_CONSOLE.md)
* STR$
