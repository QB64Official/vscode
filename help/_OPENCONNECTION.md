## _OPENCONNECTION
---

### The _OPENCONNECTION function opens a connection from a client that the host has detected and returns a status handle.

#### SYNTAX

`connectHandle = _OPENCONNECTION ( hostHandle )`

#### DESCRIPTION
* Valid connectHandle values returned are negative numbers.
* If the syntax is correct but they fail to begin/connect, a connectHandle of 0 is returned.
* Always check if the handle returned is 0 (failed) before continuing.
* [CLOSE](./CLOSE.md) # connectHandle closes the connection. Failed connections( connectHandle = 0) do not need to be closed.
* As a Host you can check for new clients (users). Each will have a unique connection handle.
* Creates an Illegal Function Call error if called with a string argument of the wrong syntax.
* Handle values can be used as the open number by [GET](./GET.md) # read statement and [PUT](./PUT.md) # write statement.


#### SEE ALSO
* [_OPENHOST](./_OPENHOST.md) , [_OPENCLIENT](./_OPENCLIENT.md)
* [_CONNECTED](./_CONNECTED.md) , [_CONNECTIONADDRESS](./_CONNECTIONADDRESS.md)
