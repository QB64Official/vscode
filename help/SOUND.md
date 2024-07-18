## SOUND
---

### SOUND sets frequency and duration of sounds from the internal PC speaker if the computer has one or the sound card in QB64.

#### SYNTAX

`SOUND frequency# , duration# [, volume# ][, panning# ][, waveform& ]`

#### DESCRIPTION
* frequency# is any literal or variable value from 37 to 32767, but 0 is allowed for delays.
	* Just like QuickBASIC 4.5 frequencies on or above 20000 produces silence.
* duration# is any literal or variable number of [TIMER](./TIMER.md) ticks with a duration of 1/18th second. 18 = one second.
* Optional parameter volume# should be between 0.0 (muted) to 1.0 (full volume).
* Optional parameter panning# should be between -1.0 (hard left) to 1.0 (hard right). 0.0 being center.
* Optional parameter waveform& can be one of the following:
	* 1 for square waveform
	* 2 for sawtooth waveform
	* 3 for triangle waveform (default)
	* 4 for sine waveform
	* 5 for white noise
* More waveform types may be introduced in the future.
* [PLAY](./PLAY.md) can be used for musical sounds.


#### EXAMPLES
```vb
notes$ = "C C#D D#E F F#G G#A A#B "
COLOR 9: LOCATE 5, 20: PRINT "Select an octave (1 - 7) to play (8 quits):"
DO
   DO: octa$ = INKEY$
       IF octa$ <> "" THEN
           IF ASC(octa$) > 48 AND ASC(octa$) < 58 THEN octave% = VAL(octa$): EXIT DO
       END IF
   LOOP UNTIL octave% > 7
   IF octave% > 0 AND octave% < 8 THEN
       LOCATE 15, 6: PRINT SPACE$(70)
       LOCATE 16, 6: PRINT SPACE$(70)
       COLOR 14: LOCATE 15, 6: PRINT "Octave"; octave%; ":";
       RESTORE Octaves
       FOR i = 1 TO 12
           READ note!
           snd% = CINT(note! * (2 ^ (octave% - 1))) 'calculate note frequency
           COLOR 14: PRINT STR$(snd%);
           c0l = POS(0)
           COLOR 11: LOCATE 16, c0l - 2: PRINT MID$(notes$, 1 + (2 * (i - 1)), 2)
           LOCATE 15, c0l
           IF snd% > 36 THEN SOUND snd%, 12 'error if sound value is < 36
           _DELAY .8
       NEXT
   END IF
LOOP UNTIL octave% > 7
END

Octaves:
DATA 32.7,34.65,36.71,38.9,41.2,43.65,46.25,49,51.91,55,58.27,61.74
```
  
```vb
SCREEN 13
_FULLSCREEN
OUT &H3C8, 0: OUT &H3C9, 0: OUT &H3C9, 0: OUT &H3C9, 20
COLOR 1
FOR i% = 1 TO 21
   LOCATE 2 + i%, 2: PRINT CHR$(178)
   LOCATE 2 + i%, 39: PRINT CHR$(178)
NEXT i%
FOR i% = 2 TO 39
   LOCATE 2, i%: PRINT CHR$(223)
   LOCATE 23, i%: PRINT CHR$(220)
NEXT i%
COLOR 9
LOCATE 3, 16: PRINT CHR$(34); "MY BONNIE"; CHR$(34)
SLEEP 3
FOR i% = 1 TO 34
   SELECT CASE i%
       CASE 1: LOCATE 5, 5
       CASE 10: LOCATE 10, 5
       CASE 18: LOCATE 15, 5
       CASE 27: LOCATE 20, 5
   END SELECT
   READ note%, duration%, word$
   SOUND note%, duration%: PRINT word$;
NEXT i%
SLEEP 2
LOCATE 23, 16: PRINT "Thank You!"
SLEEP 4
SYSTEM

DATA 392,8,"My ",659,8,"Bon-",587,8,"nie ",523,8,"lies ",587,8,"O-",523,8,"Ver ",440,8,"the "
DATA 392,8,"O-",330,32,"cean ",392,8,"My ",659,8,"Bon-",587,8,"nie ",523,8,"lies "
DATA 523,8,"O-",494,8,"ver ",523,8,"the ",587,40,"sea ",392,8,"My ",659,8,"Bon-",587,8,"nie"
DATA 523,8," lies ",587,8,"O-",523,8,"ver ",440,8,"the ",392,8,"O-",330,32,"cean ",392,8,"Oh "
DATA 440,8,"bring ",587,8,"back ",523,8,"my ",494,8,"Bon-",440,8,"nie ",494,8,"to ",523,32,"me..!"
```
  
```vb
OPTION _EXPLICIT

DIM Q AS STRING

' Sound effects menu
DO
   CLS
   PRINT "Sound effects": PRINT
   COLOR 14, 0: PRINT "  B";: COLOR 7, 0: PRINT "ouncing"
   COLOR 14, 0: PRINT "  F";: COLOR 7, 0: PRINT "alling"
   COLOR 14, 0: PRINT "  K";: COLOR 7, 0: PRINT "laxon"
   COLOR 14, 0: PRINT "  S";: COLOR 7, 0: PRINT "iren"
   COLOR 14, 0: PRINT "  Q";: COLOR 7, 0: PRINT "uit"
   PRINT: PRINT "Select: ";

   ' Get valid key
   DO
       Q = UCASE$(INPUT$(1))
   LOOP WHILE INSTR("BFKSQ", Q) = 0

   ' Take action based on key
   CLS
   SELECT CASE Q
       CASE IS = "B"
           PRINT "Bouncing . . . "
           Bounce 32767, 246 ' the 32767 will make the PSG generate silence (exactly like QB45 does)
       CASE IS = "F"
           PRINT "Falling . . . "
           Fall 2000, 550, 500
       CASE IS = "S"
           PRINT "Wailing . . ."
           PRINT " . . . press any key to end."
           Siren 780, 650
       CASE IS = "K"
           PRINT "Oscillating . . ."
           PRINT " . . . press any key to end."
           Klaxon 987, 329
       CASE ELSE
   END SELECT
LOOP UNTIL Q = "Q"
END

' Loop two sounds down at decreasing time intervals
SUB Bounce (Hi AS LONG, Low AS LONG)
   DIM count AS LONG

   PLAY "Q0" ' turn off volume ramping

   FOR count = 60 TO 1 STEP -2
       SOUND Low - count / 2, count / 20, 1.0!, 0.0!, 1
       SOUND Hi, count / 15
   NEXT
END SUB

' Loop down from a high sound to a low sound
SUB Fall (Hi AS LONG, Low AS LONG, Del AS LONG)
   DIM vol AS SINGLE
   DIM count AS LONG

   PLAY "Q3" ' enable 3ms volume ramping

   FOR count = Hi TO Low STEP -10
       vol = 1.0! - vol
       SOUND count, Del / count, vol, 0.0!, 3 ' triangle wave
   NEXT
END SUB

' Alternate two sounds until a key is pressed
SUB Klaxon (Hi AS LONG, Low AS LONG)
   PLAY "Q5" ' enable 5ms volume ramping

   DO WHILE INKEY$ = ""
       SOUND Hi, 5!, 1.0!, -1.0!, 4
       SOUND Low, 5!, 1.0!, 1.0!, 4
   LOOP
END SUB

' Loop a sound from low to high to low
SUB Siren (Hi AS LONG, Range AS LONG)
   DIM count AS LONG, pan AS SINGLE
   DIM dir AS SINGLE: dir = 0.01!

   PLAY "Q0" ' disable volume ramping

   DO WHILE INKEY$ = ""
       FOR count = Range TO -Range STEP -4
           pan = pan + dir
           IF pan <= -1.0! THEN dir = 0.01!: pan = -1.0!
           IF pan >= 1.0! THEN dir = -0.01!: pan = 1.0!

           SOUND Hi - ABS(count), 0.3!, 1.0!, pan, 4 ' sine wave

           count = count - 2 / Range
       NEXT
   LOOP
END SUB
```
  


#### SEE ALSO
* [PLAY](./PLAY.md) , [BEEP](./BEEP.md)
* [_SNDOPEN](./_SNDOPEN.md)
* [_SNDRAW](./_SNDRAW.md)
