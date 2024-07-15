# SELECT CASE

SELECT CASE is used to determine the program flow by comparing the value of a variable to specific CASE values.

  

## Syntax

**SELECT** [EVERY]**CASE** *testExpression*
**CASE** *expressionList1*
[statement-block1]
[**CASE** *expressionList2*
[statement-block2...
[**CASE ELSE**
[statementblock-n
**END SELECT**
  

* **SELECT CASE** evaluates *testExpression* and executes the first matching [CASE](**CASE** *expressionList2*
[statement-block2...
[**CASE ELSE**
[statementblock-n
**END SELECT**
  

* **SELECT CASE** evaluates *testExpression* and executes the first matching [CASE.md) or [CASE ELSE](CASE ELSE.md) block and exits.
* **SELECT EVERYCASE** allows the execution of all matching [CASE](CASE.md) blocks from top to bottom or the [CASE ELSE](CASE ELSE.md) block.
* The literal, variable or expression *testExpression* comparison can result in any string or numerical type.
* **Note:** A *testExpression* variable value can be changed inside of true CASE evaluations in SELECT EVERYCASE.
* A *testExpression* derived from an expression or [FUNCTION](FUNCTION.md) will only be determined once at the start of the block execution.
* Supports individual CASE values and ranges or lists of literal values as below:
	+ **CASE** casevalue: code '**case compares one numerical or text value**
	+ **CASE** casevalue1 [TO](TO.md) casevalue2: code '**case compares a range of values**
	+ **CASE** casevalue1, casevalue2, casevalue3: code '**case compares a list of values separated by commas**
	+ **CASE IS** > casevalue: code '**case compares a value as =, <>, < or >**
	+ **CASE ELSE**: code '**bottom case statement executes only when no other CASE is executed.**
* The CASE values should cover the normal ranges of the comparison *testExpression* values.
* Use **CASE ELSE** before **END SELECT** if an alternative is necessary when no other case matches.
* CASEs should be listed in an ascending or descending values for best and fastest results.
* [STRING](STRING.md) comparisons will be based on their respective [ASCII](ASCII.md) code values where capital letters are valued less than lower case.
* Use **SELECT CASE** when [IF...THEN](IF...THEN.md) statements get too long or complicated.
* **SELECT CASE** and **EVERYCASE** statement blocks must **always** be ended with [END SELECT](END SELECT.md).
* Use **[colons](colons.md)** to execute multiple statements in one line.
* An **[underscore](underscore.md)** can be used anywhere after the code on one line to continue it to the next line in **QB64**.

  

## Examples

*Example 1:* SELECT CASE can use literal or variable [STRING](STRING.md) or numerical values in CASE comparisons:

``` [INPUT](INPUT.md) "Enter a whole number value from 1 to 40: ", value value1 = 10 value2 = 20 value3 = 30  SELECT CASE value   [CASE](CASE.md) value1: [PRINT](PRINT.md) "Ten only"   [CASE](CASE.md) value1 [TO](TO.md) value2: [PRINT](PRINT.md) "11 to 20 only" '10 is already evaluated   [CASE](CASE.md) value1, value2, value3: [PRINT](PRINT.md) "30 only" '10 and 20 are already evaluated   [CASE IS](CASE IS.md) > value2: [PRINT](PRINT.md) "greater than 20 but not 30" '30 is already evaluated   [CASE ELSE](CASE ELSE.md): [PRINT](PRINT.md) "Other value" 'values less than 10 [END SELECT](END SELECT.md)  
```

*Explanation:* The first true CASE is executed and SELECT CASE is exited. "Other value" is printed for values less than 10.
  

*Example 2:* SELECT CASE will execute the first CASE statement that is true and ignore all CASE evaluations after that:

``` a = 100 SELECT CASE a          'designate the value to compare   [CASE](CASE.md) 1, 3, 5, 7, 9     [PRINT](PRINT.md) "This will not be shown."   [CASE](CASE.md) 10     [PRINT](PRINT.md) "This will not be shown."   [CASE](CASE.md) 50     [PRINT](PRINT.md) "This will not be shown."   [CASE](CASE.md) 100     [PRINT](PRINT.md) "This will be displayed when a equals 100"     [PRINT](PRINT.md) "(and no other case will be checked)"   [CASE](CASE.md) 150     [PRINT](PRINT.md) "This will not be shown."   [CASE IS](CASE IS.md) < 150     [PRINT](PRINT.md) "This will not be shown as a previous case was true"   [CASE](CASE.md) 50 [TO](TO.md) 150     [PRINT](PRINT.md) "This will not be shown as a previous case was true"   [CASE ELSE](CASE ELSE.md)    [PRINT](PRINT.md) "This will only print if it gets this far!" [END SELECT](END SELECT.md)  
```

``` This will be displayed when a equals 100 (and no other case will be checked)  
```

*Explanation:* The first case where a value is true is shown, the remainder are skipped. Try changing the value of *a*.
  

*Example 3:* Same as Example 2 but, SELECT EVERYCASE will execute every CASE statement that is true.

``` a = 100 SELECT EVERYCASE a          'designate the value to compare   [CASE](CASE.md) 1, 3, 5, 7, 9     [PRINT](PRINT.md) "This will not be shown."   [CASE](CASE.md) 10     [PRINT](PRINT.md) "This will not be shown."   [CASE](CASE.md) 50     [PRINT](PRINT.md) "This will not be shown."   [CASE](CASE.md) 100     [PRINT](PRINT.md) "This will be displayed when a equals 100"     [PRINT](PRINT.md) "(and other cases will be checked)"   [CASE](CASE.md) 150     [PRINT](PRINT.md) "This will not be shown."   [CASE IS](CASE IS.md) < 150     [PRINT](PRINT.md) "This will be shown as 100 is less than 150"   [CASE](CASE.md) 50 [TO](TO.md) 150     [PRINT](PRINT.md) "This will be shown as 100 is between 50 and 150"   [CASE ELSE](CASE ELSE.md)    [PRINT](PRINT.md) "This will only print if no other CASE is true!" [END SELECT](END SELECT.md)  
```

``` This will be displayed when a equals 100 (and other cases will be checked) This will be shown as 100 is less than 150 This will be shown as 100 is between 50 and 150  
```

*Explanation:* [CASE ELSE](CASE ELSE.md) will only execute if no other CASE was true. See Example 5 for more usages.
  

*Example 4:* SELECT CASE evaluates string values by the [ASC](ASC.md) "ASC (function)") code value according to [ASCII](ASCII.md).

``` [PRINT](PRINT.md) "Enter a letter, number or punctuation mark from the keyboard: "; value$ = [INPUT$](INPUT$.md)(1) [PRINT](PRINT.md) value$ value1$ = "A" value2$ = "m" value3$ = "z"  SELECT CASE value$   [CASE](CASE.md) value1$: [PRINT](PRINT.md) "A only"   [CASE](CASE.md) value1$ [TO](TO.md) value2$: [PRINT](PRINT.md) "B to m" 'A is already evaluated   [CASE](CASE.md) value1$, value2$, value3$: [PRINT](PRINT.md) "z only" 'A and m are already evaluated   [CASE IS](CASE IS.md) > value2$: [PRINT](PRINT.md) "greater than m but not z" 'z is already evaluated   [CASE ELSE](CASE ELSE.md): [PRINT](PRINT.md) "other value" 'key entry below A including all numbers [END SELECT](END SELECT.md)  
```

*Notes:* [STRING](STRING.md) values using multiple characters will be compared by the [ASCII](ASCII.md) code values sequentially from left to right. Once the equivalent code value of one string is larger than the other the evaluation stops. This allows string values to be compared and sorted alphabetically using [>](>.md) or [<](<.md) and to [SWAP](SWAP.md) values in [arrays](arrays.md) regardless of the string lengths.
  

*Example 5:* EVERYCASE is used to draw sections of digital numbers in a simulated LED readout using numbers from 0 to 9:

``` [SCREEN](SCREEN.md) 12 DO   [LOCATE](LOCATE.md) 1, 1: [INPUT](INPUT.md) "Enter a number 0 to 9: ", num   [CLS](CLS.md)   SELECT EVERYCASE num     [CASE](CASE.md) 0, 2, 3, 5 [TO](TO.md) 9: [PSET](PSET.md) (20, 20), 12       [DRAW](DRAW.md) "E2R30F2G2L30H2BR5P12,12" 'top horiz     [CASE](CASE.md) 0, 4 [TO](TO.md) 6, 8, 9: [PSET](PSET.md) (20, 20), 12       [DRAW](DRAW.md) "F2D30G2H2U30E2BD5P12,12" 'left top vert     [CASE](CASE.md) 0, 2, 6, 8: [PSET](PSET.md) (20, 54), 12       [DRAW](DRAW.md) "F2D30G2H2U30E2BD5P12, 12" 'left bot vert     [CASE](CASE.md) 2 [TO](TO.md) 6, 8, 9: [PSET](PSET.md) (20, 54), 12       [DRAW](DRAW.md) "E2R30F2G2L30H2BR5P12, 12" 'middle horiz     [CASE](CASE.md) 0 [TO](TO.md) 4, 7 [TO](TO.md) 9: [PSET](PSET.md) (54, 20), 12       [DRAW](DRAW.md) "F2D30G2H2U30E2BD5P12,12" 'top right vert     [CASE](CASE.md) 0, 1, 3 [TO](TO.md) 9: [PSET](PSET.md) (54, 54), 12       [DRAW](DRAW.md) "F2D30G2H2U30E2BD5P12,12" 'bottom right vert     [CASE](CASE.md) 0, 2, 3, 5, 6, 8: [PSET](PSET.md) (20, 88), 12       [DRAW](DRAW.md) "E2R30F2G2L30H2BR5P12,12" 'bottom horiz     [CASE ELSE](CASE ELSE.md)       [LOCATE](LOCATE.md) 20, 20: [PRINT](PRINT.md) "Goodbye!"; num   [END SELECT](END SELECT.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) num > 9  
```

**Note:** [CASE ELSE](CASE ELSE.md) will only execute if no other CASE is true! Changing the comparison value in a CASE may affect later CASE evaluations. **Beware of duplicate variables inside of cases affecting the comparison values and remaining cases.**
  

## See also

* [IF...THEN](IF...THEN.md), [Boolean](Boolean.md)

  
