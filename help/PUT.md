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

## [PUT](PUT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PUT)
---
<blockquote>

### The PUT # file or port statement writes data to a specific byte or record location.

</blockquote>

#### SYNTAX

<blockquote>

`PUT # filenumber& , [ position ][, { holdingvariable | holdingarray() }]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Using a TYPE record variable(Contact) to enter a new RANDOM record to a file.
```vb
TYPE ContactType
first AS STRING * 10
last AS STRING * 20
age AS INTEGER
END TYPE
DIM Contact AS ContactType

INPUT "Enter a first name: ", Contact.first
INPUT "Enter a last name: ", Contact.last
INPUT "Enter an age: ", Contact.age

OPEN "Record.lst" FOR RANDOM AS #1 LEN = LEN(Contact)
NumRecords% = LOF(1) \ LEN(Contact)
PRINT NumRecords%; "previous records"

PUT #1, NumRecords% + 1, Contact ' add a new record TYPE record value
CLOSE #1
```
  
<br>

##### Example 2: Placing the contents of a numerical array into a BINARY file. You may want to put the array size at the beginning too.
```vb
DIM SHARED array(100) AS INTEGER

FOR i = 1 TO 100
array(i) = i
NEXT
showme  'display array contents

OPEN "BINFILE.BIN" FOR BINARY AS #1

PUT #1, , array()

ERASE array 'clear element values from array and display empty
showme
CLOSE #1

OPEN "BINFILE.BIN" FOR BINARY AS #2
GET #2, , array()
CLOSE #2
showme  'display array after transfer from file

END

SUB showme
FOR i = 1 TO 100
PRINT array(i);
NEXT
PRINT "done"
END SUB
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [GET](GET.md)  #
*  [SEEK](SEEK.md)  , [SEEK](SEEK.md)  (function)
*  [PRINT](PRINT.md)   #
*  [FIELD](FIELD.md) 
*  [PUT](PUT.md)  (graphics statement)
*  [PUT](PUT.md)  (TCP/IP statement)

</blockquote>
