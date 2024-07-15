# _CONNECTIONADDRESS

The **_CONNECTIONADDRESS** function returns a connected user's [STRING](STRING.md) IP address value. For HTTP connections it returns the effective URL of the connection.

  

## Syntax

*result$* = _CONNECTIONADDRESS[$]($.md)
  

## Description

* The handle can come from the [_OPENHOST](_OPENHOST.md), [OPENCLIENT](OPENCLIENT.md) or [_OPENCONNECTION](_OPENCONNECTION.md).
* For **[HOSTs](HOSTs.md)**: It may return "TCP/IP:8080:213.23.32.5" where 8080 is the port it is listening on and 213.23.32.5 is the global IP address which any computer connected to the internet could use to locate your computer. If a connection to the internet is unavailable or your firewall blocks it, it returns your 'local IP' address (127.0.0.1). You might like to store this address somewhere where other computers can find it and connect to your host. Dynamic IPs which can change will need to be updated.
* For **[CLIENTs](CLIENTs.md)**:
	+ For TCP/IP, it may return "TCP/IP:8080:213.23.32.5" where 8080 is the port it used to connect to the listening host and 213.23.32.5 is the IP address of the host name it resolved.
	+ For HTTP, it will return a url, such as "<https://qb64phoenix.com>". It is possible for this URL to differ from the one originally passed to [_OPENCLIENT](_OPENCLIENT.md) if a HTTP redirect occurs when connecting to the original URL. The formatting may also differ slightly from the original URL.
* For **[CONNECTIONs](CONNECTIONs.md)** (from clients): It may return "TCP/IP:8080:34.232.321.25" where 8080 was the host listening port it connected to and 34.232.321.25 is the IP address of the client that connected. This is very useful because the host can log the IP address of clients for future reference (or banning, for example).
* The $ sygil is optional for compatibility with older versions.

  

## Examples

Example
A Host logging new chat clients in a Chat program. See the [_OPENHOST](_OPENHOST.md) example for the rest of the code used.

``` f = [FREEFILE](FREEFILE.md) [OPEN](OPEN.md) "ChatLog.dat" [FOR](FOR.md) [APPEND](APPEND.md) [AS](AS.md) #f ' code at start of host section before DO loop.  newclient = [_OPENCONNECTION](_OPENCONNECTION.md)(host) ' receive any new client connection handles [IF](IF.md) newclient [THEN](THEN.md)     numclients = numclients + 1 ' increment index     Users(numclients) = newclient ' place handle into array     IP$ = _CONNECTIONADDRESS(newclient)     [PRINT](PRINT.md) IP$ + " has joined." ' displayed to Host only     [PRINT](PRINT.md) "PRINT (file statement)") #f, IP$, numclients ' print info to a log file     [PRINT](PRINT.md) "PRINT (file statement)") #Users(numclients), "Welcome!" ' from Host to new clients only [END IF](END IF.md)  
```

``` **Explanation**  The function returns the new client's IP address to the IP$ variable.  Prints the IP and the original login position to a log file. The  information can later be used by the host for reference  if necessary.  The host could set up a ban list too.  
```

  

## See also

* [_OPENCONNECTION](_OPENCONNECTION.md), [_CONNECTED](_CONNECTED.md)
* [_OPENHOST](_OPENHOST.md), [_OPENCLIENT](_OPENCLIENT.md)

  
