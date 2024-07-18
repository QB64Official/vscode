## _SELECTFOLDERDIALOG$
---

### The _SELECTFOLDERDIALOG$ function displays a dialog box that enables the user to select a folder (directory). The returned string is a folder path or an empty string ( "" ) if the user cancelled.

#### SYNTAX

`folder$ = _SELECTFOLDERDIALOG$ ([ title$ ][, defaultPath$ ])`

#### PARAMETERS
* title$ is a string that is displayed above the folder tree view in the dialog box
* defaultPath$ is the default folder that is pre-selected (if the folder exists)


#### DESCRIPTION
* All parameters accept an empty string ( "" ) in which case system defaults are used
* Use the title$ to specify instructions to the user
* The dialog box automatically becomes a modal window if the application window is visible
* The folder selected must exist in the filesystem else an empty string is returned


#### EXAMPLES
```vb
folder$ = _SELECTFOLDERDIALOG$("Select a folder to scan:")
IF folder$ <> "" THEN _MESSAGEBOX "Information", "You selected " + folder$
```
  


#### SEE ALSO
* [_NOTIFYPOPUP](./_NOTIFYPOPUP.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md) (function)
* _INPUTBOX$
* [_COLORCHOOSERDIALOG](./_COLORCHOOSERDIALOG.md)
* _OPENFILEDIALOG$
* _SAVEFILEDIALOG$
