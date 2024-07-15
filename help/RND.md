# RND

The **RND** function returns a random number with a value between 0 (inclusive) and 1 (exclusive).

  

## Syntax

result! = RND [(*n*)]
  

## Parameters

* *n* is a [SINGLE](SINGLE.md) numeric value that defines the behavior of the RND function but is **NOT normally required**:

n parameter omitted: Returns next random number in the sequence.
n = 0: Return the last value returned.
n < 0: Always returns the same value for any given n
n > 0: the sequence of numbers generated will not change unless [RANDOMIZE](RANDOMIZE.md) is initiated.
  

## Description

* The random numbers generated range from 0 minimum to .9999999 maximum [SINGLE](SINGLE.md) values that never equal 1.
* To get values in a range larger than 1, multiply RND with a number to get returns up to but not including that numerical value.
* To get values starting at a certain number, add that number to the RND result as RND minimums can be 0.
* If you need an integer range of numbers, like a dice roll, round it down to an [INT](INT.md). Add 1 to the maximum number with [INT](INT.md).
* The random sequence is 2 ^ 24 or 16,777,216 entries long, which can allow repeated patterns in some procedures.
* Formulas for the [Integer](Integer.md) or [Closest Integer](Closest Integer.md) of ANY number range from *min%*(lowest value) to *max%*(greatest value):

* Using [INT](INT.md): randNum% = INT(RND * (max% - min% + 1)) + min%
* Using [CINT](CINT.md): randNum% = CINT(RND * (max% - min%)) + min%

* Use [RANDOMIZE](RANDOMIZE.md) [TIMER](TIMER.md) "TIMER (function)") for different random number results each time a program is run.
* [RUN](RUN.md) should reset the [RANDOMIZE](RANDOMIZE.md) sequence to the starting RND function value.(Not yet in QB64)

  

*Example 1:* Generating a random integer value between 1 and 6 (inclusive) using INT.

``` dice% = [INT](INT.md)(RND * 6) + 1 'add one as INT value never reaches 6  
```

  

*Example 2:* Using uniform random numbers to create random numbers with a gaussian distribution ([Marsaglia's polar method](Marsaglia's polar method.md)).

``` [DO](DO.md)   u! = RND * 2 - 1   v! = RND * 2 - 1   s! = u! * u! + v! * v! [LOOP](LOOP.md) [WHILE](WHILE.md) s! >= 1 [OR](OR.md) s! = 0 s! = SQR(-2 * [LOG](LOG.md)(s!) / s!) * 0.5 u! = u! * s! v! = v! * s!  
```

*Explanation:* Values *u!* and *v!* are now two independent random numbers with gaussian distribution, centered at 0.
  

*Example 3:* Random flashes from an explosion

``` [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(640, 480, 32) [RANDOMIZE](RANDOMIZE.md) [TIMER](TIMER.md) "TIMER (function)") BC = 120 ' BALL COUNT [DIM](DIM.md) ballx(1 [TO](TO.md) BC) [DIM](DIM.md) bally(1 [TO](TO.md) BC) [DIM](DIM.md) velx(1 [TO](TO.md) BC) [DIM](DIM.md) vely(1 [TO](TO.md) BC) [DIM](DIM.md) bsize(1 [TO](TO.md) BC) Y = [INT](INT.md)(RND * (400 - 100 + 1)) + 100 X0 = 325 Y0 = 300 Tmax = 150 DO     [FOR](FOR.md) p = 1 [TO](TO.md) BC         T = [INT](INT.md)(RND * (Tmax - 50 + 1)) + 50         X = [INT](INT.md)(RND * (1000 + 500 + 1)) - 500         velx(p) = (X - X0) / T '                       calculate velocity based on flight time         vely(p) = -1 * (Y - .05 * (T ^ 2 + 20 * Y0)) / (T) ' verticle velocity     [NEXT](NEXT.md) p      [FOR](FOR.md) w = 1 [TO](TO.md) BC         bsize(w) = [INT](INT.md)(RND * (10 - 0 + 1)) + 0 'size     [NEXT](NEXT.md) w      [FOR](FOR.md) J = 1 [TO](TO.md) Tmax         [_LIMIT](_LIMIT.md) 60         [CLS](CLS.md)         '[FOR](FOR.md) i = 0 [TO](TO.md) 255 [STEP](STEP.md) .5         '[CIRCLE](CIRCLE.md) (X0, Y0), i, [_RGB](_RGB.md)(255 - i, 0, 0), 0, 3.147         ' [NEXT](NEXT.md) i          R = [INT](INT.md)(RND * (25 - 20 + 1)) + 20 'random glimmer         [FOR](FOR.md) z = 1 [TO](TO.md) BC             ballx(z) = X0 + velx(z) * J             bally(z) = Y0 - vely(z) * J + .5 * .1 * J ^ 2         [NEXT](NEXT.md) z          [FOR](FOR.md) d = 1 [TO](TO.md) BC             RCOL = [INT](INT.md)(RND * (255 - 0 + 1)) 'color             [FOR](FOR.md) i = 0 [TO](TO.md) bsize(d) + 1 [STEP](STEP.md) .4 'draw balls                 [CIRCLE](CIRCLE.md) (ballx(d), bally(d)), i, [_RGBA](_RGBA.md)(255, RCOL - (R * i), RCOL - R * i, 255)             [NEXT](NEXT.md) i         [NEXT](NEXT.md) d          [_DISPLAY](_DISPLAY.md)      [NEXT](NEXT.md) J  [LOOP](LOOP.md) [UNTIL](UNTIL.md) [INKEY$](INKEY$.md) <> ""  
```

  

## See also

* [RANDOMIZE](RANDOMIZE.md), [TIMER (function)](TIMER (function).md) "TIMER (function)")
* [INT](INT.md), [CINT](CINT.md), [FIX](FIX.md)

  
