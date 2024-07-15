# _CINP

The _CINP function returns keyboard key press codes from a [$CONSOLE]($CONSOLE.md) window. Windows-only.

  

## Syntax

*keycode&* = _CINP
  

## Description

* Return values are the same as the ones for [INP](INP.md) when used to read keyboard input. See table below.
* Negative values returned indicate that a key was released or a lock function key has been turned off.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

``` '                            **Extended Keyboard Press Scancodes** ' ' **Esc  F1 F2 F3 F4 F5 F6 F7 F8 F9 F10  F11 F12   SysReq ScrL Pause** '  1   59 60 61 62 63 64 65 66 67 68   87  88     0     70    29 ' **`~  1! 2@ 3# 4$ 5% 6^ 7& 8* 9( 0) -_ =+ BkSpc  Insert Home PgUp   NumL   /     *    -** '  41 2  3  4  5  6  7  8  9  10 11 12 13  14     82    71    73     69    53    55   74 ' **Tab  Q  W  E  R  T  Y  U  I  O  P  [{ ]} \|    Delete End  PgDn   7/Home 8/▲  9/PU  +**  '  15  16 17 18 19 20 21 22 23 24 25 26 27 43     83    79    81     71    72    73   78 ' **CapL  A  S  D  F  G  H  J  K  L  ;: '"  Enter                     4/◄-   5    6/-►  E** '  58   30 31 32 33 34 35 36 37 38 39 40   28                        75    76    77   **n** ' **Shift  Z  X  C  V  B  N  M  ,< .> /?    Shift         ▲           1/End  2/▼  3/PD  t** '  42    44 45 46 47 48 49 50 51 52 53     54           72           79    80    81   **e** ' **Ctrl Win Alt    Spacebar    Alt Win Menu Ctrl     ◄-  ▼   -►      0/Insert    ./Del r** '  29  91  56        57       56  92   93  29       75  80  77       82          83   28 '  
```

  

## Examples

*Example 1:* Reading individual key strokes from a console window (Windows).

``` [$CONSOLE]($CONSOLE.md):[ONLY](ONLY.md) [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md): [_SOURCE](_SOURCE.md) [_CONSOLE](_CONSOLE.md)  [PRINT](PRINT.md) "Press any key, and I'll give you the scan code for it.  <ESC> quits the demo." [PRINT](PRINT.md) [PRINT](PRINT.md) [DO](DO.md)     x = [_CONSOLEINPUT](_CONSOLEINPUT.md)     [IF](IF.md) x = 1 [THEN](THEN.md) 'read only keyboard input ( = 1)         c = _CINP         [PRINT](PRINT.md) c;     [END IF](END IF.md) [LOOP UNTIL](LOOP UNTIL.md) c = 1 [END](END.md)  
```

  

## See also

* [$CONSOLE]($CONSOLE.md), [_CONSOLE](_CONSOLE.md)
* [_CONSOLEINPUT](_CONSOLEINPUT.md)
* [_MOUSEX](_MOUSEX.md), [_MOUSEY](_MOUSEY.md), [_MOUSEBUTTON](_MOUSEBUTTON.md), [_MOUSEWHEEL](_MOUSEWHEEL.md)

  
