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


* OpenGL commands are valid outside of [SUB](SUB.md) _GL , as long as the sub procedure exists in your code.
* Attempting to use OpenGL commands without having [SUB](SUB.md) _GL in a program will result in a Syntax error , even if the syntax is valid.
* [SUB](SUB.md) _GL cannot be invoked manually. The code inside it will be called automatically at approximately 60 frames per second.
* Using [INPUT](INPUT.md) inside [SUB](SUB.md) _GL will crash your program.
* If your program needs to perform any operations before [SUB](SUB.md) _GL must be run, it is recommended to use a shared variable as a flag to allow [SUB](SUB.md) _GL's contents to be run. See example below.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DIM allowGL AS _BYTE

'perform startup routines like loading assets

allowGL = -1 'sets allowGL to true so SUB _GL can run

DO
_LIMIT 1 'runs the main loop at 1 cycle per second
'notice how the main loop doesn't do anything, as SUB _GL will be running
'continuously.
LOOP

SUB _GL
IF NOT allowGL THEN EXIT SUB 'used to bypass running the code below until
'                             startup routines are done in the main module

'OpenGL code starts here
'The code in this area will be run automatically at ~60fps
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* List of OpenGL commands All commands in the list are valid. For those without a wiki page, usage follows OpenGL standards.
* [_GLRENDER](GLRENDER.md)
* [SUB](SUB.md)
</blockquote>
