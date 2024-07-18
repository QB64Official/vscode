## LPRINT
---

### The LPRINT statement sends string text or numerical values to a parallel port (LPT1) printer in QBasic or a USB printer in QB64 .

#### SYNTAX

`LPRINT [ expression ] [{;|,}]`

#### DESCRIPTION
* expression is one or more text or numerical expressions separated by a semi-colon (;) or comma (,).
* Syntax is the same as [PRINT](./PRINT.md) , but cannot use a port number.
* Program does not have to [OPEN](./OPEN.md) the LPT1: parallel port.
* Assumes a 80 character wide page. [WIDTH](./WIDTH.md) [LPRINT](./LPRINT.md) is not supported in QB64.
* [LPRINT](./LPRINT.md) [USING](./USING.md) can print formatted text data to a page identically to how [PRINT](./PRINT.md) [USING](./USING.md) formats a program screen.
* COLORed text and images can be printed using [_PRINTIMAGE](./_PRINTIMAGE.md) which stretches them to fit the default printer's paper size.
* [LPRINT](./LPRINT.md) will only print to the default USB or LPT printer set up in Windows. Keyword not supported in Linux or macOS versions .
* Note: Printer escape codes starting with CHR$ (27) will not work with [LPRINT](./LPRINT.md) and may produce text printing errors.


#### SEE ALSO
* [LPRINT](./LPRINT.md) [USING](./USING.md)
* [_PRINTIMAGE](./_PRINTIMAGE.md) (prints color images to page size)
* [PRINT](./PRINT.md) , [PRINT](./PRINT.md) [USING](./USING.md)
* Windows Printer Settings
