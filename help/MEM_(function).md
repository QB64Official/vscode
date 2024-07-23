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


## [_MEM (function)](MEM_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEM%20%28function%29)
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


* The memoryBlock created will hold the referenceVariable or array value(s), type and byte size in a separate memory area.
* The secure syntax referenceVariable is an existing variable's referenced memory block.
* The unsecure syntax's designated offset and byteSize cannot be guaranteed. Avoid if possible.
</blockquote>

#### DESCRIPTION

<blockquote>


* The memoryBlock [_MEM](MEM.md) type variable holds the following read-only elements: OFFSET, SIZE, [TYPE](TYPE.md) and ELEMENTSIZE.
* All values created by memory functions MUST be freed using [_MEMFREE](MEMFREE.md) with a valid [_MEM](MEM.md) variable type.
* [_MEM](MEM.md) function cannot reference variable length [STRING](STRING.md) variable values. String values must be designated as a fixed- length string.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Assigning values to reference variables in memory.
```vb
DIM SHARED m(3) AS _MEM
DIM SHARED Saved(3)

m(1) = _MEM(x)
m(2) = _MEM(y)
m(3) = _MEM(z)

x = 3: y = 5: z = 8
PRINT x, y, z
Save x, y, z
x = 30: y = 50: z = 80
PRINT x, y, z

RestoreIt
PRINT x, y, z

_MEMFREE m(1)
_MEMFREE m(2)
_MEMFREE m(3)
END

SUB Save (n1, n2, n3)
Saved(1) = n1
Saved(2) = n2
Saved(3) = n3
END SUB

SUB RestoreIt
_MEMPUT m(1), m(1).OFFSET, Saved(1)
_MEMPUT m(2), m(2).OFFSET, Saved(2)
_MEMPUT m(3), m(3).OFFSET, Saved(3)
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEM](MEM.md)
* [_MEMNEW](MEMNEW.md) , [_MEMCOPY](MEMCOPY.md) , [_MEMFREE](MEMFREE.md)
* [_MEMGET](MEMGET.md) , [_MEMPUT](MEMPUT.md) , [_MEMFILL](MEMFILL.md)
* [_MEMIMAGE](MEMIMAGE.md) , [_MEMSOUND](MEMSOUND.md)
</blockquote>
