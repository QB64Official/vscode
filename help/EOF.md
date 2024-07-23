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


## [EOF](EOF.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/EOF)
---
<blockquote>

### The EOF function indicates that the end of a file or HTTP response has been reached.

</blockquote>

#### SYNTAX

<blockquote>

`endReached%% = EOF ([#] fileNumber& )`

</blockquote>

#### DESCRIPTION

<blockquote>


* fileNumber& or httpHandle& is the number of the file or HTTP connected being read. # is not required.
* fileNumber& is a file opened using [OPEN](OPEN.md) .
* httpHandle& is a HTTP connection opened using [_OPENCLIENT](OPENCLIENT.md) .
* Returns 0 until the end of a file. This avoids a file read error.
* Returns -1 (true) at the end of the file.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'Write a simple test file with Ctrl-Z in the middle.
OPEN "test.txt" FOR OUTPUT AS #1
PRINT #1, "Hello"; CHR$(26); "World!"
CLOSE #1

'Now read it back, but uhh, this gives us the "Hello"
'only because of the Ctrl-Z.
OPEN "test.txt" FOR INPUT AS #1
WHILE NOT EOF(1)
PRINT INPUT$(1, 1);
WEND
CLOSE #1

PRINT: PRINT

'However, it works in the BINARY file mode.
OPEN "test.txt" FOR BINARY AS #1
WHILE NOT EOF(1)
PRINT INPUT$(1, 1);
WEND
CLOSE #1
```
  
<br>

```vb
Hello

Hello→World!
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [OPEN](OPEN.md)
* [LOF](LOF.md) , [LEN](LEN.md)
* [INPUT](INPUT.md) (file statement)
* [LINE](LINE.md) [INPUT](INPUT.md) (file statement)
* [GET](GET.md) , [PUT](PUT.md)
</blockquote>
