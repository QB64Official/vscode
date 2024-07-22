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

## [RANDOM](RANDOM.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RANDOM)
---
<blockquote>

### RANDOM is used in an OPEN statement to read( GET ) from or write( PUT ) to a file.

</blockquote>

#### SYNTAX

<blockquote>

`OPEN Filename$ FOR RANDOM AS #1 [LEN = recordlength% ]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Function that finds a RANDOM file's record number for a string value such as a phone number.
```vb
TYPE customer
age AS INTEGER
phone AS STRING * 10
END TYPE

DIM SHARED cust AS customer, recLEN
recLEN = LEN(cust)            'get the length of the record type
PRINT "RecLEN:"; recLEN

OPEN "randfile.rec" FOR RANDOM AS #1 LEN = recLEN
FOR i = 1 TO 4
READ cust.age, cust.phone
PUT #1, , cust
NEXT
CLOSE #1

RP = RecordPos("randfile.rec", "2223456789")  'returns 0 if record not found!

PRINT RP

IF RP THEN
OPEN "randfile.rec" FOR RANDOM AS #2 LEN = recLEN
GET #2, RP, cust
CLOSE #2
PRINT cust.age, cust.phone
END IF

END

DATA 59,2223456789,62,4122776477,32,3335551212,49,1234567890

FUNCTION RecordPos (file$, search$)
f = FREEFILE
OPEN file$ FOR INPUT AS #f
FL = LOF(f)
dat$ = INPUT$(FL, f)
CLOSE f
recpos = INSTR(dat$, search$)
IF recpos THEN RecordPos = recpos \ recLEN + 1 ELSE RecordPos = 0
END FUNCTION
```
  
<br>

##### Example 2: When not using a TYPE or fixed length strings, QB4.5 allows RANDOM files to hold variable length strings up to 2 bytes less than the LEN = record length statement:
```vb
_CONTROLCHR OFF
OPEN "myfile.txt" FOR OUTPUT AS #1: CLOSE #1: ' clears former file of all entries.
OPEN "myfile.txt" FOR RANDOM AS #1 LEN = 13 'strings can be up to 11 bytes with 2 byte padder

a$ = CHR$(1) + CHR$(0) + "ABCDEFGHI"
b$ = "ABCDEFGHI"
c$ = "1234"

PUT #1, 1, a$
PUT #1, 2, b$
PUT #1, 3, c$

FOR i = 1 TO 3
GET #1, i, a$
PRINT a$, LEN(a$)
NEXT

CLOSE
```
  
<br>

##### Example 2: When not using a TYPE or fixed length strings, QB4.5 allows RANDOM files to hold variable length strings up to 2 bytes less than the LEN = record length statement:
```vb
☺ ABCDEFGHI       11
ABCDEFGHI         9
1234              4
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [GET](GET.md)  , [PUT](PUT.md)  , [FIELD](FIELD.md) 
*  [BINARY](BINARY.md) 
*  [SEEK](SEEK.md)  , [SEEK](SEEK.md)  (function)

</blockquote>
