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


## [_HIDE](HIDE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_HIDE)
---
<blockquote>

### The _HIDE action is used to hide the console window opened by a SHELL statement.

</blockquote>

#### SYNTAX

<blockquote>

`SHELL [ _HIDE ] StringCommandLine$`

</blockquote>

#### DESCRIPTION

<blockquote>


* Allows any command line window to be hidden from view without affecting the program.
* [_HIDE](HIDE.md) must be used when sending ("piping") screen information to a file.
* Note: Some commands may not work without adding CMD /C to the start of the command line.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Subprogram that displays long and short filenames using the DIR /X option in SCREEN 12:
```vb
SCREEN 12
LFN
END

SUB LFN
IF LEN(ENVIRON$("OS")) = 0 THEN EXIT SUB ' /X not available Win 9X and ME
SHELL _HIDE "cmd /c dir /x > DOS-DATA.INF" ' load display data to a file
OPEN "DOS-DATA.INF" FOR INPUT AS #1
IF LOF(1) THEN
Header$ = SPACE$(10) + "Short" + SPACE$(16) + "Long" + SPACE$(20) + "Last Modified"
tmp$ = "\   \  \          \      &" ' print using template format
COLOR 14: LOCATE 2, 4: PRINT Header$
DO UNTIL EOF(1)
LINE INPUT #1, line$
IF LEN(line$) AND MID$(line$, 1, 1) <> SPACE$(1) THEN ' ignore other file data
cnt% = cnt% + 1
last$ = MID$(line$, 1, 17): DIR$ = MID$(line$, 23, 3)
IF MID$(line$, 37, 1) <> SPACE$(1) THEN ' found line with short and long name
SHFN$ = MID$(line$, 37, INSTR(37, line$, SPACE$(1)) - 1)
LGFN$ = MID$(line$, 50)
ELSE: SHFN$ = MID$(line$, 50): LGFN$ = "" ' found short name only
END IF
IF cnt% MOD 24 = 0 THEN ' pause every 24 files
COLOR 14: LOCATE 28, 27: PRINT "Press a key for more files!"
DO: _LIMIT 30: LOOP UNTIL INKEY$ <> ""
CLS: COLOR 14: LOCATE 2, 4: PRINT Header$
END IF
COLOR 11: LOCATE (cnt% MOD 24) + 3, 4
PRINT USING tmp$; DIR$; SHFN$; LGFN$
LOCATE (cnt% MOD 24) + 3, 58: PRINT last$
END IF
LOOP
END IF
COLOR 10: LOCATE CSRLIN + 1, 27: PRINT "Total folders and files ="; cnt%
CLOSE #1
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SHELL](SHELL.md) , [_DONTWAIT](DONTWAIT.md)
* FILELIST$ (function) ( [FILES](FILES.md) function, member-contributed)
</blockquote>
