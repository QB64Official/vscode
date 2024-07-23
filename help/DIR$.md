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


## [_DIR\$](DIR\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DIR%24)
---
<blockquote>

### The _DIR$ function returns common paths such as Documents, Pictures, Music, Desktop, etc.

</blockquote>

#### SYNTAX

<blockquote>

`d$ = _DIR$ (" folderspecification ")`

</blockquote>

#### PARAMETERS

<blockquote>


* folderspecification may be "desktop", "downloads", "documents", "music", "video", "pictures", "appdata", "common program data", "local data", "program files", "program files (x86)", "temp", "home", "fonts", "user fonts".
* Some variation is accepted for the folder specification:
</blockquote>

#### DESCRIPTION

<blockquote>


* The path returned ends with a backslash on Windows and a forward-slash on Linux and macOS.
* A nonexistent folder specification usually defaults to the Desktop folder path.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
PRINT "DESKTOP=" + _DIR$("desktop")
PRINT "DOWNLOADS=" + _DIR$("download")
PRINT "DOCUMENTS=" + _DIR$("my documents")
PRINT "PICTURES=" + _DIR$("pictures")
PRINT "MUSIC=" + _DIR$("music")
PRINT "VIDEO=" + _DIR$("video")
PRINT "APPLICATION DATA=" + _DIR$("data")
PRINT "LOCAL APPLICATION DATA=" + _DIR$("local application data")
```
  
<br>

```vb
DESKTOP=C:\Documents and Settings\Administrator\Desktop\
DOWNLOADS=C:\Documents and Settings\Administrator\Downloads\
DOCUMENTS=C:\Documents and Settings\Administrator\My Documents\
PICTURES=C:\Documents and Settings\Administrator\My Documents\My Pictures\
MUSIC=C:\Documents and Settings\Administrator\My Documents\My Music\
VIDEO=C:\Documents and Settings\Administrator\My Documents\My Videos\
APPLICATION DATA=C:\Documents and Settings\Administrator\Application Data\
LOCAL APPLICATION DATA=C:\Documents and Settings\Administrator\Local Settings\Application Data\
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_CWD&dollar;](CWD&dollar;.md)
* [_STARTDIR&dollar;](STARTDIR&dollar;.md)
</blockquote>
