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

## [FILELIST\$](FILELIST\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/FILELIST$)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
_TITLE "Demo of FILELIST$ Function by Ted Weissgerber 2010"
dst& = _NEWIMAGE(800, 600, 32) 'for console bitmap
SCREEN dst&

PAINT (799, 599), _RGB(180, 180, 180)
LINE (7, 15)-(648, 496), _RGB(0, 0, 80), BF

LOCATE 33, 10: PRINT "Do you want file display in a new window? (Y/N)"
DO: SLEEP: yesno$ = UCASE$(INKEY$): LOOP UNTIL yesno$ <> ""
IF yesno$ = "Y" THEN x% = 0: y% = 0 ELSE x% = 8: y% = 16 'set parameters

LOCATE 33, 10: INPUT "Enter a File Type extension(*.BMP, *.TXT, etc): ", spec$
spec$ = UCASE$(spec$)
IF LEN(spec$) = 0 THEN spec$ = "*.BMP"
'IF INSTR(spec$, "*.") = 0 THEN spec$ = "*." + spec$

'<<<<<<< If x% and y% parameters are 0, the display is in separate window.>>>>>>
filename$ = FILELIST$(spec$, x%, y%) '<<<<<<<< added display position parameters


LOCATE 35, 10: PRINT filename$, LFN$
SLEEP
'------------------------------------- END DEMO CODE -------------------------------
```
  
<br>```vb
FUNCTION FILELIST$ (Spec$, xpos%, ypos%)
SHARED Path$, LFN$ 'values also accessable by program
REDIM LGFN$(25), SHFN$(25), Last$(25), DIR$(25), Paths$(25) '<<<< $DYNAMIC only
IF LEN(ENVIRON$("OS")) = 0 THEN EXIT FUNCTION 'DIR X cannot be used on Win 9X
f% = FREEFILE
IF xpos% + ypos% = 0 THEN '****************** Root path TITLE in separate window only
SHELL _HIDE "CD > D0S-DATA.INF"
OPEN "D0S-DATA.INF" FOR INPUT AS #f%
LINE INPUT #f%, current$
CLOSE #f%
END IF ' ******************************************** END TITLE(see _TITLE below)
Spec$ = UCASE$(LTRIM$(RTRIM$(Spec$)))
IF INSTR(Spec$, "/A:D") OR INSTR(Spec$, "/O:G") THEN
DL$ = "DIR": BS$ = "\" 'directory searches only
ELSE: DL$ = SPACE$(3): BS$ = ""
END IF
mode& = _COPYIMAGE(0) 'save previous screen value to restore if files displayed.
' Get Specific file information if available
SHELL _HIDE "cmd /c dir " + Spec$ + " /X > D0S-DATA.INF" 'get data
Head$ = "      Short Name          Long Name                     Last Modified     "
tmp$ = " \ \  \          \   \                              \ \                  \"
OPEN "D0S-DATA.INF" FOR INPUT AS #f% 'read the data file
DO UNTIL EOF(f%)
LINE INPUT #f%, line$
IF INSTR(line$, ":\") THEN
Path$ = MID$(line$, INSTR(line$, ":\") - 1)
IF RIGHT$(Path$, 1) <> "\" THEN Path$ = Path$ + "\"
setcode% = 0: filecode% = 0
END IF
IF LEN(line$) > 25 AND MID$(line$, 1, 1) <> " " THEN 'don't read other info
IF format% = 0 THEN
IF MID$(line$, 20, 1) = "M" OR INSTR(line$, "<") = 25 THEN
Sst% = 40: Lst% = 53: Dst% = 26: format% = 1 ' XP
ELSE: Sst% = 37: Lst% = 50: Dst% = 23: format% = 2 'VISTA
END IF
END IF
IF LEN(line$) >= Lst% THEN filecode% = ASC(UCASE$(MID$(line$, Lst%, 1))) ELSE filecode% = 0
D1R$ = MID$(line$, Dst%, 3) 'returns directories only with Spec$ = "/A:D" or "/O:G"
IF D1R$ <> "DIR" THEN D1R$ = SPACE$(3) 'change if anything else
IF D1R$ = DL$ AND filecode% >= setcode% THEN
cnt% = cnt% + 1
DIR$(cnt%) = D1R$: Paths$(cnt%) = Path$
Last$(cnt%) = MID$(line$, 1, 20)
IF MID$(line$, Sst%, 1) <> SPACE$(1) THEN
SHFN$(cnt%) = MID$(line$, Sst%, INSTR(Sst%, line$, " ") - Sst%)
LGFN$(cnt%) = MID$(line$, Lst%)
ELSE: SHFN$(cnt%) = MID$(line$, Lst%): LGFN$(cnt%) = ""
END IF
IF LEN(Spec$) AND (Spec$ = UCASE$(SHFN$(cnt%)) OR Spec$ = UCASE$(LGFN$(cnt%))) THEN
Spec$ = SHFN$(cnt%) + BS$: FILELIST$ = Spec$: LFN$ = LGFN$(cnt%) + BS$
noshow = -1: GOSUB KILLdata ' verifies file exist query (no display)
END IF
IF page% > 0 THEN ' pages after first
IF cnt% = 1 THEN GOSUB NewScreen
COLOR 11: LOCATE , 3: PRINT USING tmp$; DIR$(cnt%); SHFN$(cnt%); LGFN$(cnt%); Last$(cnt%)
IF DIR$(cnt%) = "DIR" AND LEFT$(SHFN$(cnt%), 1) = "." THEN SHFN$(cnt%) = "": LGFN$(cnt%) = ""
ELSE 'first page = 0
IF cnt% = 2 THEN 'only display to screen if 2 or more files are found
FList& = _NEWIMAGE(640, 480, 256)
IF xpos% + ypos% > 0 THEN ' user wants display on program screen
Show& = _NEWIMAGE(640, 480, 256) '<<<<<< ONSCREEN program displays only
_DEST FList&
ELSE: SCREEN FList& ' <<<<<<<<< Separate Window
_TITLE current$ '<<<<<<<<<<<<<<<<<<<<<<<<<<< TITLE optional
END IF
GOSUB NewScreen '<<<< update function's screen with Putimage(see notes)
COLOR 11: LOCATE , 3: PRINT USING tmp$; DIR$(1); SHFN$(1); LGFN$(1); Last$(1)
IF DIR$(1) = "DIR" AND LEFT$(SHFN$(1), 1) = "." THEN SHFN$(1) = "": LGFN$(1) = ""
END IF
IF cnt% > 1 THEN
COLOR 11: LOCATE , 3: PRINT USING tmp$; DIR$(cnt%); SHFN$(cnt%); LGFN$(cnt%); Last$(cnt%)
IF DIR$(cnt%) = "DIR" AND LEFT$(SHFN$(cnt%), 1) = "." THEN SHFN$(cnt%) = "": LGFN$(cnt%) = ""
END IF
END IF 'page%
IF cnt% MOD 25 = 0 THEN 'each page holds 25 file names
COLOR 14: LOCATE 28, 24: PRINT "Select file or click here for next.";
GOSUB pickfile
page% = page% + 1: cnt% = 0
REDIM LGFN$(25), SHFN$(25), Last$(25), DIR$(25), Paths$(25) '<<<< $DYNAMIC only
END IF 'mod  25
END IF 'DIR = DL$
END IF 'len line$ > 25
LOOP
CLOSE #f%
last = 1: total% = cnt% + (page% * 25)
IF total% = 0 THEN FILELIST$ = "": Spec$ = "": LFN$ = "": noshow = -1: GOSUB KILLdata: 'no files(no display)
IF total% = 1 THEN   'one file(no display)
Spec$ = SHFN$(1) + BS$: FILELIST$ = Spec$: LFN$ = LGFN$(1) + BS$: noshow = -1: GOSUB KILLdata
END IF
IF DL$ = SPACE$(3) THEN
COLOR 10: LOCATE 28, 65: PRINT total%; "Files"
ELSE: COLOR 10: LOCATE 28, 65: PRINT total%; "Folders"
END IF
COLOR 14: LOCATE 28, 24: PRINT "Select file or click here to Exit. ";
pickfile:
_DEST FList&
ShowPath$ = RIGHT$(Path$, 78)
COLOR 15: LOCATE 29, 41 - (LEN(ShowPath$) \ 2): PRINT ShowPath$;
GOSUB NewDisplay
DO: Key$ = UCASE$(INKEY$): _LIMIT 30
DO WHILE _MOUSEINPUT
Tcol% = ((_MOUSEX - xpos%) \ 8) + 1 'mouse column with Putimage offset
Trow% = ((_MOUSEY - ypos%) \ 16) + 1 'mouse row with offset
Pick = _MOUSEBUTTON(1) ' get left button selection click
LOOP
IF Trow% > 2 AND Trow% < cnt% + 3 AND Tcol% > 0 AND Tcol% < 80 THEN 'when mouse in area
R% = Trow% - 2
IF P% = 0 OR P% > cnt% + 3 THEN P% = R%
IF P% = R% THEN
COLOR 15: LOCATE R% + 2, 3: PRINT USING tmp$; DIR$(R%); SHFN$(R%); LGFN$(R%); Last$(R%)
ELSE
COLOR 11: LOCATE P% + 2, 3: PRINT USING tmp$; DIR$(P%); SHFN$(P%); LGFN$(P%); Last$(P%)
END IF
GOSUB NewDisplay
P% = R%
IF Pick THEN
Spec$ = SHFN$(R%)
IF LEN(Spec$) THEN
COLOR 13: LOCATE R% + 2, 3: PRINT USING tmp$; DIR$(R%); SHFN$(R%); LGFN$(R%); Last$(R%)
GOSUB NewDisplay
Spec$ = Spec$ + BS$: FILELIST$ = Spec$: Path$ = Paths$(R%)
IF LEN(LGFN$(R%)) THEN LFN$ = LGFN$(R%) + BS$ ELSE LFN$ = ""
_DELAY 1.5: CLS: SCREEN mode&: GOSUB KILLdata 'exit if user selection
END IF
END IF 'len spec
END IF 'pick
IF LEN(Key$) THEN usercode% = ASC(Key$) ELSE usercode% = 0
IF usercode% > setcode% THEN setcode% = usercode% 'user can press letter to jump to
IF Pick AND Trow% > 27 THEN EXIT DO
LOOP UNTIL LEN(Key$)
_DELAY .4 'adjust delay for page scroll speed
DO: Key$ = INKEY$: LOOP UNTIL Key$ = ""
IF last = 0 THEN RETURN 'exit if file no more data
FILELIST$ = "": Spec$ = "": LFN$ = ""
CLS: SCREEN mode& 'resets program screen to previous condition
KILLdata:
CLOSE #f%: KILL "D0S-DATA.INF" 'kill D0S-DATA.INF file and exit
IF FList& < -1 THEN _FREEIMAGE FList&
IF Show& < -1 THEN _FREEIMAGE Show&
IF noshow = -1 AND mode& < -1 THEN _FREEIMAGE mode&
_AUTODISPLAY 'reset default settings
EXIT FUNCTION
RETURN
NewScreen: 'clear screen and set display format
LINE (0, 0)-(639, 499), 0, BF
COLOR 14: LOCATE 2, 3: PRINT Head$
LINE (4, 4)-(636, 476), 13, B: LINE (5, 5)-(635, 475), 13, B
GOSUB NewDisplay
RETURN
NewDisplay: 'show program or window displays
IF xpos% + ypos% > 0 THEN
_PUTIMAGE , FList&, Show&
_DEST 0: _PUTIMAGE (xpos%, ypos%), Show&: _DISPLAY
_DEST FList&
ELSE: _DISPLAY
END IF
RETURN
END FUNCTION
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  _OPENFILEDIALOG$ , [_FILES\$]( [FILES](FILES.md) \$.md) 
*  Return to original FILELIST$ function

</blockquote>
