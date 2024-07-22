## Inter-Program Data Sharing Demo
---
<blockquote>

### Your programs can communicate with each other using a TCP/IP connection, One as host and the other as a client. The following program demonstrates how to transfer data from one program to another program running simultaneously.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SCREEN _NEWIMAGE(512, 512, 256)

DIM a(511, 511) AS INTEGER 'an array we'll send

x = _OPENCLIENT("TCP/IP:1234:localhost") 'try to connect to a host

IF x = 0 THEN                      'couldn't be client, so become a host
   'put some data into array a
   FOR xx = 0 TO 511
       FOR yy = 0 TO 511
           a(xx, yy) = xx * yy
       NEXT
   NEXT
   PRINT "(Try running two copies of me at once!)"
   PRINT "Waiting... (Press any key to end)"
   x = _OPENHOST("TCP/IP:1234")
   DO
       z = _OPENCONNECTION(x)
       IF z <> 0 THEN
           PUT #z, , a() 'send array a to any client that connects
           CLOSE z
           PRINT "Array data send to client!"
       END IF
       _LIMIT 10
   LOOP UNTIL INKEY$ <> ""
   PRINT "Finished!"
   END
END IF

'connect to host as a client
PRINT "Conected to host. Reading data..."
DO
   GET #x, , a()
   _LIMIT 100
LOOP UNTIL EOF(x) = 0 'wait until enough data to fill the array arrives
FOR xx = 0 TO 511
   FOR yy = 0 TO 511
       PSET (xx, yy), a(xx, yy)
   NEXT
NEXT
CLOSE x
PRINT "That's how you share data folks!" 'G@lleon
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [_OPENCLIENT](./_OPENCLIENT.md) , [_OPENHOST](./_OPENHOST.md)
* [_OPENCONNECTION](./_OPENCONNECTION.md)

</blockquote>
