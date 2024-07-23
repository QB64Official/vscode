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


## [_SHR](SHR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SHR)
---
<blockquote>

### The _SHR function is used to shift the bits of a numerical value to the right.

</blockquote>

#### SYNTAX

<blockquote>

`result = _SHR ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>


* numericalVariable is the variable to shift the bits of and can be of the following types: [INTEGER](INTEGER.md) , [LONG](LONG.md) , [_INTEGER64](INTEGER64.md) , or [_BYTE](BYTE.md) .
* Integer values can be signed or [_UNSIGNED](UNSIGNED.md) .
* numericalValue the number of places to shift the bits.
* While 0 is a valid value it will have no affect on the variable being shifted.
</blockquote>

#### DESCRIPTION

<blockquote>


* Allows for division of a value by 2 faster than normal division (see example 2 below).
* Bits that reach the end of a variables bit count are dropped.
* The type of variable used to store the results should match the type of the variable being shifted.
* NOTE: When dealing with SIGNED variables, shifting the bits right will leave the sign bit set. This is due to how C++ deals with bit shifting under the hood.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1:
```vb
A~%% = 128 'set left most bit of an_UNSIGNED _BYTE
PRINT A~%%
PRINT _SHR(A~%%,7)
PRINT _SHR(A~%%,8) 'shift the bit off the right 'edge'
```
  
<br>

```vb
128
1
0
```
  
<br>



##### Example 2:
```vb
A~%% = 128
FOR I%% = 0 TO 8
PRINT _SHR(A~%%, I%%)
NEXT I%%
```
  
<br>

```vb
128
64
32
16
8
4
2
1
0
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SHL](SHL.md) , [_ROL](ROL.md) , [_ROR](ROR.md)
* [_BYTE](BYTE.md) , [INTEGER](INTEGER.md)
* [LONG](LONG.md) , [_INTEGER64](INTEGER64.md)
</blockquote>
