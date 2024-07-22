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

## [Grey_Scale_Bitmaps](Grey_Scale_Bitmaps.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Grey Scale Bitmaps)
---
<blockquote>

### Grey scale is necessary for compatibility with QBasic's legacy SCREEN modes when viewing 24/32 bit bitmaps! You may also desire grey scale images for aesthetic or artistic reasons.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SUB TrueColor12  'Screen 12 greyscale of 24 bit 'code by Bob Seguin
IF BMP.PWidth * 3) MOD 4) THEN
ZeroPAD$ = SPACE$((4 - ((BMP.PWidth * 3) MOD 4)))
END IF
n = 3
FOR Colr = 0 TO 15  '16 colors
OUT &H3C8, Colr
OUT &H3C9, n        'color intensities are each equal in grey scale
OUT &H3C9, n
OUT &H3C9, n
n = n + 4                     'increment intensities. maximum intensity = 63
NEXT Colr
y = BMP.PDepth - 1: o$ = " "
GET #1, BMP.Offset, o$
R$ = " ": G$ = " ": B$ = " "
DO
x = 0                               'set image to left of screen
DO
GET #1, , B$
GET #1, , G$
GET #1, , R$
red = ASC(R$)            'intensities from 0 to 255
grn = ASC(G$)
blu = ASC(B$)
average = (red + grn + blu) \ 48    'divide by 16 colors and divide by 3 for average
PSET (x, y), average                '255 * 3 divided by 16 = maximum color of 15
x = x + 1
LOOP WHILE x < BMP.Pwidth
GET #1, , ZeroPAD$           'move up one row from bottom
y = y - 1
LOOP UNTIL y = -1
END SUB
```
  
<br>```vb
SUB TrueColor13    'Screen 13 greyscale of 24 bit 'code by Bob Seguin
IF ((BMP.PWidth * 3) MOD 4) <> 0 THEN
ZeroPAD$ = SPACE$((4 - ((BMP.PWidth * 3) MOD 4)))
END IF
FOR Colr = 0 TO 255 STEP 4         '63 different intensities
FOR Reps = 0 TO 3              'set 3 colors at a time
OUT &H3C8, Colr + Reps
OUT &H3C9, n     'color intensities are each equal in grey scale
OUT &H3C9, n
OUT &H3C9, n
NEXT Reps
n = n + 1                          'increment intensities. maximum = 63
NEXT Colr
y = BMP.PDepth - 1: o$ = " "
GET #1, BMP.Offset, o$          'offset + 1 immediately after header
R$ = " ": G$ = " ": B$ = " "
DO
x = 0                                 'set image to left side of screen
DO
GET #1, , B$
GET #1, , G$
GET #1, , R$
red = ASC(R$)
grn = ASC(G$)
blu = ASC(B$)
average = (red + grn + blu) \ 3 'divide by 3 for average as colors match intensities
PSET (x, y), average            '3 * 255 divided by 3 = maximum color attribute of 255
x = x + 1
LOOP WHILE x < BMP.PWidth
GET #1, , ZeroPAD$                  'skip padder if used
y = y - 1                             'move up one row from bottom
LOOP UNTIL y = -1
END SUB
```
  
<br>```vb
SUB TrueGreyScale   'convert a 24 bit bitmap image to grey scale
IF ((BMP.PWidth * 3) MOD 4) <> 0 THEN
ZeroPAD$ = SPACE$((4 - ((BMP.PWidth * 3) MOD 4)))
END IF
y = BMP.PDepth - 1: o$ = " "
GET #1, BMP.Offset, o$   'offset + 1 immediately after header
R$ = " ": G$ = " ": B$ = " "
DO
x = 0                                 'set image to left side of screen
DO
GET #1, , B$
GET #1, , G$
GET #1, , R$
red = ASC(R$)
grn = ASC(G$)
blu = ASC(B$)
average = (red + grn + blu) \ 3   'divide by 3 for average as colors match intensities
PSET (x, y), _RGB32(average, average, average)  'maximum color intensity = 255
x = x + 1
LOOP WHILE x < BMP.PWidth
GET #1, , ZeroPAD$                  'skip padder if used
y = y - 1                           'move up one row from bottom
LOOP UNTIL y = -1
END SUB
```
  
<br>```vb
FOR Colr = 0 TO 255 STEP 4         '63 different intensities
FOR Reps = 0 TO 3              'set 3 colors at a time
OUT &H3C8, Colr + Reps
OUT &H3C9, n - tint    'decrease color intensities of red and green
OUT &H3C9, n - tint
OUT &H3C9, n           'higher blue intensity will blue the image
NEXT Reps
n = n + 1                          'increment intensities. maximum = 63
IF n > 5 THEN tint = 5          'keep red and green intensity values above 0!
NEXT Colr
```
  
<br>```vb
DO
GET #1, , B$
GET #1, , G$
GET #1, , R$
red = ASC(R$)
grn = ASC(G$)
blu = ASC(B$)
average = (red + grn + blu) \ 3   'divide by 3 for average as colors match intensities
IF average > 5 THEN tint = 5 ELSE tint = 0
PSET (x, y), _RGB32(average - tint, average - tint, average) 'maximum color intensity = 255
x = x + 1
LOOP WHILE x < BMP.PWidth
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  Bitmaps
*  Icons and Cursors

</blockquote>
