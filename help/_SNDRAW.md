# _SNDRAW

The _SNDRAW statement plays sound wave sample frequencies created by a program.

  

## Syntax

_SNDRAW *leftSample*[, *rightSample*][, *pipeHandle&*]
  

## Parameters

* The *leftSample* and *rightSample* value(s) can be any [SINGLE](SINGLE.md) or [DOUBLE](DOUBLE.md) literal or variable frequency value from -1.0 to 1.0.
* The *pipeHandle&* parameter refers to the sound pipe opened using [_SNDOPENRAW](_SNDOPENRAW.md).

  

## Description

* Specifying *pipeHandle&* allows sound to be played through two or more channels at the same time (**version 1.000 and up**).
* If only *leftSample* value is used, the sound will come out of both speakers.
* Using _SNDRAW will pause any currently playing music.
* _SNDRAW is designed for continuous play. It will not produce any sound until a significant number of samples have been queued. No sound is played if only a few samples are queued.
* Ensure that [_SNDRAWLEN](_SNDRAWLEN.md) is comfortably above 0 (until you've actually finished playing sound). If you are getting occasional unintended random clicks, this generally means that [_SNDRAWLEN](_SNDRAWLEN.md) has dropped to 0.
* _SNDRAW is not intended to queue up many minutes worth of sound. It will probably work but will chew up a lot of memory (and if it gets swapped to disk, your sound could be interrupted abruptly).
* [_SNDRATE](_SNDRATE.md) determines how many samples are played per second, but timing is done by the sound card, not your program.
* **Do not attempt to use [_TIMER](_TIMER.md) or [_DELAY](_DELAY.md) or [_LIMIT](_LIMIT.md) to control the timing of _SNDRAW. You may use them for delays or to limit your program's CPU usage, but how much to queue should only be based on the [_SNDRAWLEN](_SNDRAWLEN.md).**

  

## Examples

*Example 1:* Sound using a sine wave with _SNDRAW Amplitude * SIN(8 * ATN(1) * Duration * (Frequency / _SNDRATE))

``` FREQ = 400                             'any frequency desired from 36 to 10,000 Pi2 = 8 * [ATN](ATN.md)(1)                       '2 * pi Amplitude = .3                         'amplitude of the signal from -1.0 to 1.0 SampleRate = [_SNDRATE](_SNDRATE.md)                  'sets the sample rate FRate = FREQ / SampleRate' [FOR](FOR.md) Duration = 0 [TO](TO.md) 5 * SampleRate     'play 5 seconds         _SNDRAW Amplitude * [SIN](SIN.md)(Pi2 * Duration * FRate)            'sine wave        '_SNDRAW Amplitude * [SGN](SGN.md)([SIN](SIN.md)(Pi2 * Duration * FRate))       'square wave [NEXT](NEXT.md) [_SNDRAWDONE](_SNDRAWDONE.md) [DO](DO.md): LOOP [WHILE](WHILE.md) [_SNDRAWLEN](_SNDRAWLEN.md) [END](END.md)  
```

*Explanation:* The loop Duration is determined by the number of seconds times the [_SNDRATE](_SNDRATE.md) number of samples per second. Square waves can use the same formula with Amplitude * [SGN](SGN.md)(SIN(8 * ATN(1) * Duration * (Frequency/_SNDRATE))).
  

*Example 2:* A simple ringing bell tone that tapers off.

``` t = 0 tmp$ = "Sample = ##.#####   Time = ##.#####" LOCATE 1, 60: PRINT "Rate:"; [_SNDRATE](_SNDRATE.md) DO   'queue some sound   DO WHILE [_SNDRAWLEN](_SNDRAWLEN.md) < 0.2             'you may wish to adjust this     sample = [SIN](SIN.md)(t * 440 * [ATN](ATN.md)(1) * 8)  '440Hz sine wave (t * 440 * 2π)     sample = sample * [EXP](EXP.md)(-t * 3)       'fade out eliminates clicks after sound     _SNDRAW sample     t = t + 1 / [_SNDRATE](_SNDRATE.md)                'sound card sample frequency determines time   LOOP    'do other stuff, but it may interrupt sound   LOCATE 1, 1: PRINT USING tmp$; sample; t LOOP WHILE t < 3.0                      'play for 3 seconds  [_SNDRAWDONE](_SNDRAWDONE.md) DO WHILE [_SNDRAWLEN](_SNDRAWLEN.md) > 0                 'Finish any left over queued sound! LOOP [END](END.md)  
```

  

*Example 3:* Routine uses _SNDRAW to display and play 12 notes from octaves 1 through 9.

``` [DIM](DIM.md) [SHARED](SHARED.md) rate& rate& = [_SNDRATE](_SNDRATE.md) DO   [PRINT](PRINT.md) "Enter the octave 1 to 8 (0 quits!):";   oct% = [VAL](VAL.md)([INPUT$](INPUT$.md)(1)): [PRINT](PRINT.md) oct%   [IF](IF.md) oct% = 0 [THEN](THEN.md) [EXIT DO](EXIT DO.md)   octave = oct% - 4 '440 is in the 4th octave, 9th note   [COLOR](COLOR.md) oct% + 1   [PRINT USING](PRINT USING.md) "Octave: ##"; oct%   [FOR](FOR.md) Note = 0 [TO](TO.md) 11  'notes C to B     fq = FreQ(octave, Note, note$)     [PRINT USING](PRINT USING.md) "#####.## \\"; fq, note$     PlaySound fq     [IF](IF.md) [INKEY$](INKEY$.md) > "" [THEN](THEN.md) [EXIT DO](EXIT DO.md)   [NEXT](NEXT.md) [LOOP](LOOP.md) [END](END.md)  [FUNCTION](FUNCTION.md) FreQ (octave, note, note$) FreQ = 440 * 2 ^ (octave + (note + 3) / 12 - 1) '* 12 note octave starts at C (3 notes up) note$ = [MID$](MID$.md) "MID$ (function)")("C C#D D#E F F#G G#A A#B ", note * 2 + 1, 2) [END FUNCTION](END FUNCTION.md)  [SUB](SUB.md) PlaySound (frq!)    ' plays sine wave fading in and out SndLoop! = 0 [DO](DO.md) [WHILE](WHILE.md) SndLoop! < rate&   _SNDRAW [SIN](SIN.md)((2 * 4 * [ATN](ATN.md)(1) * SndLoop! / rate&) * frq!) * [EXP](EXP.md)(-(SndLoop! / rate&) * 3)   SndLoop! = SndLoop! + 1 [LOOP](LOOP.md) [_SNDRAWDONE](_SNDRAWDONE.md) [DO](DO.md): [LOOP](LOOP.md) [WHILE](WHILE.md) [_SNDRAWLEN](_SNDRAWLEN.md)   'flush the sound playing buffer [END SUB](END SUB.md)  
```

  

## See also

* [_SNDRATE](_SNDRATE.md), [_SNDRAWLEN](_SNDRAWLEN.md)
* [_SNDOPENRAW](_SNDOPENRAW.md), [_SNDRAWDONE](_SNDRAWDONE.md)
* [_SNDOPEN](_SNDOPEN.md)
* [PLAY](PLAY.md), [BEEP](BEEP.md)
* [DTMF Phone Demo](DTMF Phone Demo.md)

  
