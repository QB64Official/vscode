# TYPE

**TYPE** definitions are used to create variables that can hold more than one variable type of a fixed byte length.

  

## Syntax

**TYPE** typename
.
. variable(s) [AS](AS.md) type
.
**END TYPE**
  

* Typename is an undefined type name holder as it can hold any variable types.
* TYPE definitions should be placed in the main module before the start of the program code execution.
* TYPE definitions CAN be placed in [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures using QB64 only!
* TYPE definitions cannot contain Array variables! Arrays can be [DIMensioned](DIMensioned.md) as a TYPE definition.
* TYPE definitions cannot be inside of another TYPE definition, but variables can be defined AS another type.(See Example 3)
* TYPE definitions must be ended with [END TYPE](END TYPE.md).
* A TYPE variable MUST be assigned to the type after it is defined. Array variables are allowed.
* Type variables must be defined in every SUB or FUNCTION unless the type variable is [DIMensioned](DIMensioned.md) as [SHARED](SHARED.md).
* Type variables use DOT variable names to read or write specific values. They do not use type suffixes as they can hold ANY variable type values! The name before the dot is the one you defined after the type definition and the name after is the variable name used inside of the TYPE. The name of the dimensioned type variable alone can be used to [PUT](PUT.md) # or [GET](GET.md) # all of the data at once!
* Once the TYPE variable is created you can find the record or byte size by using [LEN](LEN.md)(typevariable).
* TYPE definitions can also be placed in [$INCLUDE]($INCLUDE.md) .BI text files such as [QB.BI](QB.BI.md) is used by [INTERRUPT](INTERRUPT.md) and [INTERRUPTX](INTERRUPTX.md).
* **[_BIT](_BIT.md) is not currently supported in User Defined TYPEs**.
* **NOTE: Many QBasic keyword variable names CAN be used with a [STRING](STRING.md) suffix($) ONLY! You CANNOT use them without the suffix, use a numerical suffix or use [DIM](DIM.md), [REDIM](REDIM.md), [_DEFINE](_DEFINE.md), [BYVAL](BYVAL.md) or TYPE variable [AS](AS.md) statements!**

```          Table 1: The variable types supported by the QB64 language. ┌───────────────────────────────────────────────────────────────────────────┐ │                              **Numerical types**                              │ ├──────────────────────┬───────────┬────────────────────────────┬───────────┤ │      **Type Name**       │   **Type**    │       **Minimum value**        │  **Size in**  │ │                      │  **suffix**   │       **Maximum value**        │   **Bytes**   │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │         [_BIT](_BIT.md)         │     `     │                         -1 │    1/8    │ │                      │           │                          0 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │       [_BIT * n](_BIT * n.md)       │    `n     │                       -128 │    n/8    │ │                      │           │                        127 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │    [_UNSIGNED](_UNSIGNED.md) [_BIT](_BIT.md)    │    ~`     │                          0 │    1/8    │ │                      │           │                          1 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │        [_BYTE](_BYTE.md)         │    %%     │                       -128 │     1     │ │                      │           │                        127 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │   [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)    │    ~%%    │                          0 │     1     │ │                      │           │                        255 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │       [INTEGER](INTEGER.md)        │     %     │                    -32,768 │     2     │ │                      │           │                     32,767 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │  [_UNSIGNED](_UNSIGNED.md) [INTEGER](INTEGER.md)   │    ~%     │                          0 │     2     │ │                      │           │                     65,535 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │         [LONG](LONG.md)         │     &     │             -2,147,483,648 │     4     │ │                      │           │              2,147,483,647 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │    [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)    │    ~&     │                          0 │     4     │ │                      │           │              4,294,967,295 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │      [_INTEGER64](_INTEGER64.md)      │    &&     │ -9,223,372,036,854,775,808 │     8     │ │                      │           │  9,223,372,036,854,775,807 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │ [_UNSIGNED](_UNSIGNED.md) [_INTEGER64](_INTEGER64.md) │    ~&&    │                          0 │     8     │ │                      │           │ 18,446,744,073,709,551,615 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │        [SINGLE](SINGLE.md)        │     !     │              -2.802597E-45 │     4     │ │                      │ (or none) │              +3.402823E+38 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │        [DOUBLE](DOUBLE.md)        │     #     │    -4.490656458412465E-324 │     8     │ │                      │           │    +1.797693134862310E+308 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │        [_FLOAT](_FLOAT.md)        │    ##     │                -1.18E-4932 │    32     │ │                      │           │                +1.18E+4932 │ (10 used) │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │       [_OFFSET](_OFFSET.md)        │    %&     │ -9,223,372,036,854,775,808 │  use [LEN](LEN.md)  │ │                      │           │  9,223,372,036,854,775,807 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │  [_UNSIGNED](_UNSIGNED.md) [_OFFSET](_OFFSET.md)   │    ~%&    │                          0 │  use [LEN](LEN.md)  │ │                      │           │ 18,446,744,073,709,551,615 │           │ ├──────────────────────┼───────────┼────────────────────────────┴───────────┤ │         [_MEM](_MEM.md)         │   none    │ **An internal TYPE like memory variable.** │ └──────────────────────┴───────────┴────────────────────────────────────────┘   For the floating-point numeric types [SINGLE](SINGLE.md) (default when not assigned),  [DOUBLE](DOUBLE.md) and [_FLOAT](_FLOAT.md), the minimum values represent the smallest values closest   to zero, while the maximum values represent the largest values closest to     pos./neg. infinity. [_OFFSET](_OFFSET.md) dot values are used as a part of the [_MEM](_MEM.md)        variable type in QB64 to return or set the position in memory.  ┌───────────────────────────────────────────────────────────────────────────┐ │                                **Text types**                                 │ ├──────────────────────┬───────────┬────────────────────────────┬───────────┤ │      **Type Name**       │   **Type**    │       **Minimum value**        │  **Size in**  │ │                      │  **suffix**   │       **Maximum value**        │   **Bytes**   │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │        [STRING](STRING.md)        │     $     │                          0 │  use [LEN](LEN.md)  │ │                      │           │              2,147,483,647 │           │ ├──────────────────────┼───────────┼────────────────────────────┼───────────┤ │      [STRING * n](STRING * n.md)      │    $n     │                          1 │     n     │ │                      │           │              2,147,483,647 │           │ └──────────────────────┴───────────┴────────────────────────────┴───────────┘   While a regular variable length [STRING](STRING.md) may have a minimum length of **zero**    (empty string), the fixed length string type [STRING * n](STRING * n.md), where **n** is an  integer length value, must have a minimum length of at least **one** character.  
```

  

*Example 1:* Creating a mouse [INTERRUPT](INTERRUPT.md) TYPE definition. Each [INTEGER](INTEGER.md) value is 2 bytes.

```  TYPE RegType    AX [AS](AS.md) [INTEGER](INTEGER.md)    ' mouse function to use    BX [AS](AS.md) [INTEGER](INTEGER.md)    ' mouse button    CX [AS](AS.md) [INTEGER](INTEGER.md)    ' mouse graphic column position    DX [AS](AS.md) [INTEGER](INTEGER.md)    ' mouse graphic row position    BP [AS](AS.md) [INTEGER](INTEGER.md)    ' not used by mouse, but required *    SI [AS](AS.md) [INTEGER](INTEGER.md)    ' not used by mouse, but required *    DI [AS](AS.md) [INTEGER](INTEGER.md)    ' not used by mouse, but required *    Flags [AS](AS.md) [INTEGER](INTEGER.md) ' not used by mouse but required *    DS [AS](AS.md) [INTEGER](INTEGER.md)    ' used by [INTERRUPTX](INTERRUPTX.md) only    ES [AS](AS.md) [INTEGER](INTEGER.md)    ' used by [INTERRUPTX](INTERRUPTX.md) only  END TYPE   [DIM](DIM.md) [SHARED](SHARED.md) InRegs [AS](AS.md) RegType, OutRegs [AS](AS.md) RegType ' create dot variables   InRegs.AX = 3 ' sets the mouse function to read the mouse buttons and position.   [CALL](CALL.md) [INTERRUPT](INTERRUPT.md)(&H33, InRegs, OutRegs)   column% = OutRegs.CX ' returns the current mouse column position  
```

*Explanation:* InRegs and OutRegs become the DOT variable prefix name for the TYPE definition's variables.
Each TYPE variable is designated as the DOT variable's suffix.
*** Note: Omitting variables in the RegType definition can change other program variable values!**

  

*Example 2:* Creating an addressbook database for a [RANDOM](RANDOM.md) file.

```  TYPE ContactInfo    First AS STRING * 10    Last AS STRING * 15    Address1 AS STRING * 30    Address2 AS STRING * 30    City AS STRING * 15    State AS STRING * 2    Zip AS LONG   ' (4 bytes)    Phone AS STRING * 12  END TYPE   DIM Contact AS ContactInfo 'create contact record variable for [RANDOM](RANDOM.md) file  RecordLEN% = [LEN](LEN.md)(Contact) ' 118 bytes   'define values  Contact.First = "Ted" ' the fixed string length value will contain 7 extra spaces  Contact.Zip = 15236 ' [LONG](LONG.md) value that can be used to search certain zip code numbers.   [PUT #](PUT #.md)1, 5,Contact  'place contact info into fifth record position  
```

*Explanation:* Use the assigned type variable to find the RANDOM record length which is 118 bytes.
The DOT variable names consist of Contact as the prefix:
  

*Example 3:* Defining a TYPE variable as another variable type from a previous TYPE definition in QB64.

``` TYPE bar   b [AS](AS.md) [STRING](STRING.md) * 10 END TYPE  TYPE foo   a [AS](AS.md) [SINGLE](SINGLE.md)   c [AS](AS.md) bar          'define variable as a bar type END TYPE  [DIM](DIM.md) foobar [AS](AS.md) foo   'create a variable to use the foo type foobar.a = 15.5 foobar.c.b = "this is me"  PRINT foobar.a, foobar.c.b [END](END.md)  
```

  

*Example 4:* A bitmap header information TYPE [$INCLUDE]($INCLUDE.md) File.

``` ' ******** 'Bitmap.BI can be included at start of program   TYPE BMPHeaderType        ' Description                  Bytes      **QB64**    ID AS STRING * 2        ' File ID is "BM"                2    Size AS LONG            ' Size of the data file          4    Res1 AS INTEGER         ' Reserved 1 should be 0         2    Res2 AS INTEGER         ' Reserved 2 should be 0         2    Offset AS LONG          ' Start position of pixel data   4    Hsize AS LONG           ' Information header size        4    PWidth AS LONG          ' Image width                    4       [_WIDTH (function)](_WIDTH (function).md) "WIDTH (function)")    PDepth AS LONG          ' Image height                   4       [_HEIGHT](_HEIGHT.md)    Planes AS INTEGER       ' Number of planes               2    BPP AS INTEGER          ' Bits per pixel(palette)        2       [_PIXELSIZE](_PIXELSIZE.md)    Compress AS LONG        ' Compression                    4    ImageBytes AS LONG      ' Width * Height = ImageSIZE     4    Xres AS LONG            ' Width in PELS per metre        4    Yres AS LONG            ' Depth in PELS per metre        4    NumColors AS LONG       ' Number of Colors               4    SigColors AS LONG       ' Significant Colors             4  END TYPE                  '          Total Header bytes = 54  
```

``` '[$INCLUDE]($INCLUDE.md): 'Bitmap.BI'  'use only when including a BI file  [DIM](DIM.md) [SHARED](SHARED.md) BMPHead AS BMPHeaderType  [GET #](GET #.md)1, , BMPHead  'get the entire bitmap header information  
```

*Explanation:* Use one [GET](GET.md) to read all of the header information from the start of the bitmap file opened AS [BINARY](BINARY.md). It reads all 54 bytes as [STRING](STRING.md), [INTEGER](INTEGER.md) and [LONG](LONG.md) type DOT variable values.
NOTE: BPP returns 4(16 colors), 8(256 colors) or 24(16 million colors) bits per pixel in QBasic. 24 bit can only be in greyscale.
Then use the DOT variable name values like this [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)") after you load the bitmap image to the screen:

``` [GET](GET.md) "GET (graphics statement)") (0, 0)-(BMPHead.PWidth - 1, BMPHead.PDepth - 1), Image(48) 'indexed for 4 BPP colors  
```

The bitmap image is now stored in an [array](array.md) to [BSAVE](BSAVE.md) to a file. The RGB color information follows the file header as [ASCII](ASCII.md) character values read using [ASC](ASC.md) "ASC (function)"). The color values could be indexed at the start of the Array with the image being offset to: index = NumberOfColors * 3. As determined by the [SCREEN](SCREEN.md) mode used. In SCREEN 13(256 colors) the index would be 768.
  

## See also

* [INTEGER](INTEGER.md), [SINGLE](SINGLE.md), [DOUBLE](DOUBLE.md)
* [LONG](LONG.md), [_INTEGER64](_INTEGER64.md), [_FLOAT](_FLOAT.md)
* [STRING](STRING.md), [_BYTE](_BYTE.md), [_BIT](_BIT.md), [_OFFSET](_OFFSET.md)
* [GET #](GET #.md), [PUT #](PUT #.md), [BINARY](BINARY.md)
* [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)"), [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)")
* [LEN](LEN.md), [LOF](LOF.md), [EOF](EOF.md)
* [Bitmaps](Bitmaps.md), [Icon to Bitmap Conversion Function](Icon to Bitmap Conversion Function.md)

  
