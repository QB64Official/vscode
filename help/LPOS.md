# LPOS

The LPOS function returns the current LPT printer head position.

  

## Syntax

*result%* = LPOS(*index%*)
  

## Description

* *index%* is the index of the printer, which can have the following values:
	+ 0 - LPT1:
	+ 1 - LPT1:
	+ 2 - LPT2:
	+ 3 - LPT3:
* The LPOS function does not necessarily give the physical position of the print head because it does not expand tab characters. In addition, some printers may buffer characters.

  

## Examples

Prompts the user for team names and the names of players on each team. It then prints the players and their teams on the printer.

``` [CLS](CLS.md) [LPRINT](LPRINT.md) "Team Members"; [TAB](TAB.md)(76); "TEAM" : [LPRINT](LPRINT.md) [INPUT](INPUT.md) "How many teams"; TEAMS [INPUT](INPUT.md) "How many players per team";PPT [PRINT](PRINT.md) [FOR](FOR.md) T = 1 TO TEAMS     [INPUT](INPUT.md) "Team name: ", TEAM$     [FOR](FOR.md) P = 1 TO PPT         [INPUT](INPUT.md) "   Enter player name: ", PLAYER$         [LPRINT](LPRINT.md) PLAYER$;         [IF](IF.md) P < PPT [THEN](THEN.md)             [IF](IF.md) LPOS(0) > 55 [THEN](THEN.md) ' Print a new line if print head past column 55.                 [LPRINT](LPRINT.md) : [LPRINT](LPRINT.md) [SPACE$](SPACE$.md)(5);             [ELSE](ELSE.md)                 [LPRINT](LPRINT.md) ", ";         'Otherwise, print a comma.             [END](END.md) IF         [END](END.md) IF     [NEXT](NEXT.md) P [LPRINT](LPRINT.md) [STRING$](STRING$.md)(80 - LPOS(0) - [LEN](LEN.md)(TEAM$),"."); TEAM$ [NEXT](NEXT.md) T  
```

  

## See also

* [LPRINT](LPRINT.md)

  
