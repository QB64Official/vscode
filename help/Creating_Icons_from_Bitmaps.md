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


## [Creating Icons from Bitmaps](Creating_Icons_from_Bitmaps.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Creating%20Icons%20from%20Bitmaps)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
CONST dat = 14~&
DIM Dword AS _UNSIGNED LONG
DIM size AS _UNSIGNED LONG
DIM wide AS _UNSIGNED LONG
DIM high AS _UNSIGNED LONG
DIM Word AS _UNSIGNED INTEGER
DIM Byte AS _UNSIGNED _BYTE
DO
LINE INPUT "Enter existing BMP file name to convert to icon: ", BMP$
LOOP UNTIL _FILEEXISTS(BMP$)
DO
LINE INPUT "Enter ICO file name to create (must not exist): ", ICO$
LOOP UNTIL _FILEEXISTS(ICO$) = 0

OPEN BMP$ FOR BINARY ACCESS READ AS 1 'BITMAP name
OPEN ICO$ FOR OUTPUT AS 2 'destination icon name
CLOSE 2
OPEN ICO$ FOR BINARY AS 2
GET 1, 1 + 2, size 'skip "BM" in bitmap
size = size - 14 '14 bytes not used

Word = 0
PUT 2, 1, Word 'reserved
Word = 1
PUT 2, , Word 'resource id 1 as icon, 2 as cursor
PUT 2, , Word 'icon count in resource
GET 1, 1 + dat + 4, wide 'skip header size in BMP
SELECT CASE wide
CASE IS < &H100: Byte = wide '< 256
CASE &H100: Byte = 0
CASE ELSE: PRINT "bitmap is larger than 256 pixels.": END
END SELECT
PUT 2, , Byte 'width
GET 1, , high
SELECT CASE high
CASE IS < &H100: Byte = high '< 256
CASE &H100: Byte = 0 '256 = 0
CASE ELSE: PRINT "bitmap is larger than 256 pixels.": END
END SELECT
PUT 2, , Byte 'height
Byte = 0
GET 1, 1 + dat + 14, Word 'number of colors from BPP
IF Word < 8 THEN Byte = 2 ^ Word ELSE Byte = 0 '256 colors = 0, 4BPP = 16
PUT 2, , Byte 'num of colors
Byte = 0
Dword = 0
PUT 2, , Byte 'reserved as byte
PUT 2, , Dword 'reserved 2 hotspots = 0
Dword = size + (((wide * high) + 7) \ 8)
PUT 2, , Dword 'size of data
Dword = 22 '6 byte header + 16
PUT 2, , Dword 'offset

'copy bitmap header down 14 bytes, palette and image info, but double height
SEEK 1, 1 + dat 'BMP info header size
FOR Dword = 1 TO size 'actual BMP data from Header size on
GET 1, , Byte
IF Dword = 1 + 8 THEN
Word = high * 2 ' 2 times height
PUT 2, , Word
Dword = Dword + 1
GET 1, , Byte
ELSE
PUT 2, , Byte
END IF
NEXT

'add null AND bitmask for full square image
Byte = 0
BitsOver& = wide MOD 32  'pad the AND mask for minimum of 4 byte width
IF BitsOver& THEN ANDpad& = (32 - BitsOver&) ELSE ANDpad& = 0
FOR Dword = 1 TO high * (wide + ANDpad&) \ 8
PUT 2, , Byte
NEXT
CLOSE
SYSTEM
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_ICON](ICON.md) , [&dollar;EXEICON](&dollar;EXEICON.md)
* SaveIcon32 (saves any image to icon)
* Icons and Cursors
* Bitmaps
</blockquote>
