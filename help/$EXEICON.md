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

## [\$EXEICON](\$EXEICON.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$EXEICON)
---
<blockquote>

### $EXEICON pre-compiler  metacommand embeds a designated icon file into the compiled EXE file to be viewed in Windows Explorer.

</blockquote>

#### SYNTAX

<blockquote>

`$EXEICON : ' iconfile.ico '`

</blockquote>

#### PARAMETERS

<blockquote>

*  iconfile.ico is a valid ICO file

</blockquote>

#### DESCRIPTION

<blockquote>

*  Calling [_ICON](ICON.md)  without an imageHandle& uses the embeded icon, if available.
	* Starting with build 20170906/64 , the window will automatically use the icon embedded by $EXEICON , without having to call [_ICON](ICON.md) .
*  Keyword not supported in Linux or macOS versions


</blockquote>

#### SEE ALSO

<blockquote>

*  [_ICON](ICON.md) 
*  [_TITLE](TITLE.md) 

</blockquote>
