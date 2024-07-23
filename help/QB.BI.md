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


## [QB.BI](QB.BI.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/QB.BI)
---
<blockquote>

### The QB.BI file can be used for INTERRUPT or INTERRUPTX routines by $INCLUDEing the file in a program. It is useful for the TYPE and SUB declarations.

</blockquote>

#### SYNTAX

<blockquote>

`The QB.BI file contents:`

</blockquote>

#### DESCRIPTION

<blockquote>


* Create your own BI files to [&dollar;INCLUDE](&dollar;INCLUDE.md) to hold your own [TYPE](TYPE.md) definitions. Use notepad and save as All Files as filename.BI
* In QBasic the BI library or support file MUST be included in a program package or download!
* QB64 programs do not require any INCLUDED files once the BAS file is compiled!

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'**************************************************************************
' QB.BI - Assembly Support Include File
'
' Copyright (C) 1987 Microsoft Corporation
'
' Purpose:
'      This include file defines the types and gives the DECLARE
'       statements for the assembly language routines CALL ABSOLUTE,
'       INTERRUPT, INTERRUPTX, INT86OLD, and INT86XOLD.
'
'***************************************************************************
'
' Define the TYPE needed for INTERRUPT
'
TYPE RegType
ax    AS INTEGER
bx    AS INTEGER
cx    AS INTEGER
dx    AS INTEGER
bp    AS INTEGER
si    AS INTEGER
di    AS INTEGER
flags AS INTEGER
END TYPE
'
' Define the TYPE needed for INTERRUPTX
'
TYPE RegTypeX
ax    AS INTEGER
bx    AS INTEGER
cx    AS INTEGER
dx    AS INTEGER
bp    AS INTEGER
si    AS INTEGER
di    AS INTEGER
flags AS INTEGER
ds    AS INTEGER
es    AS INTEGER
END TYPE
'
' DECLARE statements for the 5 supported routines
' -----------------------------------------
'
' Generate a software interrupt, loading all but the segment registers
'
DECLARE SUB INTERRUPT (intnum AS INTEGER, inreg AS RegType, outreg AS RegType)
'
' Generate a software interrupt, loading all registers
'
DECLARE SUB INTERRUPTX (intnum AS INTEGER, inreg AS RegTypeX, outreg AS RegTypeX)
'
' Call a routine at an absolute address.
' NOTE: If the routine called takes parameters, then they will have to
'       be added to this declare statement before the parameter given.
'
DECLARE SUB ABSOLUTE (address AS INTEGER)
'
' Generate a software interrupt, loading all but the segment registers
'       (old version)
'
DECLARE SUB INT86OLD (intnum AS INTEGER, inarray(1) AS INTEGER, outarray(1) AS INTEGER)
'
' Gemerate a software interrupt, loading all the registers
'       (old version)
'
DECLARE SUB INT86XOLD (intnum AS INTEGER, inarray(1) AS INTEGER, outarray(1) AS INTEGER)
```
  
<br>

```vb
TYPE RegType
ax AS INTEGER
bx AS INTEGER
cx AS INTEGER
dx AS INTEGER
bp AS INTEGER
si AS INTEGER
di AS INTEGER
flags AS INTEGER
ds AS INTEGER
es AS INTEGER
END TYPE
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;INCLUDE](&dollar;INCLUDE.md) , [INTERRUPT](INTERRUPT.md) , [INTERRUPTX](INTERRUPTX.md)
</blockquote>
