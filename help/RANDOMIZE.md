# RANDOMIZE

**RANDOMIZE** is used with a seed value to generate different random number sequences using the [RND](RND.md) function.

  

## Syntax

**RANDOMIZE** [USING] **{*seednumber*|TIMER}**
  

* The *seed number* can be ANY positive or negative numerical type value. The [TIMER](TIMER.md) "TIMER (function)") value is often used to change [RND](RND.md) output each run.
* If the *seed number* is omitted, the program will display: **Random-number seed (-32768 to 32767)?** request on screen.
* **USING** resets a *seed number* sequence to the start of the sequence as if the program just started using that seed in **QB64 only**.
* **Note:** The RANDOMIZE USING *seed number* MUST be designated or a Name already in use status error will occur!
* If the same initial seed number is used, the sequence of random numbers returned will be identical every program run.
* The fact that random numbers would always be the same has been used for simple data encryption and decryption.
* Using a [TIMER](TIMER.md) "TIMER (function)") starting value ensures that the initial return sequence values are different almost every time the program is run!
* [RUN](RUN.md) should reset the RANDOMIZE sequence to the starting [RND](RND.md) function value.(Not yet in QB64)

  

*Example 1:* Using RANDOMIZE **TIMER** to set a different starting sequence of [random](random.md) numbers every run.

``` RANDOMIZE [TIMER](TIMER.md) "TIMER (function)") [DO](DO.md) randnum% = INT([RND](RND.md) * 11) + 2  'add one to multiplier as INT rounds down and never equals 10 PRINT randnum% K$ = [INPUT$](INPUT$.md)(1) [LOOP](LOOP.md) [UNTIL](UNTIL.md) [UCASE$](UCASE$.md)(K$) = "Q"  'q = quit [END](END.md)  
```

*Explanation:* Procedure generates random integer values from 2 to 12 like a pair of dice.
  

*Example 2:* Repeating a random number sequence with RANDOMIZE **USING** and a specific seed value in **QB64** only.

``` seed = 10 RANDOMIZE seed Print7 RANDOMIZE seed Print7 [PRINT](PRINT.md) "Press a key to start sequence over!" K$ = [INPUT$](INPUT$.md)(1) RANDOMIZE **USING** seed Print7  [SUB](SUB.md) Print7 [FOR](FOR.md) r = 1 TO 7   [PRINT](PRINT.md) [RND](RND.md); [NEXT](NEXT.md) [PRINT](PRINT.md): [PRINT](PRINT.md) [END SUB](END SUB.md)  
```

*Explanation:* The second RANDOMIZE statement just continues the sequence where USING in the third restarts the sequence.
  

*Example 3:* Random fireworks explosions:

``` RANDOMIZE [TIMER](TIMER.md) "TIMER (function)") [DEFINT](DEFINT.md) A-Z  [TYPE](TYPE.md) ftype     vx [AS](AS.md) [SINGLE](SINGLE.md)     vy [AS](AS.md) [SINGLE](SINGLE.md) [END](END.md) [TYPE](TYPE.md) [DIM](DIM.md) frag(500) [AS](AS.md) ftype 'fragments  [DIM](DIM.md) pi [AS](AS.md) [SINGLE](SINGLE.md) pi = 3.141593  [DIM](DIM.md) x [AS](AS.md) [SINGLE](SINGLE.md), y [AS](AS.md) [SINGLE](SINGLE.md) [DIM](DIM.md) t [AS](AS.md) [SINGLE](SINGLE.md), g [AS](AS.md) [SINGLE](SINGLE.md), p [AS](AS.md) [SINGLE](SINGLE.md) t = 0 g = 0.4 'gravity p = 15 'explosion power  sw = 800 sh = 600  [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(sw, sh, 32)  DO     [FOR](FOR.md) i = 0 [TO](TO.md) [UBOUND](UBOUND.md)(frag)         frag(i).vx = [RND](RND.md) * [COS](COS.md)(2 * pi * [RND](RND.md))         frag(i).vy = [RND](RND.md) * [SIN](SIN.md)(2 * pi * [RND](RND.md))     [NEXT](NEXT.md)      x = sw * [RND](RND.md)     y = sh * [RND](RND.md)      [FOR](FOR.md) t = 0 [TO](TO.md) 25 [STEP](STEP.md) 0.1         [LINE](LINE.md) (0, 0)-(sw, sh), [_RGB](_RGB.md)(0, 0, 0), BF         [FOR](FOR.md) i = 0 [TO](TO.md) [UBOUND](UBOUND.md)(frag)             [PSET](PSET.md) (x + t * p * frag(i).vx, y + t * p * frag(i).vy + g * t * t), [_RGB](_RGB.md)(255, 255, 0)         [NEXT](NEXT.md)         [_DISPLAY](_DISPLAY.md)         [_LIMIT](_LIMIT.md) 150          [IF](IF.md) [_KEYHIT](_KEYHIT.md) = -27 [THEN](THEN.md) [EXIT DO](EXIT DO.md)     [NEXT](NEXT.md) [LOOP](LOOP.md) [SYSTEM](SYSTEM.md)  
```

  

## See also

* [RND](RND.md), [INT](INT.md), [CINT](CINT.md)
* [TIMER (function)](TIMER (function).md) "TIMER (function)")

  
