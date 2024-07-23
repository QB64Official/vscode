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


## [COMMON](COMMON.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/COMMON)
---
<blockquote>

### COMMON shares common variable values with other linked or CHAINed modules.

</blockquote>

#### SYNTAX

<blockquote>

`COMMON [SHARED] variableList`

</blockquote>

#### DESCRIPTION

<blockquote>


* [COMMON](COMMON.md) must be called before any executable statements.
* [SHARED](SHARED.md) makes the variables shared within [SUB](SUB.md) and [FUNCTION](FUNCTION.md) procedures within that module.
* variableList is the list of common variables made available separated by commas.
* Remember to keep the variable type order the same in all modules, as the variables names don't matter.
* [COMMON](COMMON.md) [SHARED](SHARED.md) is most commonly used to share the variables with subs and functions of that module.
* Note: Values assigned to shared variables used as procedure call parameters will not be passed to other procedures. The shared variable value must be assigned inside of the [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedure to be passed.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [COMMON](COMMON.md) [SHARED](SHARED.md) , [CHAIN](CHAIN.md)
* [DIM](DIM.md) , [REDIM](REDIM.md) , [SHARED](SHARED.md)
* [DEFSTR](DEFSTR.md) , [DEFLNG](DEFLNG.md) , [DEFINT](DEFINT.md) , [DEFSNG](DEFSNG.md) , [DEFDBL](DEFDBL.md)
</blockquote>
