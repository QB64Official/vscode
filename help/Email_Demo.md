## Email Demo
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
c = _OPENCLIENT("tcp/ip:25:YOUR ISP SMTP SERVER ADDRESS")
IF c = 0 THEN PRINT "Couldn't connect to SMTP server!": SYSTEM

crlf$ = CHR$(13) + CHR$(10) ' carriage return + line feed ASCII characters

a$ = "HELO localhost" + crlf$
PUT #c, , a$: SLEEP 2
GET #c, , b$: PRINT b$; ' send command, wait & print server reply

a$ = "MAIL FROM:<anonymous@verizon.net>" + crlf$
PUT #c, , a$: SLEEP 2: GET #c, , b$: PRINT b$; ' send command, wait & print server reply

a$ = "RCPT TO:<galleondragon@gmail.com>" + crlf$
PUT #c, , a$: SLEEP 2: GET #c, , b$: PRINT b$; ' send command, wait & print server reply

a$ = "DATA" + crlf$
PUT #c, , a$: SLEEP 2: GET #c, , b$: PRINT b$; ' send command, wait & print server reply

a$ = "" ' assemble communication string
a$ = a$ + "From: Paul <anonymous@verizon.net>" + crlf$ ' your email address
a$ = a$ + "To: Galleon <galleondragon@gmail.com>" + crlf$ ' send email to address
a$ = a$ + "Subject: My first QB64 email" + crlf$
a$ = a$ + crlf$ ' space
a$ = a$ + "Please reply to let me know if this works!" + crlf$ ' message
a$ = a$ + "Thanks for developing QB64!" + crlf$
a$ = a$ + "." + crlf$
PUT #c, , a$: SLEEP 2
GET #c, , b$: PRINT b$; ' send message, wait & print server reply

a$ = "QUIT" + crlf$
PUT #c, , a$: SLEEP 2: GET #c, , b$: PRINT b$; ' end message, wait & print server reply

CLOSE c

PRINT "Send Email request complete."
END
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [_OPENCLIENT](./_OPENCLIENT.md) , [_OPENHOST](./_OPENHOST.md)
* [_OPENCONNECTION](./_OPENCONNECTION.md) , [_CONNECTED](./_CONNECTED.md)
* [_CONNECTIONADDRESS](./_CONNECTIONADDRESS.md)

</blockquote>
