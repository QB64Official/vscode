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


## [INTEGER](INTEGER.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INTEGER)
---
<blockquote>

### INTEGER is a 2-byte number type definition that can hold whole numerical values.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS INTEGER`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: QBasic signed integers were limited from -32768 to 32767, but could not exceed 32767 or it would error:
```vb
DO: _LIMIT 2000
i% = i% + 1
PRINT i%
LOOP UNTIL i% = 0
```
  
<br>



##### Example 2: When a signed QB64 INTEGER value exceeds 32767, the value may become a negative value:
```vb
i% = 38000
PRINT i%
```
  
<br>


<div class="explanation">Explanation: In QB64 an unsigned integer value of 65536 would be 0 with values increasing by the value minus 65536.</div>

```vb
-27536
```
  
<br>



##### Example 3: In QB64 _UNSIGNED INTEGER values greater than 65535 cycle over again from zero:
```vb
i~% = 70000
PRINT i~%
```
  
<br>

```vb
4464
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DIM](DIM.md) , [DEFINT](DEFINT.md)
* [LONG](LONG.md) , [_INTEGER64](INTEGER64.md)
* [LEN](LEN.md) , [MKI&dollar;](MKI&dollar;.md) , [CVI](CVI.md)
* [_DEFINE](DEFINE.md) , [_UNSIGNED](UNSIGNED.md)
* Variable Types
* &B (binary), &O (octal), &H (hexadecimal)
* Integer Division , [MOD](MOD.md) (Integer remainder division)
</blockquote>
