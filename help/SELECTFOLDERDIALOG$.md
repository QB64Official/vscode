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

## [_SELECTFOLDERDIALOG\$](SELECTFOLDERDIALOG\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SELECTFOLDERDIALOG$)
---
<blockquote>

### The _SELECTFOLDERDIALOG$ function displays a dialog box that enables the user to select a folder (directory). The returned string is a folder path or an empty string ( "" ) if the user cancelled.

</blockquote>

#### SYNTAX

<blockquote>

`folder$ = _SELECTFOLDERDIALOG$ ([ title$ ][, defaultPath$ ])`

</blockquote>

#### PARAMETERS

<blockquote>

*  title$ is a string that is displayed above the folder tree view in the dialog box
*  defaultPath$ is the default folder that is pre-selected (if the folder exists)

</blockquote>

#### DESCRIPTION

<blockquote>

*  All parameters accept an empty string ( "" ) in which case system defaults are used
*  Use the title$ to specify instructions to the user
*  The dialog box automatically becomes a modal window if the application window is visible
*  The folder selected must exist in the filesystem else an empty string is returned


</blockquote>

#### SEE ALSO

<blockquote>

*  [_NOTIFYPOPUP](NOTIFYPOPUP.md) 
*  [_MESSAGEBOX](MESSAGEBOX.md) 
*  [_MESSAGEBOX](MESSAGEBOX.md)  (function)
*  [_INPUTBOX\$](INPUTBOX\$.md) 
*  [_COLORCHOOSERDIALOG](COLORCHOOSERDIALOG.md) 
*  [_OPENFILEDIALOG\$](OPENFILEDIALOG\$.md) 
*  [_SAVEFILEDIALOG\$](SAVEFILEDIALOG\$.md) 

</blockquote>
