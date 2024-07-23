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


## [_MEM](MEM.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEM)
---
<blockquote>

### The _MEM variable type can be used when working with memory blocks. It has no variable type suffix.

</blockquote>

#### SYNTAX

<blockquote>

`DIM m AS _MEM`

</blockquote>

#### DESCRIPTION

<blockquote>



</blockquote>

#### EXAMPLES

<blockquote>

```vb
TYPE memory_type
OFFSET AS _OFFSET       'start location of block(changes with byte position)
SIZE AS _OFFSET         'size of block remaining at offset(changes with position)
TYPE AS _OFFSET         'type description of variable used(never changes)
ELEMENTSIZE AS _OFFSET  'byte size of values inside the block(never changes)
IMAGE AS LONG           'the image handle used when _MEMIMAGE(handle) is used
SOUND AS LONG           'the sound handle used when _MEMSOUND(handle) is used
END TYPE

The above TYPE is for clarification purposes only. It doesn't need to be pasted ina program to use _MEM.

IMPORTANT NOTE: As of Build 20170802/57 onward (early v1.2 development), mem.TYPE hasbeen changed to be an _OFFSET, just as mem.SIZE and mem.ELEMENTSIZE.
```
  
<br>



##### Example 1: Demonstration of .IMAGE to determine an image's dimensions, .TYPE to verify the type and _MEMEXISTS to check image has not been freed
```vb
'The $UNSTABLE command may not be necessary if HTTP integration has been fully accepted into QB64PE.
'Feel free to remark it out if the IDE flags the following line with an ERROR message.
'And kindly report the issue on our forums or Discord so that we can update this page to keep it as 100% relevant, as possible.

$UNSTABLE:HTTP

SCREEN _NEWIMAGE(500, 500, 32)

Image$ = Download$("https://qb64phoenix.com/qb64wiki/resources/assets/peWikiLogo.png", statusCode&) 'Let's try and download the QB64PE Logo from the web
IF statusCode& = 200 THEN '                                      200 says a proper connection was made to the web page in question
i = _LOADIMAGE(Image$, 32, "memory") '                       and then we load it for use as a registered imange
ELSE
PRINT "HTTP ERROR"; statusCode '                             can't get a proper connection to our webpage, so we don't have an image to work with.
END '                                                        end and go report the issue on the forums, if you'd be so kind, dear user.
END IF

_PUTIMAGE (0, 0)-(500, 500), i '                                 put the image on the screen so we can view it
DIM m AS _MEM: m = _MEMIMAGE(i) '                                make a memblock and point it towards our image


'                                                           **** try uncommenting the following line and see what happens ****
'_MEMFREE m


IF m.TYPE AND 2048 THEN
PRINT "this is/was an image"
IF _MEMEXISTS(m) THEN '                                      check if memory m is still available
PRINT t AND 7; "bytes per pixel"
PRINT "image handle "; m.IMAGE
PRINT "image width"; _WIDTH(m.IMAGE)
PRINT "image height"; _HEIGHT(m.IMAGE)
ELSE '                                                       if we removed the remark from the _MEMFREE above, we'll see the following message
PRINT "Memory already freed!"
END IF
END IF


' Content of the HTTP response is returned.
' The statusCode is also assigned.
FUNCTION Download$ (url AS STRING, statusCode AS LONG)
DIM h AS LONG, content AS STRING, s AS STRING
h = _OPENCLIENT("HTTP:" + url)

statusCode = _STATUSCODE(h)

WHILE NOT EOF(h)
_LIMIT 60
GET #h, , s
content = content + s
WEND
CLOSE #h

Download$ = content
END FUNCTION
```
  
<br>



##### Example 2: Converts the current destination SCREEN 13 image memory altered by PSET to a STRING value. SCREEN 13 only.
```vb
SCREEN 13
PSET (0, 0), ASC("H") 'put the ASCII value of "H" into the top left corner of screen, which is the first byte of screen image memory
PSET (1, 0), ASC("E") 'put the ASCII value of "E" into the 2nd byte of screen image memory
PSET (2, 0), ASC("L") 'put the ASCII value of "L" into the 3nd byte of screen image memory
PSET (3, 0), ASC("L") 'put the ASCII value of "L" into the 4th byte of screen image memory
PSET (4, 0), ASC("O") 'put the ASCII value of "O" into the 5th byte of screen image memory                                                                                                                                                                                                            'put the ASCII value of "E" into the 2nd byte of screen image memory

DIM m AS _MEM '                         define m as a mem block
m = _MEMIMAGE(0) '                      point m to where our screen exists in memory

x1$ = _MEMGET(m, m.OFFSET, STRING * 5) 'm is the mem block that we're wanting to get information from
'                                       m.OFFSET is the mem block m starting position
'                                       STRING * 5 is the size and type of information that we want to get from that position in memory.

LOCATE 2, 1
PRINT LEN(x1$) '                        prints 5 bytes as we deliberately fetched STRING * 5 bytes with our _MEMGET above.
PRINT x1$ '                             prints the contents of that 5-byte string which we got above -- which is "HELLO" as CHR$() string character values
_MEMFREE m
```
  
<br>

```vb
5
HELLO
```
  
<br>



##### Example 3: Using _MEM to convert _OFFSET to _INTEGER64.
```vb
DIM x AS INTEGER
DIM m AS _MEM
m = _MEM(x)
PRINT m.OFFSET
PRINT ConvertOffset(m.OFFSET)


FUNCTION ConvertOffset&& (value AS _OFFSET)
$CHECKING:OFF
DIM m AS _MEM 'Define a memblock
m = _MEM(value) 'Point it to use value
$IF 64BIT THEN
DIM temp AS _INTEGER64 'On 64 bit OSes, an OFFSET is 8 bytes in size.
$ELSE
DIM temp AS LONG '      However, on 32 bit OSes, an OFFSET is only 4 bytes.
$END IF
_MEMGET m, m.OFFSET, temp 'Once we've sized our variable correctly, let's get it
ConvertOffset&& = temp '   And then assign that long value to ConvertOffset&&
_MEMFREE m '               Free the memblock
$CHECKING:ON
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEM](MEM.md) (function) , [_MEMELEMENT](MEMELEMENT.md)
* [_MEMNEW](MEMNEW.md) , [_MEMCOPY](MEMCOPY.md) , [_MEMFREE](MEMFREE.md)
* [_MEMGET](MEMGET.md) , [_MEMPUT](MEMPUT.md) , [_MEMFILL](MEMFILL.md)
* [_MEMIMAGE](MEMIMAGE.md) , [_MEMSOUND](MEMSOUND.md)
</blockquote>
