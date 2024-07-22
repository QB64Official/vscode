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

## [PALETTE_USING](PALETTE_USING.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PALETTE USING)
---
<blockquote>

### The PALETTE USING statement sets all RGB screen color intensities using values from an array .

</blockquote>

#### SYNTAX

<blockquote>

`PALETTE USING array%( startIndex% )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The array holds the RGB color value using the color value as red% + 256 * green% + 65536 * blue% .
	* Color intensities range from 0 to 63.
*  startIndex% indicates the index in the array from which the statement should start reading. The statement will read all color attributes available in that [SCREEN](SCREEN.md)  mode. The number of values required in the array is listed below:


</blockquote>

#### EXAMPLES

<blockquote>

```vb
Screen mode       Attributes       Colors         Values
0              0 - 15         0 - 63           16
1              0 - 3          0 - 3             4
2              0 - 1          0 - 1             2
7              0 - 15         0 - 15           16
8              0 - 15         0 - 15           16
9              0 - 15         0 - 63           16
10              0 - 3          0 - 8             4
11              0 - 1          0 - 1             2
12              0 - 15         0 - 262,143      16
13              0 - 15         0 - 263,143     256
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [PALETTE](PALETTE.md)  , [COLOR](COLOR.md) 
*  [_PALETTECOLOR](PALETTECOLOR.md) 
*  [SCREEN](SCREEN.md) 

</blockquote>
