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


## [Sub (explanatory)](Sub_(explanatory).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Sub%20%28explanatory%29)
---
<blockquote>

### SUBs , short for subroutines, are like statements but are user-defined. You define a SUB by using the SUB statement. When a subroutine is called, then it will execute the code within the SUB until it reaches END SUB or EXIT SUB .

</blockquote>

#### EXAMPLES

<blockquote>

```vb
printsometext
CALL printmoretext


SUB printsometext
PRINT "This is within the printsometext sub."
EXIT SUB
PRINT "This is never shown as it encounters EXIT SUB first."
END SUB

SUB printmoretext
PRINT "This is within the printmoretext sub."
END SUB
```
  
<br>

```vb
demo hal, bal 'the variables hal and bal are used as arguments when calling the sub.

PRINT hal, bal 'the variables have now been changed by the sub.

hal = 0
bal = 0

demo 1, 2

PRINT hal, bal 'the variables have not been changed by the sub as the variables wasn't used as arguments.

SUB demo (hal, bal)

hal = 3
bal = 4

END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SUB](SUB.md) , [FUNCTION](FUNCTION.md)
* Function (explanatory) , Statement
* Argument
</blockquote>
