<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [SHELL_(function)](SHELL_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SHELL (function))
---
<blockquote>

### The SHELL function displays the console and returns the INTEGER code value sent when the external program exits.

</blockquote>

#### SYNTAX

<blockquote>

`return_code = SHELL( DOScommand$ )`

</blockquote>

#### PARAMETERS

<blockquote>

*  The literal or variable [STRING](STRING.md)  command parameter can be any valid external command or call to another program.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Shelling to another QB64 program will return the exit code when one is set in the  program that is run.
```vb
'DesktopSize.BAS  Compile in Windows with QB64 first

CONST SM_CXSCREEN = 0
CONST SM_CYSCREEN = 1

DECLARE LIBRARY
FUNCTION GetSystemMetrics& (BYVAL n AS LONG)
END DECLARE

PRINT trimstr$(GetSystemMetrics(SM_CXSCREEN)); "X"; trimstr$(GetSystemMetrics(SM_CYSCREEN))

s& = _SCREENIMAGE
PRINT _WIDTH(s&); "X"; _HEIGHT(s&)

END 3 '<<<<<< add a code to return after END or SYSTEM in any program

FUNCTION trimstr$ (whatever)
trimstr = LTRIM$(RTRIM$(STR$(whatever)))
END FUNCTION
```
  
<br>

##### Example: Shelling to another QB64 program will return the exit code when one is set in the  program that is run.
```vb
returncode% = SHELL("DesktopSize") 'replace call with name of any QB64 program EXE

PRINT returncode% 'prints code sent by called program after it is closed

END
```
  
<br>

##### Example: Shelling to another QB64 program will return the exit code when one is set in the  program that is run.
```vb
3
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_SHELLHIDE](SHELLHIDE.md) 
*  [SHELL](SHELL.md)  , [_HIDE](HIDE.md) 
*  [_CONSOLE](CONSOLE.md)  , $CONSOLE
*  [SYSTEM](SYSTEM.md)  , [END](END.md) 

</blockquote>
