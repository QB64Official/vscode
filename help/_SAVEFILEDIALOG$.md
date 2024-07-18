## _SAVEFILEDIALOG$
---

### The _SAVEFILEDIALOG$ function displays a standard dialog box that prompts the user to save a file. The returned string is an empty string ( "" ) if the user cancelled.

#### SYNTAX

`result$ = _SAVEFILEDIALOG$ ([ title$ ][, defaultPathAndFile$ ][, filterPatterns$ ][, singleFilterDescription$ ])`

#### PARAMETERS
* title$ is the dialog box title
* defaultPathAndFile$ is the default path that will be used by the dialog box if not changed by the user
* filterPatterns$ are the file filters separated using "|" (e.g., "*.png|*.jpg|*.gif")
* singleFilterDescription$ is the single filter description (e.g., "Image files")


#### DESCRIPTION
* All parameters accept an empty string ( "" ) in which case system defaults are used
* If singleFilterDescription$ is an empty string ( "" ), then filterPatterns$ will be shown in it's place
* The dialog box automatically becomes a modal window if the application window is visible


#### EXAMPLES
```vb
IF NOT filesaved& THEN
   textfile$ = _SAVEFILEDIALOG$("Save File", "", "*.txt|*.doc", "Text files")
   IF textfile$ <> "" THEN
       filesaved& = -1
       _MESSAGEBOX "Information", "File will be saved to " + textfile$
   END IF
END IF
```
  


#### SEE ALSO
* [_NOTIFYPOPUP](./_NOTIFYPOPUP.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md) (function)
* _INPUTBOX$
* _SELECTFOLDERDIALOG$
* [_COLORCHOOSERDIALOG](./_COLORCHOOSERDIALOG.md)
* _OPENFILEDIALOG$
