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

## [INKEY\$](INKEY\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INKEY$)
---
<blockquote>

### The INKEY$ function returns user input as ASCII STRING character(s) from the keyboard buffer.

</blockquote>

#### SYNTAX

<blockquote>

`keypress$ = INKEY$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns ASCII character string values in upper or lower cases. See: UCASE$ and [LCASE\$](LCASE\$.md) 
*  Returns "" if no key has been pressed since the last keyboard read.
*  Some control keys cannot be read by INKEY$ or will return 2 byte ASCII codes.
*  INKEY$ can also be used to clear a [SLEEP](SLEEP.md) [KEY](KEY.md)  press or the keyboard buffer in a loop.
*  Assign the INKEY$ return to a string variable to save the [KEY](KEY.md)  entry.
*  [LOCATE](LOCATE.md)  , , 1 displays the INKEY$ cursor. Use [LOCATE](LOCATE.md)  , , 0 to turn it off.
*  To receive input from a $CONSOLE window, use [_CINP](CINP.md)  .
*  Returns can be evaluated [AS](AS.md)  certain ASCII characters or codes.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_KEYHIT](KEYHIT.md)  , [_KEYDOWN](KEYDOWN.md)  , [_MAPUNICODE](MAPUNICODE.md) 
*  [_KEYCLEAR](KEYCLEAR.md) 
*  [INPUT](INPUT.md)  , [LINE](LINE.md)  [INPUT](INPUT.md) 
*  INPUT$ , [INP](INP.md) 
*  CHR$ , ASCII
*  [ASC](ASC.md)  (function) , Scancodes (keyboard)
*  Windows hot keys

</blockquote>
