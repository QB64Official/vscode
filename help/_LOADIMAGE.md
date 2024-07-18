## _LOADIMAGE
---

### The _LOADIMAGE function loads an image into memory and returns valid LONG image handle values that are less than -1.

#### SYNTAX

`handle& = _LOADIMAGE ( fileName$ [, [ mode& ][, requirements$ ]])`

#### PARAMETERS
* filename$ is literal or variable [STRING](./STRING.md) file name value.
* Optional mode& [LONG](./LONG.md) values can be:
	* 32 = 32-bit image.
	* 33 = 32-bit hardware image.
	* 256 = 8-bit (256 color) image using the QB64-PE master palette.
	* 257 = 8-bit (256 color) image using an adaptive palette.
* Optional requirements$ [STRING](./STRING.md) values can be a combination of ( version 3.6.0 and up ):
	* HARDWARE : Loads the image as a 32-bit hardware image. This can be used instead of mode 33 (above).
	* ADAPTIVE : Loads the image as an 8-bit (256 color) image using an adaptive palette. This can be used instead of mode 257 (above).
	* MEMORY : This will treat filename$ as a memory buffer containing the image file instead of a file name.
	* SXBR2 : Applies the Super-xBR 2x pixel scaler on the image.
	* MMPX2 : Applies the MMPX Style-Preserving 2x pixel scaler on the image.
	* HQ2XA : Applies the High Quality Cartoon 2x pixel scaler on the image.
	* HQ2XB : Applies the High Quality Complex 2x pixel scaler on the image.
	* HQ3XA : Applies the High Quality Cartoon 3x pixel scaler on the image.
	* HQ3XB : Applies the High Quality Complex 3x pixel scaler on the image.


#### DESCRIPTION
* Image file formats JPG, PNG, TGA, BMP, PSD, GIF, HDR, PIC, PNM, PCX, SVG and QOI are supported. A path can also be given.
* The mode& parameter can be 32, 33,256 or 257. Omit to use the current graphic screen settings.
* Mode 33 images are hardware accelerated and are created using [_LOADIMAGE](./_LOADIMAGE.md) or [_COPYIMAGE](./_COPYIMAGE.md) ( version 1.000 and up ).
* Mode 256 images are loaded using the QB64-PE master VGA palette. This is the same palette that is used for 256 color screens like [SCREEN](./SCREEN.md) 13.
* Mode 257 images are loaded using an adaptive palette making these images look better than mode 256 when used with 32-bit color screens ( version 3.1.0 and up ).
* Loaded images can be read invisibly using [POINT](./POINT.md) . Image coordinates start at 0 up to the [_WIDTH](./_WIDTH.md) - 1 and [_HEIGHT](./_HEIGHT.md) - 1.
* Images can be made into a program [SCREEN](./SCREEN.md) or page adopting the size and palette settings or placed using [_PUTIMAGE](./_PUTIMAGE.md) .
* Returns -1 as an invalid handle if it can't load the image. Valid [LONG](./LONG.md) handle returns are less than -1 ( handle& < -1).
* Valid images only need to be loaded once. The handle can be used repeatedly until freed.
* Images are not deallocated when the [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) they are created in ends. Free them with [_FREEIMAGE](./_FREEIMAGE.md) .
* Use the various pixel scalers to scale and load extremely low resolution (retro) graphics without blurring.


#### EXAMPLES
```vb
i& = _LOADIMAGE("mypic.jpg", 32)
SCREEN i&
```
  
```vb
SCREEN _NEWIMAGE(800, 600, 32)
img& = _LOADIMAGE("QB64.PNG")                           'use any 24/32 bit image

wide% = _WIDTH(img&): deep% = _HEIGHT(img&)
TLC$ = "BL" + STR$(wide% \ 2) + "BU" + STR$(deep% \ 2)  'start draw at top left corner
RET$ = "BD BL" + STR$(wide%)                            'return to left side of image
_SOURCE img&
_DEST 0
DO
 FOR angle% = 0 TO 360 STEP 15
   CLS
   DRAW "BM400, 300" + "TA=" + VARPTR$(angle%) + TLC$
   FOR y = 0 TO deep% - 1
     FOR x = 0 TO wide% - 1
       DRAW "C" + STR$(POINT(x, y)) + "R1"            'color and DRAW each pixel
     NEXT
     DRAW RET$
   NEXT
   _DISPLAY                         'NOTE: CPU usage will be HIGH!
 NEXT
LOOP UNTIL INKEY$ > ""
```
  
```vb
OPTION _EXPLICIT

DIM Bee& '                                               the image file
DIM cx%, cy% '                                           center x,y coordinate for image

RESTORE Data_tbee0_png_2314
Bee& = _LOADIMAGE(LoadResource, 32, "memory, hq3xa") '   load image file from memory and scale it using a pixel scaler
SCREEN _NEWIMAGE(640, 480, 32) '                         enter a graphics screen
CLS , _RGB32(127, 127, 127) '                            clear the screen with gray
LOCATE 2, 15 '                                           position text cursor
PRINT "An image loaded into memory and placed on the screen."
cx% = (640 - _WIDTH(Bee&)) \ 2 '                         calculate x center position
cy% = (480 - _HEIGHT(Bee&)) \ 2 '                        calculate y center position
_PUTIMAGE (cx%, cy%), Bee& '                             place image onto center of screen
SLEEP '                                                  wait for key stroke
_FREEIMAGE Bee& '                                        remove image from memory
SYSTEM '                                                 return to OS


Data_tbee0_png_2314:
DATA 2314,2988,-1
DATA eJx1VmdUU9kWDiihKDGEariKEKzUoV4FHWMgCYj0iVIVKeIocgNKiSCIkQuEZGBQRARxgCdNLNRQFYgE
DATA pGMARYOSCCqiSAkgUia8f28t3zrfPvtb31lnn732+bF3oqM9SV4OK4dAIORtyFbOYg+vmwxSvFt+tF0/
DATA QJ4+SrJCrK2vew0FaWJFFiK7hSIQKM66SdzUQakjEDLFNlZ414jhr3wPO6XjAPJ7V4D6yajg4eHaeQx/
DATA 7iqd7Pt2sNckOvBk8pNWtXNM5hOOmguzyMk3YSFCVqEeaS25T0YyLjYpFk23flFcKIp3biLzZgI1jjUe
DATA yriNaumc9Oye7DTKab9l/cprfEaYtZZ121hdEn1arRTCGXKa0NIEYDP1f0nLr0Qx+aVINfylyEl101GU
DATA w9uirxhQ0dLryI+G/ZemdqAEO1Al7V1d1hcu6C/zPjBovyt8IQIc/DpY4Qlp2/JEw12huF5G4dIR3owi
DATA CUu1ynOSlUDYLR7AMuNAyRAlDJOowCSObfNDwjM1trp4sFhhnrhQq0Ot/qKLPPCCWpe3uXr4aOp5PXxZ
DATA 5UZfnM1b9kUlb0FK2MMQWOdqYZ7Isu6wlYBN/bynlfj3TFXDgHfSm23+7JeR2PC6boF3+E5L7jR7TXL7
DATA /IAAPxW5PBCNKoIqstpJwbM+2lhGLx9CD33Z1PtHOCLb9Of7+XjKpCvisINvav3sf3KKfPbEjLw8of10
DATA EIW26HjrVr7F65I01NCI4MtLpwbqHhGHEEdySBRecVDePneX29LobvntaWzFezUsm15QnWmYUS+TCh7o
DATA nsJfHtBnX+KdohNKRI5rnShUnchaLF3MerchFUSmqU7PURTjkfp4kDV6+fhvJtDWMCrC8HpeaYi0u05V
DATA kx5wkGkdwuPHY+BaC6en3fJAqfKbXkrNhgAI8ZgpnLI4bhg1tQ8QRqy+xxK/VTftRZXrwfS8MbtDD28E
DATA WxczDVaOVireEMV5f/WhE3R21aIjXycPCm1/UMTJw8qAvTtKltu2YmYZA8lXQfURPNlHVE/9N3Hj/ccg
DATA dZiCnzBjiSnbs0rKWxgxXaiYDiWjwpocwExbM4GgXR4yCrsHtwSi7bbAab8xGbvN7xX54Zbpvhcfb7oP
DATA 1Uf1b+gDHwwCNBCbNJS3ujgFGbXlSx3ZFKuitPuap4gbQyJM0xKeaeaOOwojfuRLx4Pe8qJmeSBXnBSJ
DATA /6Sy8GAZUgsi96xVhzwEGg5wUKxh3DnH8PN6VgIob2z9xqN42j+JQlH5IT8M64tIqnB/BXbgemQmuZOn
DATA 5o67R4PZASPHE3NrDbeYwhQhLRpPHI1YebBFCCXLL+AUqTe+eSZPNFu6bvO8HiqlwySacJUf2kOFXAse
DATA 2K38wGqg6Y9C/U7C5+7nWxN9z7PX+ONYdZvmICD3HKvW95zEKUlW0gYdKGwt5CU4Yn87qdrlvpaSXPvJ
DATA krVgFe7rlQ4n6qnnGwEEXQiVjDsK1NRttPTA/oEQMmg/5RU/c/CoU9VlWdtw/dairwzHsiBN+w8Gh6cH
DATA f8ywzK4RaBfEDEx9itj5RkXAm7few69R86+7dS+qxzlrpM5OlXS/Crja8s+AfEZi2U0ZJZZd6f7kWmUc
DATA MKFP7H6zsNrDwW2p0XmS1MK8sDPIlHSARcniAbc6qmSC9lfEt7mMOqo8Fpf4LH/5RGggKzSZqR09FIIm
DATA LbmznqRqO6NynmInsl35SRf9bxmlkjmuDQqJgd4ef9Z5nN3jPWUBTDQZuJzxJ0nXfTBv/xCnhMBEGnOt
DATA y0W9beM1qbKPKuMI/JBFCXiO9Cjc/nm/CLCnkk1JuU/azPXgvqLIBpcf3tVAYquWpimp2EVUZaB4Q+64
DATA hR5MBigeLPGb21EF/KS2dEKzT+WYo2rm2Zpni+LPrb8y+FEWVQeX0aSKtqN0pM5e8hlhswdCMpo0v6qf
DATA 9IzW10vW8EDhAJrq7KfswtmZwJ3KKIUdnjnVWnr5d0xhL2ACb2gMZm2Oq7lKcAtNQKYO2hxz7tAszRri
DATA J71MwGpWMnB9J7SrgbTTrXfUwcm7EQxiXoKVVvphcs/CEucOhpufifqsCoxCr1xv5X5zbx59HAzZvagp
DATA 874bkRZWhYFv0lt8fhyst5w2K9rtfLkv5NX+YzkTSo2qeqQdAa8ZHM2Vjvb2pqz9oSlpadcmJ8/7+ftr
DATA qjCY6pPYgybqeXCAMBJvdlfVr+PRyplFB+2ZgNyYoM2J9bc/LYk2Vawtb3VX6To8u/y5cG3UlxdlHtT8
DATA /oSuCoFCUSkrLx97p/EXd2xBORHnWH0KbWqquf0v35H6yASuMB4c8fT6pEYaM9fIXS5ZcBGkpJN4PPqz
DATA kZwWXZSO8esKOds+sFOlwr0jSEU6eESSngxlSPiYdHQFAZSAV0U5vvRr4fNOVTsqf9p1lZkzCH4Smfvs
DATA 010OdjSWh2kslzkYCeYJlKli3NInTmcfQ/0LHogzL8a23inZxL20l8a3fZfpxq7Rj280LU9Z/Oo11D/d
DATA 8THQa2bvw2WTDcdmC/JGuQ6OP1dMXGN+KuxrXH1mhBb8t5es47u5nI66V20ALhvkhZ4p1TWm5m+Fb59l
DATA En83Ni5MnxBxRl2AiRL2jRj+C1Lp1NHwzSY018ZH2R4EBbjFw8GjhntrcLYBu7GcxvUtHYTBje8Na+/c
DATA GwJvDGVjYOmM5LDYgbi58Vo15Opiv7NTMQwOlE371lseqhdhSLu2V2GkqXYXAErPiyUJ0n0tTZQgIwrs
DATA vFIW9wa0MjCmgov0XSVDl05s+2xivHT24xKmYVpN8B0ND7YV0uiuP/YwY/dpVBJtS4H7GBgWXU/rcaMO
DATA 0/JDoxNaFs+f25NGTThR8EyYcqjUjdMamtQsk5jgPzu72+WnCrEXWlQgt7JS7JGALjna/dWf0VHxfQtG
DATA 0YcZIKBUQIE2+t+RQsI3O2SzPVdJgEQxPk4OlwLOxeYveaOrXXb8smk3/Z+JgAC8lUkOW93AGx2tePu3
DATA 9ax4lEHYWNtbPTxyKu5fF0s/3Q==

' Convert a base64 string to a normal string
FUNCTION DecodeBase64$ (s AS STRING)
   CONST BASE64_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

   DIM AS STRING buffer, result
   DIM AS _UNSIGNED LONG i
   DIM AS _UNSIGNED _BYTE char1, char2, char3, char4

   FOR i = 1 TO LEN(s) STEP 4
       char1 = INSTR(BASE64_CHARACTERS, CHR$(ASC(s, i))) - 1
       char2 = INSTR(BASE64_CHARACTERS, CHR$(ASC(s, i + 1))) - 1
       char3 = INSTR(BASE64_CHARACTERS, CHR$(ASC(s, i + 2))) - 1
       char4 = INSTR(BASE64_CHARACTERS, CHR$(ASC(s, i + 3))) - 1
       buffer = CHR$(_SHL(char1, 2) OR _SHR(char2, 4)) + CHR$(_SHL(char2 AND 15, 4) OR _SHR(char3, 2)) + CHR$(_SHL(char3 AND 3, 6) OR char4)

       result = result + buffer
   NEXT

   ' Remove padding
   IF RIGHT$(s, 2) = "==" THEN
       result = LEFT$(result, LEN(result) - 2)
   ELSEIF RIGHT$(s, 1) = "=" THEN
       result = LEFT$(result, LEN(result) - 1)
   END IF

   DecodeBase64 = result
END FUNCTION


' Loads a binary file encoded with Bin2Data
' Usage:
'   1. Encode the binary file with Bin2Data
'   2. Include the file or it's contents
'   3. Load the file like so:
'       Restore label_generated_by_bin2data
'       Dim buffer As String
'       buffer = LoadResource   ' buffer will now hold the contents of the file
FUNCTION LoadResource$
   DIM AS _UNSIGNED LONG ogSize, resize
   DIM AS _BYTE isCompressed

   READ ogSize, resize, isCompressed ' read the header

   DIM AS STRING buffer, result

   ' Read the whole resource data
   DO WHILE LEN(result) < resize
       READ buffer
       result = result + buffer
   LOOP

   ' Decode the data
   buffer = DecodeBase64(result)

   ' Expand the data if needed
   IF isCompressed THEN
       result = _INFLATE$(buffer, ogSize)
   ELSE
       result = buffer
   END IF

   LoadResource = result
END FUNCTION
```
  
```vb
OPTION _EXPLICIT
$RESIZE:SMOOTH

RESTORE svg_data

DIM AS STRING svg, buffer

DO
   READ buffer
   svg = svg + buffer
LOOP WHILE LEN(buffer) > 0

DIM img AS LONG: img = _LOADIMAGE(svg, 32, "memory")

SCREEN _NEWIMAGE(_WIDTH(img) \ 2, _HEIGHT(img) \ 2, 32)

_PUTIMAGE , img

END

svg_data:
DATA "<svg xmlns='http://www.w3.org/2000/svg' width='1000pt' height='1000pt' viewBox='0 0 1000 1000'><g fill='#201701'"
DATA "><path d='M107 94c-3-1 2-4 2-1l-2 1ZM96 672h35l24 168 220-43 4 21-255 42-28-188ZM521 768l41-8 5 25c0 2-3 3-4 3l-"
DATA "36 6-6-26Z' opacity='.1'/></g><g fill='#020092'><path d='m107 94 2-1 683 134 76 328 2 7 23 101-176 35-3-5-24-104"
DATA " 108-11 14 65 59-9-40-168h-60l17 78-84 7-18-82c0-1 0-3-2-2h-21l-17-71 169 7-12-54-26-1c-5-16-8-32-11-49 9 1 17 3"
DATA " 26 3l-12-53-220-38 29 146c-25-3-50-9-74-14l-28-144-329-57 20 134c-15-1-30-5-46-8v-1L107 94Z'/><path d='m284 200"
DATA " 140 22 6 33-25-2c4 23 9 46 12 70l-116-23h-1l-16-100ZM640 255l90 13 7 34-85-11c-2 0-5 0-5-3l-7-33ZM137 300l46 8 "
DATA "10 69 31 1c3 28 9 56 13 85l80 5 8 2-120 1 3 22-43-2-28-191ZM305 330l77 13c2 0 4 2 4 4-26 0-53-3-79-4l-2-13ZM656 "
DATA "330l89 8 9 39-89-5-9-42ZM519 368c8-1 16 2 24 3l50 8 4 15c11 1 23 0 35 2l7 33-22-2 9 40h-16l9 44c-20-1-41-1-61-3-"
DATA "6 0-12 0-18-2l31-1-3-17 38 3c-1-11-4-21-7-31-24-2-48-6-72-7l3 15-60 1c-5-27-12-54-15-81l59 3 6 28 72 9-5-27-63-9"
DATA "-5-24ZM325 425l77 1 8 43-77 1c-3-15-7-30-8-45Z'/></g><path fill='#00bbfd' d='m158 142 329 57 28 144 4 25 5 24-10"
DATA "-1-59-3-27-1 7 39h-33l-77-1-7-43-94-4-31-1-10-69-5-32-20-134m126 58 16 100h1c0 10 3 20 4 30l2 13c26 1 53 4 79 4l"
DATA "36 3-5-27c-3-24-8-47-12-70l25 2-6-33-140-22Z'/><path fill='#037efe' d='m560 211 220 38 12 53c-9 0-17-2-26-3 3 17"
DATA " 6 33 11 49l26 1 12 54-169-7h-14c-12-2-24-1-35-2l-4-15-4-22-29-146m80 44 7 33c0 3 3 3 5 3l85 11-7-34-90-13m16 75"
DATA " 9 42 89 5-9-39-89-8Z'/><g fill='#070636'><path d='m71 256 61 11v1c2 11 4 21 4 32l-23-4 29 195c8 1 16-2 23 3l11 "
DATA "75h-24c7 38 12 76 17 114l16 106 22-4 2 13 446-88c5 2 10 0 14 0l35-6v-4l12-2c2 10 6 20 7 31a19145 19145 0 0 0-202"
DATA " 39l-146 29-220 43-24-168-37-255-23-161ZM868 555c2 2 2 5 2 7l-2-7Z' opacity='.4'/></g><g fill='#030173'><path d="
DATA "'M132 268c16 3 31 7 46 8l5 32-46-8h-1c0-11-2-21-4-32ZM301 300l116 23 5 27-36-3c0-2-2-4-4-4l-77-13c-1-10-4-20-4-3"
DATA "0ZM515 343c24 5 49 11 74 14l4 22-50-8c-8-1-16-4-24-3l-4-25ZM224 378l94 4 7 43c1 15 5 30 8 45h-8l-8-2-80-5c-4-29-"
DATA "10-57-13-85ZM428 387l27 1c3 27 10 54 15 81h-60l-8-43h33l-7-39ZM514 391l10 1 63 9 5 27-72-9-6-28ZM632 396h14l17 7"
DATA "1h-37l-9-40 22 2-7-33ZM527 453c24 1 48 5 72 7 3 10 6 20 7 31l-38-3-4-20h-34l-3-15ZM165 491l43 2 37 243 359-59-22"
DATA "-115c-79 5-157 12-236 18l-11-67 205-7c6 2 12 2 18 2 20 2 41 2 61 3l17 84 54-6 24 104 3 5h-1l-12 2-49 10-446 88-2"
DATA "-13-31-216-11-75v-3Z'/><path d='m491 609 6-1 8 44-143 19-8-47 137-15Z'/></g><path fill='#013f59' d='m113 296 23 "
DATA "4h1l28 191v3c-7-5-15-2-23-3l-29-195Z' opacity='.4'/><path fill='#000314' d='M26 404c23 3 46 9 68 13l37 255H96l28"
DATA " 188 255-42-4-21 146-29 6 26 36-6c1 0 4-1 4-3l-5-25 11-2 11 50-23 5-441 86c-7 2-14 4-22 4L26 404Z' opacity='.1'/"
DATA "><path fill='#f87d03' d='M771 466h60l40 168-59 9-14-65-108 11-54 6-17-84-9-44h74c2-1 2 1 2 2l18 82 84-7-17-78Z'/"
DATA "><path fill='#febd04' d='m470 469 60-1h34l4 20 3 17-31 1-205 7 11 67c79-6 157-13 236-18l22 115-359 59-37-243-3-2"
DATA "2 120-1h8l77-1h60m21 140-137 15 8 47 143-19-8-44-6 1Z'/><g fill='#5d470f'><path d='M152 569h24l31 216-22 4-16-10"
DATA "6c-5-38-10-76-17-114ZM655 710l49-10v4l-35 6c-4 0-9 2-14 0Z' opacity='.4'/></g></svg>"
DATA ""
```
  


#### MORE EXAMPLES
* Program ScreenShots
* SaveImage [SUB](./SUB.md)
* ThirtyTwoBit [SUB](./SUB.md)


#### SEE ALSO
* [_FREEIMAGE](./_FREEIMAGE.md) , [_ICON](./_ICON.md)
* [_PUTIMAGE](./_PUTIMAGE.md) , [_MAPTRIANGLE](./_MAPTRIANGLE.md)
* [_NEWIMAGE](./_NEWIMAGE.md) , [_COPYIMAGE](./_COPYIMAGE.md)
* [_PRINTIMAGE](./_PRINTIMAGE.md) (printer)
* [_PALETTECOLOR](./_PALETTECOLOR.md) (function) , [_COPYPALETTE](./_COPYPALETTE.md) , [_ICON](./_ICON.md)
* [SCREEN](./SCREEN.md)
* [_SAVEIMAGE](./_SAVEIMAGE.md)
* Hardware images
* Bitmaps , Icons and Cursors , GIF Images
