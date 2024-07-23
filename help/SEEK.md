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


## [SEEK](SEEK.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SEEK)
---
<blockquote>

### The SEEK statement sets the byte or record position in a file for the next read or write.

</blockquote>

#### SYNTAX

<blockquote>

`SEEK filenumber& , position`

</blockquote>

#### PARAMETERS

<blockquote>


* filenumber& must be the file number that is [OPEN](OPEN.md) and being read or written to.
* position is a byte in [BINARY](BINARY.md) or sequencial files created in [OUTPUT](OUTPUT.md) , [APPEND](APPEND.md) or [INPUT](INPUT.md) modes. The first byte = 1.
* position is the record in [RANDOM](RANDOM.md) files to read or write. Records can hold more than one variable defined in a [TYPE](TYPE.md) .
* Since the first [SEEK](SEEK.md) file position is 1 it may require adding one to an offset value when documentation uses that position as 0.
* After a [SEEK](SEEK.md) statement, the next file operation starts at that [SEEK](SEEK.md) byte position.
* The [SEEK](SEEK.md) statement can work with the [SEEK](SEEK.md) (function) to move around in a file.
</blockquote>

#### EXAMPLES

<blockquote>

```vb
SEEK 1, SEEK(1) + 1
```
  
<br>

```vb
OPEN "readme.md" FOR BINARY AS #1

PRINT LOC(1) 'LOC returns 0, as we didn't read something yet
PRINT SEEK(1) 'SEEK otherwise returns 1, as it's the first byte to read

GET #1, , a& 'now let's read a LONG (4 bytes)

PRINT LOC(1) 'now LOC returns 4, the last read byte
PRINT SEEK(1) 'and SEEK returns 5 now, the next byte to read

CLOSE #1
END
```
  
<br>

```vb
0
1
4
5
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SEEK](SEEK.md) (function) , [LOC](LOC.md)
* [GET](GET.md) , [PUT](PUT.md)
</blockquote>
