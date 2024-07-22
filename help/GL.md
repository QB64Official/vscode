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

## [_GL](GL.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_GL)
---
<blockquote>

### In order to use OpenGL drawing commands, you must do so from inside a SUB procedure called _GL , which enables the commands to be rendered.

</blockquote>

#### SYNTAX

<blockquote>

`SUB _GL`

</blockquote>

#### DESCRIPTION

<blockquote>

*  OpenGL commands are valid outside of [SUB](SUB.md)  _GL , as long as the [SUB](SUB.md)  procedure exists in your code.
*  Attempting to use OpenGL commands without having [SUB](SUB.md)  _GL in a program will result in a Syntax error , even if the syntax is valid.
*  [SUB](SUB.md)  _GL cannot be invoked manually. The code inside it will be called automatically at approximately 60 frames per second.
*  Using [INPUT](INPUT.md)  inside [SUB](SUB.md)  _GL will crash your program.
*  If your program needs to perform any operations before [SUB](SUB.md)  _GL must be run, it is recommended to use a shared variable as a flag to allow [SUB](SUB.md)  _GL's contents to be run. See example below.


</blockquote>

#### SEE ALSO

<blockquote>

*  List of OpenGL commands All commands in the list are valid. For those without a wiki page, usage follows OpenGL standards.
*  [_GLRENDER](GLRENDER.md) 
*  [SUB](SUB.md) 

</blockquote>
