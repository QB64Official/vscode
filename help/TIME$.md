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

## [TIME\$](TIME\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/TIME$)
---
<blockquote>

### The TIME$ Function returns a STRING representation of the current computer time in a 24 hour format.

</blockquote>

#### SYNTAX

<blockquote>

`PRINT "Present time = "; TIME$`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns the present computer time in hh:mm:ss 24 hour format: "19:20:33"
*  Uses 2 colon (:) separators between hours, minutes and seconds
*  Hour values range from "00" to "23" starting from midnite.
*  Minutes and seconds range from "00" to "59"
*  Continuous TIME$ calls may lag if a QBasic program is minimized to the taskbar!


</blockquote>

#### SEE ALSO

<blockquote>

*  [TIMER](TIMER.md)  (function)
*  DATE$ , [IF](IF.md) ... [THEN](THEN.md) 
*  [VAL](VAL.md)  , STR$ , MID$ (function)
*  LEFT$ , [RIGHT\$](RIGHT\$.md) 

</blockquote>
