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


## [Scientific notation](Scientific_notation.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Scientific%20notation)
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

```vb
-2.34D-15
-.00000000000000234
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* ^ Exponential operator
* [SINGLE](SINGLE.md) , [DOUBLE](DOUBLE.md)
</blockquote>
