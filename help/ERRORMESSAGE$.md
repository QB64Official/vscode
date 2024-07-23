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


## [_ERRORMESSAGE\$](ERRORMESSAGE\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ERRORMESSAGE%24)
---
<blockquote>

### The _ERRORMESSAGE$ function returns a human-readable description of the most recent runtime error, or the description of an arbitrary error code passed to it.

</blockquote>

#### SYNTAX

<blockquote>

`e$ = _ERRORMESSAGE$`

</blockquote>

#### DESCRIPTION

<blockquote>


* Used in program error troubleshooting.
* The message returned is identical to the message shown in the dialog box that appears if your program has no error handler. See [ERROR](ERROR.md) Codes for the full list of error codes and their messages.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using an error handler that ignores any error.
```vb
ON ERROR GOTO Errhandler
' Main module program error simulation code
ERROR 7 ' simulate an Out of Memory Error
PRINT "Error handled...ending program"
SLEEP 4
SYSTEM ' end of program code

Errhandler: ' error handler sub program line label
PRINT "Error"; ERR; "on program file line"; _ERRORLINE
PRINT "Description: "; _ERRORMESSAGE$; "."
BEEP ' warning beep
RESUME NEXT ' moves program to code following the error.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ON](ON.md) [ERROR](ERROR.md)
* [_ERRORLINE](ERRORLINE.md)
* [_INCLERRORLINE](INCLERRORLINE.md) , [_INCLERRORFILE&dollar;](INCLERRORFILE&dollar;.md)
* [ERR](ERR.md) , [ERL](ERL.md)
* [ERROR](ERROR.md)
* [ERROR](ERROR.md) Codes
</blockquote>
