## $INCLUDE
---

### $INCLUDE is a metacommand that is used to insert a source code file into your program which is then executed at the point of the insertion.

#### SYNTAX

`{ REM | ' } $INCLUDE : ' sourceFile '`

#### DESCRIPTION
* QBasic metacommands must be commented with [REM](./REM.md) or an apostrophe.
* The sourceFile name must be enclosed in apostrophes and can include a path.
* $INCLUDE is often used to add functions and subs from an external text QBasic code library.
* The $INCLUDE metacommand should be the only statement on a line.


#### EXAMPLES
```vb
'$INCLUDE: 'QB.BI'
```
  


#### MORE EXAMPLES
* SelectScreen
* FILELIST$
* SaveImage [SUB](./SUB.md)


#### SEE ALSO
* [INTERRUPT](./INTERRUPT.md) , [INTERRUPTX](./INTERRUPTX.md)
* [TYPE](./TYPE.md) , [DIM](./DIM.md)
* Metacommand
