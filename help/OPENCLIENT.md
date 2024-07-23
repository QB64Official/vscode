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


* An Illegal Function Call error will be triggered if the function is called with a string argument of the wrong syntax.
* Connects to a host somewhere on the internet as a client.
* Valid clientHandle& values are negative. 0 means that the connection failed. Always check that the handle returned is not 0.
* [CLOSE](CLOSE.md) clientHandle& closes the client. A failed handle of value 0 does not need to be closed.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
client = _OPENCLIENT("TCP/IP:7319:localhost")
IF client THEN
PRINT "[Connected to " + _CONNECTIONADDRESS(client) + "]"
ELSE PRINT "[Connection Failed!]"
END IF
```
  
<br>

```vb
' Content of the HTTP response is returned. The statusCode is also assigned.
FUNCTION Download$(url AS STRING, statusCode AS LONG)
h& = _OPENCLIENT("HTTP:" + url)

statusCode = _STATUSCODE(h&)

WHILE NOT EOF(h&)
_LIMIT 60
GET #h&, , s$
content$ = content$ + s$
WEND

CLOSE #h&

Download$ = content$
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_OPENHOST](OPENHOST.md) , [_OPENCONNECTION](OPENCONNECTION.md)
* [_CONNECTED](CONNECTED.md) , [_CONNECTIONADDRESS&dollar;](CONNECTIONADDRESS&dollar;.md)
* Email Demo , Inter-Program Data Sharing Demo
* Downloading Files
</blockquote>
