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


## [STRIG(n)](STRIG(n).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STRIG%28n%29)
---
<blockquote>

### The STRIG(n) statement controls event trapping for a particular joystick or game pad device button.

</blockquote>

#### DESCRIPTION

<blockquote>


* button function specifies the device's button function. Even functions record events while odd ones read the actual presses.
* QB64 can designate a button function and controller device number from 0 to 256.
* When no parameters are used QB64 enables, disables or suspends the reading of ALL button events.
* [ON](ON.md) specifies that event trapping is turned on for the specified button.
* [OFF](OFF.md) specifies that event trapping is turned off for the specified button.
* If [STOP](STOP.md) is specified, event trapping is suspended for the specified button. Further joystick button events are remembered and trapped, in order, after the next STRIG(n) [ON](ON.md) statement is used.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example:
```vb
ON STRIG(0) GOSUB 10
STRIG(0)ON

DO
PRINT ".";
_LIMIT 30
LOOP UNTIL INKEY$ <> ""
END

10
a$ = "[STRIG 0 EVENT]"
FOR x = 1 TO LEN(a$)
PRINT MID$(a$, x, 1);
_DELAY 0.02
NEXT
RETURN
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ON](ON.md) STRIG(n)
* [STRIG](STRIG.md) , [STICK](STICK.md)
* Single and Dual Stick Controllers
</blockquote>
