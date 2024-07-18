## DEF SEG
---

### DEF SEG is used to define the area in memory to access QB64's emulated conventional memory.

#### SYNTAX

`DEF SEG [=][{segment|VARSEG(variable}]`

#### DESCRIPTION
* Used to set the pointer to a memory area of a variable/array or register.
* [PEEK](./PEEK.md) and [POKE](./POKE.md) require a segment memory address (often just 0) without using [VARSEG](./VARSEG.md).
* Important segments using [PEEK](./PEEK.md) and [POKE](./POKE.md) include &HB800 (text segment) and &HA000 (graphics segment).
* [BSAVE](./BSAVE.md) and [BLOAD](./BLOAD.md) require a [VARSEG](./VARSEG.md) reference to the grahic array(0 index) used.
* Always use [DEF](./DEF.md) [SEG](./SEG.md) when the procedure is completed, in order to reset the segment to QBasic's default value.
* [DEF](./DEF.md) [SEG](./SEG.md) , [VARSEG](./VARSEG.md) , [VARPTR](./VARPTR.md) , [PEEK](./PEEK.md) and [POKE](./POKE.md) access QB64's emulated 16 bit conventional memory block. It is highly recommended to use QB64's [_MEM](./_MEM.md) memory system to avoid running out of memory.


#### SEE ALSO
* [DEF](./DEF.md) [SEG](./SEG.md) = 0
* [VARPTR](./VARPTR.md) , [VARSEG](./VARSEG.md)
* [PEEK](./PEEK.md) , [POKE](./POKE.md)
* [BSAVE](./BSAVE.md) , [BLOAD](./BLOAD.md)
