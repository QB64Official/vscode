# $IF

**$IF** is precompiler [metacommand](metacommand.md), which determines which sections of code inside its blocks are included into the final code for compliing.

  

## Syntax

$IF variable = expression THEN
.
[$ELSEIF]($ELSEIF.md) variable = expression THEN
.
[$ELSE]($ELSE.md)
.
[$END IF]($END IF.md)
  

## Description

* $IF is the start of a precompiler code block which includes or excludes sections of code from being compiled.
* There is no single line $IF statement. $IF must be in a valid $IF THEN...$END IF block to work properly.
* Like all other metacommands, you can not use more than one metacommand per line. **Use of : to separate statements in a single line is not allowed.**
* Variable names can contain numbers, letters and periods, in any order.
* Expressions can contain one set of leading and/or trailing quotes; and any number of numbers, letters and periods, in any order.
* The precompiler comes with some preset values which can be used to help determine which code blocks to include/exclude. These are:
	+ **WIN** or **WINDOWS** if the user is running QB64 in a Windows environment.
	+ **LINUX** if the user is running QB64 in a Linux environment.
	+ **MAC** or **MACOSX** if the user is running QB64 in a macOS environment.
	+ **32BIT** if the user is running a 32-bit version of QB64.
	+ **64BIT** if the user is running a 64-bit version of QB64.
	+ **VERSION**, which is set to the version of the QB64 compiler. This is a number and can be ordered, see example below.
* Special values **DEFINED** and **UNDEFINED** can be used to check whether a precompiler variable has already been assigned a value. Useful for code in libraries which may be repeated.
* [$END IF]($END IF.md) denotes the end of a valid precompiler $IF block.
* [$ELSEIF]($ELSEIF.md) must follow a valid $IF or $ELSEIF statement.
* If [$ELSE]($ELSE.md) is used, it must be used as the last conditional check before $END IF. $ELSEIF cannot come after $ELSE.
	+ There can only be one $ELSE in an **$IF-$ELSEIF-$ELSE-$END IF** block, and it must be the last block selection before the $END IF. $ELSEIF cannot follow $ELSE.

  

## Examples

*Example 1:*

``` [$LET]($LET.md) SCREENMODE = 32 $IF SCREENMODE = 0 [THEN](THEN.md)     [CONST](CONST.md) Red = 4 [$ELSEIF]($ELSEIF.md) SCREENMODE = 32 [THEN](THEN.md)     [CONST](CONST.md) Red = [_RGB32](_RGB32.md)(255, 0, 0) [$END IF]($END IF.md)   [COLOR](COLOR.md) Red [PRINT](PRINT.md) "Hello World"  
```

*Explanation:* The same CONST is defined twice inside the program. Normally, defining a CONST more than once generates an error, but the $IF condition here is choosing which CONST will be inside the final program.

As long as Screenmode is 0, the program will exclude the code where CONST Red is defined as color 4. If Screenmode is 32, CONST Red will be defined as _RGB32(255, 0, 0).

The [$LET]($LET.md) and $IF statements let the programmer control the code that actually gets compiled, while excluding the other blocks completely.

  

---

*Example 2:*

``` $IF WIN [THEN](THEN.md)     [CONST](CONST.md) Slash = "\" [$ELSE]($ELSE.md)     [CONST](CONST.md) Slash = "/" [$END IF]($END IF.md)   [PRINT](PRINT.md) "The proper slash for your operating system is "; Slash  
```

*Explanation:* For the above, the CONST slash is defined by the automatic internal flags which returns what operating system is being used at compile time. On a Windows PC, the Slash will be the backslash; for any other OS it will be the forward slash.

  

---

*Example 3:*

``` $IF VERSION < 1.5 [THEN](THEN.md)     [$ERROR]($ERROR.md) Requires QB64 version 1.5 or greater [$END IF]($END IF.md)   
```

*Explanation:* VERSION is a predefined variable that holds the QB64 compiler version. If we know our program needs features only available above a certain version, we can check for that and give the user a helpful error message instead of a confusing error elsewhere in the program.

  

## See also

* [$LET]($LET.md)
* [$ERROR]($ERROR.md)
* [Metacommands](Metacommands.md)

  
