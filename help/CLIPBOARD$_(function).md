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


## [_CLIPBOARD\$ (function)](CLIPBOARD\$_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLIPBOARD%24%20%28function%29)
---
<blockquote>

### The _CLIPBOARD$ function returns the current Operating System's clipboard contents as a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`result$ = _CLIPBOARD$`

</blockquote>

#### DESCRIPTION

<blockquote>


* Text returned can contain the entire contents of a copied file or web page or text from a previous [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) statement.
* The string returned can also contain formatting like CRLF ( [CHR&dollar;](CHR&dollar;.md) (13) + [CHR&dollar;](CHR&dollar;.md) (10)) end of line characters.
* The clipboard can be used to copy, paste and communicate between running programs.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'=================
'=== Program 1 ===
'=================

PRINT "Start Program2 to read your text entries! Empty entry quits!"
_CLIPBOARD$ = "Entry program started!" 'set clipboard initially

DO
LINE INPUT "Enter some text to send to other program: ", text$
IF text$ = "" THEN EXIT DO
_CLIPBOARD$ = text$
LOOP

SYSTEM
```
  
<br>

```vb
'=================
'=== Program 2 ===
'=================

PRINT "Enter text in Program1 and this program will read it. Esc key quits!"

DO: _LIMIT 100
text$ = CLIPBOARD$ 'function returns clipboard contents
IF LEN(text$) THEN
PRINT text$
_CLIPBOARD$ = "" 'clear clipboard after a read
END IF
LOOP UNTIL INKEY$ = CHR$(27)

END
```
  
<br>


<div class="explanation">Explanation: Compile and run both programs at once to see the interaction. You could also run them on different paths.</div>

```vb
'"ClippyBoard" program uses GetKeyState Win API to monitor a specific key combination.
'This demo will maximize the window and focus on program when Shift+A is pressed.

DECLARE DYNAMIC LIBRARY "user32"
FUNCTION FindWindowA%& (BYVAL ClassName AS _OFFSET, WindowName$) 'find process handle by title
FUNCTION GetKeyState% (BYVAL nVirtKey AS LONG) 'Windows virtual key presses
FUNCTION ShowWindow& (BYVAL hwnd AS _OFFSET, BYVAL nCmdShow AS LONG) 'maximize process
FUNCTION GetForegroundWindow%& 'find currently focused process handle
FUNCTION SetForegroundWindow& (BYVAL hwnd AS _OFFSET) 'set foreground window process(focus)
END DECLARE

title$ = "Clippy Clipboard (Ctrl+Shift)" 'title of program window
_TITLE title$ 'set program title
hwnd%& = FindWindowA(0, title$ + CHR$(0)) 'find this program's process handle

SCREEN 13
_SCREENMOVE _MIDDLE

COLOR 10: PRINT
PRINT " Press Ctrl+Shift to see clipboard menu."

_DELAY 4
x& = ShowWindow&(hwnd%&, 2) 'minimize

DO: _LIMIT 30 'save CPU usage while waiting for key press

IF GetKeyState(16) < 0 AND GetKeyState(17) < 0 THEN '<==== Shift+A
FGwin%& = GetForegroundWindow%& 'get current process in focus
y& = ShowWindow&(hwnd%&, 1) 'maximize minimized program

IF FGwin%& <> hwnd%& THEN z& = SetForegroundWindow&(hwnd%&) 'set focus when necessary
_DELAY 1
GetKey
x& = ShowWindow&(hwnd%&, 2) 'minimize after letter key entry
COLOR 10: PRINT
PRINT " Press Ctrl+Shift to see clipboard menu."
END IF
LOOP


SUB GetKey
CLS
COLOR 12: PRINT: PRINT _CLIPBOARD$
DO: LOOP UNTIL INKEY$ = ""
_DELAY 1
CLS
COLOR 11: PRINT "Select a letter clipboard option:"
PRINT
PRINT "A = Address"
PRINT "C = Cell phone"
PRINT "E = Email"
PRINT "F = First Name"
PRINT "H = Home phone"
PRINT "L = Last Name"
PRINT "N = Name"
PRINT "M = MAC address"
PRINT "P = Password"
PRINT "W = Work name"
PRINT "X = QUIT!"
PRINT "Z = Zip code"
COLOR 14: PRINT
PRINT "Another letter will skip or X = EXIT!"

K$ = UCASE$(INPUT$(1))

SELECT CASE K$ 'The following text should be your personal user info:
CASE "A": _CLIPBOARD$ = "my address"
CASE "C": _CLIPBOARD$ = "cell number"
CASE "E": _CLIPBOARD$ = "myemail"
CASE "F": _CLIPBOARD$ = "formal name"
CASE "H": _CLIPBOARD$ = "home number"
CASE "L": _CLIPBOARD$ = "lastname"
CASE "M": _CLIPBOARD$ = "modempassword"
CASE "N": _CLIPBOARD$ = "name"
CASE "P": _CLIPBOARD$ = "password"
CASE "X": END
CASE "Z": _CLIPBOARD$ = "zipcode"
END SELECT
CLS
PRINT
PRINT
COLOR 14: PRINT _CLIPBOARD$
BEEP
_DELAY 2
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) (statement)
* [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) (function) , [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) (statement)
</blockquote>
