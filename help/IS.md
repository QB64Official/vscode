## SELECT CASE
---

### SELECT CASE is used to determine the program flow by comparing the value of a variable to specific CASE values.

#### SYNTAX

`SELECT [EVERY] CASE testExpression CASE expressionList1 [statement-block1] [ CASE expressionList2 [statement-block2]]... [ CASE ELSE [statementblock-n]]`

#### EXAMPLES
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
  
```vb
This will be displayed when a equals 100
(and no other case will be checked)
```
  
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
  
```vb
This will be displayed when a equals 100
(and other cases will be checked)
This will be shown as 100 is less than 150
This will be shown as 100 is between 50 and 150
```
  
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
  


#### SEE ALSO
* [IF](./IF.md)...[THEN](./THEN.md) , Boolean
