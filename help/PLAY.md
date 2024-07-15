# PLAY

**PLAY** is a statement that plays notes of sound through the sound card in QB64 using a command [STRING](STRING.md).

  

## Syntax

PLAY *commandstring$*
  

## Parameters

* The *commandstring$* can be any literal or variable [STRING](STRING.md) consisting of the following commands:
	+ Command string values are not case sensitive and spacing is ignored. Use upper or lower case as desired.

* **O**n - Sets the current octave (from 0 to 6). Example: **PLAY "O3"**
* **<** - Down one octave (cannot be below zero). Example: **PLAY "<<"** 'goes down two octaves.
* **>** - Up one octave (cannot be above 6). Example: **PLAY ">>"** ' goes up two octaves.
* **A**, **B**, **C**, **D**, **E**, **F** or **G** are the notes in the current octave. Can use the following suffixes:

* **+** or **#** for a sharp note. Example: **PLAY "C#"**
* **-** for a flat note. Example: **PLAY "C-"**

* **N**n - Plays a note n by number(n can be between 0 to 84 in the 7 octaves, where 0 is a rest). Example: **PLAY "N42"**
* **L**n - Sets length of a note (n can be 1 to 64 where 1 is a whole note and 4 is a quarter of a note etc.). Example: **PLAY "L4"**

* **MS** - Each note plays 3/4 of length set by L (staccato)
* **MN** - Each note plays 7/8 of length set by L (normal)
* **ML** - Each note plays full length set by L (legato)
* **P**n - Specifies a pause (1 - 64). P1 is a whole-note pause, P2 is a half-note pause, etc. (The pause is 1/n notes in length.) Example: **PLAY "P32"**
* **T**n - Tempo sets number of L4 quarter notes per minute (n can be 32 to 255 where 120 is the default). Example: **PLAY "T180"**

* **.**  - period after a note plays 1½ times the note length determined by L * T.
* **..**  - two periods plays 1-3/4 times the note length determined by L * T.

* **,**  - **commas in QB64** stop play advancement to allow more than one note to be played simultaneously. Example: **PLAY "C,E,G,"**
* **V**n - Volume in **QB64 only** can be any volume from 0 (none) to 100 (full). The default level is 50 when **n** is not specified.
* **MF** - Play music in the foreground (each note must be completed before another can start).
* **MB** - Play music in the background while program code execution continues (QB64 has no note buffer limits).
* **X** **+** [VARPTR$](VARPTR$.md)(string-expression) - executes a command string variable. **MUST be used with variables!**.
* **@**n - Select waveform in **QB64-PE only** can be (**1** for square waveform, **2** for sawtooth waveform, **3** for triangle waveform (default), **4** for sine waveform or **5** for white noise)
* **Q**n - Volume ramp in **QB64-PE only** can be any duration (ms) from 0 to 100.
* Numeric values "n" listed above can also be fetched from numeric variables using **"="** + [VARPTR$](VARPTR$.md)(numeric_variable).

  

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

* Complete **X** **+** [VARPTR$](VARPTR$.md)(string-expression) support was added in **QB64-PE v3.8.0**. Earlier versions of QB64-PE and QB64 only had **=** + [VARPTR$](VARPTR$.md)(numeric_variable) support.
* Support for **@**n and **Q**n was added in **QB64-PE v3.8.0**.

  

## Examples

Example 1
Plays a sound with the volume and note varying from 0 to 50. Maximum note can only be 84.

``` PLAY "q0mll64" [DO](DO.md)     [FOR](FOR.md) x = 1 [TO](TO.md) 50         a$ = a$ + "v" + [LTRIM$](LTRIM$.md)([STR$](STR$.md)(x)) + "n" + [LTRIM$](LTRIM$.md)([STR$](STR$.md)(x))     [NEXT](NEXT.md)     [FOR](FOR.md) x = 50 [TO](TO.md) 1 [STEP](STEP.md) -1         a$ = a$ + "v" + [LTRIM$](LTRIM$.md)([STR$](STR$.md)(x)) + "n" + [LTRIM$](LTRIM$.md)([STR$](STR$.md)(x))     [NEXT](NEXT.md)     PLAY a$     a$ = "" [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> "" PLAY "v10l1c,l4egl2o5c,o4l4eg"  
```

---

Example 2
Plays "Frosty the snowman". The lyric printing is not delayed by PLAY in QB64.

``` [CLS](CLS.md): [PRINT](PRINT.md) "Frosty the Snow Man" [FOR](FOR.md) X = 1 [TO](TO.md) 2     [PRINT](PRINT.md)     [IF](IF.md) X = 1 [THEN](THEN.md) [PRINT](PRINT.md) "Fros-ty the Snow man was a jolly happy soul,"     [IF](IF.md) X = 2 [THEN](THEN.md) [PRINT](PRINT.md) "Fros-ty the Snow man knew the sun was hot that day"     PLAY "t140o2p4g2e4.f8g4o3c2o2b8o3c8d4c4o2b4a8g2." 'MB removed to print song one line at a time     [IF](IF.md) X = 1 [THEN](THEN.md) [PRINT](PRINT.md) "with a corn cob pipe and a button nose and two eyes made out of coal."     [IF](IF.md) X = 2 [THEN](THEN.md) [PRINT](PRINT.md) "so he said Let's run and we'll have some fun now before I melt away."     PLAY "o2b8o3c8d4c4o2b4a8a8g8o3c4o2e8e4g8a8g4f4e4f4g2."     [IF](IF.md) X = 1 [THEN](THEN.md) [PRINT](PRINT.md) "Fros-ty the Snow Man is a fair-y tale, they say,"     [IF](IF.md) X = 2 [THEN](THEN.md) [PRINT](PRINT.md) "Down to the vil-lage, with a broom-stick in his hand,"     PLAY "g2e4.f8g4o3c2o2b8o3c8d4c4o2b4a8g2."     [IF](IF.md) X = 1 [THEN](THEN.md) [PRINT](PRINT.md) "He was made of snow but the chil-dren knew how he come to life one day."     [IF](IF.md) X = 2 [THEN](THEN.md) [PRINT](PRINT.md) "run-ning here and there all a-round the square, say-in' catch me if you can."     PLAY "o2b8o3c8d4c4o2b4a8a8g8o3c4o2e8e4g8a8g4f4e4d4c2."     [IF](IF.md) X = 1 [THEN](THEN.md) [PRINT](PRINT.md) "There must have been some magic in that old silk hat they found."     [IF](IF.md) X = 2 [THEN](THEN.md) [PRINT](PRINT.md) "He led them down the streets of town right to the traffic cop."     PLAY "c4a4a4o3c4c4o2b4a4g4e4f4a4g4f4e2."     [IF](IF.md) X = 1 [THEN](THEN.md) [PRINT](PRINT.md) "For when they placed it on his head he be-gan to dance a round."     [IF](IF.md) X = 2 [THEN](THEN.md) [PRINT](PRINT.md) "And he on-ly paused a moment when he heard him hol-ler Stop!"     PLAY "e8e8d4d4g4g4b4b4o3d4d8o2b8o3d4c4o2b4a4g4p4"     [IF](IF.md) X = 1 [THEN](THEN.md) [PRINT](PRINT.md) "Oh, Fros-ty the Snow Man was a-live as he could be,"     [IF](IF.md) X = 2 [THEN](THEN.md) [PRINT](PRINT.md) "For, Fros-ty the Snow Man had to hur-ry on his way"     PLAY "g2g2e4.f8g4o3c2o2b8o3c8d4c4o2b4a8g8g2."     [IF](IF.md) X = 1 [THEN](THEN.md) [PRINT](PRINT.md) "and the chil-dren say he could laugh and play just the same as you and me."     [IF](IF.md) X = 2 [THEN](THEN.md) [PRINT](PRINT.md) "but he waved good-bye say-in' Don't you cry, I'll be back a-gain some day."     PLAY "o2b8o3c8d4c4o2b4a8a8g8o3c4o2e8e4g8a8g4f4e4d4c2.p4" [NEXT](NEXT.md) X [PRINT](PRINT.md): [PRINT](PRINT.md) "Thump-et-y thump thump, thump-et-y thump thump, look at Fros-ty go." PLAY "t180g8g8g4g4g4a8g8g4g4g4a4g4e4g4d1" [PRINT](PRINT.md) "Thump-et-y thump thump, thump-et-y thump thump, ov-er the hills of snow." PLAY "t180g8g8g4g4g4a8g8g4g4g4g8g8g4a4b4o3c2c4p1" [END](END.md)  
```

---

Example 3
Clicking on the grid enables various notes to be played simultaneously.

``` [DIM](DIM.md) [SHARED](SHARED.md) grid(16, 16), grid2(16, 16), cur [CONST](CONST.md) maxx = 512 [CONST](CONST.md) maxy = 512 [SCREEN](SCREEN.md) [_NEWIMAGE](_NEWIMAGE.md)(maxx, maxy, 32) [_TITLE](_TITLE.md) "MusicGrid" cleargrid [DO](DO.md)     [IF](IF.md) [TIMER](TIMER.md) "TIMER (function)") - t# > 1 / 8 [THEN](THEN.md) cur = (cur + 1) [AND](AND.md) 15: t# = [TIMER](TIMER.md) "TIMER (function)")     [IF](IF.md) cur <> oldcur [THEN](THEN.md)         figuregrid         drawgrid         playgrid         oldcur = cur     [END IF](END IF.md)     domousestuff     in$ = [INKEY$](INKEY$.md)     [IF](IF.md) in$ = "C" [OR](OR.md) "OR (boolean)") in$ = "c" [THEN](THEN.md) cleargrid [LOOP UNTIL](LOOP UNTIL.md) in$ = [CHR$](CHR$.md)(27)  [SUB](SUB.md) drawgrid     scale! = maxx / 16     scale2 = maxx \ 16 - 2     [FOR](FOR.md) y = 0 [TO](TO.md) 15         y1 = y * scale!         [FOR](FOR.md) x = 0 [TO](TO.md) 15             x1 = x * scale!             c& = [_RGB32](_RGB32.md)(grid2(x, y) * 64 + 64, 0, 0)             [LINE](LINE.md) (x1, y1)-(x1 + scale2, y1 + scale2), c&, BF         [NEXT](NEXT.md) x     [NEXT](NEXT.md) y [END SUB](END SUB.md)  [SUB](SUB.md) figuregrid     [FOR](FOR.md) y = 0 [TO](TO.md) 15         [FOR](FOR.md) x = 0 [TO](TO.md) 15             grid2(x, y) = grid(x, y)         [NEXT](NEXT.md) x     [NEXT](NEXT.md) y     [FOR](FOR.md) y = 1 [TO](TO.md) 14         [FOR](FOR.md) x = 1 [TO](TO.md) 14             [IF](IF.md) grid(x, y) = 1 [AND](AND.md) "AND (boolean)") cur = x [THEN](THEN.md)                 grid2(x, y) = 2                 [IF](IF.md) grid(x - 1, y) = 0 [THEN](THEN.md) grid2(x - 1, y) = 1                 [IF](IF.md) grid(x + 1, y) = 0 [THEN](THEN.md) grid2(x + 1, y) = 1                 [IF](IF.md) grid(x, y - 1) = 0 [THEN](THEN.md) grid2(x, y - 1) = 1                 [IF](IF.md) grid(x, y + 1) = 0 [THEN](THEN.md) grid2(x, y + 1) = 1             [END IF](END IF.md)         [NEXT](NEXT.md) x     [NEXT](NEXT.md) y [END SUB](END SUB.md)  [SUB](SUB.md) domousestuff     [DO WHILE](DO WHILE.md) [_MOUSEINPUT](_MOUSEINPUT.md)         [IF](IF.md) [_MOUSEBUTTON](_MOUSEBUTTON.md)(1) [THEN](THEN.md)             x = [_MOUSEX](_MOUSEX.md) \ (maxx \ 16)             y = [_MOUSEY](_MOUSEY.md) \ (maxy \ 16)             grid(x, y) = 1 - grid(x, y)         [END IF](END IF.md)     [LOOP](LOOP.md) [END SUB](END SUB.md)  [SUB](SUB.md) playgrid     n$ = "L16 "     'scale$ = "O1CO1DO1EO1FO1GO1AO1BO2CO2DO2EO2FO2GO2AO2BO3CO3D"     scale$ = "o1fo1go1ao2co2do2fo2go2ao3co3do3fo3go3ao4co4do4fo"     [FOR](FOR.md) y = 15 [TO](TO.md) 0 [STEP](STEP.md) -1         [IF](IF.md) grid(cur, y) = 1 [THEN](THEN.md)             note$ = [MID$](MID$.md) "MID$ (function)")(scale$, 1 + (15 - y) * 3, 3)             n$ = n$ + note$ + "," 'comma plays 2 or more column notes simultaneously         [END IF](END IF.md)     [NEXT](NEXT.md) y     n$ = [LEFT$](LEFT$.md)(n$, [LEN](LEN.md)(n$) - 1)     PLAY n$ [END SUB](END SUB.md)  [SUB](SUB.md) cleargrid     [FOR](FOR.md) y = 0 [TO](TO.md) 15         [FOR](FOR.md) x = 0 [TO](TO.md) 15             grid(x, y) = 0         [NEXT](NEXT.md) x     [NEXT](NEXT.md) y [END SUB](END SUB.md)  
```

---

Example 4
Play strings starting with MB allow program code to run while music plays in background.

``` ' 2012, 2013 mennonite ' license: creative commons cc0 1.0 universal ' (public domain) http://creativecommons.org/publicdomain/zero/1.0/  [SCREEN](SCREEN.md) 12 ' the following works in other screen modes, too [RANDOMIZE](RANDOMIZE.md) [TIMER](TIMER.md) "TIMER (function)")  PLAY "mb l4cf.l8el4fag.l8fl4gl8agl4f.l8fl4a>cl2dl4dl4c.<l8al4afg.l8fl4gl8agl4f.l8dl4dcl2f>l4dc.<l8al4afg.l8fl4g>dc.<l8al4a>cl2dl4dc.<l8al4afg.l8fl4gl8agl4f.l8dl4dcl1f"  [DIM](DIM.md) ccs(1 [TO](TO.md) 9, 1 [TO](TO.md) 2) ccs(1, 1) = 415: ccs(1, 2) = 289 ccs(2, 1) = 185: ccs(2, 2) = 128 ccs(3, 1) = 108: ccs(3, 2) = 75 ccs(4, 1) = 70: ccs(4, 2) = 48 ccs(5, 1) = 48: ccs(5, 2) = 32 ccs(6, 1) = 32: ccs(6, 2) = 20 ccs(7, 1) = 20: ccs(7, 2) = 12 ccs(8, 1) = 10: ccs(8, 2) = 6 ccs(9, 1) = 2: ccs(9, 2) = 2  [FOR](FOR.md) extra = 1 [TO](TO.md) 23     [FOR](FOR.md) p = 1 [TO](TO.md) 9         gcolor [INT](INT.md)([RND](RND.md) * 9 + 14 - 9)         [_DELAY](_DELAY.md) .04         [CLS](CLS.md)         gscale p         row = ccs(p, 1)         cl = ccs(p, 2)         glocate row, cl         gprint "000000000000000000000000000000000000000000000000000000000000000000000"         glocate row + 1, cl         gprint "0x00x0xxxx0xxxx0xxxx0x0x000x00x0xxxx0x000x000x0x0xxxx0xxxx0xxxx000x00"         glocate row + 2, cl         gprint "0x00x0x00x0x00x0x00x0x0x000xx0x0x0000x000x000x0x0x0000x00x0x00x000x00"         glocate row + 3, cl         gprint "0xxxx0xxxx0xxxx0xxxx0x0x000x0xx0xxx00x0x0x000x0x0xxx00xxxx0xxxx000x00"         glocate row + 4, cl         gprint "0x00x0x00x0x0000x00000x0000x00x0x0000x0x0x0000x00x0000x00x0x0x0000000"         glocate row + 5, cl         gprint "0x00x0x00x0x0000x00000x0000x00x0xxxx0xx0xx0000x00xxxx0x00x0x00x000x00"         glocate row + 6, cl         gprint "000000000000000000000000000000000000000000000000000000000000000000000"     [NEXT](NEXT.md) p     [SLEEP](SLEEP.md) 1     [IF](IF.md) [INKEY$](INKEY$.md) = [CHR$](CHR$.md)(27) [THEN](THEN.md) [EXIT FOR](EXIT FOR.md) [NEXT](NEXT.md) extra  [END](END.md)  [SUB](SUB.md) gscale (s):     [SHARED](SHARED.md) gscalep     gscalep = [INT](INT.md)(s) [END SUB](END SUB.md)  [SUB](SUB.md) gcolor (c):     [SHARED](SHARED.md) gcolorp     gcolorp = c [END SUB](END SUB.md)  [SUB](SUB.md) gbackcolor (c):     [SHARED](SHARED.md) gbackcolorp     gbackcolorp = c [END SUB](END SUB.md)  [SUB](SUB.md) glocate (row, column):     [SHARED](SHARED.md) gposxp     [SHARED](SHARED.md) gposyp     gposyp = row     gposxp = column [END SUB](END SUB.md)  [SUB](SUB.md) gprint (p$):     [SHARED](SHARED.md) gscalep     [SHARED](SHARED.md) gposxp, gposyp     [SHARED](SHARED.md) gcolorp, gbackcolorp     ' # means "use the foreground color here."     ' . means "use the background color here."     ' _ means "transparent - don't draw this block at all" (you can layer!)     ' 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f means "do color attribute 0 to 15."     ' any letter after f: "use the foreground color here."     [IF](IF.md) gscalep < 1 [THEN](THEN.md) gscalep = 1     pcolorp = gcolorp     [FOR](FOR.md) p = 1 [TO](TO.md) [LEN](LEN.md)(p$):         [SELECT CASE](SELECT CASE.md) [LCASE$](LCASE$.md)([MID$](MID$.md) "MID$ (function)")(p$, p, 1))             [CASE](CASE.md) "#", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"                 pcolorp = gcolorp             [CASE](CASE.md) "."                 pcolorp = gbackcolorp             [CASE](CASE.md) "_"                 pcolorp = -1             [CASE](CASE.md) "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"                 pcolorp = [INSTR](INSTR.md)("0123456789abcdef", [LCASE$](LCASE$.md)([MID$](MID$.md) "MID$ (function)")(p$, p, 1))) - 1         [END SELECT](END SELECT.md)         [IF](IF.md) [NOT](NOT.md) pcolorp = -1 [THEN](THEN.md)             [IF](IF.md) gscalep > 1 [THEN](THEN.md)                 [LINE](LINE.md) ((gposxp - 1) * gscalep, (gposyp - 1) * gscalep)-[STEP](STEP.md)(gscalep - 1, gscalep - 1), pcolorp, BF             [ELSE](ELSE.md):                 [PSET](PSET.md) (gposxp, gposyp), pcolorp             [END IF](END IF.md)         [END IF](END IF.md)         glocate gposyp, gposxp + 1     [NEXT](NEXT.md) p     gposxp = 1     glocate gposyp + 1, 1 'gposyp = gposyp + 1 [END SUB](END SUB.md)  
```

---

Example 5
This example uses [PRINT](PRINT.md) to good effect as string spacing is ignored by **PLAY**.

``` [WIDTH](WIDTH.md) 59, 28 [PRINT](PRINT.md) x$ = x$ + "   o3    l4         t         0120c    ml<f1   ,a      1,  " x$ = x$ + "   >c    1,        mnf        .e  8f   am  l<   e1    ,g   " x$ = x$ + "   1,    >c       1, mn       g.   f8  ga   8g   8m  l<    " x$ = x$ + "   f2.,a2.,      >c   2.      ,m  nf   .f  8a     ml<f     " x$ = x$ + "   ,a,>c,mn     >cd2.,<f2     .,d2     .,<b        -2      " x$ = x$ + "   .m    lb    -,>d,f,mn>d    ml       <c          1,      " x$ = x$ + "   <a    1,   f1         ,m   n>       >c          .<      " x$ = x$ + "   a8    af  ml           c1  ,<       e1          ,g      " x$ = x$ + "                                                           " x$ = x$ + "      1,m      n>  g.f8ga8g8m  l<                   f1     " x$ = x$ + "      ,d1,     <b  -1           ,m                 n>      " x$ = x$ + "      >f .d    8d  c<            f2               .,       " x$ = x$ + "      a2  .,   c2  .,>f2.         ml      <      b-        " x$ = x$ + "      ,>   d,  f,  mn>dml          <c    1,<    a1         " x$ = x$ + "      ,f    1, mn  >>               c.  <a 8a  fm          " x$ = x$ + "      lc     2.,<  e2                .,g2   .,mn           " x$ = x$ + "      >g      .f8  gml<b-,>d,         f,     mn            " x$ = x$ + "                                                           " x$ = x$ + ">d      ml  <<f2.,a2.,         >         c2.,m       n>  c." x$ = x$ + " <a    8a   ml                <e,        g,  >c      ,m  n>" x$ = x$ + "  cm  l<    <b               -2 .,       >d   2.     ,f  2." x$ = x$ + "   ,mn>     d2.ml<          <b   -,      >d  ,f      ,m  n>" x$ = x$ + "    dm      l<<f1,         a1,>c1,mn     >c.<a       8a  fm" x$ = x$ + "    lc      1,            <e1,g1,mn>g    .f  8g      a8  g8" x$ = x$ + "    ml      <<           b-         1,   >d   1,           " x$ = x$ + "    f1      ,mn>f.d8dc  l1           ml  f,    c,    <a  ,f" [PRINT](PRINT.md) x$; PLAY x$  
```

---

Example 6
Demonstrates usage of [VARPTR$](VARPTR$.md) with **PLAY**.

``` 'Play scale in 7 different octaves scale$ = "CDEFGAB"  play$ = "L16O=" + [VARPTR$](VARPTR$.md)(i%) + "X" + [VARPTR$](VARPTR$.md)(scale$)  [FOR](FOR.md) i% = 0 [TO](TO.md) 6     PLAY play$ [NEXT](NEXT.md)  
```

  

## See also

* [PLAY (function)](PLAY (function).md) "PLAY (function)")
* [SOUND](SOUND.md), [DRAW](DRAW.md)
* [_SNDRAW](_SNDRAW.md)
* [_SNDOPEN](_SNDOPEN.md)

  
