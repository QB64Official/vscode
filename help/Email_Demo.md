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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [Email Demo](Email_Demo.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Email%20Demo)
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
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_OPENCLIENT](OPENCLIENT.md) , [_OPENHOST](OPENHOST.md)
* [_OPENCONNECTION](OPENCONNECTION.md) , [_CONNECTED](CONNECTED.md)
* [_CONNECTIONADDRESS](CONNECTIONADDRESS.md)
</blockquote>
