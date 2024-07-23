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

```vb
10 8 6 4 2 0
```
  
<br>


<div class="explanation">Note: The value of i = -2 after the loop is done.</div>



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


* FOR...NEXT
* [DRAW](DRAW.md)
* [LINE](LINE.md) , [CIRCLE](CIRCLE.md) , [PSET](PSET.md) , [PAINT](PAINT.md)
</blockquote>
