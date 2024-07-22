## $IF
---
<blockquote>

### $IF is precompiler metacommand , which determines which sections of code inside its blocks are included into the final code for compliing.

</blockquote>

#### SYNTAX

<blockquote>

`$IF variable = expression THEN`

</blockquote>

#### DESCRIPTION

<blockquote>

* $[IF](./IF.md) is the start of a precompiler code block which includes or excludes sections of code from being compiled.
* There is no single line $[IF](./IF.md) statement.  $[IF](./IF.md) must be in a valid $[IF](./IF.md) [THEN](./THEN.md)...$[END](./END.md) [IF](./IF.md) block to work properly.
* Like all other metacommands, you can not use more than one metacommand per line. Use of : to separate statements in a single line is not allowed.
* Variable names can contain numbers, letters and periods, in any order.
* Expressions can contain one set of leading and/or trailing quotes; and any number of numbers, letters and periods, in any order.
* The precompiler comes with some preset values which can be used to help determine which code blocks to include/exclude.  These are:
	* WIN or WINDOWS if the user is running QB64 in a Windows environment.
	* LINUX if the user is running QB64 in a Linux environment.
	* MAC or MACOSX if the user is running QB64 in a macOS environment.
	* 32BIT if the user is running a 32-bit version of QB64.
	* 64BIT if the user is running a 64-bit version of QB64.
	* VERSION , which is set to the version of the QB64 compiler. This is a number and can be ordered, see example below.
* Special values DEFINED and UNDEFINED can be used to check whether a precompiler variable has already been assigned a value. Useful for code in libraries which may be repeated.
* $[END](./END.md) [IF](./IF.md) denotes the end of a valid precompiler $[IF](./IF.md) block.
* $[ELSEIF](./ELSEIF.md) must follow a valid $[IF](./IF.md) or $[ELSEIF](./ELSEIF.md) statement.
* If $[ELSE](./ELSE.md) is used, it must be used as the last conditional check before $[END](./END.md) [IF](./IF.md).  $[ELSEIF](./ELSEIF.md) cannot come after $[ELSE](./ELSE.md).
	* There can only be one $[ELSE](./ELSE.md) in an $[IF](./IF.md)-$[ELSEIF](./ELSEIF.md)-$[ELSE](./ELSE.md)-$[END](./END.md) [IF](./IF.md) block, and it must be the last block selection before the $[END](./END.md) [IF](./IF.md).  $[ELSEIF](./ELSEIF.md) cannot follow $[ELSE](./ELSE.md).


</blockquote>

#### SEE ALSO

<blockquote>

* $[LET](./LET.md)
* $[ERROR](./ERROR.md)
* Metacommands

</blockquote>
