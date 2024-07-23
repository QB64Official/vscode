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


## [STR\$](STR\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STR%24)
---
<blockquote>

### The STR$ function returns the STRING representation of a numerical value.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = STR$( number )`

</blockquote>

#### PARAMETERS

<blockquote>


* number is any numerical type value to convert.
</blockquote>

#### DESCRIPTION

<blockquote>


* Returns any type number value with leading sign(space/minus) or decimal point when one exists in the numerical value.
* If number is positive, the [STRING](STRING.md) value returned will have a leading space character which can be removed using [LTRIM&dollar;](LTRIM&dollar;.md) .
* If number is negative, the minus sign will precede the number instead of a space which [LTRIM&dollar;](LTRIM&dollar;.md) will not remove.
* Trimming a [STR&dollar;](STR&dollar;.md) string number using [RTRIM&dollar;](RTRIM&dollar;.md) is not required as [PRINT](PRINT.md) creates the undocumented trailing number space.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
PRINT STR$( 1.0 )
PRINT STR$( 2.3 )
PRINT STR$( -4.5 )
```
  
<br>

```vb
1
2.3
-4.5
```
  
<br>

```vb
a = 33
PRINT STR$(a) + "10" + "1" + "who" + STR$(a) + STR$(a) + LTRIM$(STR$(a))
```
  
<br>

```vb
33101who 33 3333
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [VAL](VAL.md) , [STRING](STRING.md)
* [LTRIM&dollar;](LTRIM&dollar;.md) , [MID&dollar;](MID&dollar;.md) (function)
* [RIGHT&dollar;](RIGHT&dollar;.md) , [LEFT&dollar;](LEFT&dollar;.md)
* [HEX&dollar;](HEX&dollar;.md) , [OCT&dollar;](OCT&dollar;.md)
</blockquote>
