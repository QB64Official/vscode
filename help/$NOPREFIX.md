# $NOPREFIX

The $NOPREFIX metacommand allows all QB64 functions and statements to be used without the leading underscore (_).

  

## Syntax

$NOPREFIX
  

## Description

* QB64-specific keywords are by default prefixed with an underscore, in order to differentiate them from legacy keywords inherited from QBasic/QuickBASIC 4.5.
* The convention exists in order to allow older code to be loaded and compiled in QB64 without naming conflicts with existing variables or constants.
* If you are writing new code with QB64, and **not importing code** from QBasic/QuickBASIC 4.5 nor any 3rd party .bi/.bm style libraries, then $NOPREFIX allows you to reduce typing by not having to use underscores in modern keywords.

!!! WARNING !!!

* Do not use **$NOPREFIX** when working with old QBasic/QuickBASIC 4.5 code or when your program depends on 3rd party library code, otherwise you risk a lot of "Name already in use" syntax errors, as the old code or libraries may use variable, SUB or FUNCTION names which conflict with new QB64 keywords if they are not prefixed with an underscore.
* Once again, use **$NOPREFIX** only with new written QB64 code which is fully under your control without any 3rd party dependencies!

* **SUB _GL** is an internal routine and must **always** be prefixed.
* When $NOPREFIX is used, QB64 keywords can be used both with or without the leading underscore, so that both [_DISPLAY](_DISPLAY.md) and [DISPLAY](DISPLAY.md) are valid in the same program, for example.
* $NOPREFIX must be the first non-comment and non-whitespace line in a program.
	+ Since QB64 v2.0 (incl. all QB64-PE versions) $NOPREFIX can be placed anywhere in a program.

  

## Availability

* [![v1.4](![v1.4.md)](File:Qb64.png "v1.4")

**v1.4**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## See also

* [Keyword Reference - Alphabetical](Keyword Reference - Alphabetical.md)
* [Metacommand](Metacommand.md)

  
