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


## [LINE INPUT](LINE_INPUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LINE%20INPUT)
---
<blockquote>

### The LINE INPUT statement requests a STRING keyboard entry from a program user.

</blockquote>

#### SYNTAX

<blockquote>

`LINE INPUT [;] "[text prompt or question]"{,|;} stringVariable$`

</blockquote>

#### PARAMETERS

<blockquote>


* A semicolon immediately after [LINE](LINE.md) [INPUT](INPUT.md) stops the cursor after the entry and prevents screen roll on the lowest two screen rows.
* text prompt or question is optional, but quotes are necessary unless just a semicolon is used before the stringVariable$ .
* Requires only one string variable to hold the entire text entry.
</blockquote>

#### DESCRIPTION

<blockquote>


* Cannot use numerical type variables or comma separated variable lists for multiple entries.
* Allows commas and quotation marks in the user input, unlike [INPUT](INPUT.md) where commas denote extra input values and quotes delimit strings.
* The statement halts the program until an entry is made. Pressing Enter ends the entry and code execution resumes.
* [LINE](LINE.md) [INPUT](INPUT.md) does not trim off leading or trailing spaces in the string entry like [INPUT](INPUT.md) string returns.
* Use [VAL](VAL.md) to convert string numbers and &O (octal), &H (hexadecimal) or &B (binary) prefixed entries into numerical values.
* Use [_DEST](DEST.md) [_CONSOLE](CONSOLE.md) before [LINE](LINE.md) [INPUT](INPUT.md) statements to receive input from a console window.
* Note: QB64 will not remove CHR$(0) from the end of [LINE](LINE.md) [INPUT](INPUT.md) string return values like QBasic did.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Preventing screen roll after an input entry on the bottom 2 screen rows.
```vb
SCREEN 12

COLOR 14: LOCATE 29, 2 '          place dursor at beginning of prompt liine
PRINT "Enter a name to search for... "; 'print prompt on screen
COLOR 15: LINE INPUT ; "", name$ '       get search name from user
LOCATE 29, 2: PRINT SPC(78); '       erase previous prompt
n$ = UCASE$(name$) '                 convert search name to upper case
COLOR 14'                        change foreground color to yellow
LOCATE 29, 2: PRINT "Searching..."; 'print message
SLEEP
```
  
<br>

```vb
Enter a name to search for... █
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [INPUT](INPUT.md) (file mode) , [INPUT](INPUT.md) # , [LINE](LINE.md) [INPUT](INPUT.md) #
* [INPUT](INPUT.md) , [INPUT&dollar;](INPUT&dollar;.md) (keyboard input)
* [COLOR](COLOR.md) , [LOCATE](LOCATE.md)
* [INKEY&dollar;](INKEY&dollar;.md)
* [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md)
</blockquote>
