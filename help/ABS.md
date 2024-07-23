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


## [ABS](ABS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ABS)
---
<blockquote>

### The ABS function returns the unsigned numerical value of a variable or literal value.

</blockquote>

#### SYNTAX

<blockquote>

`positive = ABS ( numericalValue )`

</blockquote>

#### DESCRIPTION

<blockquote>


* [ABS](ABS.md) always returns positive numerical values. The value can be any numerical type.
* Often used to keep a value positive when necessary in a program.
* Use [SGN](SGN.md) to determine a value's sign when necessary.
* QB64 allows programs to return only positive [_UNSIGNED](UNSIGNED.md) variable values using a [DIM](DIM.md) or [_DEFINE](DEFINE.md) statement.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Finding the absolute value of positive and negative numerical values.
```vb
a = -6
b = -7
c = 8
IF a < 0 THEN a = ABS(a)
b = ABS(b)
c = ABS(c)
PRINT a, b, c
```
  
<br>

```vb
6        7        8
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SGN](SGN.md) , [DIM](DIM.md)
* [_UNSIGNED](UNSIGNED.md)
* [_DEFINE](DEFINE.md)
* Mathematical Operations
</blockquote>
