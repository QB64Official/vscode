# SOUND

**SOUND** sets frequency and duration of sounds from the internal PC speaker if the computer has one or the sound card in QB64.

  

## Syntax

SOUND *frequency#*, *duration#*[, *volume#*][, *panning#*][, *waveform&*]
  

## Description

* *frequency#* is any literal or variable value from 37 to 32767, but 0 is allowed for delays.
	+ Just like QuickBASIC 4.5 frequencies on or above 20000 produces silence.
* *duration#* is any literal or variable number of [TIMER](TIMER.md) "TIMER (function)") ticks with a duration of 1/18th second. 18 = one second.
* Optional parameter *volume#* should be between 0.0 (muted) to 1.0 (full volume).
* Optional parameter *panning#* should be between -1.0 (hard left) to 1.0 (hard right). 0.0 being center.
* Optional parameter *waveform&* can be one of the following:
	+ **1** for square waveform
	+ **2** for sawtooth waveform
	+ **3** for triangle waveform (default)
	+ **4** for sine waveform
	+ **5** for white noise
* More waveform types may be introduced in the future.
* [PLAY](PLAY.md) can be used for musical sounds.

Note
The last volume, panning and waveform settings will apply to subsequent calls to **SOUND** (when used without the optional parameters) and [PLAY](PLAY.md).
### Errors

* Low *frequency#* values between 0 and 37 will create an [Illegal Function call error](Illegal Function call error.md).
* Out of range values for *volume#*, *panning#* and *waveform&* will create an [Illegal Function call error](Illegal Function call error.md).
* All audio related statements and functions work even if the program is not in focus. However, depending on the operating system and environment, this may not always be the case.
* **SOUND** may have clicks or pauses between the sounds generated.

Note
**SOUND** 0, 0 will not stop previous **QB64** sounds like it did in QBasic!

---

  

```          **The Seven Music Octaves**            **Note     Frequency      Note     Frequency      Note      Frequency**        **1*** D#1 ...... 39           G3 ....... 196          A#5 ...... 932           E1 ....... 41           G#3 ...... 208          B5 ....... 988           F1 ....... 44           A3 ....... 220       **6*** C6 ....... 1047           F#1 ...... 46           A#3 ...... 233          C#6 ...... 1109           G1 ....... 49           B3 ....... 247          D6 ....... 1175           G#1 ...... 51        **4*** C4 ....... 262          D#6 ...... 1245           A1 ....... 55           C#4 ...... 277          E6 ....... 1318           A#1 ...... 58           D4 ....... 294          F6 ....... 1397           B1 ....... 62           D#4 ...... 311          F#6 ...... 1480        **2*** C2 ....... 65           E4 ....... 330          G6 ....... 1568           C#2 ...... 69           F4 ....... 349          G# ....... 1661           D2 ....... 73           F#4 ...... 370          A6 ....... 1760           D#2 ...... 78           G4 ....... 392          A#6 ...... 1865           E2 ....... 82           G#4 ...... 415          B6 ....... 1976           F2 ....... 87           A4 ....... 440       **7*** C7 ....... 2093           F#2 ...... 92           A# ....... 466          C#7 ...... 2217           G2 ....... 98           B4 ....... 494          D7 ....... 2349           G#2 ...... 104       **5*** C5 ....... 523          D#7 ...... 2489           A2 ....... 110          C#5 ...... 554          E7 ....... 2637           A#2 ...... 117          D5 ....... 587          F7 ....... 2794           B2 ....... 123          D#5 ...... 622          F#7 ...... 2960        **3*** C3 ....... 131          E5 ....... 659          G7 ....... 3136           C#3 ...... 139          F5 ....... 698          G#7 ...... 3322           D3 ....... 147          F#5 ...... 740          A7 ....... 3520           D#3 ...... 156          G5 ....... 784          A#7 ...... 3729           E3 ....... 165          G#5 ...... 831          B7 ....... 3951           F3 ....... 175          A5 ....... 880       **8*** C8 ....... 4186           F#3 ...... 185                                  **# denotes sharp**  
```

  

## Availability

* [![v0.610](![v0.610.md)](File:Qb64.png "v0.610")

**v0.610**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

* Support for *volume#*, *panning#*, *waveform&* was added in **QB64-PE v3.8.0**.

  

## Examples

Example 1
Playing the seven octaves based on the base note DATA * 2 ^ (octave - 1).

``` notes$ = "C C#D D#E F F#G G#A A#B " [COLOR](COLOR.md) 9: [LOCATE](LOCATE.md) 5, 20: [PRINT](PRINT.md) "Select an octave (1 - 7) to play (8 quits):" [DO](DO.md)     [DO](DO.md): octa$ = [INKEY$](INKEY$.md)         [IF](IF.md) octa$ <> "" [THEN](THEN.md)             [IF](IF.md) [ASC](ASC.md) "ASC (function)")(octa$) > 48 [AND](AND.md) "AND (boolean)") [ASC](ASC.md) "ASC (function)")(octa$) < 58 [THEN](THEN.md) octave% = [VAL](VAL.md)(octa$): [EXIT DO](EXIT DO.md)         [END IF](END IF.md)     [LOOP UNTIL](LOOP UNTIL.md) octave% > 7     [IF](IF.md) octave% > 0 [AND](AND.md) "AND (boolean)") octave% < 8 [THEN](THEN.md)         [LOCATE](LOCATE.md) 15, 6: [PRINT](PRINT.md) [SPACE$](SPACE$.md)(70)         [LOCATE](LOCATE.md) 16, 6: [PRINT](PRINT.md) [SPACE$](SPACE$.md)(70)         [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 15, 6: [PRINT](PRINT.md) "Octave"; octave%; ":";         [RESTORE](RESTORE.md) Octaves         [FOR](FOR.md) i = 1 [TO](TO.md) 12             [READ](READ.md) note!             snd% = [CINT](CINT.md)(note! * (2 ^ (octave% - 1))) 'calculate note frequency             [COLOR](COLOR.md) 14: [PRINT](PRINT.md) [STR$](STR$.md)(snd%);             c0l = [POS](POS.md)(0)             [COLOR](COLOR.md) 11: [LOCATE](LOCATE.md) 16, c0l - 2: [PRINT](PRINT.md) [MID$](MID$.md) "MID$ (function)")(notes$, 1 + (2 * (i - 1)), 2)             [LOCATE](LOCATE.md) 15, c0l             [IF](IF.md) snd% > 36 [THEN](THEN.md) SOUND snd%, 12 'error if sound value is < 36             [_DELAY](_DELAY.md) .8         [NEXT](NEXT.md)     [END IF](END IF.md) [LOOP UNTIL](LOOP UNTIL.md) octave% > 7 [END](END.md)  Octaves: [DATA](DATA.md) 32.7,34.65,36.71,38.9,41.2,43.65,46.25,49,51.91,55,58.27,61.74  
```

---

Example 2
Playing a song called "Bonnie" with **SOUND** frequencies.

``` [SCREEN](SCREEN.md) 13 [_FULLSCREEN](_FULLSCREEN.md) [OUT](OUT.md) &H3C8, 0: [OUT](OUT.md) &H3C9, 0: [OUT](OUT.md) &H3C9, 0: [OUT](OUT.md) &H3C9, 20 [COLOR](COLOR.md) 1 [FOR](FOR.md) i% = 1 [TO](TO.md) 21     [LOCATE](LOCATE.md) 2 + i%, 2: [PRINT](PRINT.md) [CHR$](CHR$.md)(178)     [LOCATE](LOCATE.md) 2 + i%, 39: [PRINT](PRINT.md) [CHR$](CHR$.md)(178) [NEXT](NEXT.md) i% [FOR](FOR.md) i% = 2 [TO](TO.md) 39     [LOCATE](LOCATE.md) 2, i%: [PRINT](PRINT.md) [CHR$](CHR$.md)(223)     [LOCATE](LOCATE.md) 23, i%: [PRINT](PRINT.md) [CHR$](CHR$.md)(220) [NEXT](NEXT.md) i% [COLOR](COLOR.md) 9 [LOCATE](LOCATE.md) 3, 16: [PRINT](PRINT.md) [CHR$](CHR$.md)(34); "MY BONNIE"; [CHR$](CHR$.md)(34) [SLEEP](SLEEP.md) 3 [FOR](FOR.md) i% = 1 [TO](TO.md) 34     [SELECT CASE](SELECT CASE.md) i%         [CASE](CASE.md) 1: [LOCATE](LOCATE.md) 5, 5         [CASE](CASE.md) 10: [LOCATE](LOCATE.md) 10, 5         [CASE](CASE.md) 18: [LOCATE](LOCATE.md) 15, 5         [CASE](CASE.md) 27: [LOCATE](LOCATE.md) 20, 5     [END SELECT](END SELECT.md)     [READ](READ.md) note%, duration%, word$     SOUND note%, duration%: [PRINT](PRINT.md) word$; [NEXT](NEXT.md) i% [SLEEP](SLEEP.md) 2 [LOCATE](LOCATE.md) 23, 16: [PRINT](PRINT.md) "Thank You!" [SLEEP](SLEEP.md) 4 [SYSTEM](SYSTEM.md)  [DATA](DATA.md) 392,8,"My ",659,8,"Bon-",587,8,"nie ",523,8,"lies ",587,8,"O-",523,8,"Ver ",440,8,"the " [DATA](DATA.md) 392,8,"O-",330,32,"cean ",392,8,"My ",659,8,"Bon-",587,8,"nie ",523,8,"lies " [DATA](DATA.md) 523,8,"O-",494,8,"ver ",523,8,"the ",587,40,"sea ",392,8,"My ",659,8,"Bon-",587,8,"nie" [DATA](DATA.md) 523,8," lies ",587,8,"O-",523,8,"ver ",440,8,"the ",392,8,"O-",330,32,"cean ",392,8,"Oh " [DATA](DATA.md) 440,8,"bring ",587,8,"back ",523,8,"my ",494,8,"Bon-",440,8,"nie ",494,8,"to ",523,32,"me..!"  
```

---

Example 3
Playing sound effects using the new QB64-PE **SOUND** extensions.

``` [OPTION](OPTION.md) [_EXPLICIT](_EXPLICIT.md)  [DIM](DIM.md) Q [AS](AS.md) [STRING](STRING.md)  ' Sound effects menu [DO](DO.md)     [CLS](CLS.md)     [PRINT](PRINT.md) "Sound effects": [PRINT](PRINT.md)     [COLOR](COLOR.md) 14, 0: [PRINT](PRINT.md) "  B";: [COLOR](COLOR.md) 7, 0: [PRINT](PRINT.md) "ouncing"     [COLOR](COLOR.md) 14, 0: [PRINT](PRINT.md) "  F";: [COLOR](COLOR.md) 7, 0: [PRINT](PRINT.md) "alling"     [COLOR](COLOR.md) 14, 0: [PRINT](PRINT.md) "  K";: [COLOR](COLOR.md) 7, 0: [PRINT](PRINT.md) "laxon"     [COLOR](COLOR.md) 14, 0: [PRINT](PRINT.md) "  S";: [COLOR](COLOR.md) 7, 0: [PRINT](PRINT.md) "iren"     [COLOR](COLOR.md) 14, 0: [PRINT](PRINT.md) "  Q";: [COLOR](COLOR.md) 7, 0: [PRINT](PRINT.md) "uit"     [PRINT](PRINT.md): [PRINT](PRINT.md) "Select: ";      ' Get valid key     [DO](DO.md)         Q = [UCASE$](UCASE$.md)([INPUT$](INPUT$.md)(1))     [LOOP WHILE](LOOP WHILE.md) [INSTR](INSTR.md)("BFKSQ", Q) = 0      ' Take action based on key     [CLS](CLS.md)     [SELECT CASE](SELECT CASE.md) Q         [CASE](CASE.md) [IS](IS.md) = "B"             [PRINT](PRINT.md) "Bouncing . . . "             Bounce 32767, 246 ' the 32767 will make the PSG generate silence (exactly like QB45 does)         [CASE](CASE.md) [IS](IS.md) = "F"             [PRINT](PRINT.md) "Falling . . . "             Fall 2000, 550, 500         [CASE](CASE.md) [IS](IS.md) = "S"             [PRINT](PRINT.md) "Wailing . . ."             [PRINT](PRINT.md) " . . . press any key to end."             Siren 780, 650         [CASE](CASE.md) [IS](IS.md) = "K"             [PRINT](PRINT.md) "Oscillating . . ."             [PRINT](PRINT.md) " . . . press any key to end."             Klaxon 987, 329         [CASE](CASE.md) [ELSE](ELSE.md)     [END SELECT](END SELECT.md) [LOOP UNTIL](LOOP UNTIL.md) Q = "Q" [END](END.md)  ' Loop two sounds down at decreasing time intervals [SUB](SUB.md) Bounce (Hi [AS](AS.md) [LONG](LONG.md), Low [AS](AS.md) [LONG](LONG.md))     [DIM](DIM.md) count [AS](AS.md) [LONG](LONG.md)      [PLAY](PLAY.md) "Q0" ' turn off volume ramping      [FOR](FOR.md) count = 60 [TO](TO.md) 1 [STEP](STEP.md) -2         SOUND Low - count / 2, count / 20, 1.0!, 0.0!, 1         SOUND Hi, count / 15     [NEXT](NEXT.md) [END SUB](END SUB.md)  ' Loop down from a high sound to a low sound [SUB](SUB.md) Fall (Hi [AS](AS.md) [LONG](LONG.md), Low [AS](AS.md) [LONG](LONG.md), Del [AS](AS.md) [LONG](LONG.md))     [DIM](DIM.md) vol [AS](AS.md) [SINGLE](SINGLE.md)     [DIM](DIM.md) count [AS](AS.md) [LONG](LONG.md)      [PLAY](PLAY.md) "Q3" ' enable 3ms volume ramping      [FOR](FOR.md) count = Hi [TO](TO.md) Low [STEP](STEP.md) -10         vol = 1.0! - vol         SOUND count, Del / count, vol, 0.0!, 3 ' triangle wave     [NEXT](NEXT.md) [END SUB](END SUB.md)  ' Alternate two sounds until a key is pressed [SUB](SUB.md) Klaxon (Hi [AS](AS.md) [LONG](LONG.md), Low [AS](AS.md) [LONG](LONG.md))     [PLAY](PLAY.md) "Q5" ' enable 5ms volume ramping      [DO WHILE](DO WHILE.md) [INKEY$](INKEY$.md) = ""         SOUND Hi, 5!, 1.0!, -1.0!, 4         SOUND Low, 5!, 1.0!, 1.0!, 4     [LOOP](LOOP.md) [END SUB](END SUB.md)  ' Loop a sound from low to high to low [SUB](SUB.md) Siren (Hi [AS](AS.md) [LONG](LONG.md), Range [AS](AS.md) [LONG](LONG.md))     [DIM](DIM.md) count [AS](AS.md) [LONG](LONG.md), pan [AS](AS.md) [SINGLE](SINGLE.md)     [DIM](DIM.md) dir [AS](AS.md) [SINGLE](SINGLE.md): dir = 0.01!      [PLAY](PLAY.md) "Q0" ' disable volume ramping      [DO WHILE](DO WHILE.md) [INKEY$](INKEY$.md) = ""         [FOR](FOR.md) count = Range [TO](TO.md) -Range [STEP](STEP.md) -4             pan = pan + dir             [IF](IF.md) pan <= -1.0! [THEN](THEN.md) dir = 0.01!: pan = -1.0!             [IF](IF.md) pan >= 1.0! [THEN](THEN.md) dir = -0.01!: pan = 1.0!              SOUND Hi - [ABS](ABS.md)(count), 0.3!, 1.0!, pan, 4 ' sine wave              count = count - 2 / Range         [NEXT](NEXT.md)     [LOOP](LOOP.md) [END SUB](END SUB.md)  
```

  

## See also

* [PLAY](PLAY.md), [BEEP](BEEP.md)
* [_SNDOPEN](_SNDOPEN.md)
* [_SNDRAW](_SNDRAW.md)

  
