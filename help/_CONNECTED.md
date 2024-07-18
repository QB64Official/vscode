## _CONNECTED
---

### The _CONNECTED function returns the status of a TCP/IP or HTTP connection handle.

#### SYNTAX

`result& = _CONNECTED ( connectionHandle& )`

#### DESCRIPTION
* The handle can come from the [_OPENHOST](./_OPENHOST.md) , OPENCLIENT or [_OPENCONNECTION](./_OPENCONNECTION.md) .
* Returns -1 if still connected or 0 if connection has ended/failed.
* Do not rely solely on this function to check for ending communication.
* Use "time-out" checking as well and [CLOSE](./CLOSE.md) any suspect connections.
* If this function indicates the handle is not connected, any unread messages can still be read using [GET](./GET.md) # .
* Even if this function indicates the handle is not connected, it is important to [CLOSE](./CLOSE.md) the connection anyway or important resources cannot be reallocated.


#### SEE ALSO
* [_OPENCONNECTION](./_OPENCONNECTION.md) , [_CONNECTIONADDRESS](./_CONNECTIONADDRESS.md)$
* [_OPENHOST](./_OPENHOST.md) , [_OPENCLIENT](./_OPENCLIENT.md)
* Downloading Files
