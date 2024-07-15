# END

The END statement terminates a program without an immediate exit or ends a procedure or statement block.

  

## Syntax

END [*returnCode%*]
END [IF](IF.md)
END [TYPE](TYPE.md)
END [SELECT](SELECT.md)
END [SUB](SUB.md)
END [FUNCTION](FUNCTION.md)
END [DECLARE](DECLARE.md)
  

## Description

* In **QB64**, END can be followed by a code that can be read by another module using the [_SHELL](_SHELL.md) "SHELL (function)") or [_SHELLHIDE](_SHELLHIDE.md) function (known as [**errorlevel**](**errorlevel**.md))
* When END is used to end a program, there is a pause and the message "Press any key to continue..." is displayed at the bottom of the program's window.
* If the program does not use END or [SYSTEM](SYSTEM.md), the program will still end with a pause and display "Press any key to continue...".
* In **QB64**, [SYSTEM](SYSTEM.md) will end the program immediately and close the window.
* The **QB64** [_EXIT (function)](_EXIT (function).md) "EXIT (function)") can block a user's Ctrl + Break key presses and clicks on the window's close button (X button) until the program is ready to close.

  

## Examples

*Example:* In QB64 you won't return to the IDE unless you are using it to run or edit the program module.

``` [PRINT](PRINT.md) "Hello world!" END [PRINT](PRINT.md) "Hello no one!"  
```

*Returns:*

``` Hello world!      Press any key to continue...  
```

*Explanation:*"Hello no one!" isn't returned because the program ended with the END statement no matter what is after that.
The message "Press any key to continue..." is displayed after the program ends, both in QBasic and in **QB64**.
  

## See also

* [SYSTEM](SYSTEM.md) (immediate exit)
* [SHELL (function)](SHELL (function).md) "SHELL (function)"), [_SHELLHIDE](_SHELLHIDE.md)
* [EXIT](EXIT.md) (statement), [_EXIT (function)](_EXIT (function).md) "EXIT (function)")

  
