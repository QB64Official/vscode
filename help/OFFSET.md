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


## [_OFFSET](OFFSET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_OFFSET)
---
<blockquote>

### The _OFFSET variable type stores the location of a value in memory. The byte size varies as required by the system.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS _OFFSET`

</blockquote>

#### DESCRIPTION

<blockquote>


* [_OFFSET](OFFSET.md) types can be created as signed or [_UNSIGNED](UNSIGNED.md) at the programmer's discretion.
* The type suffix for [_OFFSET](OFFSET.md) is %& which designates the integer value's flexible size.
* Offset values are only useful when used in conjunction with [_MEM](MEM.md) or [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) procedures.
* OFFSET values are used as a part of the [_MEM](MEM.md) variable type in QB64. Variable.OFFSET returns or sets the current position in memory.
* API [LIBRARY](LIBRARY.md) parameter or type names may include lp, ptr or p which designates them as a pointer type.
* Warning: [_OFFSET](OFFSET.md) values cannot be cast to other variable type values reliably.
* Warning: Variable length [STRING](STRING.md) values can move about in memory at any time. If you get the [_OFFSET](OFFSET.md) of a variable length sting on one code line and use it on the next it may not be there anymore. To be safe, move variable length strings into fixed length strings first.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: The SHBrowseForFolder function receives information about the folder selected by the user in Windows XP and 7.
```vb
DECLARE CUSTOMTYPE LIBRARY
FUNCTION FindWindow& (BYVAL ClassName AS _OFFSET, WindowName$)
END DECLARE

_TITLE "Super Window"
hwnd& = FindWindow(0, "Super Window" + CHR$(0))

TYPE BROWSEINFO  'typedef struct _browseinfo 'Microsoft MSDN
hwndOwner AS LONG '              '  HWND
pidlRoot AS _OFFSET '            '  PCIDLIST_ABSOLUTE
pszDisplayName AS _OFFSET '      '  LPTSTR
lpszTitle AS _OFFSET '           '  LPCTSTR
ulFlags AS _UNSIGNED LONG        '  UINT
lpfn AS _OFFSET '                '  BFFCALLBACK
lParam AS _OFFSET '              '  LPARAM
iImage AS LONG '                 '  int
END TYPE  'BROWSEINFO, *PBROWSEINFO, *LPBROWSEINFO;

DECLARE DYNAMIC LIBRARY "shell32"
FUNCTION SHBrowseForFolder%& (x AS BROWSEINFO) 'Microsoft MSDN
SUB SHGetPathFromIDList (BYVAL lpItem AS _OFFSET, BYVAL szDir AS _OFFSET) 'Microsoft MSDN
END DECLARE

DIM b AS BROWSEINFO
b.hwndOwner = hwnd
DIM s AS STRING * 1024
b.pszDisplayName = _OFFSET(s$)
a$ = "Choose a folder!!!" + CHR$(0)
b.lpszTitle = _OFFSET(a$)
DIM o AS _OFFSET
o = SHBrowseForFolder(b)
IF o THEN
PRINT LEFT$(s$, INSTR(s$, CHR$(0)) - 1)
DIM s2 AS STRING * 1024
SHGetPathFromIDList o, _OFFSET(s2$)
PRINT LEFT$(s2$, INSTR(s2$, CHR$(0)) - 1)
ELSE
PRINT "Cancel?"
END IF
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_WINDOWHANDLE](WINDOWHANDLE.md)
* Using [_OFFSET](OFFSET.md)
* [_OFFSET](OFFSET.md) (function) , [_MEM](MEM.md)
* [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)
* [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)
* Variable Types
</blockquote>
