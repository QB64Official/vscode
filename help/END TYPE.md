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

## [TYPE](TYPE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/TYPE)
---
<blockquote>

### TYPE definitions are used to create variables that can hold more than one variable type of a fixed byte length.

</blockquote>

#### SYNTAX

<blockquote>

`TYPE typename`

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Table 1: The variable types supported by the QB64 language.
┌───────────────────────────────────────────────────────────────────────────┐
│                              Numerical types                              │
├──────────────────────┬───────────┬────────────────────────────┬───────────┤
│      Type Name       │   Type    │       Minimum value        │  Size in  │
│                      │  suffix   │       Maximum value        │   Bytes   │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│         _BIT         │     &grave;     │                         -1 │    1/8    │
│                      │           │                          0 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│       _BIT * n       │    &grave;n     │                       -128 │    n/8    │
│                      │           │                        127 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│    _UNSIGNED _BIT    │    ~&grave;     │                          0 │    1/8    │
│                      │           │                          1 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        _BYTE         │    %%     │                       -128 │     1     │
│                      │           │                        127 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│   _UNSIGNED _BYTE    │    ~%%    │                          0 │     1     │
│                      │           │                        255 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│       INTEGER        │     %     │                    -32,768 │     2     │
│                      │           │                     32,767 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│  _UNSIGNED INTEGER   │    ~%     │                          0 │     2     │
│                      │           │                     65,535 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│         LONG         │     &     │             -2,147,483,648 │     4     │
│                      │           │              2,147,483,647 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│    _UNSIGNED LONG    │    ~&     │                          0 │     4     │
│                      │           │              4,294,967,295 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│      _INTEGER64      │    &&     │ -9,223,372,036,854,775,808 │     8     │
│                      │           │  9,223,372,036,854,775,807 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│ _UNSIGNED _INTEGER64 │    ~&&    │                          0 │     8     │
│                      │           │ 18,446,744,073,709,551,615 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        SINGLE        │     !     │              -2.802597E-45 │     4     │
│                      │ (or none) │              +3.402823E+38 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        DOUBLE        │     #     │    -4.490656458412465E-324 │     8     │
│                      │           │    +1.797693134862310E+308 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        _FLOAT        │    ##     │                -1.18E-4932 │    32     │
│                      │           │                +1.18E+4932 │ (10 used) │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│       _OFFSET        │    %&     │ -9,223,372,036,854,775,808 │  use LEN  │
│                      │           │  9,223,372,036,854,775,807 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│  _UNSIGNED _OFFSET   │    ~%&    │                          0 │  use LEN  │
│                      │           │ 18,446,744,073,709,551,615 │           │
├──────────────────────┼───────────┼────────────────────────────┴───────────┤
│         _MEM         │   none    │ An internal TYPE like memory variable. │
└──────────────────────┴───────────┴────────────────────────────────────────┘
For the floating-point numeric types SINGLE (default when not assigned),
DOUBLE and _FLOAT, the minimum values represent the smallest values closest
to zero, while the maximum values represent the largest values closest to
pos./neg. infinity. _OFFSET dot values are used as a part of the _MEM
variable type in QB64 to return or set the position in memory.

┌───────────────────────────────────────────────────────────────────────────┐
│                                Text types                                 │
├──────────────────────┬───────────┬────────────────────────────┬───────────┤
│      Type Name       │   Type    │       Minimum value        │  Size in  │
│                      │  suffix   │       Maximum value        │   Bytes   │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        STRING        │     $     │                          0 │  use LEN  │
│                      │           │              2,147,483,647 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│      STRING * n      │    $n     │                          1 │     n     │
│                      │           │              2,147,483,647 │           │
└──────────────────────┴───────────┴────────────────────────────┴───────────┘
While a regular variable length STRING may have a minimum length of zero
(empty string), the fixed length string type STRING * n, where n is an
integer length value, must have a minimum length of at least one character.
```
  
<br>

##### Example 1: Creating a mouse INTERRUPT TYPE definition. Each INTEGER value is 2 bytes.
```vb
TYPE RegType
AX AS INTEGER    ' mouse function to use
BX AS INTEGER    ' mouse button
CX AS INTEGER    ' mouse graphic column position
DX AS INTEGER    ' mouse graphic row position
BP AS INTEGER    ' not used by mouse, but required *
SI AS INTEGER    ' not used by mouse, but required *
DI AS INTEGER    ' not used by mouse, but required *
Flags AS INTEGER ' not used by mouse but required *
DS AS INTEGER    ' used by INTERRUPTX only
ES AS INTEGER    ' used by INTERRUPTX only
END TYPE

DIM SHARED InRegs AS RegType, OutRegs AS RegType ' create dot variables

InRegs.AX = 3 ' sets the mouse function to read the mouse buttons and position.

CALL INTERRUPT(&H33, InRegs, OutRegs)

column% = OutRegs.CX ' returns the current mouse column position
```
  
<br>

##### Example 2: Creating an addressbook database for a RANDOM file.
```vb
TYPE ContactInfo
First AS STRING * 10
Last AS STRING * 15
Address1 AS STRING * 30
Address2 AS STRING * 30
City AS STRING * 15
State AS STRING * 2
Zip AS LONG   ' (4 bytes)
Phone AS STRING * 12
END TYPE

DIM Contact AS ContactInfo 'create contact record variable for RANDOM file
RecordLEN% = LEN(Contact) ' 118 bytes
'define values
Contact.First = "Ted" ' the fixed string length value will contain 7 extra spaces
Contact.Zip = 15236 ' LONG value that can be used to search certain zip code numbers.

PUT #1, 5,Contact  'place contact info into fifth record position
```
  
<br>

##### Example 3: Defining a TYPE variable as another variable type from a previous TYPE definition in QB64.
```vb
TYPE bar
b AS STRING * 10
END TYPE

TYPE foo
a AS SINGLE
c AS bar          'define variable as a bar type
END TYPE

DIM foobar AS foo   'create a variable to use the foo type
foobar.a = 15.5
foobar.c.b = "this is me"

PRINT foobar.a, foobar.c.b
END
```
  
<br>

##### Example 4: A bitmap header information TYPE $INCLUDE File.
```vb
' ********
'Bitmap.BI can be included at start of program

TYPE BMPHeaderType        ' Description                  Bytes      QB64
ID AS STRING * 2        ' File ID is "BM"                2
Size AS LONG            ' Size of the data file          4
Res1 AS INTEGER         ' Reserved 1 should be 0         2
Res2 AS INTEGER         ' Reserved 2 should be 0         2
Offset AS LONG          ' Start position of pixel data   4
Hsize AS LONG           ' Information header size        4
PWidth AS LONG          ' Image width                    4       _WIDTH (function)
PDepth AS LONG          ' Image height                   4       _HEIGHT
Planes AS INTEGER       ' Number of planes               2
BPP AS INTEGER          ' Bits per pixel(palette)        2       _PIXELSIZE
Compress AS LONG        ' Compression                    4
ImageBytes AS LONG      ' Width * Height = ImageSIZE     4
Xres AS LONG            ' Width in PELS per metre        4
Yres AS LONG            ' Depth in PELS per metre        4
NumColors AS LONG       ' Number of Colors               4
SigColors AS LONG       ' Significant Colors             4
END TYPE                  '          Total Header bytes = 54
```
  
<br>

##### Example 4: A bitmap header information TYPE $INCLUDE File.
```vb
'$INCLUDE: 'Bitmap.BI'  'use only when including a BI file

DIM SHARED BMPHead AS BMPHeaderType

GET #1, , BMPHead  'get the entire bitmap header information
```
  
<br>

##### Example 4: A bitmap header information TYPE $INCLUDE File.
```vb
GET (0, 0)-(BMPHead.PWidth - 1, BMPHead.PDepth - 1), Image(48) 'indexed for 4 BPP colors
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [INTEGER](INTEGER.md)  , [SINGLE](SINGLE.md)  , [DOUBLE](DOUBLE.md) 
*  [LONG](LONG.md)  , [_INTEGER64](INTEGER64.md)  , [_FLOAT](FLOAT.md) 
*  [STRING](STRING.md)  , [_BYTE](BYTE.md)  , [_BIT](BIT.md)  , [_OFFSET](OFFSET.md) 
*  [GET](GET.md)  # , [PUT](PUT.md)  # , [BINARY](BINARY.md) 
*  [GET](GET.md)  (graphics statement) , [PUT](PUT.md)  (graphics statement)
*  [LEN](LEN.md)  , [LOF](LOF.md)  , [EOF](EOF.md) 
*  Bitmaps , Icon to Bitmap Conversion Function

</blockquote>
