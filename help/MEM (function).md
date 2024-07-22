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

## [_MEM_(function)](MEM_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEM (function))
---
<blockquote>

### The _MEM function returns a _MEM block referring to the largest possible continuous memory region beginning at a variable's offset.

</blockquote>

#### SYNTAX

<blockquote>

`memoryBlock = _MEM ( referenceVariable )`

</blockquote>

#### PARAMETERS

<blockquote>

*  The memoryBlock created will hold the referenceVariable or array value(s), type and byte size in a separate memory area.
*  The secure syntax referenceVariable is an existing variable's referenced memory block.
*  The unsecure syntax's designated offset and byteSize cannot be guaranteed. Avoid if possible.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The memoryBlock [_MEM](MEM.md)  [TYPE](TYPE.md)  variable holds the following read-only elements: OFFSET, SIZE, [TYPE](TYPE.md)  and ELEMENTSIZE.
*  All values created by memory functions MUST be freed using [_MEMFREE](MEMFREE.md)  with a valid [_MEM](MEM.md)  variable type.
*  [_MEM](MEM.md)  function cannot reference variable length [STRING](STRING.md)  variable values. [STRING](STRING.md)  values must be designated as a fixed- length [STRING](STRING.md) .


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md) 
*  [_MEMNEW](MEMNEW.md)  , [_MEMCOPY](MEMCOPY.md)  , [_MEMFREE](MEMFREE.md) 
*  [_MEMGET](MEMGET.md)  , [_MEMPUT](MEMPUT.md)  , [_MEMFILL](MEMFILL.md) 
*  [_MEMIMAGE](MEMIMAGE.md)  , [_MEMSOUND](MEMSOUND.md) 

</blockquote>
