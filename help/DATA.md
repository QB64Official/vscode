# DATA

The DATA statement creates a line of fixed program information separated by commas. The DATA can be later READ by the program at runtime.

  

## Syntax

DATA [value1, value2, ...]
  

## Description

* DATA is used at the beginning of every data field line with commas separating the values that follow.
* Values can be any **literal** [STRING](STRING.md) or numerical type. **Variables cannot be used.**
* DATA fields can be placed and READ consecutively in the main program code body with or without line labels for [RESTORE](RESTORE.md).
* DATA is best placed after the main program code.
	+ **QB64** DATA can be placed inside a [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures.
* [RESTORE](RESTORE.md) will only read the first data field if the DATA is not labeled or no label is specified in a RESTORE call.
* When using multiple DATA fields, label each data field with a line label so that each data pointer can be reset for multiple reads with **[RESTORE](RESTORE.md) *linelabel***.
* QBasic comma separations were flexible to allow column alignments when creating them. QB64 removes spacing between commas.
* [STRING](STRING.md) DATA values with end spaces, QBasic keywords and values that include the comma character must be enclosed in quotation marks.
* DATA fields can only be created by the programmer and cannot be changed by a user or lost.
* Comments after a data line require a colon before the comment.
* If a [READ](READ.md) statement attempts to read past the last data value, an ["Out of Data" error]("Out of Data" error.md) will occur. Use end of data markers when necessary.
* **DATA fields can be placed after [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures, but line labels are not allowed.**

  

## Examples

*Example 1:* Creating two DATA fields that can be [READ](READ.md) repeatedly using [RESTORE](RESTORE.md) with the appropriate line label.

``` [RESTORE](RESTORE.md) Database2 [READ](READ.md) A$, B$, C$, D$         'read 4 string values from second DATA field PRINT A$ + B$ + C$ + D$     'note that quoted strings values are spaced  [RESTORE](RESTORE.md) Database1 FOR i = 1 TO 18   [READ](READ.md) number%                     'read first DATA field 18 times only   PRINT number%; NEXT  END  Database1: DATA 1, 0, 0, 1, 1, 0, 1, 1, 1 DATA 2, 0, 0, 2, 2, 0, 2, 2, 2 :       ' DATA line comments require a colon  Database2: DATA "Hello, ", "world! ", Goodbye, work!  
```

``` Hello world! Goodbyework! 1  0  0  1  1  0  1  1  1  2  0  0  2  2  0  2  2  2  
```

  

*Example 2:* How to [RESTORE](RESTORE.md) and [READ](READ.md) DATA in a [SUB](SUB.md) procedure in QB64. Line labels can be used for multiple DATA fields.

``` [DIM](DIM.md) [SHARED](SHARED.md) num(10) 'shared array or must be passed as a parameter ReadData 2 '<<<<<<< change value to 1 to read other data [FOR](FOR.md) i = 1 [TO](TO.md) 10   [PRINT](PRINT.md) num(i); [NEXT](NEXT.md) [END](END.md)  [SUB](SUB.md) ReadData (mode) [IF](IF.md) mode = 1 [THEN](THEN.md) [RESTORE](RESTORE.md) mydata1 [ELSE](ELSE.md) [RESTORE](RESTORE.md) mydata2 [FOR](FOR.md) i = 1 [TO](TO.md) 10   [READ](READ.md) num(i) [NEXT](NEXT.md)  mydata1: DATA 1,2,3,4,5,6,7,8,9,10 mydata2: DATA 10,9,8,7,6,5,4,3,2,1 [END SUB](END SUB.md)  
```

```  10  9  8  7  6  5  4  3  2  1  
```

  

## See also

* [RESTORE](RESTORE.md). [READ](READ.md)
* [$EMBED]($EMBED.md). [_EMBEDDED$](_EMBEDDED$.md)
* [SUB](SUB.md), [FUNCTION](FUNCTION.md)

  
