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

## [LPOS](LPOS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LPOS)
---
<blockquote>

### The LPOS function returns the current LPT printer head position.

</blockquote>

#### SYNTAX

<blockquote>

`result% = LPOS ( index% )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  index% is the index of the printer, which can have the following values:
	* 0 - LPT1:
	* 1 - LPT1:
	* 2 - LPT2:
	* 3 - LPT3:
*  The [LPOS](LPOS.md)  function does not necessarily give the physical position of the print head because it does not expand tab characters. In addition, some printers may buffer characters.


</blockquote>

#### SEE ALSO

<blockquote>

*  [LPRINT](LPRINT.md) 

</blockquote>
