# RUN

**RUN** is a control flow statement that clears and restarts the program currently in memory or executes another specified program.

The multi-modular technique goes back to when QBasic and QuickBASIC had module size constraints. In QB64 it has been implemented so that that older code can still be compiled, though **it is advisable to use single modules for a single project (not counting [$INCLUDE]($INCLUDE.md) libraries), for ease of sharing and also because the module size constraints no longer exist.**

  

## Syntax

**RUN** [{*line_number* | *filespec$*}] [*command_parameter(s)*]
  

## Parameters

* *line number* specifies a line number in the main module code.
* An optional *filespec* specifies a program to load into memory and run.

* BAS or EXE extensions are assumed to be the same as the calling module's extension, EXE or BAS (QBasic only).
* *file names specs* with other extensions must use the full filename. No extension requires a dot.
* In **QB64** *command line parameters* can follow the program file name and be read using the [COMMAND$](COMMAND$.md) function later.

  

*Usage:*

* The starting [line number](line number.md) MUST be one used in the main module code, even if RUN is called from within a SUB or FUNCTION.
* If no line number is given the currently loaded program runs from the first executable line.
* In **QB64** RUN can open any kind of executable program and provide case sensitive program specific parameters.
	+ Recommended practice to run external programs is to use [SHELL](SHELL.md).
* RUN closes all open files and closes the invoking program module before the called program starts.
* RUN resets the [RANDOMIZE](RANDOMIZE.md) sequence to the starting [RND](RND.md) function value.
* **Note: Calling RUN repeatedly may cause a stack leak in QB64 if it is called from within a [SUB](SUB.md) or [FUNCTION](FUNCTION.md). Avoid when possible.**

  

*Example 1:* Shows how RUN can reference multiple line numbers in the main module code. No line number executes first code line.

``` PRINT " A", " B", " C", " D" 10 A = 1 20 B = 2 30 C = 3 40 D = 4 50 [PRINT](PRINT.md) A, B, C, D 60 [IF](IF.md) A = 0 [THEN](THEN.md) 70 [ELSE](ELSE.md) RUN 20    'RUN clears all values 70 [IF](IF.md) B = 0 [THEN](THEN.md) 80 [ELSE](ELSE.md) RUN 30 80 [IF](IF.md) C = 0 [THEN](THEN.md) 90 [ELSE](ELSE.md) RUN 40 90 [IF](IF.md) D = 0 [THEN](THEN.md) 100 [ELSE](ELSE.md) RUN 50 100 [PRINT](PRINT.md) [INPUT](INPUT.md) "Do you want to quit?(Y/N)", quit$ [IF](IF.md) [UCASE$](UCASE$.md)(quit$) = "Y" [THEN](THEN.md) [END](END.md) [ELSE](ELSE.md) RUN  'RUN without line number executes at first code line   
```

``` A       B       C       D 1       2       3       4 0       2       3       4 0       0       3       4 0       0       0       4 0       0       0       0  Do you want to quit?(Y/N)_  
```

  

## See also

* [CHAIN](CHAIN.md), [SHELL](SHELL.md)
* [COMMAND$](COMMAND$.md)

  
