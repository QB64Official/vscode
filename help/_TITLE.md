# _TITLE

The _TITLE statement provides the program name in the title bar of the program window.

  

## Syntax

_TITLE *text$*
  

## Parameters

* *text$* can be any literal or variable [STRING](STRING.md) or [ASCII](ASCII.md) character value.

  

## Description

* The title can be changed anywhere in a program procedure.
* The title bar will say "Untitled" if a title is not set.
* Change the title of the [$CONSOLE]($CONSOLE.md) windows created using [_CONSOLETITLE](_CONSOLETITLE.md)
* **Note: A [delay](delay.md) may be required before the title can be set.** See [_SCREENEXISTS](_SCREENEXISTS.md).

  

## Examples

*Example 1:* How to create the window title bar.

``` _TITLE "My New Program"  
```

  

*Example 2:* How to find the currently running program module name and current path using a Windows API Library.

``` _TITLE "My program" [_DELAY](_DELAY.md) 5             '5 second delay  _TITLE [MID$](MID$.md) "MID$ (function)")(TITLE$, 1, [INSTR](INSTR.md)(TITLE$, ".") - 1)  [PRINT](PRINT.md) PATH$   [FUNCTION](FUNCTION.md) TITLE$ '=== SHOW CURRENT PROGRAM [SHARED](SHARED.md) PATH$ [DECLARE LIBRARY](DECLARE LIBRARY.md) 'Directory Information using KERNEL32 provided by Dav   [FUNCTION](FUNCTION.md) GetModuleFileNameA ([BYVAL](BYVAL.md) Module [AS](AS.md) [LONG](LONG.md), FileName [AS](AS.md) [STRING](STRING.md), [BYVAL](BYVAL.md) nSize [AS](AS.md) [LONG](LONG.md)) [END DECLARE](END DECLARE.md)  FileName$ = [SPACE$](SPACE$.md)(256) Result = GetModuleFileNameA(0, FileName$, [LEN](LEN.md)(FileName$)) [IF](IF.md) Result [THEN](THEN.md)   PATH$ = [LEFT$](LEFT$.md)(FileName$, Result)   start = 1   DO     posit = [INSTR](INSTR.md)(start, PATH$, "\")     [IF](IF.md) posit [THEN](THEN.md) last = posit     start = posit + 1   [LOOP](LOOP.md) [UNTIL](UNTIL.md) posit = 0   TITLE$ = [MID$](MID$.md) "MID$ (function)")(PATH$, last + 1)   PATH$ = [LEFT$](LEFT$.md)(PATH$, last) [ELSE](ELSE.md) TITLE$ = "": PATH$ = "" [END IF](END IF.md) [END FUNCTION](END FUNCTION.md)  
```

*Note:* The actual module file name is returned. Not necessarily the Title value. The value returned can be used however.
  

## See also

* [_TITLE$](_TITLE$.md)
* [_ICON](_ICON.md)
* [_DELAY](_DELAY.md)
* [ASCII](ASCII.md)
* [_CONSOLETITLE](_CONSOLETITLE.md)
* [_SCREENEXISTS](_SCREENEXISTS.md)

  
