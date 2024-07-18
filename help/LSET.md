## LSET
---

### LSET left-justifies a fixed length string expression based on the size of the STRING variable and string expression.

#### SYNTAX

`LSET {stringVariable = stringExpression | stringExpression1 = stringExpression2}`

#### DESCRIPTION
* If the string expression is longer than a fixed length string variable the value is truncated from the right side in [LSET](./LSET.md) or [RSET](./RSET.md) .
* If the [LSET](./LSET.md) string expression is smaller, spaces will occupy the extra positions to the right in the string.
* [LSET](./LSET.md) can be used with a [FIELD](./FIELD.md) or [TYPE](./TYPE.md) definition to set the buffer position before a [PUT](./PUT.md) .


#### EXAMPLES
##### Example 1: Using LSET with a FIELD definition. Note: May create an empty (unchanged) file that can be deleted.
```vb
OPEN "testfile.dat" FOR RANDOM AS #1 LEN = 15
FIELD 1, 6 AS a$, 9 AS other$
FIELD 1, 2 AS b$, 13 AS another$
LSET a$ = "1234567890"
LSET other$ = "1234567890"
PRINT a$, b$, other$, another$
CLOSE #1
```
  
```vb
123456            12         123456789     3456123456789
```
  
##### Example 2: How LSET can define two different string length values in one statement.
```vb
TYPE ninestring
head AS STRING * 9
END TYPE

TYPE fivestring
head AS STRING * 5
END TYPE

DIM me AS ninestring, you AS fivestring
me.head = "ACHES NOT"
CLS

LSET you.head = me.head
PRINT "me.head: "; me.head
PRINT "you.head: "; you.head
```
  
```vb
me.head: ACHES NOT
you.head: ACHES
```
  


#### SEE ALSO
* [RSET](./RSET.md) , RTRIM$
* [FIELD](./FIELD.md) , [TYPE](./TYPE.md)
