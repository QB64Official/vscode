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


## [DO...LOOP](DO...LOOP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DO...LOOP)
---
<blockquote>

### DO...LOOP statements are used in programs to repeat code or return to the start of a procedure.

</blockquote>

#### DESCRIPTION

<blockquote>


* [DO](DO.md) [UNTIL](UNTIL.md) or [DO](DO.md) [WHILE](WHILE.md) used with [LOOP](LOOP.md) : The condition is evaluated before running the loop code.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Table 3: The relational operations for condition checking.

In this table, A and B are the Expressions to compare. Both must represent
the same general type, i.e. they must result into either numerical values
or STRING values. If a test succeeds, then true (-1) is returned, false (0)
if it fails, which both can be used in further Boolean evaluations.
┌─────────────────────────────────────────────────────────────────────────┐
│                          Relational Operations                          │
├────────────┬───────────────────────────────────────────┬────────────────┤
│ Operation  │                Description                │ Example usage  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A = B    │ Tests if A is equal to B.                 │ IF A = B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A <> B   │ Tests if A is not equal to B.             │ IF A <> B THEN │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A < B    │ Tests if A is less than B.                │ IF A < B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A > B    │ Tests if A is greater than B.             │ IF A > B THEN  │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A <= B   │ Tests if A is less than or equal to B.    │ IF A <= B THEN │
├────────────┼───────────────────────────────────────────┼────────────────┤
│   A >= B   │ Tests if A is greater than or equal to B. │ IF A >= B THEN │
└────────────┴───────────────────────────────────────────┴────────────────┘
The operations should be very obvious for numerical values. For strings
be aware that all checks are done case sensitive (i.e. "Foo" <> "foo").
The equal/not equal check is pretty much straight forward, but for the
less/greater checks the ASCII value of the first different character is
used for decision making:

E.g. "abc" is less than "abd", because in the first difference (the 3rd
character) the "c" has a lower ASCII value than the "d".

This behavior may give you some subtle results, if you are not aware of
the ASCII values and the written case:

E.g. "abc" is greater than "abD", because the small letters have higher
ASCII values than the capital letters, hence "c" > "D". You may use
LCASE$ or UCASE$ to make sure both strings have the same case.
```
  
<br>



##### Example 1: Using WHILE to clear the keyboard buffer.
```vb
DO WHILE INKEY$ <> "": LOOP ' checks evaluation before running loop code

DO: LOOP WHILE INKEY$ <> "" ' checks evaluation after one run of loop code
```
  
<br>



##### Example 2: Using UNTIL to clear the keyboard buffer.
```vb
DO UNTIL INKEY$ = "": LOOP ' checks evaluation before running loop code

DO: LOOP UNTIL INKEY$ = "" ' checks evaluation after one run of loop code
```
  
<br>



##### Example 3: Using a one time DO loop to exit ANY of several FOR LOOPs, without using GOTO .
```vb
DEFINT A-Z
INPUT "Enter a BSAVE file name to read the file for screen mode:"', filenm$
CheckScreen filenm$

END

DEFINT A-Z
SUB CheckScreen (Filename$)        'find Screen mode (12 or 13) and image dimensions
DIM Bsv AS STRING * 1
DIM Header AS STRING * 6

Scr = 0: MaxColors = 0
OPEN Filename$ FOR BINARY AS #1

GET #1, , Bsv           '1 check for small 2 character
GET #1, , Header        '2 - 7 rest of file header

IF Bsv <> CHR$(253) THEN   ' small 2 character denotes a BSAVE file
COLOR 12: LOCATE 15, 33: PRINT "Not a BSAVE file!": SLEEP 3: EXIT SUB
END IF

GET #1, , widN           '8 no color info bmp sizes
GET #1, , depN           '9   "        "      "

DO
IF widN > 63 OR depN > 63 THEN EXIT DO  ' width and depth already found

FOR i = 10 TO 55       'check for Screen 12 embedded colors
GET #1, , RGB
tot12& = tot12& + RGB
'PRINT i; RGB; : SOUND 300, 1         'test sound slows loop in QB
IF RGB > 63 OR RGB < 0 THEN EXIT DO
IF i = 55 AND tot12& = 0 THEN EXIT DO
NEXT

GET #1, , wid12          '56
GET #1, , dep12          '57
IF wid12 > 63 OR dep12 > 63 THEN EXIT DO

FOR i = 58 TO 775      'check for Screen 13 embedded colors
GET #1, , RGB
tot13& = tot13& + RGB
'PRINT i; RGB; : SOUND 300, 1          'test
IF RGB > 63 OR RGB < 0 THEN EXIT DO
IF i = 775 AND tot13& = 0 THEN EXIT DO
NEXT
GET #1, , wid13          '776
GET #1, , dep13          '777
LOOP UNTIL 1 = 1    'TRUE statement exits one-time LOOP
CLOSE #1

COLOR 14: LOCATE 10, 25
SELECT CASE i
CASE IS < 56:
IF widN > 640 THEN
Scr = 13: MaxColors = 0
PRINT "Default Screen 13:"; widN \ 8; "X"; depN
ELSE
LOCATE 10, 15
PRINT "Screen 12 ("; widN; "X"; depN; ") OR 13 ("; widN \ 8; "X"; depN; ")"
DO: SOUND 600, 4
COLOR 13: LOCATE 12, 23  'ask if no data found. Prevents ERROR opening in wrong mode
INPUT "Enter a Screen mode 12 or 13 : ", Scrn$
Scr = VAL(Scrn$)
LOOP UNTIL Scr = 12 OR Scr = 13
END IF
IF Scr = 12 THEN MaxColors = 0: PWidth = widN: PDepth = depN
IF Scr = 13 THEN MaxColors = 0: PWidth = widN \ 8: PDepth = depN
CASE 56 TO 775
PRINT "Custom Screen 12:"; wid12; "X"; dep12
Scr = 12: MaxColors = 16: PWidth = wid12: PDepth = dep12
CASE 776: PRINT "Custom Screen 13:"; wid13 \ 8; "X"; dep13
Scr = 13: MaxColors = 256: PWidth = wid13 \ 8: PDepth = dep13
END SELECT

END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [EXIT](EXIT.md) [DO](DO.md)
* WHILE...WEND
* FOR...NEXT
</blockquote>
