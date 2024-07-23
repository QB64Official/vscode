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


## [\$DEBUG](\$DEBUG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24DEBUG)
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


* [&dollar;DEBUG](&dollar;DEBUG.md) injects extra code in the resulting binary, allowing the IDE to control the execution flow of your program.
* When [&dollar;DEBUG](&dollar;DEBUG.md) is used, the IDE will connect to your running program using a local TCP/IP connection.
* You may get a prompt from your Operating System regarding this, so it may be necessary to allow the IDE to receive connections.
* No external connections are created, and your running program will only attempt to connect locally to the IDE.
* The default TCP/IP port starts at 9001. Multiple running instances of the IDE will attempt to open ports 9002 and up.
* You can change the base port in the Debug menu.
* The metacommand is supposed to be removed once your program is ready for release, although leaving it in won't have any effect if your program isn't run from the IDE.
* The only drawback of leaving the metacommand in is that your binary will end up being larger than required.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* Metacommands
</blockquote>
