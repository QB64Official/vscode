## _COLORCHOOSERDIALOG
---

### The _COLORCHOOSERDIALOG function displays a standard color picker dialog box. It returns a 32-bit RGBA color with the alpha channel set to &HFF (255). A zero is returned if the user cancelled.

#### SYNTAX

`color32bpp~& = _COLORCHOOSERDIALOG ([ title$ ][, defaultRGB~& ])`

#### PARAMETERS
* title$ is the dialog box title
* defaultRGB~& is the default 32-bit RGB color that is pre-selected


#### DESCRIPTION
* title$ accepts an empty string ( "" ) in which case system defaults are used
* The dialog box automatically becomes a modal window if the application window is visible
* defaultRGB~& may be ignored on some platforms


#### EXAMPLES
```vb
mycolor~& = _COLORCHOOSERDIALOG("Select a color", _RGB32(0, 255, 255))
IF mycolor~& <> 0 THEN _MESSAGEBOX "Information", "You selected " + HEX$(mycolor~&)
```
  


#### SEE ALSO
* [_NOTIFYPOPUP](./_NOTIFYPOPUP.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md) (function)
* _INPUTBOX$
* _SELECTFOLDERDIALOG$
* _OPENFILEDIALOG$
* _SAVEFILEDIALOG$
