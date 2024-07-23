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


## [ASC](ASC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ASC)
---
<blockquote>

### The ASC statement allows a program to change a character at any position of a STRING variable.

</blockquote>

#### SYNTAX

<blockquote>

`ASC ( stringExpression$ [, position% ]) = code%`

</blockquote>

#### DESCRIPTION

<blockquote>


* Note: The statement variant of [ASC](ASC.md) is not available in QBasic/QuickBASIC, but in QB64 only .
* The stringExpression$ variable's value must have been previously defined and cannot be an empty string ("").
* position% is optional. If no position is used, the leftmost character at position 1 is assumed.
* position% cannot be zero or greater than the string's length or an Illegal function call error will occur.
* The ASCII replacement code% value can be any [INTEGER](INTEGER.md) value from 0 to 255.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
a$ = "YZC"
ASC(a$) = 65                 ' CHR$(65) = "A"
ASC(a$, 2) = 66              ' CHR$(66) = "B"
PRINT a$

ASC(a$, 2) = 32              ' CHR$(32) = " "
PRINT a$

ASC(a$, 2) = ASC("S")        ' get code value from ASC function
PRINT a$
```
  
<br>

```vb
ABC
A C
ASC
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [ASC](ASC.md) (function)
* [MID&dollar;](MID&dollar;.md) , [MID&dollar;](MID&dollar;.md) (function)
* [INKEY&dollar;](INKEY&dollar;.md) , ASCII
</blockquote>
