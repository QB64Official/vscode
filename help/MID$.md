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


## [MID\$](MID\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MID%24)
---
<blockquote>

### The MID$ statement substitutes one or more new characters for existing characters of a previously defined STRING .

</blockquote>

#### SYNTAX

<blockquote>

`MID$ ( baseString$ , startPosition% [, bytes% ]) = replacementString$`

</blockquote>

#### PARAMETERS

<blockquote>


* The baseString$ variable must exist and be large enough to contain the replacementString$ .
* startPosition% specifies the string character position to start the overwrite.
* bytes% or number of characters is optional. Excess byte lenghts are ignored.
* The replacementString$ should be as long as the byte length reserved.
* The length of the original string is not changed in any case. If replacementString$ is longer, it gets clipped.
</blockquote>

#### EXAMPLES

<blockquote>

```vb
text$ = "The cats and dogs were playing, even though dogs don't like cats."
PRINT text$
start% = 1          ' start cannot be 0 when used in the INSTR function!
DO
position% = INSTR(start%, text$, "dog")
IF position% THEN            ' when position is a value greater than 0
MID$(text$, position%, 3) = "rat"   ' changes "dog" to "rat" when found
start% = position% + 1     ' advance one position to search rest of string
END IF
LOOP UNTIL position% = 0       ' no other matches found
PRINT text$
```
  
<br>

```vb
The cats and dogs were playing, even though dogs don't like cats.
The cats and rats were playing, even though rats don't like cats.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [MID&dollar;](MID&dollar;.md) (function)
* [ASC](ASC.md) , [ASC](ASC.md) (function)
* [LEFT&dollar;](LEFT&dollar;.md) , [RIGHT&dollar;](RIGHT&dollar;.md)
* [INSTR](INSTR.md) , ASCII , [STR&dollar;](STR&dollar;.md) , [HEX&dollar;](HEX&dollar;.md) , Bitmaps
* [MKI&dollar;](MKI&dollar;.md) , [MKL&dollar;](MKL&dollar;.md) , [MKS&dollar;](MKS&dollar;.md) , [MKD&dollar;](MKD&dollar;.md)
</blockquote>
