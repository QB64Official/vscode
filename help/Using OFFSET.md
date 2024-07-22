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

## [Using_OFFSET](Using_OFFSET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Using OFFSET)
---
<blockquote>

### An _OFFSET means a pointer. Use it any time that you need to pass or receive a pointer. With the API, types that start with P or LP, and parameters that start with p or lp are generally pointers.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'public domain by Michael Calkins, sept 2011,


DECLARE DYNAMIC LIBRARY "kernel32"
FUNCTION QueryDosDeviceA~& (BYVAL lpDeviceName AS _UNSIGNED _OFFSET, BYVAL lpTargetPath AS _UNSIGNED _OFFSET, BYVAL ucchMax AS _UNSIGNED LONG)
FUNCTION GetLastError~& ()
END DECLARE

DIM sizeofbuffer AS _UNSIGNED LONG
DIM buffer AS STRING
DIM i AS _UNSIGNED LONG
DIM x AS _UNSIGNED LONG
DIM n AS _UNSIGNED LONG
sizeofbuffer = 1024
buffer = SPACE$(sizeofbuffer)

DO
x = 0
IF QueryDosDeviceA~&(0, _OFFSET(buffer), sizeofbuffer) = 0 THEN
x = GetLastError~&
IF x = &H7A THEN
sizeofbuffer = sizeofbuffer + 1024
buffer = SPACE$(sizeofbuffer)
ELSE
PRINT "Error: 0x"; HEX$(x)
END
END IF
END IF
LOOP WHILE x = &H7A

i = 1
n = 0
DO WHILE ASC(MID$(buffer, i, 1))
x = INSTR(i, buffer, CHR$(0))
PRINT MID$(buffer, i, x - i)
IF MID$(buffer, i, 3) = "COM" THEN
REDIM _PRESERVE comports(0 TO (n * 2) + 1) AS STRING
comports(n * 2) = MID$(buffer, i, (x - i) + 1)
n = n + 1
END IF
i = x + 1
LOOP

PRINT
PRINT n; "COM ports:"
IF n THEN
FOR i = 0 TO n - 1
DO
x = 0
IF QueryDosDeviceA~&(_OFFSET(comports(i * 2)), _OFFSET(buffer), sizeofbuffer) = 0 THEN
x = GetLastError~&
IF x = &H7A THEN
sizeofbuffer = sizeofbuffer + 1024
buffer = SPACE$(sizeofbuffer)
ELSE
PRINT "Error: 0x"; HEX$(x)
END
END IF
END IF
LOOP WHILE x = &H7A
comports((i * 2) + 1) = LEFT$(buffer, INSTR(buffer, CHR$(0)) - 1)
comports(i * 2) = LEFT$(comports(i * 2), LEN(comports(i * 2)) - 1)
PRINT CHR$(&H22); comports(i * 2); CHR$(&H22); " is mapped to: "; CHR$(&H22); comports((i * 2) + 1); CHR$(&H22)
NEXT
END IF

buffer = ""
END
```
  
<br>```vb
DWORD WINAPI QueryDosDevice(
__in_opt  LPCTSTR lpDeviceName,
__out     LPTSTR lpTargetPath,
__in      DWORD ucchMax
);
```
  
<br>```vb
A 32-bit unsigned integer. The range is 0 through 4294967295 decimal

This type is declared in WinDef.h as follows:

typedef unsigned long DWORD;
```
  
<br>```vb
QueryDosDeviceW (Unicode) and QueryDosDeviceA (ANSI)
```
  
<br>```vb
FUNCTION QueryDosDeviceA~& (
```
  
<br>```vb
An LPCWSTR if UNICODE is defined, an LPCSTR otherwise.
For more information, see Windows Data Types for Strings.

This type is declared in WinNT.h as follows:

#ifdef UNICODE
typedef LPCWSTR LPCTSTR;
#else
typedef LPCSTR LPCTSTR;
#endif
```
  
<br>```vb
A pointer to a constant null-terminated string of 8-bit Windows (ANSI) characters.
For more information, see Character Sets Used By Fonts.

This type is declared in WinNT.h as follows:

typedef __nullterminated CONST CHAR *LPCSTR;
```
  
<br>```vb
FUNCTION QueryDosDeviceA~& (BYVAL lpDeviceName AS _UNSIGNED _OFFSET,
```
  
<br>```vb
LPTSTR

An LPWSTR if UNICODE is defined, an LPSTR otherwise.
For more information, see Windows Data Types for Strings.

This type is declared in WinNT.h as follows:

#ifdef UNICODE
typedef LPWSTR LPTSTR;
#else
typedef LPSTR LPTSTR;
#endif
```
  
<br>```vb
A pointer to a null-terminated string of 8-bit Windows (ANSI) characters.
For more information, see Character Sets Used By Fonts.

This type is declared in WinNT.h as follows:

typedef CHAR *LPSTR;
```
  
<br>```vb
FUNCTION QueryDosDeviceA~& (BYVAL lpDeviceName AS _UNSIGNED _OFFSET, BYVAL lpTargetPath AS _UNSIGNED _OFFSET,
```
  
<br>```vb
FUNCTION QueryDosDeviceA~& (BYVAL lpDeviceName AS _UNSIGNED _OFFSET, BYVAL lpTargetPath AS _UNSIGNED _OFFSET, BYVAL ucchMax AS _UNSIGNED LONG)
```
  
<br>```vb
DWORD WINAPI GetLastError(void);
```
  
<br>```vb
FUNCTION GetLastError~& ()
```
  
<br>```vb
IF QueryDosDeviceA~&(0, _OFFSET(buffer), sizeofbuffer) = 0 THEN
```
  
<br>```vb
lpDeviceName [in, optional]

An MS-DOS device name string specifying the target of the query. The device name cannot
have a trailing backslash; for example, use "C:", not "C:\".

This parameter can be NULL. In that case, the QueryDosDevice function will store a list of
all existing MS-DOS device names into the buffer pointed to by lpTargetPath.
```
  
<br>```vb
lpTargetPath [out]

A pointer to a buffer that will receive the result of the query. The function fills this
buffer with one or more null-terminated strings. The final null-terminated string is followed
by an additional NULL.

If lpDeviceName is non-NULL, the function retrieves information about the particular MS-
DOS device specified by lpDeviceName. The first null-terminated string stored into the buffer is the current mapping for the device. The other null-terminated strings represent undeleted
prior mappings for the device.

If lpDeviceName is NULL, the function retrieves a list of all existing MS-DOS device
names. Each null-terminated string stored into the buffer is the name of an existing MS-DOS
device, for example, \Device\HarddiskVolume1 or \Device\Floppy0.
```
  
<br>```vb
ucchMax [in]

The maximum number of TCHARs that can be stored into the buffer pointed to by lpTargetPath.
```
  
<br>```vb
A WCHAR if UNICODE is defined, a CHAR otherwise.

This type is declared in WinNT.h as follows:

#ifdef UNICODE
typedef WCHAR TCHAR;
#else
typedef char TCHAR;
#endif
```
  
<br>```vb
If the function succeeds, the return value is the number of TCHARs stored into the buffer
pointed to by lpTargetPath.

If the function fails, the return value is zero. To get extended error information, call
GetLastError.

If the buffer is too small, the function fails and the last error code is ERROR_INSUFFICIENT_BUFFER.
```
  
<br>```vb
IF QueryDosDeviceA~&(_OFFSET(comports(i * 2)), _OFFSET(buffer), sizeofbuffer) = 0 THEN
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_OFFSET](OFFSET.md)  , [_OFFSET](OFFSET.md)  (function)
*  [BYVAL](BYVAL.md)  , [_UNSIGNED](UNSIGNED.md) 
*  [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) 

</blockquote>
