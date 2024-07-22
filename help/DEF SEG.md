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

## [DEF_SEG](DEF_SEG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DEF SEG)
---
<blockquote>

### DEF SEG is used to define the area in memory to access QB64's emulated conventional memory.

</blockquote>

#### SYNTAX

<blockquote>

`DEF SEG [=][{segment|VARSEG(variable}]`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Used to set the pointer to a memory area of a variable/array or register.
*  [PEEK](PEEK.md)  and [POKE](POKE.md)  require a segment memory address (often just 0) without using [VARSEG](VARSEG.md) .
*  Important segments using [PEEK](PEEK.md)  and [POKE](POKE.md)  include &HB800 (text segment) and &HA000 (graphics segment).
*  [BSAVE](BSAVE.md)  and [BLOAD](BLOAD.md)  require a [VARSEG](VARSEG.md)  reference to the grahic array(0 index) used.
*  Always use [DEF](DEF.md) [SEG](SEG.md)  when the procedure is completed, in order to reset the segment to QBasic's default value.
*  [DEF](DEF.md) [SEG](SEG.md)  , [VARSEG](VARSEG.md)  , [VARPTR](VARPTR.md)  , [PEEK](PEEK.md)  and [POKE](POKE.md)  access QB64's emulated 16 bit conventional memory block. It is highly recommended to use QB64's [_MEM](MEM.md)  memory system to avoid running out of memory.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [DEF](DEF.md) [SEG](SEG.md)  = 0
*  [VARPTR](VARPTR.md)  , [VARSEG](VARSEG.md) 
*  [PEEK](PEEK.md)  , [POKE](POKE.md) 
*  [BSAVE](BSAVE.md)  , [BLOAD](BLOAD.md) 

</blockquote>
