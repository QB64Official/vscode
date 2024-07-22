## DTMF Phone Demo
---
<blockquote>

### Demonstrates the Dual Tone Multi-Frequency sounds used by telephones. Includes dial tone, ringing and busy signals.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
RANDOMIZE TIMER
PRINT
PRINT "                                 Phone Dialer"
PRINT
PRINT "                                 +---------+"
PRINT "                                 | 1 2 3 A |"
PRINT "                                 | 4 5 6 B |"
PRINT "                                 | 7 8 9 C |"
PRINT "                                 | * 0 # D |"
PRINT "                                 +---------+"
PRINT "                         Use comma for 1 second delay"

DO
 LOCATE 15, 20: PRINT SPACE$(60);
 LOCATE 15, 20: LINE INPUT "Enter a number to dial: ", dialed$
 IF LEN(dialed$) = 0 THEN EXIT DO

 PlayTone 350, 440, 4

 FOR d = 1 TO LEN(dialed$)

   dial$ = MID$(dialed$, d, 1)

   SELECT EVERYCASE dial$
     CASE "1", "4", "7", "*": left = 1209
     CASE "2", "5", "8", "0": left = 1336
     CASE "3", "6", "9", "#": left = 1477
     CASE "A", "B", "C", "D": left = 1633
     CASE ",": left = 0: rite = 0: _DELAY 1
     CASE "1", "2", "3", "A": rite = 697
     CASE "4", "5", "6", "B": rite = 770
     CASE "7", "8", "9", "C": rite = 852
     CASE "*", "0", "#", "D": rite = 941
     CASE ELSE: left = 0: rite = 0
   END SELECT

   IF left THEN PlayTone left, rite, .25

 NEXT

 rand = INT(RND * 2)                             'random sounds after dial
 FOR i = 1 TO 4
   IF rand = 1 THEN
     _DELAY 3: PlayTone 440, 480, 1              'ringing sound
   ELSE: _DELAY .6: PlayTone 480, 620, .3        'busy signal
   END IF
 NEXT

LOOP
END

SUB PlayTone (FREQ1, FREQ2, Seconds)
Pi2 = 8 * ATN(1) '2 * pi
Amplitude = .5 'amplitude of the signal from -1.0 to 1.0
SampleRate = _SNDRATE 'sets the sample rate
FRate1 = FREQ1 / SampleRate
FRate2 = FREQ2 / SampleRate
FOR Duration = 0 TO Seconds * SampleRate 'play 5 seconds
 left = Amplitude * SIN(Pi2 * Duration * FRate1) 'sine wave
 rite = Amplitude * SIN(Pi2 * Duration * FRate2)
 'LOCATE 1, 1: PRINT left, rite
 _SNDRAW left, rite
NEXT
DO: LOOP WHILE _SNDRAWLEN
END SUB
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [_SNDRAW](./_SNDRAW.md)
* [SOUND](./SOUND.md)
* [PLAY](./PLAY.md)

</blockquote>
