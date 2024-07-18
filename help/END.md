## END
---

### The END statement terminates a program without an immediate exit or ends a procedure or statement block.

#### SYNTAX

`END [ returnCode% ]`

#### DESCRIPTION
* In QB64 , [END](./END.md) can be followed by a code that can be read by another module using the _SHELL or [_SHELLHIDE](./_SHELLHIDE.md) function (known as errorlevel )
* When [END](./END.md) is used to end a program, there is a pause and the message "Press any key to continue..." is displayed at the bottom of the program's window.
* If the program does not use [END](./END.md) or [SYSTEM](./SYSTEM.md) , the program will still end with a pause and display "Press any key to continue...".
* In QB64 , [SYSTEM](./SYSTEM.md) will end the program immediately and close the window.
* The QB64 [_EXIT](./_EXIT.md) (function) can block a user's Ctrl + Break key presses and clicks on the window's close button (X button) until the program is ready to close.


#### EXAMPLES
##### Example: In QB64 you won't return to the IDE unless you are using it to run or edit the program module.
```vb
PRINT "Hello world!"
END
PRINT "Hello no one!"
```
  
##### Returns:
```vb
Hello world!





Press any key to continue...
```
  


#### SEE ALSO
* [SYSTEM](./SYSTEM.md) (immediate exit)
* [SHELL](./SHELL.md) (function) , [_SHELLHIDE](./_SHELLHIDE.md)
* [EXIT](./EXIT.md) (statement), [_EXIT](./_EXIT.md) (function)
