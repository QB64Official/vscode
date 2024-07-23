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


## [_SAVEFILEDIALOG\$](SAVEFILEDIALOG\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SAVEFILEDIALOG%24)
---
<blockquote>

### The _SAVEFILEDIALOG$ function displays a standard dialog box that prompts the user to save a file. The returned string is an empty string ( "" ) if the user cancelled.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = _SAVEFILEDIALOG$ ([ title$ ][, defaultPathAndFile$ ][, filterPatterns$ ][, singleFilterDescription$ ])`

</blockquote>

#### PARAMETERS

<blockquote>


* title$ is the dialog box title
* defaultPathAndFile$ is the default path that will be used by the dialog box if not changed by the user
* filterPatterns$ are the file filters separated using "|" (e.g., "*.png|*.jpg|*.gif")
* singleFilterDescription$ is the single filter description (e.g., "Image files")
</blockquote>

#### DESCRIPTION

<blockquote>


* All parameters accept an empty string ( "" ) in which case system defaults are used
* If singleFilterDescription$ is an empty string ( "" ), then filterPatterns$ will be shown in it's place
* The dialog box automatically becomes a modal window if the application window is visible

</blockquote>

#### EXAMPLES

<blockquote>

```vb
IF NOT filesaved& THEN
textfile$ = _SAVEFILEDIALOG$("Save File", "", "*.txt|*.doc", "Text files")
IF textfile$ <> "" THEN
filesaved& = -1
_MESSAGEBOX "Information", "File will be saved to " + textfile$
END IF
END IF
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_NOTIFYPOPUP](NOTIFYPOPUP.md)
* [_MESSAGEBOX](MESSAGEBOX.md)
* [_MESSAGEBOX](MESSAGEBOX.md) (function)
* [_INPUTBOX&dollar;](INPUTBOX&dollar;.md)
* [_SELECTFOLDERDIALOG&dollar;](SELECTFOLDERDIALOG&dollar;.md)
* [_COLORCHOOSERDIALOG](COLORCHOOSERDIALOG.md)
* [_OPENFILEDIALOG&dollar;](OPENFILEDIALOG&dollar;.md)
</blockquote>
