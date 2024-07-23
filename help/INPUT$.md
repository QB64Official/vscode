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


## [INPUT\$](INPUT\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INPUT%24)
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


* Keyboard input is limited to the [INTEGER](INTEGER.md) numberOfBytes% (characters) designated by program.
* The keyboard is the default device when a file or port number is omitted. The numberOfBytes% is number of key presses to read.
* [INPUT&dollar;](INPUT&dollar;.md) will wait until the number of bytes are read from the keyboard or port. One byte per loop is recommended with ports.
* [RANDOM](RANDOM.md) opened file bytes can be up to the [LEN](LEN.md) = recordLength statement, or 128 if no statement is used.
* fileOrPortNumber is the number that was used in the [OPEN](OPEN.md) [AS](AS.md) statement.
* Returns [STRING](STRING.md) values including spaces or even extended ASCII characters.
* Backspace key results in the [CHR&dollar;](CHR&dollar;.md) (8) character being added to an entry.
* Use [LOCATE](LOCATE.md) , , 1 to view the cursor entry. Turn the cursor off using [LOCATE](LOCATE.md) , , 0 .
* Use [_DEST](DEST.md) [_CONSOLE](CONSOLE.md) before [INPUT&dollar;](INPUT&dollar;.md) is used  to receive input from a console window.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: A keyboard limited length entry can be made with a fixed blinking cursor. Entry must be completed before it can be shown.
```vb
LOCATE 10, 10, 1         'display fixed cursor at location
year$ = INPUT$(4)        'waits until all 4 digits are entered
PRINT year$              'display the text entry
```
  
<br>



##### Example 2: Reading bytes from a text file for an 80 wide screen mode.
```vb
LOCATE 5, 5, 1                    'locate and display cursor
OPEN "Diary.txt" FOR INPUT AS #1  'open existing text file
text$ = INPUT$(70, 1)
LOCATE 5, 6, 0: PRINT text$       'print text and turn cursor off
```
  
<br>



##### Example 3: Getting the entire text file data as one string value.
```vb
OPEN "Diary.txt FOR BINARY AS #1  'open an existing file up to 32767 bytes
IF LOF(1) <= 32767 THEN Text$ = INPUT$(LOF(1), 1)
CLOSE #1
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [INPUT](INPUT.md) , [LINE](LINE.md) [INPUT](INPUT.md) (keyboard input)
* [INPUT](INPUT.md) (file mode) , [INPUT](INPUT.md) # , [LINE](LINE.md) [INPUT](INPUT.md) # (file input)
* [OPEN](OPEN.md) , [LOC](LOC.md) (file)
* [LOCATE](LOCATE.md) (cursor on/off)
</blockquote>
