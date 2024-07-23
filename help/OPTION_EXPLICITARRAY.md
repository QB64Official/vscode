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


## [OPTION _EXPLICITARRAY](OPTION__EXPLICITARRAY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPTION%20_EXPLICITARRAY)
---
<blockquote>

### OPTION _EXPLICITARRAY instructs the compiler to require arrays to be properly dimensioned with DIM or REDIM before first use. However, it doesn't require regular variables to be declared.

</blockquote>

#### SYNTAX

<blockquote>

`OPTION _EXPLICITARRAY`

</blockquote>

#### DESCRIPTION

<blockquote>


* Normally statements like x(2) = 3 will implicitly create an array x(). [OPTION](OPTION.md) [_EXPLICITARRAY](EXPLICITARRAY.md) requires proper dimensioning for the array, helping to catch mistyped array and function names.
* Unlike [OPTION](OPTION.md) [_EXPLICIT](EXPLICIT.md) , simple variables can still be used without a declaration. Example: i = 1

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Avoiding simple typos with OPTION _EXPLICITARRAY results shown in the QB64 IDE Status area.
```vb
OPTION _EXPLICITARRAY
x = 1 'This is fine, it's not an array so not affected

DIM z(5)
z(2) = 3 'All good here, we've explicitly DIMmed our array

y(2) = 3 'This now generates an error
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [OPTION](OPTION.md) [_EXPLICIT](EXPLICIT.md)
* [DIM](DIM.md) , [REDIM](REDIM.md)
* [SHARED](SHARED.md)
* [STATIC](STATIC.md)
</blockquote>
