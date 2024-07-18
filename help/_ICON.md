## _ICON
---

### The _ICON statement uses an image handle from _LOADIMAGE for the program header and icon image in the OS.

#### SYNTAX

`_ICON [ mainImageHandle& [, smallImageHandle& ]]`

#### PARAMETERS
* mainImageHandle& is the [LONG](./LONG.md) handle value of the OS icon and title bar image pre-loaded with [_LOADIMAGE](./_LOADIMAGE.md) when used alone.
* smallImageHandle& is the [LONG](./LONG.md) handle value of a different title bar image pre-loaded with [_LOADIMAGE](./_LOADIMAGE.md) when used.
* No image handle designates use of the default QB64 icon or the embedded icon set by $EXEICON .


#### DESCRIPTION
* If no image handle is passed, the default QB64 icon will be used (all versions). If the $EXEICON metacommand is used, [_ICON](./_ICON.md) without an image handle uses the embedded icon from the binary (Windows only).
* Beginning with version 1.000 , the following is considered:


#### EXAMPLES
##### Example 1: Loading an image to a 32 bit palette in SCREEN 0 (the default screen mode).
```vb
i& =_LOADIMAGE("RDSWU16.BMP", 32) '<<<<<<< use your image file name here

IF i& < -1 THEN
 _ICON i&
 _FREEIMAGE i& ' release image handle after setting icon
END IF
```
  
##### Example 2: Function that converts an icon into a temporary bitmap for use in QB64. Function returns the available image count.
```vb
SCREEN _NEWIMAGE(640, 480, 256)
_TITLE "Icon Converter"
icon$ = "daphne.ico"     '<<<<<<<<< change icon file name
bitmap$ = "tempfile.bmp"
indx% = 6  '1 minimum <<<<<<< higher values than count get highest entry image in icon file

IF Icon2BMP(icon$, bitmap$, indx%) THEN
 img& = _LOADIMAGE(bitmap$) '  use 32 as color mode in SCREEN 0
 IF img& < -1 THEN '           check that handle value is good before loading
   _ICON img& '                place image in header
   _PUTIMAGE (300, 250), img& 'place image on screen
   _FREEIMAGE img& '           always free unused handles to save memory
   KILL bitmap$ '              comment out and/or rename to save the bitmaps
 END IF
END IF
END
'                ----------------------------------------------------

FUNCTION Icon2BMP% (filein AS STRING, fileout AS STRING, index AS INTEGER)
'function creates a bitmap of the icon and returns the icon count
DIM byte AS _UNSIGNED _BYTE, word AS INTEGER, dword AS LONG
DIM wide AS LONG, high AS LONG, BM AS INTEGER, bpp AS INTEGER

rf = FREEFILE
IF LCASE$(RIGHT$(filein, 4)) = ".ico" THEN 'check file extension is ICO only
 OPEN filein FOR BINARY ACCESS READ AS rf
ELSE EXIT FUNCTION
END IF
GET rf, , word
GET rf, , word: icon = word
GET rf, , word: count = word
IF icon <> 1 OR count = 0 THEN CLOSE rf: EXIT FUNCTION
'PRINT icon, count
IF index > 0 AND index <= count THEN entry = 16 * (index - 1) ELSE entry = 16 * (count - 1)
SEEK rf, 1 + 6 + entry 'start of indexed Entry header
GET rf, , byte: wide = byte ' use this unsigned for images over 127
GET rf, , byte: high = byte ' use this unsigned because it isn't doubled
GET rf, , word 'number of 4 BPP colors(256 & 32 = 0) & reserved bytes
GET rf, , dword '2 hot spots both normally 0 in icons, used for cursors
GET rf, , dword: size = dword 'this could be used, doesn't seem to matter
GET rf, , dword: offset = dword 'find where the specific index BMP header is
'PRINT wide; "X"; high, size, offset

SEEK rf, 1 + offset + 14 'only read the BPP in BMP header
GET rf, , word: bpp = word
IF bpp = 0 THEN CLOSE rf: EXIT FUNCTION
IF bpp <= 24 THEN pixelbytes = bpp / 8 ELSE pixelbytes = 3
IF bpp > 1 AND bpp <= 8 THEN palettebytes = 4 * (2 ^ bpp) ELSE palettebytes = 0
datasize& = (wide * high * pixelbytes) + palettebytes 'no padder should be necessary
filesize& = datasize& + 14 + 40 '                      data and palette + header
bmpoffset& = palettebytes + 54 '                       data offset from start of bitmap
readbytes& = datasize& + 28 ' (40 - 12) bytes left to read in BMP header and XOR mask only
'PRINT bpp, bmpoffset&, filesize&

BM = CVI("BM") 'this will create "BM" in file like MKI$ would
wf = FREEFILE
OPEN fileout FOR BINARY AS wf
PUT wf, , BM
PUT wf, , filesize&
dword = 0
PUT wf, , dword
PUT wf, , bmpoffset& 'byte location of end of palette or BMP header
dword = 40
PUT wf, , dword '              start of 40 byte BMP header
PUT wf, , wide
PUT wf, , high
SEEK rf, 1 + offset + 12 '     after 12 bytes start copy of BMP header starting at planes
dat$ = STRING$(readbytes&, 0) 'create string to hold remaining bytes needed w/o AND mask data
GET rf, , dat$ '               copy lower header, palette(if used) and XOR mask
PUT wf, , dat$ '               put all of the string data in the bitmap all at once
CLOSE rf, wf
Icon2BMP = count '             return the number of icons available in the icon file
END FUNCTION
```
  


#### SEE ALSO
* [_TITLE](./_TITLE.md)
* [_LOADIMAGE](./_LOADIMAGE.md)
* $EXEICON
* Creating Icon Bitmaps (member-contributed program)
* Bitmaps , Icons and Cursors
* Icon Extraction
