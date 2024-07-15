# _ICON

The _ICON statement uses an image handle from [_LOADIMAGE](_LOADIMAGE.md) for the program header and icon image in the OS.

  

## Syntax

_ICON [*mainImageHandle&*[, *smallImageHandle&*
  

## Parameters

* *mainImageHandle&* is the [LONG](*mainImageHandle&*[, *smallImageHandle&*
  

## Parameters

* *mainImageHandle&* is the [LONG.md) handle value of the OS icon and title bar image pre-loaded with [_LOADIMAGE](_LOADIMAGE.md) when used alone.
* *smallImageHandle&* is the [LONG](LONG.md) handle value of a different title bar image pre-loaded with [_LOADIMAGE](_LOADIMAGE.md) when used.
* No image handle designates use of the default QB64 icon or the embedded icon set by [$EXEICON]($EXEICON.md).

  

## Description

* If no image handle is passed, the default QB64 icon will be used (all versions). If the [$EXEICON]($EXEICON.md) metacommand is used, _ICON without an image handle uses the embedded icon from the binary (Windows only).
* Beginning with **version 1.000**, the following is considered:

*mainImageHandle&* creates the image as the icon in the OS and the image in the program header (title bar).
*smallImageHandle&* can be used for a different image in the program header bar.
* The header image will automatically be resized to fit the icon size of 16 X 16 if smaller or larger.
* Once the program's icon is set, the image handle can be discarded with [_FREEIMAGE](_FREEIMAGE.md).

### Errors

* **NOTE: Icon files are not supported with [_LOADIMAGE](_LOADIMAGE.md) and an error will occur. See Example 2.**
* Images used can be smaller or larger than 32 X 32 pixels, but image resolution may be affected.
* It is important to free unused or uneeded images with [_FREEIMAGE](_FREEIMAGE.md) to prevent memory overflow errors.
* In **SCREEN 0** (default text mode) you need to specify 32-bit mode in [_LOADIMAGE](_LOADIMAGE.md) to load images.

  

## Examples

*Example 1:* Loading an image to a 32 bit palette in SCREEN 0 (the default screen mode).

``` i& =[_LOADIMAGE](_LOADIMAGE.md)("RDSWU16.BMP", 32) '<<<<<<< use your image file name here  [IF](IF.md) i& < -1 THEN   _ICON i&   [_FREEIMAGE](_FREEIMAGE.md) i& ' release image handle after setting icon [END IF](END IF.md)  
```

*Note:* _ICON images can be freed if the [SCREEN](SCREEN.md) mode stays the same. Freed image handles can on longer be referenced.
  

*Example 2:* Function that converts an icon into a temporary bitmap for use in QB64. Function returns the available image count.

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 256) [_TITLE](_TITLE.md) "Icon Converter" icon$ = "daphne.ico"     '<<<<<<<<< change icon file name bitmap$ = "tempfile.bmp" indx% = 6  '1 minimum <<<<<<< higher values than count get highest entry image in icon file  [IF](IF.md) Icon2BMP(icon$, bitmap$, indx%) [THEN](THEN.md)   img& = [_LOADIMAGE](_LOADIMAGE.md)(bitmap$) '  use 32 as color mode in SCREEN 0   [IF](IF.md) img& < -1 [THEN](THEN.md) '           check that handle value is good before loading     _ICON img& '                place image in header     [_PUTIMAGE](_PUTIMAGE.md) (300, 250), img& 'place image on screen     [_FREEIMAGE](_FREEIMAGE.md) img& '           always free unused handles to save memory     [KILL](KILL.md) bitmap$ '              comment out and/or rename to save the bitmaps   [END IF](END IF.md) [END IF](END IF.md) [END](END.md) '                ----------------------------------------------------  [FUNCTION](FUNCTION.md) Icon2BMP% (filein [AS](AS.md) [STRING](STRING.md), fileout [AS](AS.md) [STRING](STRING.md), index [AS](AS.md) [INTEGER](INTEGER.md)) 'function creates a bitmap of the icon and returns the icon count [DIM](DIM.md) byte [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md), word [AS](AS.md) [INTEGER](INTEGER.md), dword [AS](AS.md) [LONG](LONG.md) [DIM](DIM.md) wide [AS](AS.md) [LONG](LONG.md), high [AS](AS.md) [LONG](LONG.md), BM [AS](AS.md) [INTEGER](INTEGER.md), bpp [AS](AS.md) [INTEGER](INTEGER.md)  rf = [FREEFILE](FREEFILE.md) [IF](IF.md) [LCASE$](LCASE$.md)([RIGHT$](RIGHT$.md)(filein, 4)) = ".ico" [THEN](THEN.md) 'check file extension is ICO only   [OPEN](OPEN.md) filein [FOR](FOR.md) [BINARY](BINARY.md) [ACCESS](ACCESS.md) [READ](READ.md) [AS](AS.md) rf [ELSE](ELSE.md) [EXIT FUNCTION](EXIT FUNCTION.md) [END IF](END IF.md) [GET](GET.md) rf, , word [GET](GET.md) rf, , word: icon = word [GET](GET.md) rf, , word: count = word [IF](IF.md) icon <> 1 [OR](OR.md) "OR (boolean)") count = 0 [THEN](THEN.md) [CLOSE](CLOSE.md) rf: [EXIT FUNCTION](EXIT FUNCTION.md) '[PRINT](PRINT.md) icon, count [IF](IF.md) index > 0 [AND](AND.md) "AND (boolean)") index <= count [THEN](THEN.md) entry = 16 * (index - 1) [ELSE](ELSE.md) entry = 16 * (count - 1) [SEEK](SEEK.md) rf, 1 + 6 + entry 'start of indexed Entry header [GET](GET.md) rf, , byte: wide = byte ' use this unsigned for images over 127 [GET](GET.md) rf, , byte: high = byte ' use this unsigned because it isn't doubled [GET](GET.md) rf, , word 'number of 4 BPP colors(256 & 32 = 0) & reserved bytes [GET](GET.md) rf, , dword '2 hot spots both normally 0 in icons, used for cursors [GET](GET.md) rf, , dword: size = dword 'this could be used, doesn't seem to matter [GET](GET.md) rf, , dword: offset = dword 'find where the specific index BMP header is '[PRINT](PRINT.md) wide; "X"; high, size, offset  [SEEK](SEEK.md) rf, 1 + offset + 14 'only read the BPP in BMP header [GET](GET.md) rf, , word: bpp = word [IF](IF.md) bpp = 0 [THEN](THEN.md) [CLOSE](CLOSE.md) rf: [EXIT FUNCTION](EXIT FUNCTION.md) [IF](IF.md) bpp <= 24 [THEN](THEN.md) pixelbytes = bpp / 8 [ELSE](ELSE.md) pixelbytes = 3 [IF](IF.md) bpp > 1 [AND](AND.md) "AND (boolean)") bpp <= 8 [THEN](THEN.md) palettebytes = 4 * (2 ^ bpp) [ELSE](ELSE.md) palettebytes = 0 datasize& = (wide * high * pixelbytes) + palettebytes 'no padder should be necessary filesize& = datasize& + 14 + 40 '                      data and palette + header bmpoffset& = palettebytes + 54 '                       data offset from start of bitmap readbytes& = datasize& + 28 ' (40 - 12) bytes left to read in BMP header and [XOR](XOR.md) mask only '[PRINT](PRINT.md) bpp, bmpoffset&, filesize&  BM = [CVI](CVI.md)("BM") 'this will create "BM" in file like [MKI$](MKI$.md) would wf = [FREEFILE](FREEFILE.md) [OPEN](OPEN.md) fileout [FOR](FOR.md) [BINARY](BINARY.md) [AS](AS.md) wf [PUT](PUT.md) wf, , BM [PUT](PUT.md) wf, , filesize& dword = 0 [PUT](PUT.md) wf, , dword [PUT](PUT.md) wf, , bmpoffset& 'byte location of end of palette or BMP header dword = 40 [PUT](PUT.md) wf, , dword '              start of 40 byte BMP header [PUT](PUT.md) wf, , wide [PUT](PUT.md) wf, , high [SEEK](SEEK.md) rf, 1 + offset + 12 '     after 12 bytes start copy of BMP header starting at planes dat$ = [STRING$](STRING$.md)(readbytes&, 0) 'create string to hold remaining bytes needed w/o [AND](AND.md) mask data [GET](GET.md) rf, , dat$ '               copy lower header, palette(if used) and [XOR](XOR.md) mask [PUT](PUT.md) wf, , dat$ '               put all of the string data in the bitmap all at once [CLOSE](CLOSE.md) rf, wf Icon2BMP = count '             return the number of icons available in the icon file [END FUNCTION](END FUNCTION.md)  
```

*Note:* Once the file has been loaded into memory, the image handle can still be used even after the file has been deleted.
  

## See also

* [_TITLE](_TITLE.md)
* [_LOADIMAGE](_LOADIMAGE.md)
* [$EXEICON]($EXEICON.md)
* [Creating Icon Bitmaps](Creating Icon Bitmaps.md) (member-contributed program)
* [Bitmaps](Bitmaps.md), [Icons and Cursors](Icons and Cursors.md)
* [Icon Extraction](Icon Extraction.md)

  
