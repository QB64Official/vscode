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

## [READ](READ.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/READ)
---
<blockquote>

### The READ statement reads values from a DATA field and assigns them to one or a comma separated list of variables.

</blockquote>

#### SYNTAX

<blockquote>

`READ value1$[, value2!, value3%, ...]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Placing data into an array.
```vb
DIM A(10) AS SINGLE
FOR I = 1 TO 10
READ A(I)
NEXT I
FOR J = 1 TO 10
PRINT A(J);
NEXT
END

DATA 3.08, 5.19, 3.12, 3.98, 4.24
DATA 5.08, 5.55, 4.00, 3.16, 3.37
```
  
<br>

##### Example 1: Placing data into an array.
```vb
3.08  5.19  3.12  3.98  4.24  5.08  5.55  4  3.16  3.37
```
  
<br>

##### Example 2: Reading three pieces of data at once.
```vb
PRINT " CITY ", " STATE  ", " ZIP"
PRINT STRING$(30, "-")  'divider
READ C$, S$, Z&
PRINT C$, S$, Z&

DATA "DENVER,", COLORADO, 80211
```
  
<br>

##### Example 2: Reading three pieces of data at once.
```vb
CITY        STATE       ZIP
------------------------------
DENVER,     COLORADO     80211
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [DATA](DATA.md)  , [RESTORE](RESTORE.md) 
*  $EMBED . [_EMBEDDED\$](EMBEDDED\$.md) 

</blockquote>
