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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [SHELL (function)](SHELL_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SHELL%20%28function%29)
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


* The literal or variable [STRING](STRING.md) command parameter can be any valid external command or call to another program.
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

```vb
returncode% = SHELL("DesktopSize") 'replace call with name of any QB64 program EXE

PRINT returncode% 'prints code sent by called program after it is closed

END
```
  
<br>

```vb
3
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SHELLHIDE](SHELLHIDE.md)
* [SHELL](SHELL.md) , [_HIDE](HIDE.md)
* [_CONSOLE](CONSOLE.md) , [&dollar;CONSOLE](&dollar;CONSOLE.md)
* [SYSTEM](SYSTEM.md) , [END](END.md)
</blockquote>
