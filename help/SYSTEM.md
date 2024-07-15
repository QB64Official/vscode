# SYSTEM

The SYSTEM statement immediately closes a program and returns control to the operating system.

  

## Syntax

**SYSTEM** [return_code%]
  

## Parameters

* QB64 allows a *code* number to be used after SYSTEM to be read in another program module by the [SHELL](SHELL.md) or [_SHELLHIDE](_SHELLHIDE.md) functions.

  

*Usage:*

* This command should be used to close a program quickly instead of pausing with [END](END.md) or nothing at all.
* A code can be added after the statement to send a value to the [SHELL (function)](SHELL (function).md) "SHELL (function)") or [_SHELLHIDE](_SHELLHIDE.md) function in another module.
* SYSTEM ends the program and closes the window immediately. The last screen image may not be displayed.

  

*QBasic or QuickBASIC:*

* **QBasic BAS files can be run like compiled programs without returning to the IDE when SYSTEM is used to [end](end.md) them!**
* If a program BAS module is run from the IDE, stopped by Ctrl-Break or an error occurs the QB program will exit to the IDE.
* To run a QuickBASIC program without the IDE use the following DOS command line: QB.EXE /L /RUN filename.BAS

  

## See also

* [SHELL (function)](SHELL (function).md) "SHELL (function)")
* [_SHELLHIDE](_SHELLHIDE.md)
* [_EXIT (function)](_EXIT (function).md) "EXIT (function)"), [END](END.md)

  
