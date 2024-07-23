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


## [_EXIT (function)](EXIT_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_EXIT%20%28function%29)
---
<blockquote>

### The _EXIT function prevents the user from closing a program and indicates if a user has clicked the close button in the window title ( X button) or used CTRL + BREAK.

</blockquote>

#### SYNTAX

<blockquote>

`exitSignal% = _EXIT`

</blockquote>

#### DESCRIPTION

<blockquote>


* Once the [_EXIT](EXIT.md) function is used, the user can no longer manually exit the program until it is ended with [END](END.md) or [SYSTEM](SYSTEM.md) .
* [_EXIT](EXIT.md) returns any exit requests made after the initial call as:

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using an ON TIMER check to read the _EXIT request return values.
```vb
q = _EXIT 'function read prevents any program exit at start of program
ON TIMER(5) GOSUB quit
TIMER ON
PRINT "  The Timer will check for exit request every 5 seconds."
PRINT "Click the X box and/or Ctrl - Break to see the _EXIT return!"
PRINT "                    Any Key Quits"
PRINT
DO: _LIMIT 30
'                    ' simulated program loop
LOOP UNTIL INKEY$ <> ""
END

quit:
q = _EXIT
IF q THEN PRINT q;
SELECT CASE q
CASE 1: PRINT "= X button was clicked"
CASE 2: PRINT "= Ctrl + Break keypress"
CASE 3: PRINT "= Both X and Ctrl + Break!"
END SELECT
RETURN
```
  
<br>



##### Example 2: Removing temporary files before closing a program upon a user's exit request.
```vb
x = _EXIT 'initial function call blocks a user exit
OPEN "t3mpdata.tmp" FOR APPEND AS #1
DO
IF _EXIT THEN CLOSE: KILL "t3mpdata.tmp": _DELAY 1: SYSTEM
LOOP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [SYSTEM](SYSTEM.md)
* [END](END.md)
* [EXIT](EXIT.md)
</blockquote>
