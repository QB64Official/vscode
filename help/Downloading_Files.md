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


## [Downloading Files](Downloading_Files.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Downloading%20Files)
---
<blockquote>

### QB64-PE starting in v3.5.0 includes built-in support for making HTTP requests and receiving their responses. This functionality is implemented in _OPENCLIENT , and the resulting HTTP handle can then be provided the various existing or new stream commands to interact with the response.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
' Content of the HTTP response is returned.
' The statusCode is also assigned.
FUNCTION Download$(url AS STRING, statusCode AS LONG)
DIM h AS LONG, content AS STRING, s AS STRING

h = _OPENCLIENT("HTTP:" + url)

statusCode = _STATUSCODE(h)

WHILE NOT EOF(h)
_LIMIT 60
GET #h, , s
content = content + s
WEND

CLOSE #h

Download$ = content
END FUNCTION
```
  
<br>

```vb
FUNCTION DownloadWithProgress$(url AS STRING, statusCode AS LONG)
DIM h AS LONG, content AS STRING, s AS STRING, length AS LONG
DIM progress AS DOUBLE

h = _OPENCLIENT("HTTP:" + url)

statusCode = _STATUSCODE(h)

length = LOF(h)

WHILE NOT EOF(h)
_LIMIT 60
GET #h, , s
content = content + s

' Display a progress bar if the Content-Length was provided
IF length <> -1 THEN
progress = CDBL(LEN(content)) / length

LOCATE 1, 1
PRINT "[";
PRINT STRING$(progress * 78, "*");
PRINT STRING$(78 - progress * 78, " ");
PRINT "]";
ELSE
LOCATE 1, 1
PRINT "[ Downloading..."; STRING$(80 - 17, " "); "]";
END IF
WEND

CLOSE #h

Download$ = content
END FUNCTION
```
  
<br>

```vb
SUB DownloadMultipleWithProgress()
DIM handles(1 To 3) AS LONG
DIM content(1 To 3) AS STRING
DIM length(1 to 3) AS LONG
DIM i AS LONG, progress AS DOUBLE
DIM EndOfFile AS LONG, s AS STRING

handles(1) = _OPENCLIENT("HTTP:https://www.google.com")
handles(2) = _OPENCLIENT("HTTP:https://www.google.com")
handles(3) = _OPENCLIENT("HTTP:https://www.google.com")

FOR i = 1 To UBOUND(handles)
length(i) = LOF(handles(i))
NEXT

DO
_LIMIT 60
EndOfFile = -1

FOR i = 1 To UBOUND(handles)
IF handles(i) = 0 THEN _CONTINUE

IF EOF(handles(i)) THEN
CLOSE #handles(i)
handles(i) = 0
_CONTINUE
END IF

EndOfFile = 0

GET #handles(i), , s
content(i) = content(i) + s

' Display a progress bar if the
' Content-Length was provided
IF length <> -1 THEN
progress = CDBL(LEN(content(i))) / length(i)
LOCATE i, 1
PRINT "[";
PRINT STRING$(progress * 78, "*");
PRINT STRING$(78 - progress * 78, " ");
PRINT "]";
ELSE
LOCATE i, 1
PRINT "[ Downloading..."; STRING$(80 - 17, " "); "]";
END IF
NEXT
LOOP While NOT EndOfFile

' The content() array now contains the results of the downloads
END SUB
```
  
<br>

```vb
' Returns the status code of the HTTP response
FUNCTION DownloadToFile&(url AS STRING, fileHandle AS LONG)
DIM h AS LONG, content AS STRING, s AS STRING

h = _OPENCLIENT("HTTP:" + url)

DownloadToFile& = _STATUSCODE(h)

WHILE NOT EOF(h)
_LIMIT 60
GET #h, , s
PUT #fileHandle, , s
WEND

CLOSE #h
END FUNCTION
```
  
<br>


</blockquote>
