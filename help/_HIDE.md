# _HIDE

The _HIDE action is used to hide the console window opened by a [SHELL](SHELL.md) statement.

  

## Syntax

[SHELL](SHELL.md) [**_HIDE**] *StringCommandLine$*
  

## Description

* Allows any command line window to be hidden from view without affecting the program.
* _HIDE must be used when sending ("piping") screen information to a file.
* **Note:** Some commands may not work without adding CMD /C to the start of the command line.

  

## Examples

*Example:* Subprogram that displays long and short filenames using the DIR /X option in SCREEN 12:

``` [SCREEN](SCREEN.md) 12 LFN [END](END.md)  [SUB](SUB.md) LFN     [IF](IF.md) [LEN](LEN.md)([ENVIRON$](ENVIRON$.md)("OS")) = 0 [THEN](THEN.md) [EXIT SUB](EXIT SUB.md) ' /X not available Win 9X and ME     [SHELL](SHELL.md) _HIDE "cmd /c dir /x > DOS-DATA.INF" ' load display data to a file     [OPEN](OPEN.md) "DOS-DATA.INF" [FOR](FOR.md) [INPUT](INPUT.md) [AS](AS.md) #1     [IF](IF.md) [LOF](LOF.md)(1) [THEN](THEN.md)         Header$ = [SPACE$](SPACE$.md)(10) + "Short" + [SPACE$](SPACE$.md)(16) + "Long" + [SPACE$](SPACE$.md)(20) + "Last Modified"         tmp$ = "\   \  \          \      &" ' print using template format         [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 2, 4: [PRINT](PRINT.md) Header$         [DO UNTIL](DO UNTIL.md) [EOF](EOF.md)(1)             [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") #1, line$             [IF](IF.md) [LEN](LEN.md)(line$) [AND](AND.md) "AND (boolean)") [MID$](MID$.md) "MID$ (function)")(line$, 1, 1) <> [SPACE$](SPACE$.md)(1) [THEN](THEN.md) ' ignore other file data                 cnt% = cnt% + 1                 last$ = [MID$](MID$.md) "MID$ (function)")(line$, 1, 17): DIR$ = [MID$](MID$.md) "MID$ (function)")(line$, 23, 3)                 [IF](IF.md) [MID$](MID$.md) "MID$ (function)")(line$, 37, 1) <> [SPACE$](SPACE$.md)(1) [THEN](THEN.md) ' found line with short and long name                     SHFN$ = [MID$](MID$.md) "MID$ (function)")(line$, 37, [INSTR](INSTR.md)(37, line$, [SPACE$](SPACE$.md)(1)) - 1)                     LGFN$ = [MID$](MID$.md) "MID$ (function)")(line$, 50)                 [ELSE](ELSE.md): SHFN$ = [MID$](MID$.md) "MID$ (function)")(line$, 50): LGFN$ = "" ' found short name only                 [END IF](END IF.md)                 [IF](IF.md) cnt% [MOD](MOD.md) 24 = 0 [THEN](THEN.md) ' pause every 24 files                     [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 28, 27: [PRINT](PRINT.md) "Press a key for more files!"                     [DO](DO.md): [_LIMIT](_LIMIT.md) 30: [LOOP UNTIL](LOOP UNTIL.md) [INKEY$](INKEY$.md) <> ""                     [CLS](CLS.md): [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 2, 4: [PRINT](PRINT.md) Header$                 [END IF](END IF.md)                 [COLOR](COLOR.md) 11: [LOCATE](LOCATE.md) (cnt% [MOD](MOD.md) 24) + 3, 4                 [PRINT USING](PRINT USING.md) tmp$; DIR$; SHFN$; LGFN$                 [LOCATE](LOCATE.md) (cnt% [MOD](MOD.md) 24) + 3, 58: [PRINT](PRINT.md) last$             [END IF](END IF.md)         [LOOP](LOOP.md)     [END IF](END IF.md)     [COLOR](COLOR.md) 10: [LOCATE](LOCATE.md) [CSRLIN](CSRLIN.md) + 1, 27: [PRINT](PRINT.md) "Total folders and files ="; cnt%     [CLOSE](CLOSE.md) #1 [END SUB](END SUB.md)  
```

*Explanation:* The above routine can also be used to place the file name info into string arrays by using the count variable cnt% to determine the index. Long file names are normally returned by **QB64**. To keep older QBasic programs compatible, you may want to only use the short names when displaying the files on the screen.

  

## See also

* [SHELL](SHELL.md), [_DONTWAIT](_DONTWAIT.md)
* [FILELIST$ (function)](FILELIST$ (function).md) "FILELIST$ (function)") ([FILES](FILES.md) function, member-contributed)

  
