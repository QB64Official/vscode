# _OPENCLIENT

The **_OPENCLIENT** function connects to a Host on the Internet as a Client and returns the Client status handle.

**HTTP functionality is current unstable, and requires [$UNSTABLE]($UNSTABLE.md):HTTP to be able to use.**

  

## Syntax

*clientHandle&* = _OPENCLIENT(**"TCP/IP:8080:12:30:1:10"**)
*clientHandle&* = _OPENCLIENT(**"HTTP:url"**)
  

## Description

* An [Illegal Function Call](Illegal Function Call.md) error will be triggered if the function is called with a string argument of the wrong syntax.
* Connects to a host somewhere on the internet as a client.
* Valid *clientHandle&* values are negative. 0 means that the connection failed. Always check that the handle returned is not 0.
* [CLOSE](CLOSE.md) *clientHandle&* closes the client. A failed handle of value 0 does not need to be closed.

  

## Examples

Example 1
Attempting to connect to a local host(your host) as a client. A zero return indicates failure.

``` client = _OPENCLIENT("TCP/IP:7319:localhost") [IF](IF.md) client [THEN](THEN.md)    [PRINT](PRINT.md) "[Connected to " + [_CONNECTIONADDRESS](Connected to " + [_CONNECTIONADDRESS.md)(client) + "]" [ELSE](ELSE.md) [PRINT](PRINT.md) "[Connection Failed!]" [END IF](END IF.md)  
```

---

Example 2
Using HTTP to download from a URL.

``` ' Content of the HTTP response is returned. The statusCode is also assigned. [FUNCTION](FUNCTION.md) Download$(url [AS](AS.md) [STRING](STRING.md), statusCode [AS](AS.md) [LONG](LONG.md))     h& = _OPENCLIENT("HTTP:" + url)      statusCode = [_STATUSCODE](_STATUSCODE.md)(h&)      [WHILE](WHILE.md) [NOT](NOT.md) [EOF](EOF.md)(h&)         [_LIMIT](_LIMIT.md) 60         [GET](GET.md) "GET (HTTP statement)") #h&, , s$         content$ = content$ + s$     [WEND](WEND.md)      [CLOSE](CLOSE.md) #h&      Download$ = content$ [END FUNCTION](END FUNCTION.md)  
```

  

## See also

* [_OPENHOST](_OPENHOST.md), [_OPENCONNECTION](_OPENCONNECTION.md)
* [_CONNECTED](_CONNECTED.md), [_CONNECTIONADDRESS$](_CONNECTIONADDRESS$.md)
* [Email Demo](Email Demo.md), [Inter-Program Data Sharing Demo](Inter-Program Data Sharing Demo.md)
* [Downloading Files](Downloading Files.md)

  
