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

## [OPEN](OPEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/OPEN)
---
<blockquote>

### The OPEN statement is used to open a file or COM serial communications port for program input or output.

</blockquote>

#### SYNTAX

<blockquote>

`OPEN fileName$ [ FOR mode ] [{ ACCESS |{ LOCK |SHARED}} [{READ|WRITE}] AS [#] fileNumber& [LEN = recordLength ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  The fileName$ is a [STRING](STRING.md)  variable or literal file name (path optional) in quotes.
*  [FOR](FOR.md)  mode can be: [APPEND](APPEND.md)  (write to [END](END.md) ), [BINARY](BINARY.md)  (read/write), [INPUT](INPUT.md)  (read), [OUTPUT](OUTPUT.md)  (write new) [OR](OR.md)  [RANDOM](RANDOM.md)  (read/write).
*  GW-BASIC's modeLetter$ is a [STRING](STRING.md)  variable or the letter "A", "B", "I", "O" or "R" designating the [OPEN](OPEN.md)  modes above.
*  fileNumber& can be any positive [INTEGER](INTEGER.md)  or [LONG](LONG.md)  whole number value or an unused value determined by the [FREEFILE](FREEFILE.md)  function.
*  [LEN](LEN.md)  = or recordLength is optional to denote the [RANDOM](RANDOM.md)  file record byte length (default = 128) or sequential (default = 512) load buffer.

</blockquote>

#### DESCRIPTION

<blockquote>

*  QB64 can open as many files as your computer memory can handle. QBasic could only open about 15 at a time.
*  QB64 will allocate 4 bytes of memory for every possible file number up to the highest number used in a program.
*  mode defaults to [RANDOM](RANDOM.md)  if the mode [OR](OR.md)  [FOR](FOR.md)  access statement is omitted. (see open modes described below)
*  Only the fileName$ , fileNumber& and [LEN](LEN.md)  = recordLength values can use variable values in the QBasic syntax.
*  If [LEN](LEN.md)  = is ommitted, sequential file record sizes default to 512 [AND](AND.md)  [RANDOM](RANDOM.md)  to 128 bytes in QBasic.
*  fileName$ can be up to 255 characters with no limit on file name extension length in QB64 .
*  Once a file or port is opened, it can be used in any program procedure using the assigned file number.
*  The "SCRN:" device is supported in version 1.000 and up (see Example 3).
*  Devices such as "KYBD:", "CONS:", "COMn" and "LPTn:" are not supported in QB64. .


</blockquote>

#### SEE ALSO

<blockquote>

*  [PRINT](PRINT.md)  (file statement) , [INPUT](INPUT.md)  (file statement)
*  [GET](GET.md)  , [PUT](PUT.md)  , [WRITE](WRITE.md)  (file statement)
*  INPUT$ , [LINE](LINE.md)  INPUT (file statement)
*  [CLOSE](CLOSE.md)  , [LOF](LOF.md)  , [EOF](EOF.md)  , [LOC](LOC.md) 
*  [SEEK](SEEK.md)  , [SEEK](SEEK.md)  (function)
*  [OPEN](OPEN.md) [COM](COM.md)  , [LEN](LEN.md)  , [RESET](RESET.md) 
*  [FIELD](FIELD.md)  , [TYPE](TYPE.md) 
*  [_FILEEXISTS](FILEEXISTS.md)  , [_DIREXISTS](DIREXISTS.md) 
*  [_OPENCLIENT](OPENCLIENT.md)  , [_OPENHOST](OPENHOST.md)  , [_OPENCONNECTION](OPENCONNECTION.md) 
*  [_SNDOPEN](SNDOPEN.md)  , [_LOADIMAGE](LOADIMAGE.md) 

</blockquote>
