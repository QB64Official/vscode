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

## [LINE_INPUT](LINE_INPUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LINE INPUT)
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

*  A semicolon immediately after [LINE](LINE.md)  [INPUT](INPUT.md)  stops the cursor after the entry and prevents screen roll on the lowest two screen rows.
*  text prompt or question is optional, but quotes are necessary unless just a semicolon is used before the stringVariable$ .
*  Requires only one string variable to hold the entire text entry.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Cannot use numerical type variables or comma separated variable lists for multiple entries.
*  Allows commas and quotation marks in the user [INPUT](INPUT.md) , unlike [INPUT](INPUT.md)  where commas denote extra [INPUT](INPUT.md)  values and quotes delimit strings.
*  The statement halts the program until an entry is made. Pressing Enter ends the entry and code execution resumes.
*  [LINE](LINE.md)  [INPUT](INPUT.md)  does not trim off leading or trailing spaces in the string entry like [INPUT](INPUT.md)  string returns.
*  Use [VAL](VAL.md)  to convert string numbers and &O (octal), &H (hexadecimal) or &B (binary) prefixed entries into numerical values.
*  Use [_DEST](DEST.md)  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md)  before [LINE](LINE.md)  [INPUT](INPUT.md)  statements to receive [INPUT](INPUT.md)  from a [CONSOLE](CONSOLE.md)  window.
*  Note: QB64 will not remove CHR$(0) from the end of [LINE](LINE.md)  [INPUT](INPUT.md)  string return values like QBasic did.


</blockquote>

#### SEE ALSO

<blockquote>

*  [INPUT](INPUT.md)  (file mode) , [INPUT](INPUT.md)  # , [LINE](LINE.md)  [INPUT](INPUT.md)  #
*  INPUT , INPUT$ (keyboard input)
*  [COLOR](COLOR.md)  , [LOCATE](LOCATE.md) 
*  [INKEY\$](INKEY\$.md) 
*  [_KEYHIT](KEYHIT.md)  , [_KEYDOWN](KEYDOWN.md) 

</blockquote>
