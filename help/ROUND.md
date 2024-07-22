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

## [_ROUND](ROUND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ROUND)
---
<blockquote>

### The _ROUND function rounds to the closest even INTEGER , LONG or _INTEGER64 numerical value.

</blockquote>

#### SYNTAX

<blockquote>

`value = _ROUND ( number )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Can round [SINGLE](SINGLE.md)  , [DOUBLE](DOUBLE.md)  or [_FLOAT](FLOAT.md)  floating decimal point parameter values.
*  Can be used when numerical values exceed the limits of [CINT](CINT.md)  or [CLNG](CLNG.md)  .
*  Rounding is done to the closest even integer value. The same as QBasic does with integer division .


</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Displays how QB64 rounds to the closest even integer value.
```vb
PRINT _ROUND(0.5)
PRINT _ROUND(1.5)
PRINT _ROUND(2.5)
PRINT _ROUND(3.5)
PRINT _ROUND(4.5)
PRINT _ROUND(5.5)
```
  
<br>

##### Example: Displays how QB64 rounds to the closest even integer value.
```vb
0
2
2
4
4
6
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [INT](INT.md)  , [CINT](CINT.md) 
*  [FIX](FIX.md)  , [CLNG](CLNG.md) 

</blockquote>
