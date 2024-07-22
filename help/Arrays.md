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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [Arrays](Arrays.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Arrays)
---
<blockquote>

### Arrays are simply variables with a number of elements that can each hold data in memory. To designate a certain element, integers denote the value's position in memory. Don't let talk about memory scare you! Basic does all of the work for you just by using the simple commands in this tutorial. Besides that, you have already been using memory since you created your first variable!

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Dimensions an array named 'Array' that is capable of holding 101 integer values including element 0.
```vb
DIM Array(100) AS INTEGER
```
  
<br>

##### Example 2: dimensions an Integer array that can hold 100 values in indices 1 to 100.
```vb
DIM Array%(1 TO 100)
```
  
<br>

##### Example 3:
```vb
OPTION BASE 1 ' placed before any arrays are dimensioned
REDIM Array$(1000) ' REDIM creates a dynamic array
```
  
<br>

##### Example 4: REDIM without the _PRESERVE action erases the array contents
```vb
REM $DYNAMIC
DIM array(20)
array(10) = 24
PRINT array(10)
REDIM _PRESERVE array(30)
PRINT array(10)
REDIM array(10)
PRINT array(10)
```
  
<br>

##### Example 4: REDIM without the _PRESERVE action erases the array contents
```vb
24
24
0
```
  
<br>

##### Example 5: Changing the starting index number using the _PRESERVE action moves the data.
```vb
REDIM Array$(1 TO 50)
Array$(1) = "I'm number one!"
Array$(50) = "I'm 50..."
REDIM _PRESERVE Array$(51 TO 100)
PRINT Array$(51) ' display new start index data
PRINT Array$(100) ' display new end data
```
  
<br>

##### Example 5: Changing the starting index number using the _PRESERVE action moves the data.
```vb
I'm number one!
I'm 50...
```
  
<br>

##### Example 6: The memory segment address of the array is defined in DEF SEG .
```vb
DEF SEG = VARSEG(array(0))
offset = VARPTR(array(0)) 'program designated offset element
```
  
<br>```vb
TWO DIMENSIONAL ARRAY TABLES

Setting up a car sales Database: The sales for each month as represented in an array.

DIM Vehicle%(12, 4)       ' Vehicle%(month%, type%)

Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
   1   2   3   4   5   6   7   8   9   10  11  12  ← Month index
Type index ↓  -----------------------------------------------
Cars     1:  5  10  15  20  30   19  17  12  24  20  33  30
Trucks   2:  3   8   7  10  15    9  11   8  15  10  16  11
Vans     3:  4   6   8   9   7   10   9   7   9   8  10   7
SUV      4: 10   8   8   5  10    8   6   8  10  11   9   8

To find monthly and yearly totals you could do something like this:

FOR month% = 1 TO 12
FOR type% = 1 TO 4
MonthlySales% = MonthlySales% + Vehicle%(month%, type%)
NEXT
YearlySales% = YearlySales% + MonthlySales%
PRINT "Monthly =", MonthlySales%; " Yearly ="; YearlySales%; "   "
INPUT$(1)               'stop to view each month
MonthlySales% = 0       'zero month sales for next months total
NEXT
```
  
<br>

##### Example 7: Creating a two-dimensional array. A comma separates each dimension size.
```vb
DIM Array(12, 10) ' 2 dimensions can hold 143 data values
```
  
<br>

##### Example 8: Dimensioning using index ranges.
```vb
DIM Array(1 TO 12, 1 TO 10) ' 2 dimensions can hold 120 data values
```
  
<br>```vb
DO
INPUT "Enter your age: ", howold$
age% = VAL(howold$)
LOOP UNTIL age% > 0

Playerage%(user%) = age% 'saves the players age to an indexed player number

PRINT Playerage%(user%) 'print array element to screen to verify entry

user% = user% + 1 'increment user number when all data has been entered
```
  
<br>```vb
wide& = 20: deep& = 20 'change the sizes for any image area
DIM array(wide& * deep&) AS INTEGER
LINE (0, 0)-(wide& - 1, deep& - 1), 12, B 'the box border is all that you need to color.
GET (0, 0)-(wide& - 1, deep& - 1), array(0)
FOR s& = wide& * deep& TO 0 STEP -1
IF array(s&) THEN arraysize& = s&: EXIT FOR
NEXT
PRINT arraysize&
END
```
  
<br>```vb
FUNCTION ScanKey% (scancode%)
STATIC Ready%, keyflags%()
IF NOT Ready% THEN REDIM keyflags%(0 TO 127): Ready% = -1
i% = INP(&H60) 'read keyboard states
IF (i% AND 128) THEN keyflags%(i% XOR 128) = 0
IF (i% AND 128) = 0 THEN keyflags%(i%) = -1
K$ = INKEY$
ScanKey% = keyflags%(scancode%)
IF scancode% = 0 THEN Ready% = 0 'allows program to reset all values to 0 with a REDIM
END FUNCTION
```
  
<br>
</blockquote>
