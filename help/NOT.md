## NOT
---

### NOT is a boolean logical operator that will change a false statement to a true one and vice-versa.

#### SYNTAX

`True = -1: False = NOT True`

#### DESCRIPTION
* In QBasic, True = -1 and False = 0 in boolean logic and evaluation statements.
* [NOT](./NOT.md) evaluates a value and returns the bitwise opposite, meaning that [NOT](./NOT.md) 0 = -1 .
* Often called a negative logic operator, it returns the opposite of a value as true or false.
* Values are changed by their bit values so that each bit is changed to the opposite of on or off. See example 3 below.


#### EXAMPLES
##### Example 1: Alternating between two conditions in a program loop.
```vb
DO
switch = NOT switch       'NOT changes value from -1 to 0 and vice-versa
LOCATE 10, 38
IF switch THEN PRINT "True!" ELSE PRINT "False"
SLEEP
k$ = INKEY$
LOOP UNTIL k$ = CHR$(27) ' escape key quit
```
  
##### Example 2: Reading a file until it reaches the End Of File.
```vb
DO WHILE NOT EOF(1)
 INPUT #1, data1, data2, data3
LOOP
```
  
##### Example 3: So why does NOT 5 = -6 ? Because NOT changes every bit of a value into the opposite:
```vb
PRINT NOT 5
PRINT
ReadBits 5
ReadBits -6

SUB ReadBits (n AS INTEGER) 'change type value and i bit reads for other whole type values
FOR i = 15 TO 0 STEP -1 'see the 16 bit values
   IF n AND 2 ^ i THEN PRINT "1"; ELSE PRINT "0";
NEXT
PRINT
END SUB
```
  
```vb
-6

0000000000000101
1111111111111010
```
  
```vb
'16 bit INTEGER values from -32768 to 32767
a% = &B0000000000000101
PRINT a%
b% = &B1111111111111010
PRINT b%
'8 bit BYTE values from -128 to 127
a%% = &B00000101
PRINT a%%
b%% = &B11111010
PRINT b%%
```
  


#### SEE ALSO
* [_BIT](./_BIT.md) , &B , [_BYTE](./_BYTE.md)
* [AND](./AND.md) , [XOR](./XOR.md) , [OR](./OR.md)
* Binary , Boolean
* Mathematical Operations
