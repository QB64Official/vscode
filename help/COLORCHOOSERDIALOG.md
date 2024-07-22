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

## [_COLORCHOOSERDIALOG](COLORCHOOSERDIALOG.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_COLORCHOOSERDIALOG)
---
<blockquote>

### The _COLORCHOOSERDIALOG function displays a standard color picker dialog box. It returns a 32-bit RGBA color with the alpha channel set to &HFF (255). A zero is returned if the user cancelled.

</blockquote>

#### SYNTAX

<blockquote>

`color32bpp~& = _COLORCHOOSERDIALOG ([ title$ ][, defaultRGB~& ])`

</blockquote>

#### PARAMETERS

<blockquote>

*  title$ is the dialog box title
*  defaultRGB~& is the default 32-bit RGB color that is pre-selected

</blockquote>

#### DESCRIPTION

<blockquote>

*  title$ accepts an empty string ( "" ) in which case system defaults are used
*  The dialog box automatically becomes a modal window if the application window is visible
*  defaultRGB~& may be ignored on some platforms


</blockquote>

#### SEE ALSO

<blockquote>

*  [_NOTIFYPOPUP](NOTIFYPOPUP.md) 
*  [_MESSAGEBOX](MESSAGEBOX.md) 
*  [_MESSAGEBOX](MESSAGEBOX.md)  (function)
*  [_INPUTBOX\$](INPUTBOX\$.md) 
*  [_SELECTFOLDERDIALOG\$](SELECTFOLDERDIALOG\$.md) 
*  [_OPENFILEDIALOG\$](OPENFILEDIALOG\$.md) 
*  [_SAVEFILEDIALOG\$](SAVEFILEDIALOG\$.md) 

</blockquote>
