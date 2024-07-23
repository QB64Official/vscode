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


## [LOC](LOC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LOC)
---
<blockquote>

### The LOC function returns the status of a serial (COM) port received buffer or the last read/written byte or record position in an open file.

</blockquote>

#### SYNTAX

<blockquote>

`bytes% = LOC ( fileOrPortNumber% )`

</blockquote>

#### PARAMETERS

<blockquote>


* fileOrPortNumber% is the number used in the port or file [OPEN](OPEN.md) [AS](AS.md) statement.
* Returns 0 if the buffer is empty. Any value above 0 indicates the [COM](COM.md) port has received data.
* Use it in conjunction with [INPUT&dollar;](INPUT&dollar;.md) to get the data bytes received.
* Can also be used to get the last read/written byte or record position in a file. See also [SEEK](SEEK.md) .
</blockquote>

#### EXAMPLES

<blockquote>

```vb
OPEN "COM1: 9600,N,8,1,OP0" FOR RANDOM AS #1 LEN = 2048 ' random mode = input and output
DO: t$ = INKEY$ ' get any transmit keypresses from user
IF LEN(t$) THEN PRINT #1, t$ ' send keyboard byte to transmit buffer
bytes% = LOC(1) ' bytes in buffer
IF bytes% THEN ' check receive buffer for data"
r$ = INPUT$(bytes%, 1)          ' get bytes in the receive buffer
PRINT r$; ' print byte strings consecutively to screen"
END IF
LOOP UNTIL t$ = CHR$(27) 'escape key exit
CLOSE #
```
  
<br>

```vb
OPEN "readme.md" FOR BINARY AS #1

PRINT LOC(1) 'LOC returns 0, as we didn't read something yet
PRINT SEEK(1) 'SEEK otherwise returns 1, as it's the first byte to read

GET #1, , a& 'now let's read a LONG (4 bytes)

PRINT LOC(1) 'now LOC returns 4, the last read byte
PRINT SEEK(1) 'and SEEK returns 5 now, the next byte to read

CLOSE #1
END
```
  
<br>

```vb
0
1
4
5
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PRINT](PRINT.md) , [OPEN](OPEN.md) [COM](COM.md) , [PRINT](PRINT.md) (file statement)
* [SEEK](SEEK.md) , [SEEK](SEEK.md) (function)
</blockquote>
