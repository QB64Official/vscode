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


## [DATE\$](DATE\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DATE%24)
---
<blockquote>

### The DATE$ function returns the current computer date as a string in the format "mm-dd-yyyy".

</blockquote>

#### SYNTAX

<blockquote>

`today$ = DATE$`

</blockquote>

#### DESCRIPTION

<blockquote>


* Returns the current computer date in the format "mm-dd-yyyy" (e.g., "12-25-2009").

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Displaying the weekday and current date.
```vb
PRINT DATE$
month$ = LEFT$(DATE$, 2): M = VAL(month$)
day$ = MID$(DATE$, 4, 2): D = VAL(day$)
day$ = STR$(D)                  ' eliminate any leading zeros
year$ = RIGHT$(DATE$, 4): Y = VAL(year$)
SELECT CASE M
CASE 1: Moon$ = "January"
CASE 2: Moon$ = "February"
CASE 3: Moon$ = "March"
CASE 4: Moon$ = "April"
CASE 5: Moon$ = "May"
CASE 6: Moon$ = "June"
CASE 7: Moon$ = "July"
CASE 8: Moon$ = "August"
CASE 9: Moon$ = "September"
CASE 10: Moon$ = "October"
CASE 11: Moon$ = "November"
CASE 12: Moon$ = "December"
END SELECT
PRINT "Today is " + WeekDay$(M, D, Y) + ", " + Moon$ + day$ + ", " + year$ + SPACE$(10)

DEFINT A-Z
FUNCTION WeekDay$ (M, D, Y)
IF M < 3 THEN M = M + 12: Y = Y - 1  'add 12 to Jan - Feb month, -1 year
C = Y \ 100: Y = Y MOD 100           'split century and year number
S1 = (C \ 4) - (2 * C) - 1           'century leap
S2 = (5 * Y) \ 4                     '4 year leap
S3 = 26 * (M + 1) \ 10               'days in months
WkDay = (S1 + S2 + S3 + D) MOD 7     'weekday total remainder
IF WkDay < 0 THEN WkDay = WkDay + 7  'Adjust negative results to 0 to 6
SELECT CASE WkDay
CASE 0: day$ = "Sunday"
CASE 1: day$ = "Monday"
CASE 2: day$ = "Tuesday"
CASE 3: day$ = "Wednesday"
CASE 4: day$ = "Thursday"
CASE 5: day$ = "Friday"
CASE 6: day$ = "Saturday"
END SELECT
WeekDay$ = day$
END FUNCTION
```
  
<br>

```vb
06-02-2010
Today is Wednesday, June 2, 2010
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [TIME&dollar;](TIME&dollar;.md) , IF...THEN
* [VAL](VAL.md) , [STR&dollar;](STR&dollar;.md) , [MID&dollar;](MID&dollar;.md) (function) , [LEFT&dollar;](LEFT&dollar;.md) , [RIGHT&dollar;](RIGHT&dollar;.md)
</blockquote>
