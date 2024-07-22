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

## [_MESSAGEBOX_(function)](MESSAGEBOX_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MESSAGEBOX (function))
---
<blockquote>

### The _MESSAGEBOX function displays a message dialog box, which presents a message and returns the button ID clicked by the user. The return value can be 0 for "cancel" / "no" , 1 for "ok" / "yes" , 2 for "no" in "yesnocancel" .

</blockquote>

#### SYNTAX

<blockquote>

`result& = _MESSAGEBOX ([ title$ ][, message$ ][, dialogType$ ][, iconType$ ][, defaultButton& ])`

</blockquote>

#### PARAMETERS

<blockquote>

*  title$ is the dialog box title
*  message$ is the dialog box message
*  dialogType$ is the dialog box type and shows different buttons based on the value (this can be "ok" , "okcancel" , "yesno" , or "yesnocancel" )
*  iconType$ is the icon type that is displayed inside the dialog box (this can be "info" , "warning" , "error" , or "question" )
*  defaultButton& can be 0 for "cancel" / "no" , 1 for "ok" / "yes" , 2 for "no" in "yesnocancel"

</blockquote>

#### DESCRIPTION

<blockquote>

*  "ok" , "okcancel" , "yesno" , or "yesnocancel" can be in any case
*  "info" , "warning" , "error" , or "question" can be in any case
*  All parameters accept nothing or an empty string ( "" ). In both cases system defaults are used
*  The dialog box automatically becomes a modal window if the application window is visible


</blockquote>

#### SEE ALSO

<blockquote>

*  [_NOTIFYPOPUP](NOTIFYPOPUP.md) 
*  [_MESSAGEBOX](MESSAGEBOX.md) 
*  [_INPUTBOX\$](INPUTBOX\$.md) 
*  [_SELECTFOLDERDIALOG\$](SELECTFOLDERDIALOG\$.md) 
*  [_COLORCHOOSERDIALOG](COLORCHOOSERDIALOG.md) 
*  [_OPENFILEDIALOG\$](OPENFILEDIALOG\$.md) 
*  [_SAVEFILEDIALOG\$](SAVEFILEDIALOG\$.md) 

</blockquote>
