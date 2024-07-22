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

## [STEP](STEP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/STEP)
---
<blockquote>

### The STEP keyword is used in FOR...NEXT loops to skip through the count or to count down instead of up. Used in graphics to designate a relative coordinate position of a graphics object function.

</blockquote>

#### SYNTAX

<blockquote>

`FOR counter_variable = start_point TO stop_point [ STEP interval ]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Stepping down 2 in a FOR counter loop.
```vb
FOR...NEXT i = 10 TO 0 STEP -2
PRINT i;
NEXT
```
  
<br>

##### Example: Stepping down 2 in a FOR counter loop.
```vb
10 8 6 4 2 0
```
  
<br>

##### Graphics Example: Using STEP coordinates to PAINT a circle's interior.
```vb
SCREEN 12
CIRCLE (100, 100), 50, 12
PAINT STEP(0, 0), 13, 12
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [FOR](FOR.md) ... [NEXT](NEXT.md) 
*  [DRAW](DRAW.md) 
*  [LINE](LINE.md)  , [CIRCLE](CIRCLE.md)  , [PSET](PSET.md)  , [PAINT](PAINT.md) 

</blockquote>
