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


## [_INTEGER64](INTEGER64.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_INTEGER64)
---
<blockquote>

### _INTEGER64 is an 8 byte number type definition that can hold whole numerical values.

</blockquote>

#### SYNTAX

<blockquote>

`DIM variable AS _INTEGER64`

</blockquote>

#### DESCRIPTION

<blockquote>


* Can be used in 32 bit and 64 bit systems.
* Signed numerical values can range from -9223372036854775808 to 9223372036854775807.
* [_UNSIGNED](UNSIGNED.md) [_INTEGER64](INTEGER64.md) values range from 0 to 18446744073709551615.
* Variable type suffix is && or ~&& for [_UNSIGNED](UNSIGNED.md) . Suffix can also be placed after a literal or hexadecimal numerical value.
* Values can be converted to 8 byte ASCII character strings using [_MK&dollar;](MK&dollar;.md) and back using [_CV](CV.md) .
* When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](SINGLE.md) .

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [INTEGER](INTEGER.md) , [LONG](LONG.md)
* [_DEFINE](DEFINE.md) , [DIM](DIM.md)
* [_UNSIGNED](UNSIGNED.md)
* [_CV](CV.md) , [_MK&dollar;](MK&dollar;.md)
* CURRENCY
* Variable Types
</blockquote>
