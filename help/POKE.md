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

## [POKE](POKE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/POKE)
---
<blockquote>

### The POKE statement sets the value of a specified memory address offset. QB64 currently has limited access!

</blockquote>

#### SYNTAX

<blockquote>

`POKE segment_offset , offset_value`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Writes a value to the segment_offset address in memory.
*  [POKE](POKE.md)  can only be used to set a value from 0 to 255 (one byte).
*  A segment should be defined using [DEF](DEF.md) [SEG](SEG.md)  , if you don't define a segment QBasic's ordinary segment will be used.
*  [POKE](POKE.md)  sends byte values to memory areas. It does not directly access registers.
*  Important [SCREEN](SCREEN.md)  segments using [PEEK](PEEK.md)  and [POKE](POKE.md)  include &HB800 (text segment) and &HA000 (graphics segment).
*  [DEF](DEF.md) [SEG](SEG.md)  should always be used to reset the default segment when access to other memory is no longer necessary.
*  [POKE](POKE.md)  is safer to use than [OUT](OUT.md)  which could damage a PC register.
*  Warning: [DEF](DEF.md) [SEG](SEG.md) , [VARSEG](VARSEG.md)  , [VARPTR](VARPTR.md) , [PEEK](PEEK.md)  or [POKE](POKE.md)  access QB64's emulated 16 bit conventional memory block!


</blockquote>

#### SEE ALSO

<blockquote>

*  [DEF](DEF.md) [SEG](SEG.md)  , [DEF](DEF.md) [SEG](SEG.md)  = 0
*  [PEEK](PEEK.md)  , [OUT](OUT.md) 
*  [VARSEG](VARSEG.md)  , [VARPTR](VARPTR.md) 
*  [_MEMGET](MEMGET.md)  (function) , [_MEMPUT](MEMPUT.md) 
*  Scancodes , Screen Memory
*  [PEEK](PEEK.md)  and [POKE](POKE.md)  Library

</blockquote>
