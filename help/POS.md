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

## [POS](POS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/POS)
---
<blockquote>

### The POS function returns the current print cursor text column position.

</blockquote>

#### SYNTAX

<blockquote>

`column% = POS(0)`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Column positions after prints.
```vb
PRINT POS(0) 'column position always starts on 1 at top of new or after CLS
PRINT "hello"; 'column position is 6 on same row immediately after text
PRINT POS(0)
PRINT 'start new row
PRINT "hello", 'column position is 15 on same row (normally tabs 9 spaces)
PRINT POS(0)
PRINT 'start new row
PRINT
PRINT POS(0) ' column position is 1 on next row
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [CSRLIN](CSRLIN.md)  , [LOCATE](LOCATE.md)  , [PRINT](PRINT.md) 
*  [_PRINTSTRING](PRINTSTRING.md) 

</blockquote>
