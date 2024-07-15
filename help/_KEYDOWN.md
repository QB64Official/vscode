# _KEYDOWN

The **_KEYDOWN** function returns whether modifying keys like CTRL, ALT, SHIFT, and any other keys are pressed.

  

## Syntax

return% = **_KEYDOWN(***code&***)**
  

* The *return* value is -1 if a specified key is pressed or 0 if it was not pressed. It can be used to monitor key combinations.
* The POSITIVE [LONG](LONG.md) *code* value can be from any function key that needs to be monitored in a key press combination.
* Unicode references:

* 1) What is the glyph represented by that UNICODE value: [Unicode Format Info](Unicode Format Info.md)
* 2) Which fonts support the characters I want to use: [Unicode Fonts](Unicode Fonts.md)
* 3) What was the format again?: [Unicode Formats](Unicode Formats.md)
* A UTF32 value is usually(but by no means always!) the same as a UTF16 value just with the top 2 bytes set to 0.

* An important difference between [INKEY$](INKEY$.md) and [_KEYHIT](_KEYHIT.md) is how they work when **CTRL, ALT** or **SHIFT** are used. [INKEY$](INKEY$.md) returns a different code if you hold down CTRL, ALT or SHIFT before pressing F1 (for example). [_KEYHIT](_KEYHIT.md) will return the same code regardless of which modifiers were used but you can check _KEYDOWN to see which modifying keys are being used.
* **Keyboards with Alt Gr key:** [_KEYHIT](_KEYHIT.md) may return both Alt(100307) and Ctrl(100306) codes when key is pressed or released.
* **Linux with foreign keyboards:** [SHELL](SHELL.md) [_HIDE](_HIDE.md) "setxkbmap us" will setup a keyboard to read US [Scancodes](Scancodes.md).

  

```                        **The QB64 Virtual Key constant values used:**            **0-255**: [ASCII and Extended code](ASCII and Extended code.md) values (Refer to [CP437](CP437.md))           **256-65535**: [ASCII 2-byte](ASCII 2-byte.md) character codes (unaffected by SHIFT/ALT/CTRL modifiers)                   Use [CVI](CVI.md) to convert ASCII 2-byte codes to _KEYDOWN values.  '                                **_KEYDOWN Keyboard Values** ' ' **Esc  F1    F2    F3    F4    F5    F6    F7    F8    F9    F10   F11   F12   Sys  ScL Pause** '  27 15104 15360 15616 15872 16128 16384 16640 16896 17152 17408 34048 34304 +316 +302 +019 ' **`~  1!  2@  3#  4$  5%  6^  7&  8*  9(  0) -_ =+ BkSp   Ins   Hme   PUp   NumL   /     *    -** ' 126 33  64  35  36  37  94  38  42  40  41 95 43   8   20992 18176 18688 +300   47    42   45 '  *96 49  50  51  52  53  54  55  56  57  48 45 61* ' **Tab Q   W   E   R   T   Y   U   I   O   P  [{  ]}  \|   Del   End   PDn   7Hme  8/▲   9PU   +**  '  9  81  87  69  82  84  89  85  73  79  80 123 125 124 21248 20224 20736 18176 18432 18688 43 '  *113 119 101 114 116 121 117 105 111 112  91  93  92                    55    56    57*  ' **CapL   A   S   D   F   G   H   J   K   L   ;:  '" Enter                   4/◄-   5    6/-►** ' +301  65  83  68  70  71  72  74  75  76  58  34  13                     19200 19456 19712  **E** '  *97 115 100 102 103 104 106 107 108  59  39                          52    53    54*    **n** ' **Shift   Z   X   C   V   B   N   M   ,<  .>  /?    Shift       ▲           1End  2/▼   3PD   t** ' +304   90  88  67  86  66  78  77  60  62  63    +303       18432        20224 20480 20736  **e** '  *122 120  99 118  98 110 109  44  46  47                             49    50    51*    **r** ' **Ctrl   Win  Alt     Spacebar      Alt  Win  Menu  Ctrl   ◄-   ▼   -►      0Ins        .Del**  ' +306  +311 +308       32         +307 +312 +319  +305 19200 20480 19712  20992       21248 13 '                                                                       *48          46* ' '       **Lower value = LCase/NumLock On __________________ + = add 100000**   
```

  

```          **65536-&H40000000: QB64-specific Virtual Key codes:**                          CONST KEY_PAUSE& = 100019                         CONST KEY_NUMLOCK& = 100300                         CONST KEY_CAPSLOCK& = 100301                         CONST KEY_SCROLLOCK& = 100302                         CONST KEY_RSHIFT& = 100303                         CONST KEY_LSHIFT& = 100304                         CONST KEY_RCTRL& = 100305                         CONST KEY_LCTRL& = 100306                         CONST KEY_RALT& = 100307                         CONST KEY_LALT& = 100308                         CONST KEY_RMETA& = 100309 'Left 'Apple' key (macOS)                         CONST KEY_LMETA& = 100310 'Right 'Apple' key (macOS)                         CONST KEY_LSUPER& = 100311 'Left "Windows" key                         CONST KEY_RSUPER& = 100312 'Right "Windows"key                         CONST KEY_MODE& = 100313 '"AltGr" key                         CONST KEY_COMPOSE& = 100314                         CONST KEY_HELP& = 100315                         CONST KEY_PRINT& = 100316                         CONST KEY_SYSREQ& = 100317                         CONST KEY_BREAK& = 100318                         CONST KEY_MENU& = 100319                         CONST KEY_POWER& = 100320                         CONST KEY_EURO& = 100321                         CONST KEY_UNDO& = 100322                         CONST KEY_KP0& = 100256                         CONST KEY_KP1& = 100257                         CONST KEY_KP2& = 100258                         CONST KEY_KP3& = 100259                         CONST KEY_KP4& = 100260                         CONST KEY_KP5& = 100261                         CONST KEY_KP6& = 100262                         CONST KEY_KP7& = 100263                         CONST KEY_KP8& = 100264                         CONST KEY_KP9& = 100265                         CONST KEY_KP_PERIOD& = 100266                         CONST KEY_KP_DIVIDE& = 100267                         CONST KEY_KP_MULTIPLY& = 100268                         CONST KEY_KP_MINUS& = 100269                         CONST KEY_KP_PLUS& = 100270                         CONST KEY_KP_ENTER& = 100271                         CONST KEY_KP_INSERT& = 200000                         CONST KEY_KP_END& = 200001                         CONST KEY_KP_DOWN& = 200002                         CONST KEY_KP_PAGE_DOWN& = 200003                         CONST KEY_KP_LEFT& = 200004                         CONST KEY_KP_MIDDLE& = 200005                         CONST KEY_KP_RIGHT& = 200006                         CONST KEY_KP_HOME& = 200007                         CONST KEY_KP_UP& = 200008                         CONST KEY_KP_PAGE_UP& = 200009                         CONST KEY_KP_DELETE& = 200010                         CONST KEY_SCROLL_LOCK_MODE& = 200011                         CONST KEY_INSERT_MODE& = 200012           **&H40000000 up**: [Unicode](Unicode.md) using the **cyberbit.ttf** font when available.                **Use [_KEYHIT](_KEYHIT.md) to find the key codes to be monitored by _KEYDOWN!**    
```

*Example 1:* Comparing the _KEYDOWN returns using [constant](constant.md) values with 2 byte [INKEY$](INKEY$.md) returns.

``` [CONST](CONST.md) RSHIFT& = 100303 [CONST](CONST.md) LSHIFT& = 100304 [DO](DO.md)     x = [_KEYHIT](_KEYHIT.md)     [IF](IF.md) x = [CVI](CVI.md)([CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(59)) [THEN](THEN.md)         [IF](IF.md) _KEYDOWN(LSHIFT&) [OR](OR.md) "OR (boolean)") _KEYDOWN(RSHIFT&) [THEN](THEN.md)             [PRINT](PRINT.md) "KEYHIT: SHIFT + F1"         [ELSE](ELSE.md)             [PRINT](PRINT.md) "KEYHIT: F1"         [END IF](END IF.md)     [END IF](END IF.md)     k$ = [INKEY$](INKEY$.md)         'compare key press return values     [IF](IF.md) k$ = [CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(59) [THEN](THEN.md) [PRINT](PRINT.md) "INKEY$: F1"     [IF](IF.md) k$ = [CHR$](CHR$.md)(0) + [CHR$](CHR$.md)(84) [THEN](THEN.md) [PRINT](PRINT.md) "INKEY$: SHIFT+F1" [LOOP](LOOP.md) [UNTIL](UNTIL.md) k$ = [CHR$](CHR$.md)(27)     'escape key exit  
```

  

*Example 2:* How to calculate the _KEYDOWN codes of the 2 byte INKEY$ arrow key codes using [CVI](CVI.md).

``` [SCREEN](SCREEN.md) 12  x = 320: y = 240 col = [_RGB](_RGB.md)(255, 0, 0) radius = 20  DO     [CLS](CLS.md)     [LOCATE](LOCATE.md) 1, 1: [PRINT](PRINT.md) "Use the arrow keys to move the circle."     [CIRCLE](CIRCLE.md) (x, y), radius, col     [PAINT](PAINT.md) (x, y), col      [IF](IF.md) _KEYDOWN([CVI](CVI.md)([CHR$](CHR$.md)(0) + "P")) [THEN](THEN.md) y = y + 1   '_KEYDOWN(20480)     [IF](IF.md) _KEYDOWN([CVI](CVI.md)([CHR$](CHR$.md)(0) + "H")) [THEN](THEN.md) y = y - 1   '_KEYDOWN(18432)     [IF](IF.md) _KEYDOWN([CVI](CVI.md)([CHR$](CHR$.md)(0) + "K")) [THEN](THEN.md) x = x - 1   '_KEYDOWN(19200)     [IF](IF.md) _KEYDOWN([CVI](CVI.md)([CHR$](CHR$.md)(0) + "M")) [THEN](THEN.md) x = x + 1   '_KEYDOWN(19712)      [_DISPLAY](_DISPLAY.md)     [_LIMIT](_LIMIT.md) 100 'limit to 100 frames per second [LOOP](LOOP.md)  
```

*Explanation:* When [CVI](CVI.md) is used with a 2 byte code, the code of the first character(0) is added to the second character code which is multiplied by 256. In the example, code zero is added to the [ASCII](ASCII.md) code of "P" which is 80. CVI multiplies 80 * 256 = 20480.
  

## See also

* [_KEYHIT](_KEYHIT.md), [Unicode](Unicode.md), [Code Pages](Code Pages.md) (by region)
* [_MAPUNICODE](_MAPUNICODE.md), [_MAPUNICODE (function)](_MAPUNICODE (function).md) "MAPUNICODE (function)")
* [INKEY$](INKEY$.md), [ASCII](ASCII.md), [CVI](CVI.md)
* [INP](INP.md)(&H60), [Scancodes](Scancodes.md)
* [ON KEY(n)](ON KEY(n).md) "ON KEY(n)"), [KEY(n)](KEY(n).md) "KEY(n)"), [KEY n](KEY n.md)
* [Windows hot keys](Windows hot keys.md) "Windows Libraries")

  
