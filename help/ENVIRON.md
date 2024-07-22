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

## [ENVIRON](ENVIRON.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ENVIRON)
---
<blockquote>

### The ENVIRON statement is used to temporarily set or change an environmental string value.

</blockquote>

#### SYNTAX

<blockquote>

`ENVIRON stringExpression$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The stringExpression$ must include the environmental parameter ID and the setting:
	* Using an = sign: [ENVIRON](ENVIRON.md)  "parameterID=setting"
	* Using a space: [ENVIRON](ENVIRON.md)  "parameterID setting"
*  If the parameter ID did not previously exist in the environmental string table, it is appended to the end of the table.
*  If a parameter ID did exist, it is deleted and the new value is appended to end of the list.
*  Any changes made at runtime are discarded when your program ends.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [ENVIRON\$](ENVIRON\$.md) 
*  Windows Environment

</blockquote>
