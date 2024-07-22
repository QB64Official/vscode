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

## [_CONNECTIONADDRESS](CONNECTIONADDRESS.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CONNECTIONADDRESS)
---
<blockquote>

### The _CONNECTIONADDRESS function returns a connected user's STRING IP address value. For HTTP connections it returns the effective URL of the connection.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = _CONNECTIONADDRESS[$] ( connectionHandle& )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  The handle can come from the [_OPENHOST](OPENHOST.md)  , OPENCLIENT or [_OPENCONNECTION](OPENCONNECTION.md)  .
*  For HOSTs : It may return "TCP/IP:8080:213.23.32.5" where 8080 is the port it is listening on and 213.23.32.5 is the global IP address which any computer connected to the internet could use to locate your computer. If a connection to the internet is unavailable or your firewall blocks it, it returns your 'local IP' address (127.0.0.1). You might like to store this address somewhere where other computers can find it and connect to your host. Dynamic IPs which can change will need to be updated.
*  For CLIENTs :
	* For TCP/IP, it may return "TCP/IP:8080:213.23.32.5" where 8080 is the port it used to connect to the listening host and 213.23.32.5 is the IP address of the host name it resolved.
	* For HTTP, it will return a url, such as " https://qb64phoenix.com ". It is possible for this URL to differ from the one originally passed to [_OPENCLIENT](OPENCLIENT.md)  if a HTTP redirect occurs when connecting to the original URL. The formatting may also differ slightly from the original URL.
*  For CONNECTIONs (from clients): It may return "TCP/IP:8080:34.232.321.25" where 8080 was the host listening port it connected to and 34.232.321.25 is the IP address of the client that connected. This is very useful because the host can log the IP address of clients for future reference (or banning, for example).
*  The $ sygil is optional for compatibility with older versions.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_OPENCONNECTION](OPENCONNECTION.md)  , [_CONNECTED](CONNECTED.md) 
*  [_OPENHOST](OPENHOST.md)  , [_OPENCLIENT](OPENCLIENT.md) 

</blockquote>
