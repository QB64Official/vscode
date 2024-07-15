# _KEYHIT

The _KEYHIT function returns [ASCII](ASCII.md) one and two byte, OpenGL Virtual Key and Unicode keyboard key press codes.

  

## Syntax

*keycode&* = _KEYHIT
  

## Description

* Return values range up to &H40000000 so use a [LONG](LONG.md) or [_INTEGER64](_INTEGER64.md) variable type. See the [_KEYDOWN](_KEYDOWN.md) code list:

* 0-255: [ASCII](ASCII.md) values (Refer to [CP437](CP437.md)).
* 256-65535: [2-byte](2-byte.md) character codes : code = [CVI](CVI.md)([CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(scancode)) (unaffected by SHIFT/ALT/CTRL modifiers).
* 65536-&H40000000: [QB64-specific Virtual Key codes](QB64-specific Virtual Key codes.md) (designated with + for 100000 on keyboard below)
* **Negative** [LONG](LONG.md) values returned indicate that a key was released or a lock function key has been turned off.

* **Note: _KEYHIT can only return one value at a time so use the [_KEYDOWN](_KEYDOWN.md) keyhit value to find key combinations.**
* To receive input from a [$CONSOLE]($CONSOLE.md) window, use [_CINP](_CINP.md).

``` '                                **_KEYHIT Keyboard Codes** ' ' **Esc  F1    F2    F3    F4    F5    F6    F7    F8    F9    F10   F11   F12   Sys  ScL Pause** '  27 15104 15360 15616 15872 16128 16384 16640 16896 17152 17408 34048 34304 +316 +302 +019 ' **`~  1!  2@  3#  4$  5%  6^  7&  8*  9(  0) -_ =+ BkSp   Ins   Hme   PUp   NumL   /     *    -** ' 126 33  64  35  36  37  94  38  42  40  41 95 43   8   20992 18176 18688 +300   47    42   45 '  *96 49  50  51  52  53  54  55  56  57  48 45 61* ' **Tab Q   W   E   R   T   Y   U   I   O   P  [{  ]}  \|   Del   End   PDn   7Hme  8/▲   9PU   +**  '  9  81  87  69  82  84  89  85  73  79  80 123 125 124 21248 20224 20736 18176 18432 18688 43 '  *113 119 101 114 116 121 117 105 111 112  91  93  92                    55    56    57*  ' **CapL   A   S   D   F   G   H   J   K   L   ;:  '" Enter                   4/◄-   5    6/-►** ' +301  65  83  68  70  71  72  74  75  76  58  34  13                     19200 19456 19712  **E** '  *97 115 100 102 103 104 106 107 108  59  39                          52    53    54*    **n** ' **Shift   Z   X   C   V   B   N   M   ,<  .>  /?    Shift       ▲           1End  2/▼   3PD   t** ' +304   90  88  67  86  66  78  77  60  62  63    +303       18432        20224 20480 20736  **e** '  *122 120  99 118  98 110 109  44  46  47                             49    50    51*    **r** ' **Ctrl   Win  Alt     Spacebar      Alt  Win  Menu  Ctrl   ◄-   ▼   -►      0Ins        .Del**  ' +306  +311 +308       32         +307 +312 +319  +305 19200 20480 19712  20992       21248 13 '                                                                       *48          46* ' '      **Lower value = LCase/NumLock On __________________ + = add 100000**   
```

  

* >= &H40000000: [Unicode](Unicode.md).

* Font **cyberbit.ttf**, included with QB64 (**version 0.92 and up**), is required to facilitate the **IME**(in Chinese settings) only. The 12.7 MB font is free for **non-commercial** use and is not loaded unless the user switches to the **Input Mode Editor**. Set to "UNICODE".

* QB64 can use several Windows fonts when **cyberbit** is not present so it is not necessary to include with program packages.
* An **important difference** between [INKEY$](INKEY$.md) and _KEYHIT is how they work when **CTRL, ALT** or **SHIFT** are used. INKEY$ returns a different code if you hold down CTRL, ALT or SHIFT before pressing F1 (for example). _KEYHIT will return the same code regardless of which modifiers were used but you can check [_KEYDOWN](_KEYDOWN.md) to see which modifying keys are being used.
* **Keyboards with an Alt Gr key note:** _KEYHIT may return both Alt (100307) and Ctrl (100306) codes when AltGr key is pressed or released.

  

## Examples

*Example:* This routine will return the codes for any keyboard presses.

``` [DEFLNG](DEFLNG.md) A-Z [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(800, 600, 8) [CLS](CLS.md) , 1 font = [_LOADFONT](_LOADFONT.md)("cyberbit.ttf", 24) unifont = [_LOADFONT](_LOADFONT.md)("cyberbit.ttf", 24, "UNICODE") [_FONT](_FONT.md) font  [DO](DO.md)   x = _KEYHIT   [IF](IF.md) x [THEN](THEN.md)     [IF](IF.md) x < 0 [THEN](THEN.md)  'negative value means key released       [COLOR](COLOR.md) 2       [PRINT](PRINT.md) "Released ";       x = -x     [ELSE](ELSE.md)       [COLOR](COLOR.md) 10       [PRINT](PRINT.md) "Pressed ";   'positive value means key pressed     [END IF](END IF.md)     [IF](IF.md) x < 256 [THEN](THEN.md)    'ASCII code values       [PRINT](PRINT.md) "ASCII "; x;       [IF](IF.md) x >= 32 [AND](AND.md) "AND (boolean)") x <= 255 [THEN](THEN.md) [PRINT](PRINT.md) "[" + [CHR$](" + [CHR$.md)(x) + "]" [ELSE](ELSE.md) [PRINT](PRINT.md)     [END IF](END IF.md)     [IF](IF.md) x >= 256 [AND](AND.md) "AND (boolean)") x < 65536 [THEN](THEN.md) '2 byte key codes       [PRINT](PRINT.md) "2-BYTE-COMBO "; x [AND](AND.md) "AND (boolean)") 255; x \ 256;       x2 = x \ 256       [IF](IF.md) x2 >= 32 [AND](AND.md) "AND (boolean)") x2 <= 255 [THEN](THEN.md) [PRINT](PRINT.md) "[" + [CHR$](" + [CHR$.md)(x2) + "]" [ELSE](ELSE.md) [PRINT](PRINT.md)     [END IF](END IF.md)     [IF](IF.md) x >= 100000 [AND](AND.md) "AND (boolean)") x < 200000 [THEN](THEN.md)      'QB84 Virtual Key codes       [PRINT](PRINT.md) "SDL VK"; x - 100000       [END IF](END IF.md)       [IF](IF.md) x >= 200000 [AND](AND.md) "AND (boolean)") x < [&H](&H.md)40000000 [THEN](THEN.md)             [PRINT](PRINT.md) "QB64 VK"; x - 200000     [END IF](END IF.md)     [IF](IF.md) x >= [&H](&H.md)40000000 [THEN](THEN.md)              'Unicode values (IME Input mode)       [PRINT](PRINT.md) "UNICODE "; x - [&H](&H.md)40000000; "0x" + [HEX$](HEX$.md)(x - [&H](&H.md)40000000) + " ...";       cx = [POS](POS.md)(1): cy = [CSRLIN](CSRLIN.md)       [_FONT](_FONT.md) unifont       [LOCATE](LOCATE.md) cy, cx       [COLOR](COLOR.md) 15       z$ = [MKL$](MKL$.md)(x - [&H](&H.md)40000000) + [MKL$](MKL$.md)(0)       [PRINT](PRINT.md) z$ + z$ + z$;       [_FONT](_FONT.md) font       [LOCATE](LOCATE.md) cy, 1: [PRINT](PRINT.md)     [END IF](END IF.md)   [END IF](END IF.md) [LOOP](LOOP.md)  
```

  

## See also

* [_KEYDOWN](_KEYDOWN.md), [_CINP](_CINP.md)
* [_MAPUNICODE](_MAPUNICODE.md), [_MAPUNICODE (function)](_MAPUNICODE (function).md) "MAPUNICODE (function)")
* [INKEY$](INKEY$.md), [ASCII](ASCII.md) (code table),
* [Unicode](Unicode.md), [Code Pages](Code Pages.md) (by region)
* [INP](INP.md)([&H60](&H60.md)), [Scancodes](Scancodes.md)
* [ON KEY(n)](ON KEY(n).md) "ON KEY(n)"), [KEY(n)](KEY(n).md) "KEY(n)"), [KEY n](KEY n.md)
* [Windows hot keys](Windows hot keys.md) "Windows Libraries")

  
