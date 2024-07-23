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


## [\$INCLUDEONCE](\$INCLUDEONCE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24INCLUDEONCE)
---
<blockquote>

### The $INCLUDEONCE metacommand, when placed in include files, prevents that the file's contents is injected multiple times into a program, even if the file is included multiple times directly or indirectly through other include files.

</blockquote>

#### SYNTAX

<blockquote>

`$INCLUDEONCE`

</blockquote>

#### DESCRIPTION

<blockquote>


* As QB64 metacommand it does not require a comment ' or [REM](REM.md) before it.
* It can be placed everywhere in an include file, but must be the only thing in the line, hence without additional whitespace or comments.
* Even if placed in the middle or the end of the file, it always designates the entire file contents.
* If placed in the main program, [&dollar;INCLUDEONCE](&dollar;INCLUDEONCE.md) does nothing and is simply ignored without error.
* [&dollar;INCLUDEONCE](&dollar;INCLUDEONCE.md) will not work when placed inside pre-compiler [&dollar;IF](&dollar;IF.md) .. [&dollar;ELSE](&dollar;ELSE.md) ... [&dollar;END](&dollar;END.md) [IF](IF.md) blocks.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
'included by test.bas and incl.bm

$INCLUDEONCE

PRINT
PRINT "This prints from file once.bm, and should appear only once on screen."
```
  
<br>

```vb
'included 2 times by test.bas

PRINT
PRINT "This prints from file incl.bm, it should appear 2 times on screen."

'$INCLUDE: 'once.bm'
```
  
<br>

```vb
'this is a test for $INCLUDEONCE behavior

PRINT "This prints from the test.bas main program."

'$INCLUDE: 'incl.bm'
'$INCLUDE: 'once.bm'
'$INCLUDE: 'incl.bm'

END
```
  
<br>

```vb
This prints from the test.bas main program.

This prints from file incl.bm, it should appear 2 times on screen.

This prints from file once.bm, and should appear only once on screen.

This prints from file incl.bm, it should appear 2 times on screen.
```
  
<br>

```vb
Explanation
Even as the file once.bm is included 3 times into the test.bas program
(2 times indirectly through incl.bm and 1 time directly), the contained
PRINT statements are injected only once into the program due to the use
of the $INCLUDEONCE metacommand.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [&dollar;INCLUDE](&dollar;INCLUDE.md)
* Metacommand
</blockquote>
