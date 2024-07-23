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


## [END](END.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/END)
---
<blockquote>

### The END statement terminates a program without an immediate exit or ends a procedure or statement block.

</blockquote>

#### SYNTAX

<blockquote>

`END [ returnCode% ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* In QB64 , [END](END.md) can be followed by a code that can be read by another module using the _SHELL or [_SHELLHIDE](SHELLHIDE.md) function (known as errorlevel )
* When [END](END.md) is used to end a program, there is a pause and the message "Press any key to continue..." is displayed at the bottom of the program's window.
* If the program does not use [END](END.md) or [SYSTEM](SYSTEM.md) , the program will still end with a pause and display "Press any key to continue...".
* In QB64 , [SYSTEM](SYSTEM.md) will end the program immediately and close the window.
* The QB64 [_EXIT](EXIT.md) (function) can block a user's Ctrl + Break key presses and clicks on the window's close button (X button) until the program is ready to close.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: In QB64 you won't return to the IDE unless you are using it to run or edit the program module.
```vb
PRINT "Hello world!"
END
PRINT "Hello no one!"
```
  
<br>

```vb
Hello world!





Press any key to continue...
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SYSTEM](SYSTEM.md) (immediate exit)
* [SHELL](SHELL.md) (function) , [_SHELLHIDE](SHELLHIDE.md)
* [EXIT](EXIT.md) (statement), [_EXIT](EXIT.md) (function)
</blockquote>
