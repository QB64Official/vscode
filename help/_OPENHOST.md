## _OPENHOST
---

### The _OPENHOST function opens a Host which listens for new connections and returns a Host status handle.

#### SYNTAX

`hostHandle = _OPENHOST ( "TCP/IP:8080" )`

#### DESCRIPTION
* Creates an Illegal Function Call error if called with a string argument of the wrong syntax.
* The port used in the syntax example is 8080.
* Valid hostHandle values are negative numbers.
* If the syntax is correct but they fail to begin/connect a hostHandle of 0 is returned.
* Always check if the handle returned is 0 (failed) before continuing.
* [CLOSE](./CLOSE.md) hostHandle closes the host. A failed handle value of 0 does not need to be closed.


#### SEE ALSO
* [_OPENCONNECTION](./_OPENCONNECTION.md) , [_OPENCLIENT](./_OPENCLIENT.md)
* [_CONNECTED](./_CONNECTED.md) , [_CONNECTIONADDRESS](./_CONNECTIONADDRESS.md)
* Email Demo , Inter-Program Data Sharing Demo
* Downloading Files
