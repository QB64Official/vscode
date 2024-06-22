The [$NOPREFIX]($NOPREFIX) metacommand allows all QB64PE functions and statements to be used without the leading underscore (_).

## Syntax

> [$NOPREFIX]($NOPREFIX)

## Description

* QB64PE-specific keywords are by default prefixed with an underscore, in order to differentiate them from legacy keywords inherited from QBasic/QuickBASIC 4.5.
* The convention exists in order to allow older code to be loaded and compiled in QB64PE without naming conflicts with existing variables or constants.
* If you are writing new code with QB64, and not importing code from QBasic/QuickBASIC 4.5, [$NOPREFIX]($NOPREFIX) allows you to reduce typing by not having to use underscores in modern keywords.
* **SUB _GL** still must be prefixed.
* When [$NOPREFIX]($NOPREFIX) is used, QB64PE keywords can be used both with or without the leading underscore, so that both [_DISPLAY](_DISPLAY) and [_DISPLAY](_DISPLAY) are valid in the same program, for example.
* [$NOPREFIX]($NOPREFIX) can be placed anywhere in a program.

## Availability

* Version 1.4 and up.

## See Also

* [Keyword Reference - Alphabetical](Keyword-Reference-(Alphabetical)
* [Metacommand](Metacommand)
