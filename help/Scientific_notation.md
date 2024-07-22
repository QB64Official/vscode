## Scientific notation
---
<blockquote>

### Scientific notation or exponential notation is used to express very large or small numerical values by SINGLE or DOUBLE accuracy.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: A string function that displays extremely small or large exponential decimal values.
```vb
num# = -2.34D-15
PRINT num#
PRINT StrNum$(num#)
END

FUNCTION StrNum$ (n#)
value$ = UCASE$(LTRIM$(STR$(n#)))
Xpos% = INSTR(value$, "D") + INSTR(value$, "E")  'only D or E can be present
IF Xpos% THEN
 expo% = VAL(MID$(value$, Xpos% + 1))
 IF VAL(value$) < 0 THEN
   sign$ = "-": valu$ = MID$(value$, 2, Xpos% - 2)
 ELSE valu$ = MID$(value$, 1, Xpos% - 1)
 END IF
 dot% = INSTR(valu$, "."): L% = LEN(valu$)
 IF expo% > 0 THEN add$ = STRING$(expo% - (L% - dot%), "0")
 IF expo% < 0 THEN min$ = STRING$(ABS(expo%) - (dot% - 1), "0"): DP$ = "."
 FOR n = 1 TO L%
   IF MID$(valu$, n, 1) <> "." THEN num$ = num$ + MID$(valu$, n, 1)
 NEXT
ELSE StrNum$ = value$: EXIT FUNCTION
END IF
StrNum$ = sign$ + DP$ + min$ + num$ + add$
END FUNCTION
```
  


##### Example: A string function that displays extremely small or large exponential decimal values.
```vb
-2.34D-15
-.00000000000000234
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* ^ Exponential operator
* [SINGLE](./SINGLE.md) , [DOUBLE](./DOUBLE.md)

</blockquote>
