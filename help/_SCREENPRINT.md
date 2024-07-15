# _SCREENPRINT

The _SCREENPRINT statement simulates typing text into a Windows focused program.

  

## Syntax

_SCREENPRINT *text$*
  

## Description

* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**
* *text$* is the text to be typed into a focused program's text entry area, one character at a time.
* Set the focus to a desktop program by using the [_SCREENIMAGE](_SCREENIMAGE.md) handle as the [_SOURCE](_SOURCE.md). Use the image to map the desired area.
* [_SCREENCLICK](_SCREENCLICK.md) can also be used to set the focus to a program's text entry area on the desktop.
* **Note: If the focus is not set correctly, the text may be printed to the QB64 IDE, if open, or not printed at all.**
* Ctrl + letter key shortcuts can be simulated using the appropriate [ASCII](ASCII.md) Control character codes 1 to 26 shown below:

```  CTRL + A = CHR$(1)   ☺  StartHeader (SOH)    CTRL + B = CHR$(2)   ☻  StartText         (STX)  CTRL + C = CHR$(3)   ♥  EndText     (ETX)    CTRL + D = CHR$(4)   ♦  EndOfTransmit     (EOT)  CTRL + E = CHR$(5)   ♣  Enquiry     (ENQ)    CTRL + F = CHR$(6)   ♠  Acknowledge       (ACK)  CTRL + G = CHR$(7)   •  [BEEP](BEEP.md)        (BEL)    CTRL + H = CHR$(8)   ◘  **[Backspace]**       (BS)  CTRL + I = CHR$(9)   ○  Horiz.Tab   **[Tab]**    CTRL + J = CHR$(10)  ◙  LineFeed(printer) (LF)  CTRL + K = CHR$(11)  ♂  Vert. Tab   (VT)     CTRL + L = CHR$(12)  ♀  FormFeed(printer) (FF)  CTRL + M = CHR$(13)  ♪  **[Enter]**     (CR)     CTRL + N = CHR$(14)  ♫  ShiftOut          (SO)  CTRL + O = CHR$(15)  ☼  ShiftIn     (SI)     CTRL + P = CHR$(16)  ►  DataLinkEscape    (DLE)  CTRL + Q = CHR$(17)  ◄  DevControl1 (DC1)    CTRL + R = CHR$(18)  ↕  DeviceControl2    (DC2)  CTRL + S = CHR$(19)  ‼  DevControl3 (DC3)    CTRL + T = CHR$(20)  ¶  DeviceControl4    (DC4)  CTRL + U = CHR$(21)  §  NegativeACK (NAK)    CTRL + V = CHR$(22)  ▬  Synchronous Idle  (SYN)  CTRL + W = CHR$(23)  ↨  EndTXBlock  (ETB)    CTRL + X = CHR$(24)  ↑  Cancel            (CAN)  CTRL + Y = CHR$(25)  ↓  EndMedium   (EM)     CTRL + Z = CHR$(26)  →  End Of File(SUB)  (EOF)  
```

  

## Examples

*Example:* Printing text into a Windows text editor (Notepad) and copying to the clipboard. May not work on all systems.

``` [DEFLNG](DEFLNG.md) A-Z [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) [PRINT](PRINT.md) "OPENing and MAXIMIZING Notepad in 5 seconds..."; : [_DELAY](_DELAY.md) 5 [SHELL](SHELL.md) [_DONTWAIT](_DONTWAIT.md) "START /MAX NotePad.exe"  'opens Notepad file "untitled.txt" 'detect notepad open and maximized 'condition: 80% or more of the screen is white [DO](DO.md)                     'read the desktop screen image for maximized window   s = [_SCREENIMAGE](_SCREENIMAGE.md)   [_SOURCE](_SOURCE.md) s   z = 0   [FOR](FOR.md) y = 0 [TO](TO.md) [_HEIGHT](_HEIGHT.md)(s) - 1   'scan for large white area     [FOR](FOR.md) x = 0 [TO](TO.md) _[WIDTH](WIDTH.md)(s) - 1        c = [POINT](POINT.md)(x, y)        [IF](IF.md) c = [_RGB32](_RGB32.md)(255, 255, 255) [THEN](THEN.md) z = z + 1     [NEXT](NEXT.md)   [NEXT](NEXT.md)   [IF](IF.md) z / ([_HEIGHT](_HEIGHT.md)(s) * _[WIDTH](WIDTH.md)(s)) > 0.8 [THEN](THEN.md) [EXIT DO](EXIT DO.md) 'when 80% of screen is white   [_FREEIMAGE](_FREEIMAGE.md) s   'free desktop image   [_LIMIT](_LIMIT.md) 1       'scans 1 loop per second [PRINT](PRINT.md) "."; [LOOP](LOOP.md) [PRINT](PRINT.md) [PRINT](PRINT.md) "NOTEPAD detected as OPEN and MAXIMIZED"   _SCREENPRINT "HELLO WORLD" [SLEEP](SLEEP.md) 2 _SCREENPRINT [CHR$](CHR$.md)(8) + [CHR$](CHR$.md)(8) + [CHR$](CHR$.md)(8) + [CHR$](CHR$.md)(8) + [CHR$](CHR$.md)(8) 'backspace 5 characters [SLEEP](SLEEP.md) 3 _SCREENPRINT "QB64!" [SLEEP](SLEEP.md) 2 _SCREENPRINT [CHR$](CHR$.md)(1) 'CTRL + A select all [SLEEP](SLEEP.md) 2 _SCREENPRINT [CHR$](CHR$.md)(3) 'CTRL + C copy to clipboard [SLEEP](SLEEP.md) 2 [PRINT](PRINT.md) [CLIPBOARD$](CLIPBOARD$.md) "CLIPBOARD$ (function)") [_CLIPBOARD$](_CLIPBOARD$.md) = "QB64 ROCKS!" [SLEEP](SLEEP.md) 2 _SCREENPRINT [CHR$](CHR$.md)(22) 'CTRL + V paste from clipboard [END](END.md)  
```

*Explanation:* If the Windows shortcuts are set up properly, printing ASCII Control characters acts like the user selected the control + letter combinations to *Select all* (CHR$(1)), *Copy* (CHR$(3)) and *Paste* (CHR$(22)) the text with the Windows Clipboard. If the editor program's CTRL key combinations are different, use the matching letter [ASCII](ASCII.md) code from A = 1 to Z = 26 in the text editor.
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_SCREENIMAGE](_SCREENIMAGE.md), [_SCREENCLICK](_SCREENCLICK.md)
* [_SCREENMOVE](_SCREENMOVE.md), [_SCREENX](_SCREENX.md), [_SCREENY](_SCREENY.md)
* [ASCII](ASCII.md)

  
