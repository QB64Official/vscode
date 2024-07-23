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


## [_CLIPBOARD\$](CLIPBOARD\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLIPBOARD%24)
---
<blockquote>

### The _CLIPBOARD$ statement copies the STRING value into the system clipboard.

</blockquote>

#### SYNTAX

<blockquote>

`_CLIPBOARD$ = string_expression$`

</blockquote>

#### DESCRIPTION

<blockquote>


* string_expression$ is the string value to be sent to the clipboard.
* The string value will replace everything previously in the clipboard.
* Assemble long text into one string variable value before using this statement.
* Add CHR$(13) + CHR$(10) CRLF characters to move to a new clipboard line.
* When copying text files, end line CRLF characters 13 and 10 do not have to be added.
* Numerical values can be converted to strings using [STR&dollar;](STR&dollar;.md) , [_MK&dollar;](MK&dollar;.md) , [MKI&dollar;](MKI&dollar;.md) , [MKL&dollar;](MKL&dollar;.md) , [MKS&dollar;](MKS&dollar;.md) , [MKD&dollar;](MKD&dollar;.md) , [_BIN&dollar;](BIN&dollar;.md) , [HEX&dollar;](HEX&dollar;.md) or [OCT&dollar;](OCT&dollar;.md) .
* The clipboard can be used to copy, paste and communicate between running programs.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DIM CrLf AS STRING * 2 'define as 2 byte STRING
CrLf = CHR$(13) + CHR$(10) 'carriage return & line feed

_CLIPBOARD$ = "This is line 1" + CrLf + "This is line 2"
PRINT _CLIPBOARD$ 'display what is in the clipboard
```
  
<br>

```vb
This is line 1
This is line 2
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_CLIPBOARD&dollar;](CLIPBOARD&dollar;.md) (function)
* [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) (function) , [_CLIPBOARDIMAGE](CLIPBOARDIMAGE.md) (statement)
* [CHR&dollar;](CHR&dollar;.md) , ASCII (code table)
</blockquote>
