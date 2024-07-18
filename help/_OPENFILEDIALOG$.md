## _OPENFILEDIALOG$
---

### The _OPENFILEDIALOG$ function displays a standard dialog box that prompts the user to open a file. The returned string is an empty string ( "" ) if the user cancelled. The returned string will contain file paths delimited using "|" if allowMultipleSelects& is passed as -1 (true) and multiple files are selected by the user.

#### SYNTAX

`result$ = _OPENFILEDIALOG$ ([ title$ ][, defaultPathAndFile$ ][, filterPatterns$ ][, singleFilterDescription$ ][, allowMultipleSelects& ])`

#### PARAMETERS
* title$ is the dialog box title
* defaultPathAndFile$ is the default path that will be used by the dialog box if not changed by the user
* filterPatterns$ are the file filters separated using "|" (e.g., "*.png|*.jpg|*.gif")
* singleFilterDescription$ is the single filter description (e.g., "Image files")
* allowMultipleSelects& can be 0 (false) or -1 (true) if multiple file selection is to be allowed. If omitted, then this defaults to 0 (false)


#### DESCRIPTION
* All parameters accept an empty string ( "" ) in which case system defaults are used
* If singleFilterDescription$ is an empty string ( "" ), then filterPatterns$ will be shown in it's place
* The dialog box automatically becomes a modal window if the application window is visible


#### EXAMPLES
```vb
audiofiles$ = _OPENFILEDIALOG$("Open File", "", "*.mp3|*.ogg|*.wav|*.flac", "Audio files", -1)
IF audiofiles$ <> "" THEN _MESSAGEBOX "Information", "You selected " + audiofiles$
```
  


#### SEE ALSO
* [_NOTIFYPOPUP](./_NOTIFYPOPUP.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md) (function)
* _INPUTBOX$
* _SELECTFOLDERDIALOG$
* [_COLORCHOOSERDIALOG](./_COLORCHOOSERDIALOG.md)
* _SAVEFILEDIALOG$
