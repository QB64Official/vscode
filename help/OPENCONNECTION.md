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

## [_OPENCONNECTION](OPENCONNECTION.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_OPENCONNECTION)
---
<blockquote>

### The _OPENCONNECTION function opens a connection from a client that the host has detected and returns a status handle.

</blockquote>

#### SYNTAX

<blockquote>

`connectHandle = _OPENCONNECTION ( hostHandle )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Valid connectHandle values returned are negative numbers.
*  If the syntax is correct but they fail to begin/connect, a connectHandle of 0 is returned.
*  Always check if the handle returned is 0 (failed) before continuing.
*  [CLOSE](CLOSE.md)  # connectHandle closes the connection. Failed connections( connectHandle = 0) do not need to be closed.
*  As a Host you can check for new clients (users). Each will have a unique connection handle.
*  Creates an Illegal Function Call error if called with a string argument of the wrong syntax.
*  Handle values can be used as the open number by [GET](GET.md)  # read statement and [PUT](PUT.md)  # write statement.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_OPENHOST](OPENHOST.md)  , [_OPENCLIENT](OPENCLIENT.md) 
*  [_CONNECTED](CONNECTED.md)  , [_CONNECTIONADDRESS](CONNECTIONADDRESS.md) 

</blockquote>
