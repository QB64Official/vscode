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


* The handle can come from the [_OPENHOST](OPENHOST.md) , OPENCLIENT or [_OPENCONNECTION](OPENCONNECTION.md) .
* Returns -1 if still connected or 0 if connection has ended/failed.
* Do not rely solely on this function to check for ending communication.
* Use "time-out" checking as well and [CLOSE](CLOSE.md) any suspect connections.
* If this function indicates the handle is not connected, any unread messages can still be read using [GET](GET.md) # .
* Even if this function indicates the handle is not connected, it is important to [CLOSE](CLOSE.md) the connection anyway or important resources cannot be reallocated.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_OPENCONNECTION](OPENCONNECTION.md) , [_CONNECTIONADDRESS&dollar;](CONNECTIONADDRESS&dollar;.md)
* [_OPENHOST](OPENHOST.md) , [_OPENCLIENT](OPENCLIENT.md)
* Downloading Files
</blockquote>
