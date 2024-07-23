<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [DTMF Phone Demo](DTMF_Phone_Demo.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DTMF%20Phone%20Demo)
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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SNDRAW](SNDRAW.md)
* [SOUND](SOUND.md)
* [PLAY](PLAY.md)
</blockquote>
