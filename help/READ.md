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

```vb
3.08  5.19  3.12  3.98  4.24  5.08  5.55  4  3.16  3.37
```
  
<br>


<div class="explanation">Note: String DATA values do not require quotes unless they contain commas, end spaces or QBasic keywords.</div>



##### Example 2: Reading three pieces of data at once.
```vb
PRINT " CITY ", " STATE  ", " ZIP"
PRINT STRING$(30, "-")  'divider
READ C$, S$, Z&
PRINT C$, S$, Z&

DATA "DENVER,", COLORADO, 80211
```
  
<br>

```vb
CITY        STATE       ZIP
------------------------------
DENVER,     COLORADO     80211
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DATA](DATA.md) , [RESTORE](RESTORE.md)
* [&dollar;EMBED](&dollar;EMBED.md) . [_EMBEDDED&dollar;](EMBEDDED&dollar;.md)
</blockquote>
