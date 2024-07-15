# LPRINT

The LPRINT statement sends string text or numerical values to a parallel port (LPT1) printer in QBasic or a USB printer in **QB64**.

  

## Syntax

LPRINT [*expression*] [{;|,}]
  

## Description

* *expression* is one or more text or numerical expressions separated by a semi-colon (;) or comma (,).
* Syntax is the same as [PRINT](PRINT.md), but cannot use a port number.
* Program does not have to [OPEN](OPEN.md) the LPT1: parallel port.
* Assumes a 80 character wide page. **[WIDTH LPRINT is not supported in QB64.](WIDTH LPRINT is not supported in QB64..md)**
* [LPRINT USING](LPRINT USING.md) can print formatted text data to a page identically to how [PRINT USING](PRINT USING.md) formats a program screen.
* [COLORed](COLORed.md) text and images can be printed using [_PRINTIMAGE](_PRINTIMAGE.md) which stretches them to fit the default printer's paper size.
* LPRINT will only print to the default USB or LPT printer set up in Windows. **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**.
* Note: Printer *escape codes* starting with [CHR$](CHR$.md)(27) will not work with LPRINT and may produce text printing errors.

  

## See also

* [LPRINT USING](LPRINT USING.md)
* [_PRINTIMAGE](_PRINTIMAGE.md) (prints color images to page size)
* [PRINT](PRINT.md), [PRINT USING](PRINT USING.md)
* [Windows Printer Settings](Windows Printer Settings.md)

  
