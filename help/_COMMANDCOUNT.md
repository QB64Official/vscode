# _COMMANDCOUNT

The _COMMANDCOUNT function returns the number or arguments passed from the command line to the [COMMAND$](COMMAND$.md) function.

  

## Syntax

*result&* = _COMMANDCOUNT
  

## Description

* The function returns the number of arguments passed from the command line to a program when it's executed.
* Arguments are spaced as separate numerical or text values. Spaced text inside of quotes is considered as one argument.
* In C, this function would generally be regarded as 'argc' when the main program is defined as the following: **int main(int argc, char *argv[])**

  

## Examples

*Example:* The code below gets the number of parameters passed to our program from the command line with _COMMANDCOUNT:

``` limit = _COMMANDCOUNT [FOR](FOR.md) i = 1 [TO](TO.md) limit     [PRINT](PRINT.md) [COMMAND$](COMMAND$.md)(i) [NEXT](NEXT.md)  
```

*Explanation:* If we start *ThisProgram.exe* from the command window with **ThisProgram -l "loadfile.txt" -s "savefile.txt"**, the _COMMANDCOUNT would be 4, "-l", "loadfile.txt", "-s", "savefile.txt" command arguments passed to the program, which we could then read separately with COMMAND$(n).
  

## See also

* [COMMAND$](COMMAND$.md)
* [SHELL](SHELL.md)

  
