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


## [_SNDRAW](SNDRAW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDRAW)
---
<blockquote>

### The _SNDRAW statement plays sound wave sample frequencies created by a program.

</blockquote>

#### SYNTAX

<blockquote>

`_SNDRAW leftSample [, rightSample ][, pipeHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>


* The leftSample and rightSample value(s) can be any [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) literal or variable frequency value from -1.0 to 1.0.
* The pipeHandle& parameter refers to the sound pipe opened using [_SNDOPENRAW](SNDOPENRAW.md) .
</blockquote>

#### DESCRIPTION

<blockquote>


* Specifying pipeHandle& allows sound to be played through two or more channels at the same time ( version 1.000 and up ).
* If only leftSample value is used, the sound will come out of both speakers.
* Using [_SNDRAW](SNDRAW.md) will pause any currently playing music.
* [_SNDRAW](SNDRAW.md) is designed for continuous play. It will not produce any sound until a significant number of samples have been queued. No sound is played if only a few samples are queued.
* Ensure that [_SNDRAWLEN](SNDRAWLEN.md) is comfortably above 0 (until you've actually finished playing sound). If you are getting occasional unintended random clicks, this generally means that [_SNDRAWLEN](SNDRAWLEN.md) has dropped to 0.
* [_SNDRAW](SNDRAW.md) is not intended to queue up many minutes worth of sound. It will probably work but will chew up a lot of memory (and if it gets swapped to disk, your sound could be interrupted abruptly).
* [_SNDRATE](SNDRATE.md) determines how many samples are played per second, but timing is done by the sound card, not your program.
* Do not attempt to use _TIMER or [_DELAY](DELAY.md) or [_LIMIT](LIMIT.md) to control the timing of _SNDRAW. You may use them for delays or to limit your program's CPU usage, but how much to queue should only be based on the [_SNDRAWLEN](SNDRAWLEN.md) .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Sound using a sine wave with _SNDRAW Amplitude * SIN(8 * ATN(1) * Duration * (Frequency / _SNDRATE))
```vb
FREQ = 400                             'any frequency desired from 36 to 10,000
Pi2 = 8 * ATN(1)                       '2 * pi
Amplitude = .3                         'amplitude of the signal from -1.0 to 1.0
SampleRate = _SNDRATE                  'sets the sample rate
FRate = FREQ / SampleRate'
FOR Duration = 0 TO 5 * SampleRate     'play 5 seconds
_SNDRAW Amplitude * SIN(Pi2 * Duration * FRate)            'sine wave
'_SNDRAW Amplitude * SGN(SIN(Pi2 * Duration * FRate))       'square wave
NEXT
_SNDRAWDONE
DO: LOOP WHILE _SNDRAWLEN
END
```
  
<br>



##### Example 2: A simple ringing bell tone that tapers off.
```vb
t = 0
tmp$ = "Sample = ##.#####   Time = ##.#####"
LOCATE 1, 60: PRINT "Rate:"; _SNDRATE
DO
'queue some sound
DO WHILE _SNDRAWLEN < 0.2             'you may wish to adjust this
sample = SIN(t * 440 * ATN(1) * 8)  '440Hz sine wave (t * 440 * 2π)
sample = sample * EXP(-t * 3)       'fade out eliminates clicks after sound
_SNDRAW sample
t = t + 1 / _SNDRATE                'sound card sample frequency determines time
LOOP

'do other stuff, but it may interrupt sound
LOCATE 1, 1: PRINT USING tmp$; sample; t
LOOP WHILE t < 3.0                      'play for 3 seconds

_SNDRAWDONE
DO WHILE _SNDRAWLEN > 0                 'Finish any left over queued sound!
LOOP
END
```
  
<br>



##### Example 3: Routine uses _SNDRAW to display and play 12 notes from octaves 1 through 9.
```vb
DIM SHARED rate&
rate& = _SNDRATE
DO
PRINT "Enter the octave 1 to 8 (0 quits!):";
oct% = VAL(INPUT$(1)): PRINT oct%
IF oct% = 0 THEN EXIT DO
octave = oct% - 4 '440 is in the 4th octave, 9th note
COLOR oct% + 1
PRINT USING "Octave: ##"; oct%
FOR Note = 0 TO 11  'notes C to B
fq = FreQ(octave, Note, note$)
PRINT USING "#####.## \\"; fq, note$
PlaySound fq
IF INKEY$ > "" THEN EXIT DO
NEXT
LOOP
END

FUNCTION FreQ (octave, note, note$)
FreQ = 440 * 2 ^ (octave + (note + 3) / 12 - 1) '* 12 note octave starts at C (3 notes up)
note$ = MID$("C C#D D#E F F#G G#A A#B ", note * 2 + 1, 2)
END FUNCTION

SUB PlaySound (frq!)    ' plays sine wave fading in and out
SndLoop! = 0
DO WHILE SndLoop! < rate&
_SNDRAW SIN((2 * 4 * ATN(1) * SndLoop! / rate&) * frq!) * EXP(-(SndLoop! / rate&) * 3)
SndLoop! = SndLoop! + 1
LOOP
_SNDRAWDONE
DO: LOOP WHILE _SNDRAWLEN   'flush the sound playing buffer
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SNDRATE](SNDRATE.md) , [_SNDRAWLEN](SNDRAWLEN.md)
* [_SNDOPENRAW](SNDOPENRAW.md) , [_SNDRAWDONE](SNDRAWDONE.md)
* [_SNDOPEN](SNDOPEN.md)
* [PLAY](PLAY.md) , [BEEP](BEEP.md)
* DTMF Phone Demo
</blockquote>
