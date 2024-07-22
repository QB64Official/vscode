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

*  [COMMON](COMMON.md)  must be called before any executable statements.
*  [SHARED](SHARED.md)  makes the variables [SHARED](SHARED.md)  within [SUB](SUB.md)  and [FUNCTION](FUNCTION.md)  procedures within that module.
*  variableList is the list of common variables made available separated by commas.
*  Remember to keep the variable type order the same in all modules, as the variables names don't matter.
*  [COMMON](COMMON.md) [SHARED](SHARED.md)  is most commonly used to share the variables with subs and functions of that module.
*  Note: Values assigned to shared variables used as procedure call parameters will not be passed to other procedures. The shared variable value must be assigned inside of the [SUB](SUB.md)  or [FUNCTION](FUNCTION.md)  procedure to be passed.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [COMMON](COMMON.md) [SHARED](SHARED.md)  , [CHAIN](CHAIN.md) 
*  [DIM](DIM.md)  , [REDIM](REDIM.md)  , [SHARED](SHARED.md) 
*  [DEFSTR](DEFSTR.md)  , [DEFLNG](DEFLNG.md)  , [DEFINT](DEFINT.md)  , [DEFSNG](DEFSNG.md)  , [DEFDBL](DEFDBL.md) 

</blockquote>
