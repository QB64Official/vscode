# SPACE$

The SPACE$ function returns a [STRING](STRING.md) consisting of a number of space characters.

  

## Syntax

*result$* = **SPACE$(*count&*)**
  

## Parameters

* *count&* is the number of space characters to repeat. Cannot use negative values!

  

## Description

* Semicolons can be used to combine spaces with text [STRING](STRING.md) or numerical values.
* [Concatenation](Concatenation.md) using + can be used to combine [STRING](STRING.md) text values only.
* Spaces are often used to erase previous text PRINTs from the screen.
* The function result can also be used to [GET](GET.md) and [PUT](PUT.md) a number of bytes as zero characters: bytes$ = SPACE$(numbytes)
* Spaces can also be made using [SPC](SPC.md), [CHR$](CHR$.md)(32) or [STRING$](STRING$.md)(n%, 32).

  

*Differences between QB64 and QB 4.5:*

* **QB64** can use [LONG](LONG.md) values for count up to 2,147,483,647 while **QB 4.5** could only use [INTEGER](INTEGER.md) values up to 32,767.

  

## Examples

*Example 1:* How to space text in a [PRINT](PRINT.md) statement using SPACE$ with string [concatenation](concatenation.md).

``` [FOR](FOR.md) count% = 0 [TO](TO.md) 3     [PRINT](PRINT.md) "abc" + SPACE$( count% ) + "def" [NEXT](NEXT.md) count%  
```

``` abcdef abc def abc  def abc   def  
```

  

*Example 2:* In [SCREEN](SCREEN.md) 0 SPACE$ can be used to change the background color to make an American flag.

```  USA flag centered on screen with thin horizontal red & white stripes ' blue corner field with randomly twinkling stars [CLS](CLS.md) [LOCATE](LOCATE.md) 25, 1 [PRINT](PRINT.md) "Press any key to stop twinkling"; [COLOR](COLOR.md) , 4 z = 15 [FOR](FOR.md) x = 5 [TO](TO.md) 19          '13 red & white stripes (x =5 to 21 for 15 stripes)     [IF](IF.md) z = 15 [THEN](THEN.md) z = 4 [ELSE](ELSE.md) z = 15     [COLOR](COLOR.md) , z     [LOCATE](LOCATE.md) x, 15     [PRINT](PRINT.md) SPACE$(55) [NEXT](NEXT.md) x [FOR](FOR.md) x = 5 [TO](TO.md) 11          'blue field in upper left quadrant (x = 5 to 13 to hold all 50 stars)     [COLOR](COLOR.md) 15, 1            'sits above 4th white stripe     [LOCATE](LOCATE.md) x, 15     [PRINT](PRINT.md) SPACE$(23) [NEXT](NEXT.md) x DO     stop$ = [INKEY$](INKEY$.md)     [FOR](FOR.md) x = 5 [TO](TO.md) 10 [STEP](STEP.md) 2  '39 stars staggered across blue field (50 stars if x = 5 to 12)         w = 16         [FOR](FOR.md) y = 1 [TO](TO.md) 6      '5 rows of 6 stars             r = [INT](INT.md)([RND](RND.md) * 6)             [IF](IF.md) r = 0 [THEN](THEN.md) z = 31 [ELSE](ELSE.md) z = 15             [IF](IF.md) stop$ = "" [THEN](THEN.md) [COLOR](COLOR.md) z [ELSE](ELSE.md) [COLOR](COLOR.md) 15             [LOCATE](LOCATE.md) x, w             w = w + 4             [PRINT](PRINT.md) "*";         [NEXT](NEXT.md) y         w = 18         [FOR](FOR.md) y = 1 [TO](TO.md) 5      '5 rows of 5 stars             r = [INT](INT.md)([RND](RND.md) * 6)             [IF](IF.md) r = 0 [THEN](THEN.md) z = 31 [ELSE](ELSE.md) z = 15             [IF](IF.md) stop$ = "" [THEN](THEN.md) [COLOR](COLOR.md) z [ELSE](ELSE.md) [COLOR](COLOR.md) 15             [LOCATE](LOCATE.md) x + 1, w             w = w + 4             [PRINT](PRINT.md) "*";         [NEXT](NEXT.md) y     [NEXT](NEXT.md) x     w = 16     [FOR](FOR.md) y = 1 [TO](TO.md) 6          '1 row of 6 stars             r = [INT](INT.md)([RND](RND.md) * 6)             [IF](IF.md) r = 0 [THEN](THEN.md) z = 31 [ELSE](ELSE.md) z = 15         [IF](IF.md) stop$ = "" [THEN](THEN.md) [COLOR](COLOR.md) z [ELSE](ELSE.md) [COLOR](COLOR.md) 15         [LOCATE](LOCATE.md) x, w         w = w + 4         [PRINT](PRINT.md) "*";     [NEXT](NEXT.md) y     t = [TIMER](TIMER.md) "TIMER (function)")     [DO](DO.md) [WHILE](WHILE.md) t + .2 >= [TIMER](TIMER.md) "TIMER (function)"): [LOOP](LOOP.md) [LOOP](LOOP.md) [WHILE](WHILE.md) stop$ = "" [COLOR](COLOR.md) 7, 0 [END](END.md)  
```

*Explanation:* In [SCREEN](SCREEN.md) 0, the background color is only placed with the the printed text and spaces. [CLS](CLS.md) can color the entire screen.
  

## See also

* [PRINT](PRINT.md), [PRINT USING](PRINT USING.md)
* [STRING$](STRING$.md), [CLS](CLS.md)
* [SPC](SPC.md), [TAB](TAB.md)

  
