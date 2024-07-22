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

## [ERROR](ERROR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ERROR)
---
<blockquote>

### The ERROR statement is used to simulate a program error or to troubleshoot error handling procedures.

</blockquote>

#### SYNTAX

<blockquote>

`ERROR codeNumber%`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Can be used to test an error handling routine by simulating an error.
*  Error code 97 can be used to invoke the error handler for your own use, no real error in the program will trigger error 97.
*  Use error codes between 100 and 200 for custom program errors that will not be responded to by QB64.


</blockquote>

#### SEE ALSO

<blockquote>

*  [ON](ON.md)  [ERROR](ERROR.md) 
*  [ERR](ERR.md)  , [ERL](ERL.md) 
*  [_ERRORLINE](ERRORLINE.md) 
*  [ERROR](ERROR.md)  Codes (list)

</blockquote>
