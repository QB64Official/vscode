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

## [Inter-Program_Data_Sharing_Demo](Inter-Program_Data_Sharing_Demo.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Inter-Program Data Sharing Demo)
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
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_OPENCLIENT](OPENCLIENT.md)  , [_OPENHOST](OPENHOST.md) 
*  [_OPENCONNECTION](OPENCONNECTION.md) 

</blockquote>
