## _MESSAGEBOX
---

### The _MESSAGEBOX statement displays a message dialog box, which presents a message to the user.

#### SYNTAX

`_MESSAGEBOX [ title$ ][, message$ ][, iconType$ ]`

#### PARAMETERS
* title$ is the dialog box title
* message$ is the dialog box message
* iconType$ is the icon type that is displayed inside the dialog box (this can be "info" , "warning" , or "error" )


#### DESCRIPTION
* All parameters are optional
* Not using any parameters will show a blank dialog box with an OK button
* The dialog box automatically becomes a modal window if the application window is visible


#### EXAMPLES
```vb
username$ = _INPUTBOX$("Hello App", "Enter your name:", "anonymous")
IF username$ <> "" THEN _MESSAGEBOX "Hello App", "Hello " + username$, "info"
```
  


#### SEE ALSO
* [_NOTIFYPOPUP](./_NOTIFYPOPUP.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md) (function)
* _INPUTBOX$
* _SELECTFOLDERDIALOG$
* [_COLORCHOOSERDIALOG](./_COLORCHOOSERDIALOG.md)
* _OPENFILEDIALOG$
* _SAVEFILEDIALOG$
