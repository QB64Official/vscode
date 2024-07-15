# INTERRUPTX

The INTERRUPTX statement is an assembly routine for accessing computer information registers.

  

## Syntax

[CALL](CALL.md) INTERRUPTX(*intNum*, *inRegs*, *outRegs*)
### Legacy support

* Registers are emulated in **QB64** to allow older programs to be compiled. To enable mouse input in your programs, the recommended practice is to use [_MOUSEINPUT](_MOUSEINPUT.md) and related functions.

  

## Parameters

* Registers are emulated in QB64 and there is no support for *intNum* 33h mouse functions above 3 or *intNum* requests other than 33.
* *inRegs* are the values placed into the call and *outRegs* are the register return values.

### QBasic/QuickBASIC

* Available in QuickBASIC versions 4 and up and required an external library to be loaded. **QB64** emulates the statement without an external library.
* *intNum* is the interrupt reference vector table address. For historic reference, see: [Ralf Brown's Interrupt List](Ralf Brown's Interrupt List.md)
* The [TYPE](TYPE.md) definition below will work for both [INTERRUPT](INTERRUPT.md) and INTERRUPTX statement calls
* INTERRUPT can use all of the below TYPE elements when they are required.

``` [TYPE](TYPE.md) RegTypeX    ax AS INTEGER    bx AS INTEGER    cx AS INTEGER    dx AS INTEGER    bp AS INTEGER    si AS INTEGER    di AS INTEGER    flags AS INTEGER    ds AS INTEGER    es AS INTEGER [END TYPE](END TYPE.md)  
```

``` [DIM](DIM.md) [SHARED](SHARED.md) inregs [AS](AS.md) RegTypeX, outregs [AS](AS.md) RegTypeX  
```

QBasic's *RegType.BI* $INCLUDE file can be used by INTERRUPT or INTERRUPTX
  

## See also

* [$INCLUDE:]($INCLUDE:.md)
* [QB.BI](QB.BI.md), [CALL ABSOLUTE](CALL ABSOLUTE.md)
* [INTERRUPT](INTERRUPT.md)
* Ethan Winer's free QBasic Book and Programs: [WINER.ZIP](WINER.ZIP.md)

  
