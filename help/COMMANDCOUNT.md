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

## [_COMMANDCOUNT](COMMANDCOUNT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_COMMANDCOUNT)
---
<blockquote>

### The _COMMANDCOUNT function returns the number or arguments passed from the command line to the COMMAND$ function.

</blockquote>

#### SYNTAX

<blockquote>

`result& = _COMMANDCOUNT`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The function returns the number of arguments passed from the command line to a program when it's executed.
*  Arguments are spaced as separate numerical or text values. Spaced text inside of quotes is considered as one argument.
*  In C, this function would generally be regarded as 'argc' when the main program is defined as the following: int main(int argc, char *argv[])


</blockquote>

#### SEE ALSO

<blockquote>

*  [COMMAND\$](COMMAND\$.md) 
*  [SHELL](SHELL.md) 

</blockquote>
