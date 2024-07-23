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


## [ERR](ERR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ERR)
---
<blockquote>

### The ERR function returns the last QBasic error code number.

</blockquote>

#### SYNTAX

<blockquote>

`errorNum% = ERR`

</blockquote>

#### DESCRIPTION

<blockquote>


* If there is no error, the function returns 0
* Can be used in an error handling routine to report the last error code number.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Simulating an error to test a program error handler that looks for a "Subscript out of range" error.
```vb
ON ERROR GOTO handler

IF x = 0 THEN ERROR 111  'simulate an error code that does not exist
x = x + 1
IF x THEN ERROR 9        'simulate array boundary being exceeded

END

handler:
PRINT ERR, _ERRORLINE
BEEP
IF ERR = 9 THEN
PRINT "The program has encountered an error and needs to close! Press a key!"
K$ = INPUT$(1)
SYSTEM
END IF
RESUME NEXT               'RESUME can only be used in error handlers
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ON](ON.md) [ERROR](ERROR.md) , [RESUME](RESUME.md)
* [ERL](ERL.md)
* [_ERRORLINE](ERRORLINE.md) , [_INCLERRORLINE](INCLERRORLINE.md) , [_INCLERRORFILE&dollar;](INCLERRORFILE&dollar;.md)
* [ERROR](ERROR.md)
* [ERROR](ERROR.md) Codes
</blockquote>
