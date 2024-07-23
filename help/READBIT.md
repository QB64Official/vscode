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


## [_READBIT](READBIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_READBIT)
---
<blockquote>

### The _READBIT function is used to check the state of a specified bit of a integer value.

</blockquote>

#### SYNTAX

<blockquote>

`result = _READBIT ( numericalVariable , numericalValue )`

</blockquote>

#### PARAMETERS

<blockquote>


* numericalVariable is the variable to read the state of a bit of and can be of the following types: [_BYTE](BYTE.md) , [INTEGER](INTEGER.md) , [LONG](LONG.md) , or [_INTEGER64](INTEGER64.md) .
* Integer values can be signed or [_UNSIGNED](UNSIGNED.md) .
* numericalValue the number of the bit to be read.
</blockquote>

#### DESCRIPTION

<blockquote>


* Used to check the current state of a bit in an integer value.
* Returns -1 if the bit is set(1), otherwise returns 0 if the bit is not set(0)
* Bits start at 0 (so a [_BYTE](BYTE.md) has bits 0 to 7, [INTEGER](INTEGER.md) 0 to 15, and so on)

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1:
```vb
A~%% = _SETBIT(A~%%,4)
PRINT "Bit 4 is currently ";
IF _READBIT(A~%%,4) = -1 THEN PRINT "ON" ELSE PRINT "OFF"
PRINT "And bit 2 is currently ";
IF _READBIT(A~%%,2) = -1 THEN PRINT "ON" ELSE PRINT "OFF"
```
  
<br>

```vb
Bit 4 is currently ON
And bit 2 is currently OFF
```
  
<br>



##### Example 2:
```vb
B& = 12589575
PRINT "B& ="; B&
FOR I%% = 31 TO 0 STEP -1 '32 bits for a LONG value
Binary$ = Binary$ + LTRIM$(STR$(ABS(_READBIT(B&, I%%))))
NEXT I%%
PRINT "B& in binary is: "; Binary$
```
  
<br>

```vb
B& = 12589575
B& in binary is: 00000000110000000001101000000111
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SHL](SHL.md) , [_SHR](SHR.md) , [INTEGER](INTEGER.md) , [LONG](LONG.md)
* [_SETBIT](SETBIT.md) , [_BYTE](BYTE.md) , [_INTEGER64](INTEGER64.md)
* [_RESETBIT](RESETBIT.md) , [_TOGGLEBIT](TOGGLEBIT.md)
</blockquote>
