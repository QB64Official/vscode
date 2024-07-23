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


## [OPTION _EXPLICIT](OPTION__EXPLICIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPTION%20_EXPLICIT)
---
<blockquote>

### OPTION _EXPLICIT instructs the compiler to require variable declaration with DIM , REDIM or an equivalent statement.

</blockquote>

#### SYNTAX

<blockquote>

`OPTION _EXPLICIT`

</blockquote>

#### DESCRIPTION

<blockquote>


* With [OPTION](OPTION.md) [_EXPLICIT](EXPLICIT.md) you can avoid typos by having QB64 immediately warn in the Status area of new variables used without previous declaration.
* The use of [OPTION](OPTION.md) [_EXPLICIT](EXPLICIT.md) does also enforce the requirement to [DIM](DIM.md) or [REDIM](REDIM.md) any arrays before first use, no extra [OPTION](OPTION.md) [_EXPLICITARRAY](EXPLICITARRAY.md) is needed.
* Enable [OPTION](OPTION.md) [_EXPLICIT](EXPLICIT.md) temporarily even if a program source file doesn't contain the directive by specifying the -e switch when compiling via command line ( qb64 -c file.bas -e ).

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Avoiding simple typos with OPTION _EXPLICIT results shown in the QB64 IDE Status area.
```vb
OPTION _EXPLICIT

DIM myVariable AS INTEGER

myVariable = 5

PRINT myVariabe
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [OPTION](OPTION.md) [_EXPLICITARRAY](EXPLICITARRAY.md)
* [DIM](DIM.md) , [REDIM](REDIM.md)
* [SHARED](SHARED.md)
* [STATIC](STATIC.md)
</blockquote>
