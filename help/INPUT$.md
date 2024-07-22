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

## [INPUT\$](INPUT\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INPUT$)
---
<blockquote>

### The INPUT$ function is used to receive data from the user's keyboard, an open file or an open port.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = INPUT$ ( numberOfBytes% [, fileOrPortNumber])`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Keyboard input is limited to the [INTEGER](INTEGER.md)  numberOfBytes% (characters) designated by program.
*  The keyboard is the default device when a file or port number is omitted. The numberOfBytes% is number of key presses to read.
*  INPUT$ will wait until the number of bytes are read from the keyboard or port. One byte per loop is recommended with ports.
*  [RANDOM](RANDOM.md)  opened file bytes can be up to the [LEN](LEN.md)  = recordLength statement, or 128 if no statement is used.
*  fileOrPortNumber is the number that was used in the [OPEN](OPEN.md) [AS](AS.md)  statement.
*  Returns [STRING](STRING.md)  values including spaces or even extended ASCII characters.
*  Backspace key results in the CHR$ (8) character being added to an entry.
*  Use [LOCATE](LOCATE.md)  , , 1 to view the cursor entry. Turn the cursor off using [LOCATE](LOCATE.md)  , , 0 .
*  Use [_DEST](DEST.md)  [_CONSOLE]( [CONSOLE](CONSOLE.md) .md)  before INPUT$ is used  to receive input from a [CONSOLE](CONSOLE.md)  window.


</blockquote>

#### SEE ALSO

<blockquote>

*  [INPUT](INPUT.md)  , [LINE](LINE.md)  [INPUT](INPUT.md)  (keyboard [INPUT](INPUT.md) )
*  [INPUT](INPUT.md)  (file mode) , [INPUT](INPUT.md)  # , [LINE](LINE.md)  [INPUT](INPUT.md)  # (file [INPUT](INPUT.md) )
*  [OPEN](OPEN.md)  , [LOC](LOC.md)  (file)
*  [LOCATE](LOCATE.md)  (cursor on/off)

</blockquote>
