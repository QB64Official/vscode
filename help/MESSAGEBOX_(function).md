## _MESSAGEBOX (function)
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

* title$ is the dialog box title
* message$ is the dialog box message
* dialogType$ is the dialog box type and shows different buttons based on the value (this can be "ok" , "okcancel" , "yesno" , or "yesnocancel" )
* iconType$ is the icon type that is displayed inside the dialog box (this can be "info" , "warning" , "error" , or "question" )
* defaultButton& can be 0 for "cancel" / "no" , 1 for "ok" / "yes" , 2 for "no" in "yesnocancel"

</blockquote>

#### DESCRIPTION

<blockquote>

* "ok" , "okcancel" , "yesno" , or "yesnocancel" can be in any case
* "info" , "warning" , "error" , or "question" can be in any case
* All parameters accept nothing or an empty string ( "" ). In both cases system defaults are used
* The dialog box automatically becomes a modal window if the application window is visible


</blockquote>

#### SEE ALSO

<blockquote>

* [_NOTIFYPOPUP](./_NOTIFYPOPUP.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md)
* _INPUTBOX$
* _SELECTFOLDERDIALOG$
* [_COLORCHOOSERDIALOG](./_COLORCHOOSERDIALOG.md)
* _OPENFILEDIALOG$
* _SAVEFILEDIALOG$

</blockquote>
