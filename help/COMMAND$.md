<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [COMMAND\$](COMMAND\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/COMMAND%24)
---
<blockquote>

### The COMMAND$ function returns the command line argument(s) passed when a program is run.

</blockquote>

#### SYNTAX

<blockquote>

`commandLine$ = COMMAND$ [(count%)]`

</blockquote>

#### DESCRIPTION

<blockquote>


* The [STRING](STRING.md) return value is anything typed after a program's executable file name in command line (or using the [RUN](RUN.md) statement).
* Unlike QuickBASIC, QB64 does not return all uppercase values so keep that in mind when checking parameters.
* In QB64 , [COMMAND&dollar;](COMMAND&dollar;.md) works as an array to return specific elements passed to the command line. COMMAND$(2) would return the second parameter passed at the command line. Arguments can contain spaces if they are passed inside quotation marks. This can be used to properly retrieve file names and arguments which contain spaces.
* Use the [_COMMANDCOUNT](COMMANDCOUNT.md) function to find the number of parameters passed to a program via the command line. See Example 2 below.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Compile both programs. ProgramA RUNs ProgramB with a parameter passed following the filename:
```vb
LOCATE 12, 36: PRINT "ProgramA"

LOCATE 23, 25: PRINT "Press any key to run ProgramB"
K$ = INPUT$(1)
RUN "ProgramB FS"  'pass FS parameter to ProgramB in QB64 or QB4.5

SYSTEM
```
  
<br>

```vb
LOCATE 17, 36: PRINT "ProgramB"
parameter$ = UCASE$(COMMAND$) 'UCASE$ is needed in QB64 only, as QB4.5 will always return upper case
LOCATE 20, 33: PRINT "Parameter = " + parameter$
IF LEFT$(parameter$, 2) = "FS" THEN _FULLSCREEN 'parameter changes to full screen

END
```
  
<br>


<div class="explanation">Explanation: If we start ThisProgram.exe with the command line ThisProgram -l "a data file" , COMMAND\$ will return a single string of "-1 a data file" which might be hard to process and interpret properly, but COMMAND\$(1) would return "-l" and COMMAND\$(2) would return the quoted "a data file" option as separate entries for easier parsing and processing.</div>

```vb
ProgramB



Parameter = FS.EXE
```
  
<br>



##### Example 2: Program gets the number of parameters passed to the program, and then prints those parameters to the screen one at a time.
```vb
count = _COMMANDCOUNT
FOR c = 1 TO count
PRINT COMMAND$(c) 'or process commands sent
NEXT
```
  
<br>

```vb
-1
a data file
```
  
<br>



##### Example 3: As part of the command array syntax, you can also just read the array to see how many commands were sent (or simply check _COMMANDCOUNT ):
```vb
DO
count = count + 1
cmd$ = COMMAND$(count)
IF cmd$ = "" THEN EXIT DO 'read until an empty return
PRINT cmd$ 'or process commands sent
LOOP
count = count - 1 'save the number of parameters sent to this program when run
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [SHELL](SHELL.md) , [RUN](RUN.md)
* [UCASE&dollar;](UCASE&dollar;.md) , [LCASE&dollar;](LCASE&dollar;.md)
* [_COMMANDCOUNT](COMMANDCOUNT.md)
</blockquote>
