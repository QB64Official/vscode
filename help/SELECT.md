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


## [SELECT CASE](SELECT_CASE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SELECT%20CASE)
---
<blockquote>

### SELECT CASE is used to determine the program flow by comparing the value of a variable to specific CASE values.

</blockquote>

#### SYNTAX

<blockquote>

`SELECT [EVERY] CASE testExpression CASE expressionList1 [statement-block1] [ CASE expressionList2 [statement-block2]]... [ CASE ELSE [statementblock-n]]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: SELECT CASE can use literal or variable STRING or numerical values in CASE comparisons:
```vb
INPUT "Enter a whole number value from 1 to 40: ", value
value1 = 10
value2 = 20
value3 = 30

SELECT CASE value
CASE value1: PRINT "Ten only"
CASE value1 TO value2: PRINT "11 to 20 only" '10 is already evaluated
CASE value1, value2, value3: PRINT "30 only" '10 and 20 are already evaluated
CASE IS > value2: PRINT "greater than 20 but not 30" '30 is already evaluated
CASE ELSE: PRINT "Other value" 'values less than 10
END SELECT
```
  
<br>



##### Example 2: SELECT CASE will execute the first CASE statement that is true and ignore all CASE evaluations after that:
```vb
a = 100
SELECT CASE a          'designate the value to compare
CASE 1, 3, 5, 7, 9
PRINT "This will not be shown."
CASE 10
PRINT "This will not be shown."
CASE 50
PRINT "This will not be shown."
CASE 100
PRINT "This will be displayed when a equals 100"
PRINT "(and no other case will be checked)"
CASE 150
PRINT "This will not be shown."
CASE IS < 150
PRINT "This will not be shown as a previous case was true"
CASE 50 TO 150
PRINT "This will not be shown as a previous case was true"
CASE ELSE
PRINT "This will only print if it gets this far!"
END SELECT
```
  
<br>


<div class="explanation">Explanation: CASE ELSE will only execute if no other CASE was true. See Example 5 for more usages.</div>

```vb
This will be displayed when a equals 100
(and no other case will be checked)
```
  
<br>



##### Example 3: Same as Example 2 but, SELECT EVERYCASE will execute every CASE statement that is true.
```vb
a = 100
SELECT EVERYCASE a          'designate the value to compare
CASE 1, 3, 5, 7, 9
PRINT "This will not be shown."
CASE 10
PRINT "This will not be shown."
CASE 50
PRINT "This will not be shown."
CASE 100
PRINT "This will be displayed when a equals 100"
PRINT "(and other cases will be checked)"
CASE 150
PRINT "This will not be shown."
CASE IS < 150
PRINT "This will be shown as 100 is less than 150"
CASE 50 TO 150
PRINT "This will be shown as 100 is between 50 and 150"
CASE ELSE
PRINT "This will only print if no other CASE is true!"
END SELECT
```
  
<br>

```vb
This will be displayed when a equals 100
(and other cases will be checked)
This will be shown as 100 is less than 150
This will be shown as 100 is between 50 and 150
```
  
<br>



##### Example 4: SELECT CASE evaluates string values by the ASC code value according to ASCII .
```vb
PRINT "Enter a letter, number or punctuation mark from the keyboard: ";
value$ = INPUT$(1)
PRINT value$
value1$ = "A"
value2$ = "m"
value3$ = "z"

SELECT CASE value$
CASE value1$: PRINT "A only"
CASE value1$ TO value2$: PRINT "B to m" 'A is already evaluated
CASE value1$, value2$, value3$: PRINT "z only" 'A and m are already evaluated
CASE IS > value2$: PRINT "greater than m but not z" 'z is already evaluated
CASE ELSE: PRINT "other value" 'key entry below A including all numbers
END SELECT
```
  
<br>



##### Example 5: EVERYCASE is used to draw sections of digital numbers in a simulated LED readout using numbers from 0 to 9:
```vb
SCREEN 12
DO
LOCATE 1, 1: INPUT "Enter a number 0 to 9: ", num
CLS
SELECT EVERYCASE num
CASE 0, 2, 3, 5 TO 9: PSET (20, 20), 12
DRAW "E2R30F2G2L30H2BR5P12,12" 'top horiz
CASE 0, 4 TO 6, 8, 9: PSET (20, 20), 12
DRAW "F2D30G2H2U30E2BD5P12,12" 'left top vert
CASE 0, 2, 6, 8: PSET (20, 54), 12
DRAW "F2D30G2H2U30E2BD5P12, 12" 'left bot vert
CASE 2 TO 6, 8, 9: PSET (20, 54), 12
DRAW "E2R30F2G2L30H2BR5P12, 12" 'middle horiz
CASE 0 TO 4, 7 TO 9: PSET (54, 20), 12
DRAW "F2D30G2H2U30E2BD5P12,12" 'top right vert
CASE 0, 1, 3 TO 9: PSET (54, 54), 12
DRAW "F2D30G2H2U30E2BD5P12,12" 'bottom right vert
CASE 0, 2, 3, 5, 6, 8: PSET (20, 88), 12
DRAW "E2R30F2G2L30H2BR5P12,12" 'bottom horiz
CASE ELSE
LOCATE 20, 20: PRINT "Goodbye!"; num
END SELECT
LOOP UNTIL num > 9
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* IF...THEN , Boolean
</blockquote>
