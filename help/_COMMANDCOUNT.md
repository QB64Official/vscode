## _COMMANDCOUNT
---

### The _COMMANDCOUNT function returns the number or arguments passed from the command line to the COMMAND$ function.

#### SYNTAX

`result& = _COMMANDCOUNT`

#### DESCRIPTION
* The function returns the number of arguments passed from the command line to a program when it's executed.
* Arguments are spaced as separate numerical or text values. Spaced text inside of quotes is considered as one argument.
* In C, this function would generally be regarded as 'argc' when the main program is defined as the following: int main(int argc, char *argv[])


#### EXAMPLES
##### Example: The code below gets the number of parameters passed to our program from the command line with _COMMANDCOUNT:
```vb
limit = _COMMANDCOUNT
FOR i = 1 TO limit
   PRINT COMMAND$(i)
NEXT
```
  


#### SEE ALSO
* COMMAND$
* [SHELL](./SHELL.md)
