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


## [_SETBIT](SETBIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SETBIT)
---
<blockquote>

### The _SETBIT function is used to set a specified bit of a numerical value to 1 (on state).

</blockquote>

#### SYNTAX

<blockquote>

`result = _SETBIT ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>


* numericalVariable is the variable to set the bit of and can be of the following types: [_BYTE](BYTE.md) , [INTEGER](INTEGER.md) , [LONG](LONG.md) , or [_INTEGER64](INTEGER64.md) .
* Integer values can be signed or [_UNSIGNED](UNSIGNED.md) .
* numericalValue the number of the bit to be set.
</blockquote>

#### DESCRIPTION

<blockquote>


* Can be used to manually manipulate individual bits of an integer value by setting them to 1 (on state).
* Setting a bit that is already set to 1 will have no effect.
* Bits start at 0 (so a [_BYTE](BYTE.md) has bits 0 to 7, [INTEGER](INTEGER.md) 0 to 15, and so on)

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1:
```vb
A~%% = 0 '_UNSIGNED _BYTE
PRINT A~%%
A~%% = _SETBIT(A~%%,6) 'set the seventh bit of A~%%
PRINT A~%%
```
  
<br>

```vb
0
64
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SHL](SHL.md) , [_SHR](SHR.md) , [INTEGER](INTEGER.md) , [LONG](LONG.md)
* [_READBIT](READBIT.md) , [_BYTE](BYTE.md) , [_INTEGER64](INTEGER64.md)
* [_RESETBIT](RESETBIT.md) , [_TOGGLEBIT](TOGGLEBIT.md)
</blockquote>
