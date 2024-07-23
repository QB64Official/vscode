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


## [ALIAS](ALIAS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ALIAS)
---
<blockquote>

### The ALIAS clause in a DECLARE LIBRARY statement block tells the program the name of the procedure used in the external library.

</blockquote>

#### SYNTAX

<blockquote>

`DECLARE LIBRARY SUB pseudoname ALIAS actualname [( parameters )]`

</blockquote>

#### PARAMETERS

<blockquote>


* The pseudoname is the name of the [SUB](SUB.md) or [FUNCTION](FUNCTION.md) the QB64 program will use.
* The actualname is the same procedure name as it is inside of the library code, it may optionally have a prepended namespace specification (e.g. [ALIAS](ALIAS.md) std::malloc).
* QB64 must use all parameters of imported procedures including optional ones.
</blockquote>

#### DESCRIPTION

<blockquote>


* The [ALIAS](ALIAS.md) name clause is optional as the original library procedure name can be used.
* The procedure name does not have to be inside of quotes when using [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) .
* QB64 does not support optional parameters.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DECLARE LIBRARY
SUB MouseMove ALIAS glutWarpPointer (BYVAL xoffset&, BYVAL yoffset&)
END DECLARE

DO UNTIL _SCREENEXISTS: LOOP
PRINT "Hit a key to move the pointer to top left corner..."
SLEEP

MouseMove 1, 1
```
  
<br>

```vb
Explanation
When a Library procedure is used to represent another procedure name
use ALIAS instead of creating a wrapper SUB. Just place your name for
the procedure first with the actual Library name after ALIAS.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SUB](SUB.md) , [FUNCTION](FUNCTION.md)
* [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) , [BYVAL](BYVAL.md)
</blockquote>
