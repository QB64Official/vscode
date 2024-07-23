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


<div class="explanation">Note: The 2 byte file padders before each string PUT will show the length of a string for GET as ASCII characters. Padders will always be 2 bytes and strings up to the last one will be 13 bytes each no matter the length up to 11, so the file size can be determined as (2 + 11) + (2 + 9 + 2) + (2 + 4) or 13 + 13 + 2 + 4 = 32 bytes.</div>

```vb
☺ ABCDEFGHI       11
ABCDEFGHI         9
1234              4
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [GET](GET.md) , [PUT](PUT.md) , [FIELD](FIELD.md)
* [BINARY](BINARY.md)
* [SEEK](SEEK.md) , [SEEK](SEEK.md) (function)
</blockquote>
