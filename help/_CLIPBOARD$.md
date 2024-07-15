# _CLIPBOARD$

The **_CLIPBOARD$** statement copies the [STRING](STRING.md) value into the system clipboard.

  

## Syntax

_CLIPBOARD$ = *string_expression$*
  

## Description

* *string_expression$* is the string value to be sent to the clipboard.
* The string value will replace everything previously in the clipboard.
* Assemble long text into one string variable value before using this statement.
* Add CHR$(13) + CHR$(10) CRLF characters to move to a new clipboard line.
* When copying text files, end line CRLF characters 13 and 10 do not have to be added.
* Numerical values can be converted to strings using [STR$](STR$.md), [_MK$](_MK$.md), [MKI$](MKI$.md), [MKL$](MKL$.md), [MKS$](MKS$.md), [MKD$](MKD$.md), [_BIN$](_BIN$.md), [HEX$](HEX$.md) or [OCT$](OCT$.md).
* The clipboard can be used to copy, paste and communicate between running programs.

  

## Examples

Example
Set 2 lines of text in the clipboard using a carriage return to end text lines

``` [DIM](DIM.md) CrLf [AS](AS.md) [STRING](STRING.md) * 2 'define as 2 byte STRING CrLf = [CHR$](CHR$.md)(13) + [CHR$](CHR$.md)(10) 'carriage return & line feed  _CLIPBOARD$ = "This is line 1" + CrLf + "This is line 2" [PRINT](PRINT.md) [_CLIPBOARD$](_CLIPBOARD$.md) "CLIPBOARD$ (function)") 'display what is in the clipboard  
```

``` This is line 1 This is line 2  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_CLIPBOARD$ (function)](_CLIPBOARD$ (function).md) "CLIPBOARD$ (function)")
* [_CLIPBOARDIMAGE (function)](_CLIPBOARDIMAGE (function).md) "CLIPBOARDIMAGE (function)"), [_CLIPBOARDIMAGE](_CLIPBOARDIMAGE.md) (statement)
* [CHR$](CHR$.md), [ASCII](ASCII.md) (code table)

  
