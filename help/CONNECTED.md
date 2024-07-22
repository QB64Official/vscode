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

## [_CONNECTED](CONNECTED.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CONNECTED)
---
<blockquote>

### The _CONNECTED function returns the status of a TCP/IP or HTTP connection handle.

</blockquote>

#### SYNTAX

<blockquote>

`result& = _CONNECTED ( connectionHandle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The handle can come from the [_OPENHOST](OPENHOST.md)  , OPENCLIENT or [_OPENCONNECTION](OPENCONNECTION.md)  .
*  Returns -1 if still connected or 0 if connection has ended/failed.
*  Do not rely solely on this function to check for ending communication.
*  Use "time-out" checking as well and [CLOSE](CLOSE.md)  any suspect connections.
*  If this function indicates the handle is not connected, any unread messages can still be read using [GET](GET.md)  # .
*  Even if this function indicates the handle is not connected, it is important to [CLOSE](CLOSE.md)  the connection anyway or important resources cannot be reallocated.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_OPENCONNECTION](OPENCONNECTION.md)  , [_CONNECTIONADDRESS\$](CONNECTIONADDRESS\$.md) 
*  [_OPENHOST](OPENHOST.md)  , [_OPENCLIENT](OPENCLIENT.md) 
*  Downloading Files

</blockquote>
