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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [Scientific_notation](Scientific_notation.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Scientific notation)
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
  
<br>

##### Example: A string function that displays extremely small or large exponential decimal values.
```vb
-2.34D-15
-.00000000000000234
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  ^ Exponential operator
*  [SINGLE](SINGLE.md)  , [DOUBLE](DOUBLE.md) 

</blockquote>
