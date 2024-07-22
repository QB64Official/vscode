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

*  The memoryBlock [_MEM](MEM.md)  memory block is the block referenced to be filled.
*  memoryBlock.OFFSET is the starting offset of the above referenced memory block.
*  The fillBytes is the number of bytes to fill the memory block.
*  The value is the value to place in the memory block at the designated OFFSET position.
*  A literal or variable value can be optionally set [AS](AS.md)  a variable type appropriate for the memory block.

</blockquote>

#### DESCRIPTION

<blockquote>

*  To clear previous data from a [_MEMNEW](MEMNEW.md)  memory block, use [_MEMFILL](MEMFILL.md)  with a value of 0.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md)  , [_MEM](MEM.md)  (function)
*  [_MEMIMAGE](MEMIMAGE.md)  , [_MEMNEW](MEMNEW.md) 
*  [_MEMGET](MEMGET.md)  , [_MEMPUT](MEMPUT.md) 

</blockquote>
