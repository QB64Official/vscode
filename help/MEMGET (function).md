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

## [_MEMGET_(function)](MEMGET_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMGET (function))
---
<blockquote>

### The _MEMGET function returns a value from a specific memory block name at the specified OFFSET using a certain variable type.

</blockquote>

#### SYNTAX

<blockquote>

`returnValue = _MEMGET ( memoryBlock , bytePosition , variableType )`

</blockquote>

#### PARAMETERS

<blockquote>

*  Returns a value of the variableType designated. The holding variable must match that [TYPE](TYPE.md)  .
*  memoryBlock is a [_MEM](MEM.md)  variable type memory block name created by [_MEMNEW](MEMNEW.md)  or the [_MEM](MEM.md)  function.
*  bytePosition is the memoryBlock . OFFSET memory start position plus any bytes to move into the block.
*  variableType is a variable [TYPE](TYPE.md)  like [_BYTE](BYTE.md)  , [INTEGER](INTEGER.md)  , [SINGLE](SINGLE.md)  , [DOUBLE](DOUBLE.md)  , etc.

</blockquote>

#### DESCRIPTION

<blockquote>

*  memoryBlock . OFFSET returns the starting byte position of the block. Add bytes to move into the block.
*  The variable type held in the memory block can determine the next bytePosition to read.
*  [LEN](LEN.md)  can be used to determine the byte size of numerical or user defined Variable Types regardless of the value held.
*  [STRING](STRING.md)  values should be of a defined length. Variable length strings can actually move around in memory and not be found.
*  [_MEMGET](MEMGET.md)  variable values that are assigned a variable type other than a memory type do not need to be freed.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md)  , MEM (function)
*  [_MEMGET](MEMGET.md)  , [_MEMPUT](MEMPUT.md) 
*  [_MEMNEW](MEMNEW.md)  , [_MEMFILL](MEMFILL.md) 
*  [_MEMCOPY](MEMCOPY.md) 

</blockquote>
