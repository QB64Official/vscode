# TIME$

The **TIME$** Function returns a [STRING](STRING.md) representation of the current computer time in a 24 hour format.

  

## Syntax

PRINT "Present time = "; **TIME$**
  

## Description

* Returns the present computer time in hh:mm:ss 24 hour format: "19:20:33"
* Uses 2 colon (:) separators between hours, minutes and seconds
* Hour values range from "00" to "23" starting from midnite.
* Minutes and seconds range from "00" to "59"
* Continuous TIME$ calls may lag if a QBasic program is minimized to the taskbar!

  

## Examples

*Example 1:* A simple clock using [DRAW](DRAW.md) with Turn Angle.

``` [SCREEN](SCREEN.md) 12 [DO](DO.md)     [CLS](CLS.md)     t$ = TIME$: h = [VAL](VAL.md)(t$): m = [VAL](VAL.md)([MID$](MID$.md) "MID$ (function)")(t$, 4, 2)): s = [VAL](VAL.md)([MID$](MID$.md) "MID$ (function)")(t$, 7, 2))     [PRINT](PRINT.md) t$     [CIRCLE](CIRCLE.md) [STEP](STEP.md)(0, 0), 200, 8     [DRAW](DRAW.md) "c12ta" + [STR$](STR$.md)((h [MOD](MOD.md) 12) * -30) + "nu133"     [DRAW](DRAW.md) "c14ta" + [STR$](STR$.md)(m * -6) + "nu200"     [DRAW](DRAW.md) "c9ta" + [STR$](STR$.md)(s * -6) + "nu200"     [_DISPLAY](_DISPLAY.md)     [_LIMIT](_LIMIT.md) 1 [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27)  
```

Explanation: Note that [VAL](VAL.md)(TIME$) can just return the hour number 0 to 23 as the read stops at the first colon.
  

*Example 2:* The following Function converts TIME$ to normal 12 hour AM-PM digital clock format.

``` PRINT TIME$ PRINT Clock$  [FUNCTION](FUNCTION.md) Clock$ hour$ = [LEFT$](LEFT$.md)(TIME$, 2): H% = [VAL](VAL.md)(hour$) min$ = [MID$](MID$.md) "MID$ (function)")(TIME$, 3, 3) IF H% >= 12 THEN ampm$ = " PM" ELSE ampm$ = " AM" IF H% > 12 THEN   IF H% - 12 < 10 THEN hour$ = [STR$](STR$.md)(H% - 12) ELSE hour$ = [LTRIM$](LTRIM$.md)([STR$](STR$.md)(H% - 12)) ELSEIF H% = 0 THEN hour$ = "12"          ' midnight hour ELSE : IF H% < 10 THEN hour$ = [STR$](STR$.md)(H%)  ' eliminate leading zeros END IF Clock$ = hour$ + min$ + ampm$ END FUNCTION  
```

``` 14:13:36  2:13 PM  
```

*Explanation:* When hours are less than 10 (but not 0), [STR$](STR$.md)(H%) alone keeps a space ahead of the hour. For 2 digit hours, [LTRIM$](LTRIM$.md) is used to remove that leading space. For the hours of 10 AM to 12 PM, the hour [STRING](STRING.md) value is passed from [LEFT$](LEFT$.md)(TIME$, 2) at the beginning of the function.
  

## See also

* [TIMER (function)](TIMER (function).md) "TIMER (function)")
* [DATE$](DATE$.md), [IF...THEN](IF...THEN.md)
* [VAL](VAL.md), [STR$](STR$.md), [MID$ (function)](MID$ (function).md) "MID$ (function)")
* [LEFT$](LEFT$.md), [RIGHT$](RIGHT$.md)

  
