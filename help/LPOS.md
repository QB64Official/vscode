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


* index% is the index of the printer, which can have the following values:
* 0 - LPT1:
* 1 - LPT1:
* 2 - LPT2:
* 3 - LPT3:
* The [LPOS](LPOS.md) function does not necessarily give the physical position of the print head because it does not expand tab characters. In addition, some printers may buffer characters.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
CLS
LPRINT "Team Members"; TAB(76); "TEAM" : LPRINT
INPUT "How many teams"; TEAMS
INPUT "How many players per team";PPT
PRINT
FOR T = 1 TO TEAMS
INPUT "Team name: ", TEAM$
FOR P = 1 TO PPT
INPUT "   Enter player name: ", PLAYER$
LPRINT PLAYER$;
IF P < PPT THEN
IF LPOS(0) > 55 THEN ' Print a new line if print head past column 55.
LPRINT : LPRINT SPACE$(5);
ELSE
LPRINT ", ";         'Otherwise, print a comma.
END IF
END IF
NEXT P
LPRINT STRING$(80 - LPOS(0) - LEN(TEAM$),"."); TEAM$
NEXT T
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [LPRINT](LPRINT.md)
</blockquote>
