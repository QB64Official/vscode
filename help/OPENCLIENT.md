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

## [_OPENCLIENT](OPENCLIENT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_OPENCLIENT)
---
<blockquote>

### The _OPENCLIENT function connects to a Host on the Internet as a Client and returns the Client status handle.

</blockquote>

#### SYNTAX

<blockquote>

`clientHandle& = _OPENCLIENT ( "TCP/IP:8080:12:30:1:10" )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  An Illegal Function Call error will be triggered if the function is called with a string argument of the wrong syntax.
*  Connects to a host somewhere on the internet as a client.
*  Valid clientHandle& values are negative. 0 means that the connection failed. Always check that the handle returned is not 0.
*  [CLOSE](CLOSE.md)  clientHandle& closes the client. A failed handle of value 0 does not need to be closed.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_OPENHOST](OPENHOST.md)  , [_OPENCONNECTION](OPENCONNECTION.md) 
*  [_CONNECTED](CONNECTED.md)  , [_CONNECTIONADDRESS\$](CONNECTIONADDRESS\$.md) 
*  Email Demo , Inter-Program Data Sharing Demo
*  Downloading Files

</blockquote>
