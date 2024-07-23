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


## [TIME\$](TIME\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/TIME%24)
---
<blockquote>

### The TIME$ Function returns a STRING representation of the current computer time in a 24 hour format.

</blockquote>

#### SYNTAX

<blockquote>

`PRINT "Present time = "; TIME$`

</blockquote>

#### DESCRIPTION

<blockquote>


* Returns the present computer time in hh:mm:ss 24 hour format: "19:20:33"
* Uses 2 colon (:) separators between hours, minutes and seconds
* Hour values range from "00" to "23" starting from midnite.
* Minutes and seconds range from "00" to "59"
* Continuous [TIME&dollar;](TIME&dollar;.md) calls may lag if a QBasic program is minimized to the taskbar!

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: A simple clock using DRAW with Turn Angle.
```vb
SCREEN 12
DO
CLS
t$ = TIME$: h = VAL(t$): m = VAL(MID$(t$, 4, 2)): s = VAL(MID$(t$, 7, 2))
PRINT t$
CIRCLE STEP(0, 0), 200, 8
DRAW "c12ta" + STR$((h MOD 12) * -30) + "nu133"
DRAW "c14ta" + STR$(m * -6) + "nu200"
DRAW "c9ta" + STR$(s * -6) + "nu200"
_DISPLAY
_LIMIT 1
LOOP UNTIL INKEY$ = CHR$(27)
```
  
<br>



##### Example 2: The following Function converts TIME\$ to normal 12 hour AM-PM digital clock  format.
```vb
PRINT TIME$
PRINT Clock$

FUNCTION Clock$
hour$ = LEFT$(TIME$, 2): H% = VAL(hour$)
min$ = MID$(TIME$, 3, 3)
IF H% >= 12 THEN ampm$ = " PM" ELSE ampm$ = " AM"
IF H% > 12 THEN
IF H% - 12 < 10 THEN hour$ = STR$(H% - 12) ELSE hour$ = LTRIM$(STR$(H% - 12))
ELSEIF H% = 0 THEN hour$ = "12"          ' midnight hour
ELSE : IF H% < 10 THEN hour$ = STR$(H%)  ' eliminate leading zeros
END IF
Clock$ = hour$ + min$ + ampm$
END FUNCTION
```
  
<br>


<div class="explanation">Explanation: When hours are less than 10 (but not 0), STR\$ (H%) alone keeps a space ahead of the hour. For 2 digit hours, LTRIM\$ is used to remove that leading space. For the hours of 10 AM to 12 PM, the hour STRING value is passed from LEFT\$ (TIME\$, 2) at the beginning of the function.</div>

```vb
14:13:36
2:13 PM
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [TIMER](TIMER.md) (function)
* [DATE&dollar;](DATE&dollar;.md) , IF...THEN
* [VAL](VAL.md) , [STR&dollar;](STR&dollar;.md) , [MID&dollar;](MID&dollar;.md) (function)
* [LEFT&dollar;](LEFT&dollar;.md) , [RIGHT&dollar;](RIGHT&dollar;.md)
</blockquote>
