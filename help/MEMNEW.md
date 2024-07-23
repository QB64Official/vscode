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


## [_MEMNEW](MEMNEW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMNEW)
---
<blockquote>

### The _MEMNEW function allocates new memory and returns a _MEM memory block referring to it.

</blockquote>

#### SYNTAX

<blockquote>

`memoryBlock = _MEMNEW ( byteSize )`

</blockquote>

#### PARAMETERS

<blockquote>


* The byteSize parameter is the desired byte size of the memory block based on the variable type it will hold.
</blockquote>

#### DESCRIPTION

<blockquote>


* The memoryBlock value created holds the elements .OFFSET, .SIZE, .TYPE and .ELEMENTSIZE.
* [_MEMNEW](MEMNEW.md) does not clear the data previously in the memory block it allocates, for speed purposes.
* To clear previous data from a new memory block, use [_MEMFILL](MEMFILL.md) with a byte value of 0.
* When a new memory block is created the memory .TYPE value will be 0.
* If the read only memory block .SIZE is 0, the memory block was not created.
* All values created by memory functions must be freed using [_MEMFREE](MEMFREE.md) with a valid [_MEM](MEM.md) variable.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Shows how SINGLE numerical values can be passed, but non-fixed STRING lengths cannot get the value.
```vb
DIM m AS _MEM
DIM f AS STRING * 5
m = _MEMNEW(5) 'create new memory block of 5 bytes
a = 12345.6
_MEMPUT m, m.OFFSET, a 'put single value
_MEMGET m, m.OFFSET, b 'get single value
PRINT "b = "; b
c$ = "Doggy"
_MEMPUT m, m.OFFSET, c$ 'put 5 byte string value
_MEMGET m, m.OFFSET, d$ 'get unfixed length string value
_MEMGET m, m.OFFSET, f  'get 5 byte string value
e$ = _MEMGET(m, m.OFFSET, STRING * 5) 'get 5 byte string value
PRINT "d$ = "; d$; LEN(d$) 'prints empty string
PRINT "e$ = "; e$; LEN(e$)
PRINT "f = "; f; LEN(f)
```
  
<br>

```vb
b =  12345.6
d$ =  0
e$ = Doggy 5
f = Doggy 5
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEM](MEM.md) , [_MEMPUT](MEMPUT.md)
* [_MEMGET](MEMGET.md) , [_MEMGET](MEMGET.md) (function)
* [_MEMFILL](MEMFILL.md) , [_MEMFREE](MEMFREE.md)
</blockquote>
