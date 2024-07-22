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

## [_DIR\$](DIR\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DIR$)
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

*  folderspecification may be "desktop", "downloads", "documents", "music", "video", "pictures", "appdata", "common program data", "local data", "program files", "program files (x86)", "temp", "home", "fonts", "user fonts".
*  Some variation is accepted for the folder specification:

</blockquote>

#### DESCRIPTION

<blockquote>

*  The path returned ends with a backslash on Windows and a forward-slash on Linux and macOS.
*  A nonexistent folder specification usually defaults to the Desktop folder path.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_CWD\$](CWD\$.md) 
*  [_STARTDIR\$](STARTDIR\$.md) 

</blockquote>
