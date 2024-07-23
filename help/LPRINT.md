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


## [LPRINT](LPRINT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LPRINT)
---
<blockquote>

### The LPRINT statement sends string text or numerical values to a parallel port (LPT1) printer in QBasic or a USB printer in QB64 .

</blockquote>

#### SYNTAX

<blockquote>

`LPRINT [ expression ] [{;|,}]`

</blockquote>

#### DESCRIPTION

<blockquote>


* expression is one or more text or numerical expressions separated by a semi-colon (;) or comma (,).
* Syntax is the same as [PRINT](PRINT.md) , but cannot use a port number.
* Program does not have to [OPEN](OPEN.md) the LPT1: parallel port.
* Assumes a 80 character wide page. [WIDTH](WIDTH.md) [LPRINT](LPRINT.md) is not supported in QB64.
* [LPRINT](LPRINT.md) [USING](USING.md) can print formatted text data to a page identically to how [PRINT](PRINT.md) [USING](USING.md) formats a program screen.
* COLORed text and images can be printed using [_PRINTIMAGE](PRINTIMAGE.md) which stretches them to fit the default printer's paper size.
* [LPRINT](LPRINT.md) will only print to the default USB or LPT printer set up in Windows. Keyword not supported in Linux or macOS versions .
* Note: Printer escape codes starting with [CHR&dollar;](CHR&dollar;.md) (27) will not work with [LPRINT](LPRINT.md) and may produce text printing errors.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [LPRINT](LPRINT.md) [USING](USING.md)
* [_PRINTIMAGE](PRINTIMAGE.md) (prints color images to page size)
* [PRINT](PRINT.md) , [PRINT](PRINT.md) [USING](USING.md)
* Windows Printer Settings
</blockquote>
