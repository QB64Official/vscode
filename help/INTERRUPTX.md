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

## [INTERRUPTX](INTERRUPTX.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INTERRUPTX)
---
<blockquote>

### The INTERRUPTX statement is an assembly routine for accessing computer information registers.

</blockquote>

#### SYNTAX

<blockquote>

`CALL INTERRUPTX ( intNum , inRegs , outRegs )`

</blockquote>

#### PARAMETERS

<blockquote>

*  Registers are emulated in QB64 and there is no support for intNum 33h mouse functions above 3 or intNum requests other than 33.
*  inRegs are the values placed into the call and outRegs are the register return values.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
TYPE RegTypeX
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
  
<br>```vb
DIM SHARED inregs AS RegTypeX, outregs AS RegTypeX
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  $INCLUDE:
*  QB.BI , [CALL](CALL.md)  [ABSOLUTE](ABSOLUTE.md) 
*  [INTERRUPT](INTERRUPT.md) 
*  Ethan Winer's free QBasic Book and Programs: WINER.ZIP

</blockquote>
