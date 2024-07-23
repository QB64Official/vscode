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


## [_MEMGET](MEMGET.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMGET)
---
<blockquote>

### The _MEMGET statement reads a portion of a memory block at an OFFSET position into a variable, array or user defined type.

</blockquote>

#### SYNTAX

<blockquote>

`_MEMGET memoryBlock , bytePosition , destinationVariable`

</blockquote>

#### DESCRIPTION

<blockquote>


* The [_MEMGET](MEMGET.md) statement is similar to the [GET](GET.md) statement used in files, but the position is required.
* The memory block name. OFFSET returns the starting byte position of the block. Add bytes to move into the block.
* The variable type held in the memory block can determine the next bytePosition to read.
* [LEN](LEN.md) can be used to determine the byte size of numerical or user defined Variable Types regardless of the value held.
* [STRING](STRING.md) values should be of a defined length. Variable length strings can actually move around in memory and not be found.

</blockquote>

#### EXAMPLES

<blockquote>



##### {{PageExamples]] Example: Shows how to read the PSET color values from a program's SCREEN memory to an array.
```vb
SCREEN 13
PSET (0, 0), 123
PSET (1, 0), 222 'create screen image

'here is an array
DIM screen_array(319, 199) AS _UNSIGNED _BYTE 'use screen dimensions from 0

'here's how we can copy the screen to our array
DIM m AS _MEM
m = _MEMIMAGE  '0 or no handle necessary when accessing the current program screen
_MEMGET m, m.OFFSET, screen_array()

'here's the proof
PRINT screen_array(0, 0) 'print 123
PRINT screen_array(1, 0) 'print 222
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEMGET](MEMGET.md) (function)
* [_MEMPUT](MEMPUT.md)
* [_MEM](MEM.md)
* [_MEMIMAGE](MEMIMAGE.md)
* [_MEMFREE](MEMFREE.md)
</blockquote>
