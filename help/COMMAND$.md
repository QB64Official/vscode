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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [COMMAND\$](COMMAND\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/COMMAND$)
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

*  The [STRING](STRING.md)  return value is anything typed after a program's executable file name in command line (or using the [RUN](RUN.md)  statement).
*  Unlike QuickBASIC, QB64 does not return all uppercase values so keep that in mind when checking parameters.
*  In QB64 , COMMAND$ works as an array to return specific elements passed to the command line. COMMAND$(2) would return the second parameter passed at the command line. Arguments can contain spaces if they are passed inside quotation marks. This can be used to properly retrieve file names [AND](AND.md)  arguments which contain spaces.
*  Use the [_COMMANDCOUNT](COMMANDCOUNT.md)  function to find the number of parameters passed to a program via the command line. See Example 2 below.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [SHELL](SHELL.md)  , [RUN](RUN.md) 
*  UCASE$ , [LCASE\$](LCASE\$.md) 
*  [_COMMANDCOUNT](COMMANDCOUNT.md) 

</blockquote>
