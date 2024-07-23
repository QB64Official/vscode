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


## [SHARED](SHARED.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SHARED)
---
<blockquote>

### The SHARED statement allows variables to be passed automatically to any SUB or FUNCTION procedure.

</blockquote>

#### SYNTAX

<blockquote>

`DIM SHARED Qt AS STRING * 1`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Defining variable types with AS or type suffixes.
```vb
DIM SHARED Qt AS STRING * 1, price AS DOUBLE, ID AS INTEGER
DIM SHARED Q$, prices#, IDs%
```
  
<br>



##### Example 2: The DIR\$ function returns a filename or a list when more than one exist. The file spec can use a path and/or wildcards.
```vb
FOR i = 1 TO 2
LINE INPUT "Enter a file spec: ", spec$
file$ = DIR$(spec$)        'use a file spec ONCE to find the last file name listed
PRINT DIRCount%, file$,    'function can return the file count using SHARED variable
DO
K$ = INPUT$(1)
file$ = DIR$("")         'use an empty string parameter to return a list of files!
PRINT file$,
LOOP UNTIL LEN(file$) = 0  'file list ends with an empty string
NEXT
END

FUNCTION DIR$ (spec$)
CONST TmpFile$ = "DIR$INF0.INF", ListMAX% = 500  'change maximum to suit your needs
SHARED DIRCount%                                 'returns file count if desired
STATIC Ready%, Index%, DirList$()
IF NOT Ready% THEN REDIM DirList$(ListMax%): Ready% = -1  'DIM array first use
IF spec$ > "" THEN                               'get file names when a spec is given
SHELL _HIDE "DIR " + spec$ + " /b > " + TmpFile$
Index% = 0: DirList$(Index%) = "": ff% = FREEFILE
OPEN TmpFile$ FOR APPEND AS #ff%
size& = LOF(ff%)
CLOSE #ff%
IF size& = 0 THEN KILL TmpFile$: EXIT FUNCTION
OPEN TmpFile$ FOR INPUT AS #ff%
DO WHILE NOT EOF(ff%) AND Index% < ListMAX%
Index% = Index% + 1
LINE INPUT #ff%, DirList$(Index%)
LOOP
DIRCount% = Index%                       'SHARED variable can return the file count
CLOSE #ff%
KILL TmpFile$
ELSE IF Index% > 0 THEN Index% = Index% - 1 'no spec sends next file name
END IF
DIR$ = DirList$(Index%)
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DIM](DIM.md) , [REDIM](REDIM.md)
* [COMMON](COMMON.md) , [COMMON](COMMON.md) [SHARED](SHARED.md)
</blockquote>
