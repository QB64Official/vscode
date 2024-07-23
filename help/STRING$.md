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


## [STRING\$](STRING\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STRING%24)
---
<blockquote>

### The STRING$ function returns a STRING consisting of a single character repeated a number of times.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = STRING$( count& , { character$ | ASCIIcode% } )`

</blockquote>

#### DESCRIPTION

<blockquote>


* count& is the number of times the character specified by character is repeated.
* Character is a literal string character, a string variable or an ASCII code number.
* If count& is negative, an illegal function call error will occur. The count can be zero.
* If character is a [STRING](STRING.md) value and its length is zero, an illegal function call error will occur.
* If more than one string character value is used, the first character will be repeated.
* A [STRING](STRING.md) statement can be added to a string value with the + concatenation operator.
* The function result can also be used to [GET](GET.md) and [PUT](PUT.md) a number of bytes as zero characters: bytes$ = STRING(numbytes, 0)

</blockquote>

#### EXAMPLES

<blockquote>

```vb
PRINT STRING$(40, 42)
```
  
<br>

```vb
****************************************
```
  
<br>


<div class="explanation">Using a STRING to specify the repeated character.</div>

```vb
text$ = "B" + STRING$(40, "A") + "D"
PRINT text$
```
  
<br>

```vb
BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SPACE&dollar;](SPACE&dollar;.md)
* [ASC](ASC.md) , [CHR&dollar;](CHR&dollar;.md)
* ASCII
</blockquote>
