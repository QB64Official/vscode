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

## [_INPUTBOX\$](INPUTBOX\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_INPUTBOX$)
---
<blockquote>

### The _INPUTBOX$ function displays a prompt in a dialog box, waits for the user to input text or click a button, and returns a string containing the contents of the text box.

</blockquote>

#### SYNTAX

<blockquote>

`result$ = _INPUTBOX$ ([ title$ ][, message$ ][, defaultInput$ ])`

</blockquote>

#### PARAMETERS

<blockquote>

*  title$ is an optional dialog box title.
*  message$ is an optional message or prompt that will be displayed in the dialog box.
*  defaultInput$ is an optional string that is displayed in the text box as the default response if no other input is provided.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use message$ to specify instructions to the user.
*  All parameters are optional, hence omitting defaultInput$ will display a empty text box.
	* However, if defaultInput$ is provided, but is an empty string ( "" ), then a password box is shown, and the text input will be masked.
*  The result$ may be an empty string ( "" ), if the user simply cancelled the dialog.
*  The dialog box automatically becomes a modal window, if the application window is visible.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MESSAGEBOX](MESSAGEBOX.md)  , [_MESSAGEBOX](MESSAGEBOX.md)  (function)
*  [_NOTIFYPOPUP](NOTIFYPOPUP.md)  , [_COLORCHOOSERDIALOG](COLORCHOOSERDIALOG.md) 
*  _SELECTFOLDERDIALOG$ , _OPENFILEDIALOG$ , [_SAVEFILEDIALOG\$](SAVEFILEDIALOG\$.md) 

</blockquote>
