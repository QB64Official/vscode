# SHARED

The **SHARED** statement allows variables to be passed automatically to any [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedure.

  

## Syntax

DIM SHARED Qt AS STRING * 1
  

* [DIMensioned](DIMensioned.md) variables are shared with all procedures in the program module.
* When used with [DIM](DIM.md) in the main module, it eliminates the need to pass a parameter variable to a [SUB](SUB.md) or [FUNCTION](FUNCTION.md).
* Use [COMMON SHARED](COMMON SHARED.md) to share a list of variable values with sub-procedures or other modules. See also: [COMMON](COMMON.md)
* SHARED (**without [DIM](DIM.md)**) can share a list of variables inside of [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures with the main module only.

**Note: SHARED variables in sub-procedures will not be passed to other sub-procedures, only the main module.**
  

*Example 1:* Defining variable types with [AS](AS.md) or type suffixes.

``` [DIM](DIM.md) SHARED Qt AS [STRING](STRING.md) * 1, price AS [DOUBLE](DOUBLE.md), ID AS [INTEGER](INTEGER.md) [DIM](DIM.md) SHARED Q$, prices#, IDs%  
```

  

*Example 2:* The DIR$ function returns a filename or a list when more than one exist. The file spec can use a path and/or wildcards.

``` [FOR](FOR.md) i = 1 [TO](TO.md) 2   [LINE INPUT](LINE INPUT.md) "Enter a file spec: ", spec$   file$ = DIR$(spec$)        'use a file spec ONCE to find the last file name listed   [PRINT](PRINT.md) DIRCount%, file$,    'function can return the file count using SHARED variable   [DO](DO.md)     K$ = [INPUT$](INPUT$.md)(1)     file$ = DIR$("")         'use an empty string parameter to return a list of files!     [PRINT](PRINT.md) file$,   [LOOP](LOOP.md) [UNTIL](UNTIL.md) [LEN](LEN.md)(file$) = 0  'file list ends with an empty string [NEXT](NEXT.md) [END](END.md)  [FUNCTION](FUNCTION.md) DIR$ (spec$) [CONST](CONST.md) TmpFile$ = "DIR$INF0.INF", ListMAX% = 500  'change maximum to suit your needs SHARED DIRCount%                                 'returns file count if desired [STATIC](STATIC.md) Ready%, Index%, DirList$() [IF](IF.md) [NOT](NOT.md) Ready% [THEN](THEN.md) [REDIM](REDIM.md) DirList$(ListMax%): Ready% = -1  'DIM array first use [IF](IF.md) spec$ > "" [THEN](THEN.md)                               'get file names when a spec is given   [SHELL](SHELL.md) [_HIDE](_HIDE.md) "DIR " + spec$ + " /b > " + TmpFile$   Index% = 0: DirList$(Index%) = "": ff% = [FREEFILE](FREEFILE.md)   [OPEN](OPEN.md) TmpFile$ [FOR](FOR.md) "FOR (file statement)") [APPEND](APPEND.md) [AS](AS.md) #ff%   size& = [LOF](LOF.md)(ff%)   [CLOSE](CLOSE.md) #ff%   [IF](IF.md) size& = 0 [THEN](THEN.md) [KILL](KILL.md) TmpFile$: [EXIT FUNCTION](EXIT FUNCTION.md)   [OPEN](OPEN.md) TmpFile$ [FOR](FOR.md) "FOR (file statement)") [INPUT](INPUT.md) "INPUT (file mode)") [AS](AS.md) #ff%   [DO](DO.md) [WHILE](WHILE.md) [NOT](NOT.md) [EOF](EOF.md)(ff%) [AND](AND.md) "AND (boolean)") Index% < ListMAX%     Index% = Index% + 1     [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") #ff%, DirList$(Index%)   [LOOP](LOOP.md)   DIRCount% = Index%                       'SHARED variable can return the file count   [CLOSE](CLOSE.md) #ff%   [KILL](KILL.md) TmpFile$ [ELSE](ELSE.md) [IF](IF.md) Index% > 0 [THEN](THEN.md) Index% = Index% - 1 'no spec sends next file name [END IF](END IF.md) DIR$ = DirList$(Index%) [END FUNCTION](END FUNCTION.md)  
```

*Explanation:* The SHARED variable value *DIRcount%* can tell the main program how many files were found using a wildcard spec.
  

## See also

* [DIM](DIM.md), [REDIM](REDIM.md)
* [COMMON](COMMON.md), [COMMON SHARED](COMMON SHARED.md)

  
