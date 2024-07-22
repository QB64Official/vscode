## Icons and Cursors
---
<blockquote>

### 

</blockquote>

#### SYNTAX

<blockquote>

`The AND mask is read as a one BPP black and white image with each _BIT being on(white) or off(black). It is white where the background may show and black where the colors (including black) from the XOR mask will show. It is placed using the AND action by Windows first. Then the XOR mask is placed on top using an XOR action. The following SUB procedure can adapt to 24 bit colors so that colors will not be affected. Make sure that the BPP value is SHARED or pass it using a parameter!`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
' ******************* ICONCUR.BI
' INCLUDE this BI file at the start of a program
'
TYPE ICONTYPE            'Icon or cursor file header
 Reserved AS INTEGER    'Reserved (always 0)
 ID AS INTEGER          'Resource ID (Icon = 1, Cursor = 2)
 Count AS INTEGER       'Number of icon bitmaps in Directory of icon entries array
END TYPE '6 bytes

TYPE ICONENTRY           'or unanimated Cursor entry (ANI are animated cursors)
 PWidth AS _UNSIGNED _BYTE 'Width of icon in pixels (USE THIS)
 PDepth AS _UNSIGNED _BYTE 'Height of icon in pixels (USE THIS)
 NumColors AS _BYTE     'Maximum number of colors. (2, 8 or 16 colors. 256 or 24/32 bit = 0)
 RES2 AS _BYTE          'Reserved. Not used (always 0)
 HotSpotX AS INTEGER    'Icon: NumberPlanes(normally 0), Cursor: hotspot pixels from left
 HotSpotY AS INTEGER    'Icon: BitsPerPixel(normally 0), Cursor: hotspot pixels from top
 DataSize AS LONG       'Length of image data in bytes minus Icon and Entry headers (USE THIS)
 DataOffset AS LONG     'Start Offset byte position of icon bitmap header(add 1 if TYPE GET)
END TYPE '16 bytes       'BMP header and image data follow ALL entry data(after 22, 38, 54, etc.)

TYPE BMPHEADER           'Bitmap type header found using entry DataOffset + 1
 IconHSize AS LONG      'size of ICON header (always 40 bytes)
 ICONWidth AS LONG      'bitmap width in pixels (signed integer).
 ICONDepth AS LONG      'Total map height in pixels (signed integer is 2 times image height)
 NumPlanes AS INTEGER   'number of color planes. Must be set to 1.
 BPP AS INTEGER         'bits per pixel  1, 4, 8, 16, 24 or 32.(USE THIS)
 Compress AS LONG       'compression method should always be 0.
 RAWSize AS LONG        'size of the raw ICON image data(may only be XOR mask size).
 Hres AS LONG           'horizontal resolution of the image(not normally used)
 Vres AS LONG           'vertical resolution of the image(not normally used)
 NumColors AS LONG      'number of colors in the color palette(not normally used)
 SigColors AS LONG      'number of important colors used(not normally used)
END TYPE '40 bytes       'palette and/or image data immediately follow this header!
```
  
```vb
DIM ICO AS ICONTYPE
items% = ICO.Count
DIM SHARED Entry(items%) AS ICONENTRY
DIM SHARED BMP(items%) AS BMPHEADER
```
  
```vb
Single Image Icon or Cursor

             ┌──────┐   ┌─────┐    ┌──────┐    ┌───────┐     ┌───────┐     ┌───────┐
             │ ICON │   │Entry│    │BMP[1]│    │PALETTE│     │  XOR  │     │  AND  │
             │Header├─6─┤ [1] ├─22─┤Header├─62─┤ 4 BPP ├─126─┤ 4 BPP ├─638─┤ 1 BPP │
             │  6B  │   │16 B │    │ 40 B │    │½ byte │     │32*32*½│     │32*32\8│
             └──────┘   └─────┘    └──────┘    │ 64 B  │     │ 512 B │     │ 128 B │
                                               └───────┘     └───────┘     └───────┘

                                    Multiple Image (3)

                 ┌──────┐   ┌───────┐    ┌───────┐    ┌───────┐
                 │ ICON │   │ Entry │    │ Entry │    │ Entry │
                 │Header├─6─┤  [1]  ├─22─┤  [2]  ├─38─┤  [3]  ├─54─┐ Entry precedes all data
                 │  6B  │   │ 16 B  │    │ 16 B  │    │ 16 B  │    │
                 └──────┘   └───────┘    └───────┘    └───────┘    │
                                ┌───◄ GET Offset + 1 = 55◄─────────┘
                            ┌───┴───┐    ┌───────┐    ┌───────┐
                            │ BMP[1]│    │ BMP[2]│    │ BMP[3]│
                            │Header │  ┌─┤Header │  ┌─┤Header │  Image settings
                            │ 40 B  │  │ │ 40 B  │  │ │ 40 B  │
                            └───┬───┘  │ └───┬───┘  │ └───┬───┘
                            ┌───┴───┐  ▲ ┌───┴───┐  ▲     │
                            │PALETTE│  O │PALETTE│  O     │
                            │ 4 BPP │  f │ 8 BPP │  f   24 BPP   RGB color intensities
                            │½ byte │  f │1 byte │  f   3 byte
                            │ 64 B  │  s │1024 B │  s     │
                            └───┬───┘  e └───┬───┘  e     │
                            ┌───┴───┐  t ┌───┴───┐  t ┌───┴───┐
                            │  XOR  │  + │  XOR  │  + │  XOR  │
                            │16*16*½│  1 │32*32*1│  1 │48*48*3│  Image color data
                            │ 128 B │  ▲ │1024 B │  ▲ │6912 B │
                            └───┬───┘  │ └───┬───┘  │ └───┬───┘
                           ┌────┴───┐  │ ┌───┴───┐  │ ┌───┴────┐
                           │   AND  │  │ │  AND  │  │ │  AND   │
                           │ 1 BPP  ├──┘ │ 1 BPP ├──┘ │ 1 BPP  │ B & W mask
                           │16*(2+2)│    │32*32\8│    │48*(6+2)│
                           │  64 B  │    │ 128 B │    │ 384 B  │
                           └────────┘    └───────┘    └────────┘

     Add one to Offset position when using one TYPE definition GET for the BMP Header data!
                      BPP = bits per pixel B = bytes +2 = padder bytes
```
  
```vb
SUB ANDMask   'MASK is B & W. Black area holds XOR colors, white displays background
BitsOver = Entry(i).PWidth& MOD 32
IF BitsOver THEN ZeroPAD$ = SPACE$((32 - BitsOver) \ 8) 'look for sizes not multiples of 32 bits
_DEST bmp&  'destination handle if used
y = Entry(i).PDepth - 1: a$ = " ": p$ = " "
DO
 x = 0
 DO
   GET #1, , a$   'position is immediately AFTER XOR mask data
   ByteVAL = ASC(a$)   'MSBit is left when calculating 16 X 16 cursor map 2 byte integer
   FOR Bit% = 7 TO 0 STEP -1   'values despite M$ documentation that says otherwise!
     IF ByteVAL AND 2 ^ Bit% THEN
       PSET (x, y), _RGB(255, 255, 255) '_RGB can be used in 1, 4, 8 or 24/32 BPP
     ELSE: PSET (x, y), _RGB(0, 0, 0)
     END IF
     x = x + 1        '16 X 16 = 32 bytes, 32 X 32 = 128 bytes AND MASK SIZES
   NEXT Bit%          '48 X 48 = 288 bytes, 64 X 64 = 512 bytes, 128 X 128 = 2048 bytes
 LOOP WHILE x < Entry(i).PWidth
 GET #1, , ZeroPAD$   '16 X 16 and 48 X 48 = 2 byte end padder per row in the AND MASK
 y = y - 1            'adds 32 and 96 bytes respectively to the raw data size!
LOOP UNTIL y = -1
END SUB
```
  
```vb
Entry(item%).DataSize = DataSize&(item%) 'example function call

FUNCTION DataSize&(i AS INTEGER)
PixelBytes! = BMP(i)BPP / 8      '1 BPP = 1/8; 4 BPP = 1/2; 8 BPP = 1; 24 BPP = 3

SELECT CASE BPP
 CASE 1: PaletteBytes% = 0
   IF Entry(i).PWidth MOD 32 THEN Pad% = (32 - (Entry(i).PWidth MOD 32)) \ 8 ELSE Pad% = 0
 CASE 4: PaletteBytes% = 64
   IF Entry(i).PWidth MOD 8 THEN Pad% = (8 - (Entry(i).PWidth MOD 8)) \ 2 ELSE Pad% = 0
 CASE 8: PaletteBytes% = 1024
   IF Entry(i).PWidth MOD 4 THEN Pad% = 4 - (Entry(i).PWidth MOD 4) ELSE Pad% = 0
 CASE IS > 8: PaletteBytes% = 0
   IF ((Picture{{Cl|Entry(i).PWidth * 3) MOD 4) THEN
     Pad% = ((4 - ((Entry(i).PWidth * 3) MOD 4)))
   ELSE: Pad% = 0
   END IF
END SELECT

XORsize& = ((Entry(i).PWidth + Pad%) * Entry(i).PDepth) * PixelBytes!
IF Entry(i).PWidth MOD 32 THEN ANDpad% = (32 - (Entry(i).PWidth MOD 32)) ELSE ANDpad% = 0
ANDsize& = ((Entry(i).PWidth + ANDpad%) * Entry(i).PDepth) \ 8

DataSize& = XORsize& + ANDsize& + PaletteBytes% + 40  'header is always 40 bytes
END FUNCTION
```
  
```vb
INPUT "Enter an icon width(multiples of 8 or 16 only): ", width

IF (width MOD 32) THEN bitpad = (32 - (width MOD 32))
bytes = (width + bitpad) * width \ 8 'dividing by 8 returns the byte size

PRINT "AND mask size:"; bytes; "bytes with a"; bitpad; "bit padder."
```
  
```vb
Enter an icon width(multiples of 8 or 16 only): 16
AND mask size: 64 bytes with a 16 bit padder.
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* $EXEICON
* [_ICON](./_ICON.md)
* Creating Sprite Masks
* Bitmaps , GIF Images
* Icon Extraction

</blockquote>
