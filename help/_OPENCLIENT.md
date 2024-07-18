## _OPENCLIENT
---

### The _OPENCLIENT function connects to a Host on the Internet as a Client and returns the Client status handle.

#### SYNTAX

`clientHandle& = _OPENCLIENT ( "TCP/IP:8080:12:30:1:10" )`

#### DESCRIPTION
* An Illegal Function Call error will be triggered if the function is called with a string argument of the wrong syntax.
* Connects to a host somewhere on the internet as a client.
* Valid clientHandle& values are negative. 0 means that the connection failed. Always check that the handle returned is not 0.
* [CLOSE](./CLOSE.md) clientHandle& closes the client. A failed handle of value 0 does not need to be closed.


#### EXAMPLES
```vb
client = _OPENCLIENT("TCP/IP:7319:localhost")
IF client THEN
  PRINT "[Connected to " + _CONNECTIONADDRESS(client) + "]"
ELSE PRINT "[Connection Failed!]"
END IF
```
  
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
  


#### SEE ALSO
* [_OPENHOST](./_OPENHOST.md) , [_OPENCONNECTION](./_OPENCONNECTION.md)
* [_CONNECTED](./_CONNECTED.md) , [_CONNECTIONADDRESS](./_CONNECTIONADDRESS.md)$
* Email Demo , Inter-Program Data Sharing Demo
* Downloading Files
