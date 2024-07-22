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

## [\$DEBUG](\$DEBUG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$DEBUG)
---
<blockquote>

### $DEBUG is precompiler metacommand , which enables debugging features, allowing you to step through your code running line by line and to inspect variables and change their values in real time.

</blockquote>

#### SYNTAX

<blockquote>

`$DEBUG`

</blockquote>

#### DESCRIPTION

<blockquote>

*  $DEBUG injects extra code in the resulting binary, allowing the IDE to control the execution flow of your program.
*  When $DEBUG is used, the IDE will connect to your running program using a local TCP/IP connection.
	* You may get a prompt from your Operating System regarding this, so it may be necessary to allow the IDE to receive connections.
	* No external connections are created, and your running program will only attempt to connect locally to the IDE.
*  The default TCP/IP port starts at 9001. Multiple running instances of the IDE will attempt to open ports 9002 and up.
	* You can change the base port in the Debug menu.
*  The metacommand is supposed to be removed once your program is ready for release, although leaving it in won't have any effect if your program isn't run from the IDE.
	* The only drawback of leaving the metacommand in is that your binary will end up being larger than required.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  Metacommands

</blockquote>
