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


## [_MEMFILL](MEMFILL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMFILL)
---
<blockquote>

### The _MEMFILL statement converts a value to a specified type, then fills memory with that type including any non-whole remainder.

</blockquote>

#### SYNTAX

<blockquote>

`_MEMFILL memoryBlock , memoryBlock.OFFSET , fillBytes , value [AS variableType ]`

</blockquote>

#### PARAMETERS

<blockquote>


* The memoryBlock [_MEM](MEM.md) memory block is the block referenced to be filled.
* memoryBlock.OFFSET is the starting offset of the above referenced memory block.
* The fillBytes is the number of bytes to fill the memory block.
* The value is the value to place in the memory block at the designated OFFSET position.
* A literal or variable value can be optionally set [AS](AS.md) a variable type appropriate for the memory block.
</blockquote>

#### DESCRIPTION

<blockquote>


* To clear previous data from a [_MEMNEW](MEMNEW.md) memory block, use [_MEMFILL](MEMFILL.md) with a value of 0.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Filling array values quickly using FOR loops or a simple memory fill.
```vb
DIM a(100, 100) AS LONG
DIM b(100, 100) AS LONG

'filling array a with value 13
FOR i1 = 0 TO 100
FOR i2 = 0 TO 100
a(i1, i2) = 13
NEXT
NEXT

'filling array b with value 13
DIM mema AS _MEM
mema = _MEM(b())
_MEMFILL mema, mema.OFFSET, mema.SIZE, 13 AS LONG
_MEMFREE mema
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEM](MEM.md) , [_MEM](MEM.md) (function)
* [_MEMIMAGE](MEMIMAGE.md) , [_MEMNEW](MEMNEW.md)
* [_MEMGET](MEMGET.md) , [_MEMPUT](MEMPUT.md)
</blockquote>
