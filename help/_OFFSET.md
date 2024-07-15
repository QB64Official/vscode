# _OFFSET

The _OFFSET variable type stores the location of a value in memory. The byte size varies as required by the system.

  

## Syntax

[DIM](DIM.md) variable [AS](AS.md) **_OFFSET**
  

## Description

* _OFFSET types can be created as signed or [_UNSIGNED](_UNSIGNED.md) at the programmer's discretion.
* The type suffix for _OFFSET is **%&** which designates the integer value's flexible size.
* Offset values are only useful when used in conjunction with [_MEM](_MEM.md) or [DECLARE LIBRARY](DECLARE LIBRARY.md) procedures.
* OFFSET values are used as a part of the [_MEM](_MEM.md) variable [type](type.md) in QB64. Variable.OFFSET returns or sets the current position in memory.
* API [LIBRARY](LIBRARY.md) parameter or [type](type.md) names may include **lp, ptr** or **p** which designates them as a pointer type.
* **Warning: _OFFSET values cannot be cast to other variable type values reliably.**
* **Warning: Variable length [STRING](STRING.md) values can move about in memory at any time.** If you get the _OFFSET of a variable length sting on one code line and use it on the next it may not be there anymore. **To be safe, move variable length strings into fixed length strings first.**

  

## Examples

*Example:* The SHBrowseForFolder function receives information about the folder selected by the user in Windows XP and 7.

``` [DECLARE CUSTOMTYPE LIBRARY](DECLARE CUSTOMTYPE LIBRARY.md)     [FUNCTION](FUNCTION.md) FindWindow& ([BYVAL](BYVAL.md) ClassName AS _OFFSET, WindowName$) [END](END.md) [DECLARE](DECLARE.md)  [_TITLE](_TITLE.md) "Super Window" hwnd& = FindWindow(0, "Super Window" + [CHR$](CHR$.md)(0))  [TYPE](TYPE.md) BROWSEINFO  'typedef struct _browseinfo '[Microsoft MSDN](Microsoft MSDN.md)   hwndOwner [AS](AS.md) [LONG](LONG.md) '              '  HWND   pidlRoot [AS](AS.md) _OFFSET '            '  PCIDLIST_ABSOLUTE   pszDisplayName [AS](AS.md) _OFFSET '      '  LPTSTR   lpszTitle [AS](AS.md) _OFFSET '           '  LPCTSTR   ulFlags [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)        '  UINT   lpfn [AS](AS.md) _OFFSET '                '  BFFCALLBACK   lParam [AS](AS.md) _OFFSET '              '  LPARAM   iImage [AS](AS.md) [LONG](LONG.md) '                 '  int [END](END.md) [TYPE](TYPE.md)  'BROWSEINFO, *PBROWSEINFO, *LPBROWSEINFO;  [DECLARE DYNAMIC LIBRARY](DECLARE DYNAMIC LIBRARY.md) "shell32"   [FUNCTION](FUNCTION.md) SHBrowseForFolder%& (x [AS](AS.md) BROWSEINFO) '[Microsoft MSDN](Microsoft MSDN.md)   [SUB](SUB.md) SHGetPathFromIDList ([BYVAL](BYVAL.md) lpItem [AS](AS.md) _OFFSET, [BYVAL](BYVAL.md) szDir [AS](AS.md) _OFFSET) '[Microsoft MSDN](Microsoft MSDN.md) [END DECLARE](END DECLARE.md)  [DIM](DIM.md) b [AS](AS.md) BROWSEINFO b.hwndOwner = hwnd [DIM](DIM.md) s [AS](AS.md) [STRING](STRING.md) * 1024 b.pszDisplayName = [_OFFSET](_OFFSET.md) "OFFSET (function)")(s$) a$ = "Choose a folder!!!" + [CHR$](CHR$.md)(0) b.lpszTitle = [_OFFSET](_OFFSET.md) "OFFSET (function)")(a$) [DIM](DIM.md) o [AS](AS.md) _OFFSET o = SHBrowseForFolder(b) [IF](IF.md) o [THEN](THEN.md)     [PRINT](PRINT.md) [LEFT$](LEFT$.md)(s$, [INSTR](INSTR.md)(s$, [CHR$](CHR$.md)(0)) - 1)     [DIM](DIM.md) s2 [AS](AS.md) [STRING](STRING.md) * 1024     SHGetPathFromIDList o, [_OFFSET](_OFFSET.md) "OFFSET (function)")(s2$)     [PRINT](PRINT.md) [LEFT$](LEFT$.md)(s2$, [INSTR](INSTR.md)(s2$, [CHR$](CHR$.md)(0)) - 1) [ELSE](ELSE.md)     [PRINT](PRINT.md) "Cancel?" [END IF](END IF.md)  
```

  

## See also

* [_WINDOWHANDLE](_WINDOWHANDLE.md)
* [Using _OFFSET](Using _OFFSET.md)
* [_OFFSET (function)](_OFFSET (function).md) "OFFSET (function)"), [_MEM](_MEM.md)
* [DECLARE LIBRARY](DECLARE LIBRARY.md)
* [DECLARE LIBRARY](DECLARE LIBRARY.md)
* [Variable Types](Variable Types.md)

  
