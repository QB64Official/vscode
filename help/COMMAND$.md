# COMMAND$

The **COMMAND$** function returns the command line argument(s) passed when a program is run.

  

## Syntax

*commandLine$* = COMMAND$[(count%)]
  

## Description

* The [STRING](STRING.md) return value is anything typed after a program's executable file name in command line (or using the [RUN](RUN.md) statement).
* Unlike QuickBASIC, **QB64** does not return all [uppercase](uppercase.md) values so keep that in mind when checking parameters.
* In **QB64**, COMMAND$ works as an array to return specific elements passed to the command line. COMMAND$(2) would return the second parameter passed at the command line. Arguments can contain spaces if they are passed inside quotation marks. This can be used to properly retrieve file names and arguments which contain spaces.
* Use the [_COMMANDCOUNT](_COMMANDCOUNT.md) function to find the number of parameters passed to a program via the command line. See *Example 2* below.

  

## Examples

*Example 1:* Compile both programs. ProgramA [RUNs](RUNs.md) ProgramB with a parameter passed following the filename:

``` [LOCATE](LOCATE.md) 12, 36: [PRINT](PRINT.md) "ProgramA"  [LOCATE](LOCATE.md) 23, 25: [PRINT](PRINT.md) "Press any key to run ProgramB" K$ = [INPUT$](INPUT$.md)(1) [RUN](RUN.md) "ProgramB FS"  'pass FS parameter to ProgramB in QB64 or QB4.5  [SYSTEM](SYSTEM.md)  
```

*ProgramB* checks for fullscreen parameter pass in QB64 and goes full screen.

``` [LOCATE](LOCATE.md) 17, 36: [PRINT](PRINT.md) "ProgramB" parameter$ = [UCASE$](UCASE$.md)(COMMAND$) 'UCASE$ is needed in QB64 only, as QB4.5 will always return upper case [LOCATE](LOCATE.md) 20, 33: [PRINT](PRINT.md) "Parameter = " + parameter$ [IF](IF.md) [LEFT$](LEFT$.md)(parameter$, 2) = "FS" [THEN](THEN.md) [_FULLSCREEN](_FULLSCREEN.md) 'parameter changes to full screen  [END](END.md)  
```

```                                     ProgramB                                     Parameter = FS.EXE  
```

  

*Example 2:* Program gets the number of parameters passed to the program, and then prints those parameters to the screen one at a time.

``` count = [_COMMANDCOUNT](_COMMANDCOUNT.md) [FOR](FOR.md) c = 1 [TO](TO.md) count     [PRINT](PRINT.md) COMMAND$(c) 'or process commands sent [NEXT](NEXT.md)  
```

``` -1 a data file  
```

*Explanation: If we start* ThisProgram.exe *with the command line **ThisProgram -l "a data file"**, COMMAND$ will return a single string of "-1 a data file" which might be hard to process and interpret properly, but COMMAND$(1) would return "-l" and COMMAND$(2) would return the quoted "a data file" option as separate entries for easier parsing and processing.*
  

*Example 3:* As part of the command array syntax, you can also just read the array to see how many commands were sent (or simply check [_COMMANDCOUNT](_COMMANDCOUNT.md)):

``` DO     count = count + 1     cmd$ = COMMAND$(count)     [IF](IF.md) cmd$ = "" [THEN](THEN.md) [EXIT DO](EXIT DO.md) 'read until an empty return     [PRINT](PRINT.md) cmd$ 'or process commands sent [LOOP](LOOP.md) count = count - 1 'save the number of parameters sent to this program when run  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [SHELL](SHELL.md), [RUN](RUN.md)
* [UCASE$](UCASE$.md), [LCASE$](LCASE$.md)
* [_COMMANDCOUNT](_COMMANDCOUNT.md)

  
