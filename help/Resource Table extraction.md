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

## [Resource_Table_extraction](Resource_Table_extraction.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Resource Table extraction)
---
<blockquote>

### The following information was supplied by Michael Calkins in a member's request to find a way to extract icons from EXE files. There is no warranty implied and users should use the information and code at their own risk! We are not responsible for any damages!

</blockquote>

#### SYNTAX

<blockquote>

`I've made a few minor changes to the program. It will show you the first 400 bytes when you choose to export the data. Also, by moving the initialization of sc and so outside the loop, you will now come back to the correct entry upon ascending a level. I experimented with code to PSET the data, but it is commented out.`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DIM nam AS STRING * 8
DIM fil AS STRING
DIM k AS STRING
DIM dw AS _UNSIGNED LONG
DIM ul AS _UNSIGNED LONG
DIM coff AS _UNSIGNED LONG
DIM SectionTable AS _UNSIGNED LONG
DIM ImageBase AS _UNSIGNED LONG
DIM rsrc AS _UNSIGNED LONG
DIM pe32plus AS LONG
DIM w AS _UNSIGNED INTEGER
DIM SizeOfOptionalHeader AS _UNSIGNED INTEGER
DIM SHARED NumberOfSections AS _UNSIGNED INTEGER
DIM NumberOfRvaAndSizes AS _UNSIGNED LONG

CLS
LINE INPUT "Name of the PE image to open? "; fil
IF _FILEEXISTS(fil) = 0 THEN PRINT "File not found.": END
OPEN fil FOR BINARY ACCESS READ AS 1
GET 1, 1 + 0, w
IF w <> &H5A4D THEN PRINT "No MZ signature.": END
GET 1, 1 + &H3C, dw
coff = dw + 4
GET 1, dw + 1, dw
IF dw <> &H4550& THEN PRINT "No PE signature.": END
GET 1, 1 + coff + 2, NumberOfSections
IF NumberOfSections = 0 THEN PRINT "No sections.": END
PRINT "NumberOfSections:"; NumberOfSections
DIM SHARED secsva(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
DIM SHARED secsfp(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
GET 1, 1 + coff + 16, SizeOfOptionalHeader
IF SizeOfOptionalHeader = 0 THEN PRINT "No optional header.": END
PRINT "SizeOfOptionalHeader:", SPACE$(4); word$(SizeOfOptionalHeader)
GET 1, 1 + coff + 20, w
SELECT CASE w
CASE &H10B: pe32plus = 0: PRINT "PE32"
CASE &H20B: pe32plus = -1: PRINT "PE32+"
CASE ELSE: PRINT "Unknown Magic.": END
END SELECT
GET 1, 1 + coff + 20 + 28 + (-4 AND pe32plus), ImageBase
PRINT "ImageBase:", "", dword$(ImageBase)
GET 1, 1 + coff + 20 + 92 + (16 AND pe32plus), NumberOfRvaAndSizes
IF NumberOfRvaAndSizes < 3 THEN PRINT "No resource table.": END
PRINT "NumberOfRvaAndSizes:"; NumberOfRvaAndSizes
GET 1, 1 + coff + 20 + 112 + (16 AND pe32plus), rsrc
PRINT "Rva of resource table:", dword$(rsrc)
GET 1, 1 + coff + 20 + 4 + 112 + (16 AND pe32plus), dw
PRINT "Size of resource table:", dword$(dw)
IF (rsrc = 0) OR (dw = 0) THEN PRINT "No resource table.": END
SectionTable = coff + 20 + SizeOfOptionalHeader
PRINT "section", "va", "file ptr"
FOR w = 0 TO NumberOfSections - 1
GET 1, 1 + SectionTable + (40 * w), nam
GET 1, 1 + SectionTable + 12 + (40 * w), ul
GET 1, 1 + SectionTable + 20 + (40 * w), dw
PRINT nam, dword$(ul), dword$(dw)
secsva(w) = ul
secsfp(w) = dw
NEXT
PRINT
PRINT "Proceed? ";
DO
k = LCASE$(INKEY$)
IF k = "n" THEN PRINT k: END
LOOP UNTIL k = "y"
PRINT k
processtable rva2fp(rsrc), rva2fp(rsrc), 0
SYSTEM

SUB processtable (bs AS _UNSIGNED LONG, addr AS _UNSIGNED LONG, level AS INTEGER)
DIM k AS STRING
DIM dw AS _UNSIGNED LONG
DIM numnamest8 AS _UNSIGNED LONG
DIM dat AS _UNSIGNED LONG
DIM siz AS _UNSIGNED LONG
DIM so AS LONG
DIM sc AS LONG
DIM numnames AS _UNSIGNED INTEGER
DIM numids AS _UNSIGNED INTEGER
DIM w AS _UNSIGNED INTEGER
DIM ln AS _UNSIGNED INTEGER
DIM x AS _UNSIGNED INTEGER
DIM y AS _UNSIGNED INTEGER
DIM b AS _UNSIGNED _BYTE

GET 1, 1 + addr + 12, numnames
GET 1, 1 + addr + 14, numids
DIM nams(0 TO numnames + (numnames > 0)) AS STRING
DIM namsrva(0 TO numnames + (numnames > 0)) AS _UNSIGNED LONG
DIM ids(0 TO numids + (numids > 0)) AS _UNSIGNED LONG
DIM idsrva(0 TO numids + (numids > 0)) AS _UNSIGNED LONG

'get named entries
FOR x = 0 TO numnames - 1
GET 1, 1 + addr + 16 + (x * 8), dw
dw = rva2fp(dw)
GET 1, 1 + dw, ln
FOR y = 0 TO ln - 1
GET 1, , w
SELECT CASE w
CASE &H20 TO &H7E: nams(x) = nams(x) + CHR$(w)
CASE ELSE: nams(x) = nams(x) + CHR$(&H1A)
END SELECT
IF y = 68 THEN EXIT FOR
NEXT
GET 1, 1 + addr + 16 + 4 + (x * 8), namsrva(x)
NEXT

'get numbered entries:
numnamest8 = numnames * 8
FOR x = 0 TO numids - 1
GET 1, 1 + addr + 16 + numnamest8 + (x * 8), ids(x)
GET 1, 1 + addr + 16 + 4 + numnamest8 + (x * 8), idsrva(x)
NEXT

'display:
VIEW PRINT
DO
CLS 0 'qb64 bug? not locating to 1,1?
LOCATE 1, 1
SELECT CASE level
CASE 0: PRINT "1st level - Type";
CASE 1: PRINT "2nd level - Name";
CASE 2: PRINT "3rd level - Language";
CASE ELSE: PRINT LTRIM$(STR$(level)) + "th level";
END SELECT
PRINT "", "file ptr: "; dword$(addr); ". Press 'D' to dump."
PRINT numnames; "names in this level, in this branch."
PRINT numids; "IDs in this level, in this branch."
IF (numnames OR numids) = 0 THEN
IF level THEN
PRINT "Press any key to go up one level."
SLEEP: DO: LOOP WHILE LEN(INKEY$)
EXIT SUB
ELSE
END
END IF
END IF
PRINT "names are unicode. For simplicity, non ASCII chars will be shown as " + CHR$(&H1A) + "."
IF level THEN
PRINT "BKSP or ESC to go up one level."
ELSE
PRINT "BKSP or ESC to exit."
END IF
PRINT "UP, DOWN, PGUP, PGDN, HOME, END to navigate list."
PRINT "ENTER to select."
PRINT STRING$(80, &HC4);
LOCATE 22, 1
PRINT STRING$(80, &HC4);
sc = 0
so = 0
DO
COLOR 7, 0
LOCATE 8, 1: PRINT dword$(sc)
FOR x = 0 TO 11
LOCATE 10 + x, 1
IF x + so = sc THEN COLOR 15, 1 ELSE COLOR 7, 0
IF (x + so) < numnames THEN
PRINT nams(x + so); SPACE$(70 - LEN(nams(x + so)));
PRINT dword$(bs + (namsrva(x + so) AND &H7FFFFFFF&));
COLOR 7, 0
LOCATE 7, 18
IF namsrva(x + so) AND &H80000000~& THEN
PRINT "(descend)";
ELSE
PRINT "(extract)";
END IF
ELSEIF (x + so) < (numnames + numids) THEN
PRINT "ID: " + dword$(ids(x + so - numnames)); SPACE$(56);
PRINT dword$(bs + (idsrva(x + so - numnames)));
COLOR 7, 0
LOCATE 7, 18
IF idsrva(x + (so - numnames)) AND &H80000000~& THEN
PRINT "(descend)";
ELSE
PRINT "(extract)";
END IF
ELSE
PRINT SPACE$(80);
END IF
NEXT
DO
k = INKEY$
LOOP UNTIL LEN(k)
SELECT CASE k
CASE "d", "D"
dump addr
EXIT DO
CASE MKI$(&H4800) 'up
IF sc > 0 THEN
sc = sc - 1
IF sc < so THEN so = sc
END IF
CASE MKI$(&H5000) 'down
IF sc < (numnames + numids - 1) THEN
sc = sc + 1
IF sc > (so + 11) THEN
so = sc - 11
IF so > sc THEN so = 0 'unsigned
END IF
END IF
CASE MKI$(&H4700) 'home
sc = 0
so = 0
CASE MKI$(&H4F00) 'end
sc = numnames + numids - 1
so = sc - 11
IF so < 0 THEN so = 0
CASE MKI$(&H4900) 'pgup
sc = sc - 12
so = so - 12
IF sc < 0 THEN sc = 0
IF so < 0 THEN so = 0
CASE MKI$(&H5100) 'pgdn
sc = sc + 12
IF sc > (numnames + numids - 1) THEN sc = numnames + numids - 1
so = sc - 11
IF so < 0 THEN so = 0
CASE CHR$(&H8), CHR$(&H1B) 'bksp, esc
EXIT SUB
CASE CHR$(&HD) 'enter
IF sc < numnames THEN
dw = namsrva(sc)
ELSE
dw = idsrva(sc - numnames)
END IF
IF dw AND &H80000000~& THEN
'the spec says its an rfa, but it seems to be an offset in the section/table
processtable bs, bs + (dw AND &H7FFFFFFF&), level + 1
EXIT DO
ELSE
'the spec says its an rfa, but it seems to be an offset in the section/table
dw = bs + dw
GET 1, 1 + dw, dat
GET 1, 1 + 4 + dw, siz
LOCATE 24, 1
PRINT dword$(siz) + " bytes.";
LOCATE 23, 1
LINE INPUT "(leave blank to cancel) Output file? "; k
IF LEN(k) THEN
IF _FILEEXISTS(k) THEN
PRINT
PRINT "File already exists.";
ELSE
OPEN k FOR BINARY AS 2
SEEK 1, 1 + rva2fp(dat)
FOR dw = 1 TO siz
GET 1, , b
PUT 2, , b
NEXT
CLOSE 2
PRINT
PRINT "Done.";
END IF
SLEEP: DO: LOOP WHILE LEN(INKEY$)
END IF
EXIT DO
END IF
END SELECT
LOOP
LOOP
END SUB

FUNCTION word$ (w AS _UNSIGNED INTEGER)
DIM t AS STRING
t = LCASE$(HEX$(w))
word = "0x" + STRING$(4 - LEN(t), &H30) + t
END FUNCTION

FUNCTION dword$ (dw AS _UNSIGNED LONG)
DIM t AS STRING
t = LCASE$(HEX$(dw))
dword = "0x" + STRING$(8 - LEN(t), &H30) + t
END FUNCTION

FUNCTION rva2fp~& (rva AS _UNSIGNED LONG)
DIM w AS _UNSIGNED INTEGER
FOR w = 0 TO NumberOfSections - 1
IF rva < secsva(w) THEN EXIT FOR
NEXT
w = w - 1
IF w > NumberOfSections - 1 THEN PRINT dword$(rva), w: SLEEP
rva2fp = rva + (secsfp(w) - secsva(w))
END FUNCTION

SUB dump (addr AS _UNSIGNED LONG)
DIM t AS STRING
DIM dw AS _UNSIGNED LONG
DIM ul AS _UNSIGNED LONG
DIM b AS _UNSIGNED _BYTE

VIEW PRINT
ul = addr
DO
COLOR 7, 0
CLS 0
SEEK 1, 1 + ul
FOR dw = ul TO (ul AND &HFFFFFFF0) + &H15F
IF (1 + ul) > LOF(1) THEN EXIT FOR
GET 1, , b
IF (dw AND &HF) = 0 THEN
t = LCASE$(HEX$(dw))
COLOR 7
PRINT STRING$(8 - LEN(t), &H30) + t; SPACE$(2);
END IF
IF (dw AND &H4) THEN COLOR 3 ELSE COLOR 2
LOCATE , 14 + ((dw AND &HF) * 3)
t = LCASE$(HEX$(b))
IF b < &H10 THEN PRINT "0" + t; ELSE PRINT t;
LOCATE , 65 + (dw AND &HF)
SELECT CASE b
CASE 7, 9 TO &HD, &H1F: PRINT ".";
CASE ELSE: PRINT CHR$(b);
END SELECT
NEXT
PRINT
COLOR 7
LINE INPUT "(leave blank to cancel) Address: 0x"; t
IF LTRIM$(t) = "" THEN EXIT DO
ul = VAL("&h" + t + "&") AND &H7FFFFFFF
LOOP
END SUB
```
  
<br>```vb
GET 1, 1 + coff + 20 + 28 + (-4 AND pe32plus), ImageBase
```
  
<br>```vb
'october 2011, michael calkins
'my code is public domain, but it's based on Microsoft's spec, so I'm not sure
'what kind of patents or copyrights apply.
'based on the Microsoft PE and COFF spec, Revision 8.2 - September 21, 2010
'http://msdn.microsoft.com/en-us/windows/hardware/gg463119.aspx

DIM nam AS STRING * 8
DIM fil AS STRING
DIM k AS STRING
DIM dw AS _UNSIGNED LONG
DIM ul AS _UNSIGNED LONG
DIM coff AS _UNSIGNED LONG
DIM SectionTable AS _UNSIGNED LONG
DIM ImageBase AS _UNSIGNED LONG
DIM rsrc AS _UNSIGNED LONG
DIM pe32plus AS LONG
DIM w AS _UNSIGNED INTEGER
DIM SizeOfOptionalHeader AS _UNSIGNED INTEGER
DIM SHARED NumberOfSections AS _UNSIGNED INTEGER
DIM NumberOfRvaAndSizes AS _UNSIGNED LONG

CLS
LINE INPUT "Name of the PE image to open? "; fil
IF _FILEEXISTS(fil) = 0 THEN PRINT "File not found.": END
OPEN fil FOR BINARY ACCESS READ AS 1
GET 1, 1 + 0, w
IF w <> &H5A4D THEN PRINT "No MZ signature.": END
GET 1, 1 + &H3C, dw
coff = dw + 4
GET 1, dw + 1, dw
IF dw <> &H4550& THEN PRINT "No PE signature.": END
GET 1, 1 + coff + 2, NumberOfSections
IF NumberOfSections = 0 THEN PRINT "No sections.": END
PRINT "NumberOfSections:"; NumberOfSections
DIM SHARED secsva(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
DIM SHARED secsfp(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
GET 1, 1 + coff + 16, SizeOfOptionalHeader
IF SizeOfOptionalHeader = 0 THEN PRINT "No optional header.": END
PRINT "SizeOfOptionalHeader:", SPACE$(4); word$(SizeOfOptionalHeader)
GET 1, 1 + coff + 20, w
SELECT CASE w
CASE &H10B: pe32plus = 0: PRINT "PE32"
CASE &H20B: pe32plus = -1: PRINT "PE32+"
CASE ELSE: PRINT "Unknown Magic.": END
END SELECT
GET 1, 1 + coff + 20 + 28 + (-4 AND pe32plus), ImageBase
PRINT "ImageBase:", "", dword$(ImageBase)
GET 1, 1 + coff + 20 + 92 + (16 AND pe32plus), NumberOfRvaAndSizes
IF NumberOfRvaAndSizes < 3 THEN PRINT "No resource table.": END
PRINT "NumberOfRvaAndSizes:"; NumberOfRvaAndSizes
GET 1, 1 + coff + 20 + 112 + (16 AND pe32plus), rsrc
PRINT "Rva of resource table:", dword$(rsrc)
GET 1, 1 + coff + 20 + 4 + 112 + (16 AND pe32plus), dw
PRINT "Size of resource table:", dword$(dw)
IF (rsrc = 0) OR (dw = 0) THEN PRINT "No resource table.": END
SectionTable = coff + 20 + SizeOfOptionalHeader
PRINT "section", "va", "file ptr"
FOR w = 0 TO NumberOfSections - 1
GET 1, 1 + SectionTable + (40 * w), nam
GET 1, 1 + SectionTable + 12 + (40 * w), ul
GET 1, 1 + SectionTable + 20 + (40 * w), dw
PRINT nam, dword$(ul), dword$(dw)
secsva(w) = ul
secsfp(w) = dw
NEXT
PRINT
PRINT "Proceed? ";
DO
k = LCASE$(INKEY$)
IF k = "n" THEN PRINT k: END
LOOP UNTIL k = "y"
PRINT k
processtable rva2fp(rsrc), rva2fp(rsrc), 0
SYSTEM

SUB processtable (bs AS _UNSIGNED LONG, addr AS _UNSIGNED LONG, level AS INTEGER)
DIM k AS STRING
DIM dw AS _UNSIGNED LONG
DIM numnamest8 AS _UNSIGNED LONG
DIM dat AS _UNSIGNED LONG
DIM siz AS _UNSIGNED LONG
DIM so AS LONG
DIM sc AS LONG
DIM numnames AS _UNSIGNED INTEGER
DIM numids AS _UNSIGNED INTEGER
DIM w AS _UNSIGNED INTEGER
DIM ln AS _UNSIGNED INTEGER
DIM x AS _UNSIGNED INTEGER
DIM y AS _UNSIGNED INTEGER
DIM b AS _UNSIGNED _BYTE

GET 1, 1 + addr + 12, numnames
GET 1, 1 + addr + 14, numids
DIM nams(0 TO numnames + (numnames > 0)) AS STRING
DIM namsrva(0 TO numnames + (numnames > 0)) AS _UNSIGNED LONG
DIM ids(0 TO numids + (numids > 0)) AS _UNSIGNED LONG
DIM idsrva(0 TO numids + (numids > 0)) AS _UNSIGNED LONG

'get named entries
FOR x = 0 TO numnames - 1
GET 1, 1 + addr + 16 + (x * 8), dw
dw = rva2fp(dw)
GET 1, 1 + dw, ln
FOR y = 0 TO ln - 1
GET 1, , w
SELECT CASE w
CASE &H20 TO &H7E: nams(x) = nams(x) + CHR$(w)
CASE ELSE: nams(x) = nams(x) + CHR$(&H1A)
END SELECT
IF y = 68 THEN EXIT FOR
NEXT
GET 1, 1 + addr + 16 + 4 + (x * 8), namsrva(x)
NEXT

'get numbered entries:
numnamest8 = numnames * 8
FOR x = 0 TO numids - 1
GET 1, 1 + addr + 16 + numnamest8 + (x * 8), ids(x)
GET 1, 1 + addr + 16 + 4 + numnamest8 + (x * 8), idsrva(x)
NEXT

'display:
VIEW PRINT
sc = 0
so = 0
DO
CLS 0 'qb64 bug? not locating to 1,1?
LOCATE 1, 1
SELECT CASE level
CASE 0: PRINT "1st level - Type";
CASE 1: PRINT "2nd level - Name";
CASE 2: PRINT "3rd level - Language";
CASE ELSE: PRINT LTRIM$(STR$(level)) + "th level";
END SELECT
PRINT "", "file ptr: "; dword$(addr); ". Press 'D' to dump."
PRINT numnames; "names in this level, in this branch."
PRINT numids; "IDs in this level, in this branch."
IF (numnames OR numids) = 0 THEN
IF level THEN
PRINT "Press any key to go up one level."
SLEEP: DO: LOOP WHILE LEN(INKEY$)
EXIT SUB
ELSE
END
END IF
END IF
PRINT "names are unicode. For simplicity, non ASCII chars will be shown as " + CHR$(&H1A) + "."
IF level THEN
PRINT "BKSP or ESC to go up one level."
ELSE
PRINT "BKSP or ESC to exit."
END IF
PRINT "UP, DOWN, PGUP, PGDN, HOME, END to navigate list."
PRINT "ENTER to select."
PRINT STRING$(80, &HC4);
LOCATE 22, 1
PRINT STRING$(80, &HC4);
DO
COLOR 7, 0
LOCATE 8, 1: PRINT dword$(sc)
FOR x = 0 TO 11
LOCATE 10 + x, 1
IF x + so = sc THEN COLOR 15, 1 ELSE COLOR 7, 0
IF (x + so) < numnames THEN
PRINT nams(x + so); SPACE$(70 - LEN(nams(x + so)));
PRINT dword$(bs + (namsrva(x + so) AND &H7FFFFFFF&));
COLOR 7, 0
LOCATE 7, 18
IF namsrva(x + so) AND &H80000000~& THEN
PRINT "(descend)";
ELSE
PRINT "(extract)";
END IF
ELSEIF (x + so) < (numnames + numids) THEN
PRINT "ID: " + dword$(ids(x + so - numnames)); SPACE$(56);
PRINT dword$(bs + (idsrva(x + so - numnames)));
COLOR 7, 0
LOCATE 7, 18
IF idsrva(x + (so - numnames)) AND &H80000000~& THEN
PRINT "(descend)";
ELSE
PRINT "(extract)";
END IF
ELSE
PRINT SPACE$(80);
END IF
NEXT
DO
k = INKEY$
LOOP UNTIL LEN(k)
SELECT CASE k
CASE "d", "D"
dump addr
EXIT DO
CASE MKI$(&H4800) 'up
IF sc > 0 THEN
sc = sc - 1
IF sc < so THEN so = sc
END IF
CASE MKI$(&H5000) 'down
IF sc < (numnames + numids - 1) THEN
sc = sc + 1
IF sc > (so + 11) THEN
so = sc - 11
IF so > sc THEN so = 0 'unsigned
END IF
END IF
CASE MKI$(&H4700) 'home
sc = 0
so = 0
CASE MKI$(&H4F00) 'end
sc = numnames + numids - 1
so = sc - 11
IF so < 0 THEN so = 0
CASE MKI$(&H4900) 'pgup
sc = sc - 12
so = so - 12
IF sc < 0 THEN sc = 0
IF so < 0 THEN so = 0
CASE MKI$(&H5100) 'pgdn
sc = sc + 12
IF sc > (numnames + numids - 1) THEN sc = numnames + numids - 1
so = sc - 11
IF so < 0 THEN so = 0
CASE CHR$(&H8), CHR$(&H1B) 'bksp, esc
EXIT SUB
CASE CHR$(&HD) 'enter
IF sc < numnames THEN
dw = namsrva(sc)
ELSE
dw = idsrva(sc - numnames)
END IF
IF dw AND &H80000000~& THEN
'the spec says its an rva, but it seems to be an offset in the section/table
processtable bs, bs + (dw AND &H7FFFFFFF&), level + 1
EXIT DO
ELSE
'the spec says its an rva, but it seems to be an offset in the section/table
dw = bs + dw
GET 1, 1 + dw, dat
GET 1, 1 + 4 + dw, siz
CLS
LOCATE 1, 1 'qb64 seems to default to line 2
SEEK 1, 1 + rva2fp(dat)
FOR dw = 1 TO siz
IF dw > 400 THEN EXIT FOR
GET 1, , b
SELECT CASE b
CASE 7, 9 TO &HD, &H1F: PRINT ".";
CASE ELSE: PRINT CHR$(b);
END SELECT
NEXT
LOCATE 24, 1
PRINT dword$(siz) + " bytes.";
LOCATE 23, 1
LINE INPUT "(leave blank to cancel) Output file? "; k

'     IF k = "v" THEN
'      INPUT "width in pixels"; w
'      SCREEN 13
'      SEEK 1, 1 + rva2fp(dat)
'      FOR dw = 1 TO siz
'       IF dw \ w >= 200 THEN EXIT FOR
'       GET 1, , b
'      PSET (dw MOD w, dw \ w), b
'      NEXT
'      SLEEP: DO: LOOP WHILE LEN(INKEY$)
'      SCREEN 0
'      WIDTH 80, 25
'      VIEW PRINT
'      CLS
'     END IF

IF LEN(k) THEN
IF _FILEEXISTS(k) THEN
PRINT
PRINT "File already exists.";
ELSE
OPEN k FOR BINARY AS 2
SEEK 1, 1 + rva2fp(dat)
FOR dw = 1 TO siz
GET 1, , b
PUT 2, , b
NEXT
CLOSE 2
PRINT
PRINT "Done.";
END IF
SLEEP: DO: LOOP WHILE LEN(INKEY$)
END IF
EXIT DO
END IF
END SELECT
LOOP
LOOP
END SUB

FUNCTION word$ (w AS _UNSIGNED INTEGER)
DIM t AS STRING
t = LCASE$(HEX$(w))
word = "0x" + STRING$(4 - LEN(t), &H30) + t
END FUNCTION

FUNCTION dword$ (dw AS _UNSIGNED LONG)
DIM t AS STRING
t = LCASE$(HEX$(dw))
dword = "0x" + STRING$(8 - LEN(t), &H30) + t
END FUNCTION

FUNCTION rva2fp~& (rva AS _UNSIGNED LONG)
DIM w AS _UNSIGNED INTEGER
FOR w = 0 TO NumberOfSections - 1
IF rva < secsva(w) THEN EXIT FOR
NEXT
w = w - 1
IF w > NumberOfSections - 1 THEN PRINT dword$(rva), w: SLEEP
rva2fp = rva + (secsfp(w) - secsva(w))
END FUNCTION

SUB dump (addr AS _UNSIGNED LONG)
DIM t AS STRING
DIM dw AS _UNSIGNED LONG
DIM ul AS _UNSIGNED LONG
DIM b AS _UNSIGNED _BYTE

VIEW PRINT
ul = addr
DO
COLOR 7, 0
CLS 0
SEEK 1, 1 + ul
FOR dw = ul TO (ul AND &HFFFFFFF0) + &H15F
IF (1 + ul) > LOF(1) THEN EXIT FOR
GET 1, , b
IF (dw AND &HF) = 0 THEN
t = LCASE$(HEX$(dw))
COLOR 7
PRINT STRING$(8 - LEN(t), &H30) + t; SPACE$(2);
END IF
IF (dw AND &H4) THEN COLOR 3 ELSE COLOR 2
LOCATE , 14 + ((dw AND &HF) * 3)
t = LCASE$(HEX$(b))
IF b < &H10 THEN PRINT "0" + t; ELSE PRINT t;
LOCATE , 65 + (dw AND &HF)
SELECT CASE b
CASE 7, 9 TO &HD, &H1F: PRINT ".";
CASE ELSE: PRINT CHR$(b);
END SELECT
NEXT
PRINT
COLOR 7
LINE INPUT "(leave blank to cancel) Address: 0x"; t
IF LTRIM$(t) = "" THEN EXIT DO
ul = VAL("&h" + t + "&") AND &H7FFFFFFF
LOOP
END SUB
```
  
<br>```vb
edit /78 rhig.bin
```
  
<br>```vb
edit /14 rhigmod.bin
```
  
<br>```vb
'revision 20120316, michael calkins
'october 2011, michael calkins
'my code is public domain, but it's based on Microsoft's spec, so I'm not sure
'what kind of patents or copyrights apply.
'based on the Microsoft PE and COFF spec, Revision 8.2 - September 21, 2010
'http://msdn.microsoft.com/en-us/windows/hardware/gg463119.aspx

'bug fixes on 2012 03 16:
' changed NumberOfRvaAndSizes to an _unsigned long
' added _CONTROLCHR OFF to the dump sub, and replaced the select case

DIM nam AS STRING * 8
DIM fil AS STRING
DIM k AS STRING
DIM dw AS _UNSIGNED LONG
DIM ul AS _UNSIGNED LONG
DIM coff AS _UNSIGNED LONG
DIM SectionTable AS _UNSIGNED LONG
DIM ImageBase AS _UNSIGNED LONG
DIM rsrc AS _UNSIGNED LONG
DIM pe32plus AS LONG
DIM w AS _UNSIGNED INTEGER
DIM SizeOfOptionalHeader AS _UNSIGNED INTEGER
DIM SHARED NumberOfSections AS _UNSIGNED INTEGER
DIM NumberOfRvaAndSizes AS _UNSIGNED LONG

CLS
fil = COMMAND$
IF LEN(fil) = 0 THEN LINE INPUT "Name of the PE image to open? "; fil
IF _FILEEXISTS(fil) = 0 THEN PRINT "File not found.": END
OPEN fil FOR BINARY ACCESS READ AS 1
GET 1, 1 + 0, w
IF w <> &H5A4D THEN PRINT "No MZ signature.": END
GET 1, 1 + &H3C, dw
coff = dw + 4
GET 1, dw + 1, dw
IF dw <> &H4550& THEN PRINT "No PE signature.": END
GET 1, 1 + coff + 2, NumberOfSections
IF NumberOfSections = 0 THEN PRINT "No sections.": END
PRINT "NumberOfSections:"; NumberOfSections
DIM SHARED secsva(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
DIM SHARED secsfp(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
GET 1, 1 + coff + 16, SizeOfOptionalHeader
IF SizeOfOptionalHeader = 0 THEN PRINT "No optional header.": END
PRINT "SizeOfOptionalHeader:", SPACE$(4); word$(SizeOfOptionalHeader)
GET 1, 1 + coff + 20, w
SELECT CASE w
CASE &H10B: pe32plus = 0: PRINT "PE32"
CASE &H20B: pe32plus = -1: PRINT "PE32+"
CASE ELSE: PRINT "Unknown Magic.": END
END SELECT
GET 1, 1 + coff + 20 + 28 + (-4 AND pe32plus), ImageBase
PRINT "ImageBase:", "", dword$(ImageBase)
GET 1, 1 + coff + 20 + 92 + (16 AND pe32plus), NumberOfRvaAndSizes
IF NumberOfRvaAndSizes < 3 THEN PRINT "No resource table.": END
PRINT "NumberOfRvaAndSizes:"; NumberOfRvaAndSizes
GET 1, 1 + coff + 20 + 112 + (16 AND pe32plus), rsrc
PRINT "Rva of resource table:", dword$(rsrc)
GET 1, 1 + coff + 20 + 4 + 112 + (16 AND pe32plus), dw
PRINT "Size of resource table:", dword$(dw)
IF (rsrc = 0) OR (dw = 0) THEN PRINT "No resource table.": END
SectionTable = coff + 20 + SizeOfOptionalHeader
PRINT "section", "va", "file ptr"
FOR w = 0 TO NumberOfSections - 1
GET 1, 1 + SectionTable + (40 * w), nam
GET 1, 1 + SectionTable + 12 + (40 * w), ul
GET 1, 1 + SectionTable + 20 + (40 * w), dw
PRINT nam, dword$(ul), dword$(dw)
secsva(w) = ul
secsfp(w) = dw
NEXT
PRINT
PRINT "Proceed? ";
DO
k = LCASE$(INKEY$)
IF k = "n" THEN PRINT k: END
LOOP UNTIL k = "y"
PRINT k
dw = rva2fp(rsrc)
processtable dw, dw, 0
SYSTEM

SUB processtable (bs AS _UNSIGNED LONG, addr AS _UNSIGNED LONG, level AS INTEGER)
DIM k AS STRING
DIM dw AS _UNSIGNED LONG
DIM numnamest8 AS _UNSIGNED LONG
DIM dat AS _UNSIGNED LONG
DIM siz AS _UNSIGNED LONG
DIM so AS LONG
DIM sc AS LONG
DIM numnames AS _UNSIGNED INTEGER
DIM numids AS _UNSIGNED INTEGER
DIM w AS _UNSIGNED INTEGER
DIM ln AS _UNSIGNED INTEGER
DIM x AS _UNSIGNED INTEGER
DIM y AS _UNSIGNED INTEGER
DIM b AS _UNSIGNED _BYTE

GET 1, 1 + addr + 12, numnames
GET 1, 1 + addr + 14, numids
DIM nams(0 TO numnames + (numnames > 0)) AS STRING
DIM namsrva(0 TO numnames + (numnames > 0)) AS _UNSIGNED LONG
DIM ids(0 TO numids + (numids > 0)) AS _UNSIGNED LONG
DIM idsrva(0 TO numids + (numids > 0)) AS _UNSIGNED LONG

'get named entries
FOR x = 0 TO numnames - 1
GET 1, 1 + addr + 16 + (x * 8), dw
'the spec says its an rva, but it seems to be an offset in the section/table
'low 31 bits are an offset from bs
GET 1, 1 + bs + (dw AND &H7FFFFFFF), ln
FOR y = 0 TO ln - 1
GET 1, , w
SELECT CASE w
CASE &H20 TO &H7E: nams(x) = nams(x) + CHR$(w)
CASE ELSE: nams(x) = nams(x) + CHR$(&H1A)
END SELECT
IF y = 68 THEN EXIT FOR
NEXT
GET 1, 1 + addr + 16 + 4 + (x * 8), namsrva(x)
NEXT

'get numbered entries:
numnamest8 = numnames * 8
FOR x = 0 TO numids - 1
GET 1, 1 + addr + 16 + numnamest8 + (x * 8), ids(x)
GET 1, 1 + addr + 16 + 4 + numnamest8 + (x * 8), idsrva(x)
NEXT

'display:
VIEW PRINT
sc = 0
so = 0
DO
CLS 0 'qb64 bug? not locating to 1,1?
LOCATE 1, 1
SELECT CASE level
CASE 0: PRINT "1st level - Type";
CASE 1: PRINT "2nd level - Name";
CASE 2: PRINT "3rd level - Language";
CASE ELSE: PRINT LTRIM$(STR$(level)) + "th level";
END SELECT
PRINT "", "file ptr: "; dword$(addr); ". Press 'D' to dump."
PRINT numnames; "names in this level, in this branch."
PRINT numids; "IDs in this level, in this branch."
IF (numnames OR numids) = 0 THEN
IF level THEN
PRINT "Press any key to go up one level."
SLEEP: DO: LOOP WHILE LEN(INKEY$)
EXIT SUB
ELSE
END
END IF
END IF
PRINT "names are unicode. For simplicity, non ASCII chars will be shown as " + CHR$(&H1A) + "."
IF level THEN
PRINT "BKSP or ESC to go up one level."
ELSE
PRINT "BKSP or ESC to exit."
END IF
PRINT "UP, DOWN, PGUP, PGDN, HOME, END to navigate list."
PRINT "ENTER to select."
LOCATE 9, 1
PRINT STRING$(80, &HC4);
LOCATE 22, 1
PRINT STRING$(80, &HC4);
DO
COLOR 7, 0
LOCATE 8, 1: PRINT dword$(sc)
FOR x = 0 TO 11
LOCATE 10 + x, 1
IF x + so = sc THEN COLOR 15, 1 ELSE COLOR 7, 0
IF (x + so) < numnames THEN
PRINT nams(x + so); SPACE$(70 - LEN(nams(x + so)));
PRINT dword$(bs + (namsrva(x + so) AND &H7FFFFFFF&));
COLOR 7, 0
LOCATE 7, 18
IF namsrva(x + so) AND &H80000000~& THEN
PRINT "(descend)";
ELSE
PRINT "(extract)";
END IF
ELSEIF (x + so) < (numnames + numids) THEN
PRINT "ID: " + dword$(ids(x + so - numnames));
IF level = 0 THEN
PRINT " (RT_";
'derived from:
' http://msdn.microsoft.com/en-us/library/ms648009(v=VS.85).aspx
SELECT CASE ids(x + so - numnames)
CASE 9: PRINT "ACCELERATOR";
CASE 21: PRINT "ANICURSOR";
CASE 22: PRINT "ANIICON";
CASE 2: PRINT "BITMAP";
CASE 1: PRINT "CURSOR";
CASE 5: PRINT "DIALOG";
CASE 17: PRINT "DLGINCLUDE";
CASE 8: PRINT "FONT";
CASE 7: PRINT "FONTDIR";
CASE 12: PRINT "GROUP_CURSOR";
CASE 14: PRINT "GROUP_ICON";
CASE 23: PRINT "HTML";
CASE 3: PRINT "ICON";
CASE 24: PRINT "MANIFEST";
CASE 4: PRINT "MENU";
CASE 11: PRINT "MESSAGETABLE";
CASE 19: PRINT "PLUGPLAY";
CASE 10: PRINT "RCDATA";
CASE 6: PRINT "STRING";
CASE 16: PRINT "VERSION";
CASE 20: PRINT "VXD";
END SELECT
PRINT ")";
END IF
PRINT SPACE$(71 - POS(0));
PRINT dword$(bs + (idsrva(x + so - numnames)));
COLOR 7, 0
LOCATE 7, 18
IF idsrva(x + (so - numnames)) AND &H80000000~& THEN
PRINT "(descend)";
ELSE
PRINT "(extract)";
END IF
ELSE
PRINT SPACE$(80);
END IF
NEXT
DO
k = INKEY$
LOOP UNTIL LEN(k)
SELECT CASE k
CASE "d", "D"
dump addr
EXIT DO
CASE MKI$(&H4800) 'up
IF sc > 0 THEN
sc = sc - 1
IF sc < so THEN so = sc
END IF
CASE MKI$(&H5000) 'down
IF sc < (numnames + numids - 1) THEN
sc = sc + 1
IF sc > (so + 11) THEN
so = sc - 11
IF so > sc THEN so = 0 'unsigned
END IF
END IF
CASE MKI$(&H4700) 'home
sc = 0
so = 0
CASE MKI$(&H4F00) 'end
sc = numnames + numids - 1
so = sc - 11
IF so < 0 THEN so = 0
CASE MKI$(&H4900) 'pgup
sc = sc - 12
so = so - 12
IF sc < 0 THEN sc = 0
IF so < 0 THEN so = 0
CASE MKI$(&H5100) 'pgdn
sc = sc + 12
IF sc > (numnames + numids - 1) THEN sc = numnames + numids - 1
so = sc - 11
IF so < 0 THEN so = 0
CASE CHR$(&H8), CHR$(&H1B) 'bksp, esc
EXIT SUB
CASE CHR$(&HD) 'enter
IF sc < numnames THEN
dw = namsrva(sc)
ELSE
dw = idsrva(sc - numnames)
END IF
IF dw AND &H80000000~& THEN
'the spec says its an rva, but it seems to be an offset in the section/table
processtable bs, bs + (dw AND &H7FFFFFFF&), level + 1
EXIT DO
ELSE
'the spec says its an rva, but it seems to be an offset in the section/table
dw = bs + dw
GET 1, 1 + dw, dat
GET 1, 1 + 4 + dw, siz
CLS
LOCATE 1, 1 'qb64 seems to default to line 2
SEEK 1, 1 + rva2fp(dat)
FOR dw = 1 TO siz
IF dw > 400 THEN EXIT FOR
GET 1, , b
SELECT CASE b
CASE 7, 9 TO &HD, &H1F: PRINT ".";
CASE ELSE: PRINT CHR$(b);
END SELECT
NEXT
LOCATE 24, 1
PRINT dword$(siz) + " bytes.";
LOCATE 23, 1
LINE INPUT "(leave blank to cancel) Output file? "; k
IF LEN(k) THEN
IF _FILEEXISTS(k) THEN
PRINT
PRINT "File already exists.";
ELSE
OPEN k FOR BINARY AS 2
SEEK 1, 1 + rva2fp(dat)
FOR dw = 1 TO siz
GET 1, , b
PUT 2, , b
NEXT
CLOSE 2
PRINT
PRINT "Done.";
END IF
SLEEP: DO: LOOP WHILE LEN(INKEY$)
END IF
EXIT DO
END IF
END SELECT
LOOP
LOOP
END SUB

FUNCTION word$ (w AS _UNSIGNED INTEGER)
DIM t AS STRING
t = LCASE$(HEX$(w))
word = "0x" + STRING$(4 - LEN(t), &H30) + t
END FUNCTION

FUNCTION dword$ (dw AS _UNSIGNED LONG)
DIM t AS STRING
t = LCASE$(HEX$(dw))
dword = "0x" + STRING$(8 - LEN(t), &H30) + t
END FUNCTION

FUNCTION rva2fp~& (rva AS _UNSIGNED LONG)
DIM w AS _UNSIGNED INTEGER
FOR w = 0 TO NumberOfSections - 1
IF rva < secsva(w) THEN EXIT FOR
NEXT
w = w - 1
IF w > NumberOfSections - 1 THEN PRINT dword$(rva), w: SLEEP
rva2fp = rva + (secsfp(w) - secsva(w))
END FUNCTION

SUB dump (addr AS _UNSIGNED LONG)
DIM t AS STRING
DIM dw AS _UNSIGNED LONG
DIM ul AS _UNSIGNED LONG
DIM b AS _UNSIGNED _BYTE

_CONTROLCHR OFF
VIEW PRINT
ul = addr
DO
COLOR 7, 0
CLS 0
SEEK 1, 1 + ul
FOR dw = ul TO (ul AND &HFFFFFFF0) + &H15F
IF (1 + ul) > LOF(1) THEN EXIT FOR
GET 1, , b
IF (dw AND &HF) = 0 THEN
t = LCASE$(HEX$(dw))
COLOR 7
PRINT STRING$(8 - LEN(t), &H30) + t; SPACE$(2);
END IF
IF (dw AND &H4) THEN COLOR 3 ELSE COLOR 2
LOCATE , 14 + ((dw AND &HF) * 3)
t = LCASE$(HEX$(b))
IF b < &H10 THEN PRINT "0" + t; ELSE PRINT t;
LOCATE , 65 + (dw AND &HF)
PRINT CHR$(b);
NEXT
PRINT
COLOR 7
LINE INPUT "(leave blank to cancel) Address: 0x"; t
IF LTRIM$(t) = "" THEN EXIT DO
ul = VAL("&h" + t + "&") AND &H7FFFFFFF
LOOP
END SUB
```
  
<br>```vb
'revision date, last person to revise
'revision 20111101, michael calkins
'(derivitives may list sources of derivision)

'october 2011, michael calkins
'my code is public domain, but it's based on Microsoft's spec, so I'm not sure
'what kind of patents or copyrights apply.
'based on the Microsoft PE and COFF spec, Revision 8.2 - September 21, 2010
'[http://msdn.microsoft.com/en-us/windows/hardware/gg463119.aspx]


DIM fil AS STRING
DIM n AS LONG
DIM gi AS _UNSIGNED LONG
DIM wi AS LONG
DIM bpp AS LONG

fil = "\windows\notepad.exe"

IF LEN(fil) = 0 THEN LINE INPUT fil
gi = 0 'first icon group is normally 0 in most EXE or DLL files
wi = 32 '16 to 256 max width     '<<<<<<<<<<< change settings for other sizes
bpp = 8 '4 to 32 bit max color   '<<<<<<<<<<< 4 bit may use older style images
mode = 0 ' 0 = icon, 1 = bitmap
del$ = "delme.ico" 'change file extension to .BMP with mode 1 for bitmaps

IF _FILEEXISTS(del$) THEN KILL del$ 'this file will be erased.
n = geticon(fil, del$, gi, wi, bpp, mode)
IF n THEN
PRINT "error:"; n, geticonerror(n)
END
ELSE
SHELL _DONTWAIT "mspaint " + del$
END IF
SYSTEM
'               ---------------------------------------------------

FUNCTION geticon& (fin AS STRING, fout AS STRING, gi AS _UNSIGNED LONG, wi AS _UNSIGNED LONG, co AS _UNSIGNED LONG, m AS _UNSIGNED LONG)
'function extracts the best matching icon from a specified icon group from
'a specified PE image, and saves it to a specified file in a specified format.
'extracts the first language.

'fil = input file name
'fout = output file name
'gi = the number of the Icon Group (0 is first)
'wi = the preferred width (width is given priority over color)
'co = the preferred bits per pixel
'm = mode (0 for .ico, nonzero for .bmp)

'returns 0 for success, nonzero for error.

DIM dw AS _UNSIGNED LONG
DIM coff AS _UNSIGNED LONG
DIM SectionTable AS _UNSIGNED LONG
DIM pe32plus AS LONG
DIM bs AS _UNSIGNED LONG
DIM addr AS _UNSIGNED LONG
DIM nfin AS _UNSIGNED LONG
DIM nfout AS _UNSIGNED LONG
DIM numnamest8 AS _UNSIGNED LONG
DIM dat AS _UNSIGNED LONG
DIM siz AS _UNSIGNED LONG
DIM rva AS _UNSIGNED LONG
DIM fp AS _UNSIGNED LONG
DIM bc AS _UNSIGNED LONG
DIM bw AS _UNSIGNED LONG
DIM w AS _UNSIGNED INTEGER
DIM SizeOfOptionalHeader AS _UNSIGNED INTEGER
DIM NumberOfSections AS _UNSIGNED INTEGER
DIM NumberOfRvaAndSizes AS _UNSIGNED LONG
DIM numnames AS _UNSIGNED INTEGER
DIM numids AS _UNSIGNED INTEGER
DIM x AS _UNSIGNED INTEGER
DIM y AS _UNSIGNED INTEGER
DIM z AS _UNSIGNED INTEGER
DIM b AS _UNSIGNED _BYTE

IF _FILEEXISTS(fin) = 0 THEN geticon = 1: EXIT FUNCTION
nfin = FREEFILE
OPEN fin FOR BINARY ACCESS READ AS nfin
GET nfin, 1 + 0, w
IF w <> &H5A4D THEN geticon = 2: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + &H3C, dw
coff = dw + 4
GET nfin, dw + 1, dw
IF dw <> &H4550& THEN geticon = 3: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + coff + 2, NumberOfSections
IF NumberOfSections = 0 THEN geticon = 4: CLOSE nfin: EXIT FUNCTION
DIM secsva(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
DIM secsfp(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
GET nfin, 1 + coff + 16, SizeOfOptionalHeader
IF SizeOfOptionalHeader = 0 THEN geticon = 5: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + coff + 20, w
SELECT CASE w
CASE &H10B: pe32plus = 0
CASE &H20B: pe32plus = -1
CASE ELSE: geticon = 6: CLOSE nfin: EXIT FUNCTION
END SELECT
GET nfin, 1 + coff + 20 + 92 + (16 AND pe32plus), NumberOfRvaAndSizes
IF NumberOfRvaAndSizes < 3 THEN geticon = 7: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + coff + 20 + 112 + (16 AND pe32plus), bs
GET nfin, 1 + coff + 20 + 4 + 112 + (16 AND pe32plus), dw
IF (bs = 0) OR (dw = 0) THEN geticon = 8: CLOSE nfin: EXIT FUNCTION
SectionTable = coff + 20 + SizeOfOptionalHeader
FOR w = 0 TO NumberOfSections - 1
GET nfin, 1 + SectionTable + 12 + (40 * w), secsva(w)
GET nfin, 1 + SectionTable + 20 + (40 * w), secsfp(w)
NEXT

rva = bs
GOSUB rva2fp
bs = fp

addr = bs
'group icon, first level
GET nfin, 1 + addr + 12, numnames
GET nfin, 1 + addr + 14, numids
numnamest8 = numnames * 8
FOR x = 0 TO numids - 1
GET nfin, 1 + addr + 16 + numnamest8 + (x * 8), dw
IF dw = &HE THEN
GET nfin, 1 + addr + 16 + 4 + numnamest8 + (x * 8), dw: EXIT FOR
END IF
NEXT
IF x = numids THEN geticon = 9: CLOSE nfin: EXIT FUNCTION
IF dw AND &H80000000~& = 0 THEN geticon = 10: CLOSE nfin: EXIT FUNCTION

addr = bs + (dw AND &H7FFFFFFF&)
'group icon, second level
GET nfin, 1 + addr + 12, numnames
GET nfin, 1 + addr + 14, numids
IF gi >= numnames + numids THEN geticon = 11: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + addr + 16 + 4 + (gi * 8), dw
IF dw AND &H80000000~& = 0 THEN geticon = 12: CLOSE nfin: EXIT FUNCTION

addr = bs + (dw AND &H7FFFFFFF&)
'group icon, third level
GET nfin, 1 + addr + 12, numnames
GET nfin, 1 + addr + 14, numids
IF 0 = (numnames + numids) THEN geticon = 13: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + addr + 16 + 4, dw
IF dw AND &H80000000~& THEN geticon = 14: CLOSE nfin: EXIT FUNCTION

'search for best icon within icon group
dw = bs + dw
GET nfin, 1 + dw, rva
GET nfin, 1 + 4 + dw, siz
GOSUB rva2fp
dat = fp
SEEK nfin, 1 + dat
IF siz < 6 THEN geticon = 15: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + dat, dw
IF dw <> &H10000 THEN geticon = 16: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + dat + 4, y
IF y = 0 THEN geticon = 17: CLOSE nfin: EXIT FUNCTION
IF siz < (6 + (y * 14)) THEN geticon = 18: CLOSE nfin: EXIT FUNCTION
bc = 0
bw = 0
FOR x = 0 TO y - 1
GET nfin, 1 + dat + 6 + (x * 14), b
IF b = 0 THEN b = 255
'best width, then best color
IF (b >= bw) AND (b <= wi) THEN
GET nfin, 1 + dat + 6 + (x * 14) + 6, w
IF ((w > bc) OR (b > bw)) AND (w <= co) THEN
bc = w
bw = b
GET nfin, 1 + dat + 6 + (x * 14) + 12, z
END IF
END IF
NEXT
IF bc = 0 THEN geticon = 19: CLOSE nfin: EXIT FUNCTION

addr = bs
'icon, first level
GET nfin, 1 + addr + 12, numnames
GET nfin, 1 + addr + 14, numids
numnamest8 = numnames * 8
FOR x = 0 TO numids - 1
GET nfin, 1 + addr + 16 + numnamest8 + (x * 8), dw
IF dw = &H3 THEN
GET nfin, 1 + addr + 16 + 4 + numnamest8 + (x * 8), dw: EXIT FOR
END IF
NEXT
IF x = numids THEN geticon = 20: CLOSE nfin: EXIT FUNCTION
IF dw AND &H80000000~& = 0 THEN geticon = 21: CLOSE nfin: EXIT FUNCTION

addr = bs + (dw AND &H7FFFFFFF&)
'icon, second level
GET nfin, 1 + addr + 12, numnames
GET nfin, 1 + addr + 14, numids
numnamest8 = numnames * 8
FOR x = 0 TO numids - 1
GET nfin, 1 + addr + 16 + numnamest8 + (x * 8), dw
IF dw = z THEN
GET nfin, 1 + addr + 16 + 4 + numnamest8 + (x * 8), dw: EXIT FOR
END IF
NEXT
IF x = numids THEN geticon = 22: CLOSE nfin: EXIT FUNCTION
IF dw AND &H80000000~& = 0 THEN geticon = 23: CLOSE nfin: EXIT FUNCTION

addr = bs + (dw AND &H7FFFFFFF&)
'icon, third level
GET nfin, 1 + addr + 12, numnames
GET nfin, 1 + addr + 14, numids
IF 0 = (numnames + numids) THEN geticon = 24: CLOSE nfin: EXIT FUNCTION
GET nfin, 1 + addr + 16 + 4, dw
IF dw AND &H80000000~& THEN geticon = 25: CLOSE nfin: EXIT FUNCTION

'extract icon
dw = bs + dw
GET nfin, 1 + dw, rva
GET nfin, 1 + 4 + dw, siz
GOSUB rva2fp
dat = fp
IF _FILEEXISTS(fout) THEN geticon = 26: CLOSE nfin: EXIT FUNCTION
nfout = FREEFILE
OPEN fout FOR BINARY AS nfout
GET nfin, 1 + dat + 4, dw 'width, start 4 bytes into BMP header
IF dw < &H100 THEN wide = dw ELSE wide = wi
GET nfin, , dw 'double height
IF dw < &H1FF THEN high = dw \ 2 ELSE high = wi
GET nfin, 1 + dat + 14, w 'bpp
IF w <= &H20 THEN bpp = w ELSE bpp = co

IF m THEN
'Create bitmap format pre-header info of 14 bytes
w = CVI("BM")
PUT nfout, 1, w 'magic
IF bpp <= 8 THEN pal = (2 ^ bpp) * 4: pb = bpp / 8 ELSE pal = 0: pb = 3
dw = 54 + (wide * high * pb) + pal 'file size
PUT nfout, , dw 'file size
dw = 0
PUT nfout, , dw '2 reserved
dw = 54 + pal 'bitmap header offset + palette if used
PUT nfout, , dw 'data offset
ELSE
'Create icon format Icon header and Entry header
w = 0
PUT nfout, 1, w 'reserved
w = 1 '1 = icon, 2 = cursor(this could be set by mode value)
PUT nfout, , w 'resource id
PUT nfout, , w 'icon count is always one in this procedure
b = wide
PUT nfout, , b 'width in Entry header
b = high
PUT nfout, , b 'height
IF bpp < 8 THEN b = 2 ^ bpp ELSE b = 0
PUT nfout, , b 'num of colors
b = 0: w = 0
PUT nfout, , b 'reserved
PUT nfout, , w 'column hot spot for cursor
PUT nfout, , w 'row hot spot for cursor
PUT nfout, , siz 'size of data
dw = 22 'offset of bmp header is 6 + 16 bytes
PUT nfout, , dw
END IF
SEEK nfin, 1 + dat 'seek start of bmp 40 byte header
IF m THEN
GET nfin, , dw
PUT nfout, , dw 'header size
GET nfin, , dw
dw = wide
PUT nfout, , dw 'width
dw = high
PUT nfout, , dw 'height
GET nfin, , dw 'ignore double height
siz = (wide * high * pb) + 28 + pal 'stop at AND mask
END IF
FOR dw = 1 TO siz 'GET remaining image data including
GET nfin, , b '     'BMP header, palette and mask(s)
PUT nfout, , b
NEXT dw
CLOSE nfout
CLOSE nfin

geticon = 0
EXIT FUNCTION

rva2fp: 'call with rva returns fp modifies w

FOR w = 0 TO NumberOfSections - 1
IF rva < secsva(w) THEN EXIT FOR
NEXT
w = w - 1
IF w > NumberOfSections - 1 THEN geticon = 27: CLOSE nfin: EXIT FUNCTION
fp = rva + (secsfp(w) - secsva(w))
RETURN

END FUNCTION

FUNCTION geticonerror$ (n AS LONG)
'revision date, last person to revise revision 20111031, michael calkins
'(derivitives may list sources of derivision) october 2011, public domain, michael calkins
SELECT CASE n
CASE 0: geticonerror = "success"
CASE 1: geticonerror = "input file not found"
CASE 2: geticonerror = "MZ signature not found"
CASE 3: geticonerror = "PE signature not found"
CASE 4: geticonerror = "no sections found"
CASE 5: geticonerror = "optional header not found"
CASE 6: geticonerror = "unknown PE optional header"
CASE 7: geticonerror = "no resource table"
CASE 8: geticonerror = "no resource table"
CASE 9: geticonerror = "icon groups not found"
CASE 10: geticonerror = "icon group: 1st level entry is a leaf"
CASE 11: geticonerror = "specified icon group not found"
CASE 12: geticonerror = "icon group: 2nd level entry is a leaf"
CASE 13: geticonerror = "no language for specified icon group"
CASE 14: geticonerror = "icon group: 3rd level entry is not a leaf"
CASE 15: geticonerror = "icon group data is too small"
CASE 16: geticonerror = "icon group data is not as expected"
CASE 17: geticonerror = "no icons in group"
CASE 18: geticonerror = "icon array is too small"
CASE 19: geticonerror = "could not find an icon matching the specifications"
CASE 20: geticonerror = "icons not found"
CASE 21: geticonerror = "icon: 1st level entry is a leaf"
CASE 22: geticonerror = "target icon not found"
CASE 23: geticonerror = "icon: 2nd level entry is a leaf"
CASE 24: geticonerror = "no language for target icon"
CASE 25: geticonerror = "icon: 3rd level is not a leaf"
CASE 26: geticonerror = "output file already exists"
CASE 27: geticonerror = "could not convert rva to fp"
CASE ELSE: geticonerror = "unknown error"
END SELECT
END FUNCTION
```
  
<br>```vb
'revision 20120316, michael calkins
'october 2011, michael calkins
'my code is public domain, but it's based on Microsoft's spec, so I'm not sure
'what kind of patents or copyrights apply.
'based on the Microsoft PE and COFF spec, Revision 8.2 - September 21, 2010
'http://msdn.microsoft.com/en-us/windows/hardware/gg463119.aspx

'bug fixes on 2012 03 16:
' changed NumberOfRvaAndSizes to an _unsigned long
' added _CONTROLCHR OFF to the dump sub, and replaced the select case

DIM nam AS STRING * 8
DIM fil AS STRING
DIM k AS STRING
DIM dw AS _UNSIGNED LONG
DIM ul AS _UNSIGNED LONG
DIM coff AS _UNSIGNED LONG
DIM SectionTable AS _UNSIGNED LONG
DIM ImageBase AS _UNSIGNED LONG
DIM rsrc AS _UNSIGNED LONG
DIM pe32plus AS LONG
DIM w AS _UNSIGNED INTEGER
DIM SizeOfOptionalHeader AS _UNSIGNED INTEGER
DIM SHARED NumberOfSections AS _UNSIGNED INTEGER
DIM NumberOfRvaAndSizes AS _UNSIGNED LONG

CLS
fil = COMMAND$
IF LEN(fil) = 0 THEN LINE INPUT "Name of the PE image to open? "; fil
IF _FILEEXISTS(fil) = 0 THEN PRINT "File not found.": END
OPEN fil FOR BINARY ACCESS READ AS 1
GET 1, 1 + 0, w
IF w <> &H5A4D THEN PRINT "No MZ signature.": END
GET 1, 1 + &H3C, dw
coff = dw + 4
GET 1, dw + 1, dw
IF dw <> &H4550& THEN PRINT "No PE signature.": END
GET 1, 1 + coff + 2, NumberOfSections
IF NumberOfSections = 0 THEN PRINT "No sections.": END
PRINT "NumberOfSections:"; NumberOfSections
DIM SHARED secsva(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
DIM SHARED secsfp(0 TO NumberOfSections - 1) AS _UNSIGNED LONG
GET 1, 1 + coff + 16, SizeOfOptionalHeader
IF SizeOfOptionalHeader = 0 THEN PRINT "No optional header.": END
PRINT "SizeOfOptionalHeader:", SPACE$(4); word$(SizeOfOptionalHeader)
GET 1, 1 + coff + 20, w
SELECT CASE w
CASE &H10B: pe32plus = 0: PRINT "PE32"
CASE &H20B: pe32plus = -1: PRINT "PE32+"
CASE ELSE: PRINT "Unknown Magic.": END
END SELECT
GET 1, 1 + coff + 20 + 28 + (-4 AND pe32plus), ImageBase
PRINT "ImageBase:", "", dword$(ImageBase)
GET 1, 1 + coff + 20 + 92 + (16 AND pe32plus), NumberOfRvaAndSizes
IF NumberOfRvaAndSizes < 3 THEN PRINT "No resource table.": END
PRINT "NumberOfRvaAndSizes:"; NumberOfRvaAndSizes
GET 1, 1 + coff + 20 + 112 + (16 AND pe32plus), rsrc
PRINT "Rva of resource table:", dword$(rsrc)
GET 1, 1 + coff + 20 + 4 + 112 + (16 AND pe32plus), dw
PRINT "Size of resource table:", dword$(dw)
IF (rsrc = 0) OR (dw = 0) THEN PRINT "No resource table.": END
SectionTable = coff + 20 + SizeOfOptionalHeader
PRINT "section", "va", "file ptr"
FOR w = 0 TO NumberOfSections - 1
GET 1, 1 + SectionTable + (40 * w), nam
GET 1, 1 + SectionTable + 12 + (40 * w), ul
GET 1, 1 + SectionTable + 20 + (40 * w), dw
PRINT nam, dword$(ul), dword$(dw)
secsva(w) = ul
secsfp(w) = dw
NEXT
PRINT
PRINT "Proceed? ";
DO
k = LCASE$(INKEY$)
IF k = "n" THEN PRINT k: END
LOOP UNTIL k = "y"
PRINT k
dw = rva2fp(rsrc)
processtable dw, dw, 0
SYSTEM

SUB processtable (bs AS _UNSIGNED LONG, addr AS _UNSIGNED LONG, level AS INTEGER)
DIM k AS STRING
DIM dw AS _UNSIGNED LONG
DIM numnamest8 AS _UNSIGNED LONG
DIM dat AS _UNSIGNED LONG
DIM siz AS _UNSIGNED LONG
DIM so AS LONG
DIM sc AS LONG
DIM numnames AS _UNSIGNED INTEGER
DIM numids AS _UNSIGNED INTEGER
DIM w AS _UNSIGNED INTEGER
DIM ln AS _UNSIGNED INTEGER
DIM x AS _UNSIGNED INTEGER
DIM y AS _UNSIGNED INTEGER
DIM b AS _UNSIGNED _BYTE

GET 1, 1 + addr + 12, numnames
GET 1, 1 + addr + 14, numids
DIM nams(0 TO numnames + (numnames > 0)) AS STRING
DIM namsrva(0 TO numnames + (numnames > 0)) AS _UNSIGNED LONG
DIM ids(0 TO numids + (numids > 0)) AS _UNSIGNED LONG
DIM idsrva(0 TO numids + (numids > 0)) AS _UNSIGNED LONG

'get named entries
FOR x = 0 TO numnames - 1
GET 1, 1 + addr + 16 + (x * 8), dw
'the spec says its an rva, but it seems to be an offset in the section/table
'low 31 bits are an offset from bs
GET 1, 1 + bs + (dw AND &H7FFFFFFF), ln
FOR y = 0 TO ln - 1
GET 1, , w
SELECT CASE w
CASE &H20 TO &H7E: nams(x) = nams(x) + CHR$(w)
CASE ELSE: nams(x) = nams(x) + CHR$(&H1A)
END SELECT
IF y = 68 THEN EXIT FOR
NEXT
GET 1, 1 + addr + 16 + 4 + (x * 8), namsrva(x)
NEXT

'get numbered entries:
numnamest8 = numnames * 8
FOR x = 0 TO numids - 1
GET 1, 1 + addr + 16 + numnamest8 + (x * 8), ids(x)
GET 1, 1 + addr + 16 + 4 + numnamest8 + (x * 8), idsrva(x)
NEXT

'display:
VIEW PRINT
sc = 0
so = 0
DO
CLS 0 'qb64 bug? not locating to 1,1?
LOCATE 1, 1
SELECT CASE level
CASE 0: PRINT "1st level - Type";
CASE 1: PRINT "2nd level - Name";
CASE 2: PRINT "3rd level - Language";
CASE ELSE: PRINT LTRIM$(STR$(level)) + "th level";
END SELECT
PRINT "", "file ptr: "; dword$(addr); ". Press 'D' to dump."
PRINT numnames; "names in this level, in this branch."
PRINT numids; "IDs in this level, in this branch."
IF (numnames OR numids) = 0 THEN
IF level THEN
PRINT "Press any key to go up one level."
SLEEP: DO: LOOP WHILE LEN(INKEY$)
EXIT SUB
ELSE
END
END IF
END IF
PRINT "names are unicode. For simplicity, non ASCII chars will be shown as " + CHR$(&H1A) + "."
IF level THEN
PRINT "BKSP or ESC to go up one level."
ELSE
PRINT "BKSP or ESC to exit."
END IF
PRINT "UP, DOWN, PGUP, PGDN, HOME, END to navigate list."
PRINT "ENTER to select."
LOCATE 9, 1
PRINT STRING$(80, &HC4);
LOCATE 22, 1
PRINT STRING$(80, &HC4);
DO
COLOR 7, 0
LOCATE 8, 1: PRINT dword$(sc)
FOR x = 0 TO 11
LOCATE 10 + x, 1
IF x + so = sc THEN COLOR 15, 1 ELSE COLOR 7, 0
IF (x + so) < numnames THEN
PRINT nams(x + so); SPACE$(70 - LEN(nams(x + so)));
PRINT dword$(bs + (namsrva(x + so) AND &H7FFFFFFF&));
COLOR 7, 0
LOCATE 7, 18
IF namsrva(x + so) AND &H80000000~& THEN
PRINT "(descend)";
ELSE
PRINT "(extract)";
END IF
ELSEIF (x + so) < (numnames + numids) THEN
PRINT "ID: " + dword$(ids(x + so - numnames));
IF level = 0 THEN
PRINT " (RT_";
'derived from:
' http://msdn.microsoft.com/en-us/library/ms648009(v=VS.85).aspx
SELECT CASE ids(x + so - numnames)
CASE 9: PRINT "ACCELERATOR";
CASE 21: PRINT "ANICURSOR";
CASE 22: PRINT "ANIICON";
CASE 2: PRINT "BITMAP";
CASE 1: PRINT "CURSOR";
CASE 5: PRINT "DIALOG";
CASE 17: PRINT "DLGINCLUDE";
CASE 8: PRINT "FONT";
CASE 7: PRINT "FONTDIR";
CASE 12: PRINT "GROUP_CURSOR";
CASE 14: PRINT "GROUP_ICON";
CASE 23: PRINT "HTML";
CASE 3: PRINT "ICON";
CASE 24: PRINT "MANIFEST";
CASE 4: PRINT "MENU";
CASE 11: PRINT "MESSAGETABLE";
CASE 19: PRINT "PLUGPLAY";
CASE 10: PRINT "RCDATA";
CASE 6: PRINT "STRING";
CASE 16: PRINT "VERSION";
CASE 20: PRINT "VXD";
END SELECT
PRINT ")";
END IF
PRINT SPACE$(71 - POS(0));
PRINT dword$(bs + (idsrva(x + so - numnames)));
COLOR 7, 0
LOCATE 7, 18
IF idsrva(x + (so - numnames)) AND &H80000000~& THEN
PRINT "(descend)";
ELSE
PRINT "(extract)";
END IF
ELSE
PRINT SPACE$(80);
END IF
NEXT
DO
k = INKEY$
LOOP UNTIL LEN(k)
SELECT CASE k
CASE "d", "D"
dump addr
EXIT DO
CASE MKI$(&H4800) 'up
IF sc > 0 THEN
sc = sc - 1
IF sc < so THEN so = sc
END IF
CASE MKI$(&H5000) 'down
IF sc < (numnames + numids - 1) THEN
sc = sc + 1
IF sc > (so + 11) THEN
so = sc - 11
IF so > sc THEN so = 0 'unsigned
END IF
END IF
CASE MKI$(&H4700) 'home
sc = 0
so = 0
CASE MKI$(&H4F00) 'end
sc = numnames + numids - 1
so = sc - 11
IF so < 0 THEN so = 0
CASE MKI$(&H4900) 'pgup
sc = sc - 12
so = so - 12
IF sc < 0 THEN sc = 0
IF so < 0 THEN so = 0
CASE MKI$(&H5100) 'pgdn
sc = sc + 12
IF sc > (numnames + numids - 1) THEN sc = numnames + numids - 1
so = sc - 11
IF so < 0 THEN so = 0
CASE CHR$(&H8), CHR$(&H1B) 'bksp, esc
EXIT SUB
CASE CHR$(&HD) 'enter
IF sc < numnames THEN
dw = namsrva(sc)
ELSE
dw = idsrva(sc - numnames)
END IF
IF dw AND &H80000000~& THEN
'the spec says its an rva, but it seems to be an offset in the section/table
processtable bs, bs + (dw AND &H7FFFFFFF&), level + 1
EXIT DO
ELSE
'the spec says its an rva, but it seems to be an offset in the section/table
dw = bs + dw
GET 1, 1 + dw, dat
GET 1, 1 + 4 + dw, siz
CLS
LOCATE 1, 1 'qb64 seems to default to line 2
SEEK 1, 1 + rva2fp(dat)
FOR dw = 1 TO siz
IF dw > 400 THEN EXIT FOR
GET 1, , b
SELECT CASE b
CASE 7, 9 TO &HD, &H1F: PRINT ".";
CASE ELSE: PRINT CHR$(b);
END SELECT
NEXT
LOCATE 24, 1
PRINT dword$(siz) + " bytes.";
LOCATE 23, 1
LINE INPUT "(leave blank to cancel) Output file? "; k
IF LEN(k) THEN
IF _FILEEXISTS(k) THEN
PRINT
PRINT "File already exists.";
ELSE
OPEN k FOR BINARY AS 2
SEEK 1, 1 + rva2fp(dat)
FOR dw = 1 TO siz
GET 1, , b
PUT 2, , b
NEXT
CLOSE 2
PRINT
PRINT "Done.";
END IF
SLEEP: DO: LOOP WHILE LEN(INKEY$)
END IF
EXIT DO
END IF
END SELECT
LOOP
LOOP
END SUB

FUNCTION word$ (w AS _UNSIGNED INTEGER)
DIM t AS STRING
t = LCASE$(HEX$(w))
word = "0x" + STRING$(4 - LEN(t), &H30) + t
END FUNCTION

FUNCTION dword$ (dw AS _UNSIGNED LONG)
DIM t AS STRING
t = LCASE$(HEX$(dw))
dword = "0x" + STRING$(8 - LEN(t), &H30) + t
END FUNCTION

FUNCTION rva2fp~& (rva AS _UNSIGNED LONG)
DIM w AS _UNSIGNED INTEGER
FOR w = 0 TO NumberOfSections - 1
IF rva < secsva(w) THEN EXIT FOR
NEXT
w = w - 1
IF w > NumberOfSections - 1 THEN PRINT dword$(rva), w: SLEEP
rva2fp = rva + (secsfp(w) - secsva(w))
END FUNCTION

SUB dump (addr AS _UNSIGNED LONG)
DIM t AS STRING
DIM dw AS _UNSIGNED LONG
DIM ul AS _UNSIGNED LONG
DIM b AS _UNSIGNED _BYTE

_CONTROLCHR OFF
VIEW PRINT
ul = addr
DO
COLOR 7, 0
CLS 0
SEEK 1, 1 + ul
FOR dw = ul TO (ul AND &HFFFFFFF0) + &H15F
IF (1 + ul) > LOF(1) THEN EXIT FOR
GET 1, , b
IF (dw AND &HF) = 0 THEN
t = LCASE$(HEX$(dw))
COLOR 7
PRINT STRING$(8 - LEN(t), &H30) + t; SPACE$(2);
END IF
IF (dw AND &H4) THEN COLOR 3 ELSE COLOR 2
LOCATE , 14 + ((dw AND &HF) * 3)
t = LCASE$(HEX$(b))
IF b < &H10 THEN PRINT "0" + t; ELSE PRINT t;
LOCATE , 65 + (dw AND &HF)
PRINT CHR$(b);
NEXT
PRINT
COLOR 7
LINE INPUT "(leave blank to cancel) Address: 0x"; t
IF LTRIM$(t) = "" THEN EXIT DO
ul = VAL("&h" + t + "&") AND &H7FFFFFFF
LOOP
END SUB
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  Icons and Cursors
*  Bitmaps , [_ICON](ICON.md)  , $EXEICON
*  SaveIcon32

</blockquote>
