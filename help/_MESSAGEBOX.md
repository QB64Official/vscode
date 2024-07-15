# _MESSAGEBOX

The **_MESSAGEBOX** statement displays a message dialog box, which presents a message to the user.

  

## Syntax

**_MESSAGEBOX** [*title$*][, *message$*][, *iconType$*]
  

## Parameters

* *title$* is the dialog box title
* *message$* is the dialog box message
* *iconType$* is the icon type that is displayed inside the dialog box (this can be **"info"**, **"warning"**, or **"error"**)

  

## Description

* All parameters are optional
* Not using any parameters will show a blank dialog box with an OK button
* The dialog box automatically becomes a modal window if the application window is visible

  

## Availability

* **QB64-PE v3.4.0 and up**

  

## Examples

Example
Hello, world with common dialogs

``` username$ = [_INPUTBOX$](_INPUTBOX$.md)("Hello App", "Enter your name:", "anonymous") [IF](IF.md) username$ <> "" [THEN](THEN.md) _MESSAGEBOX "Hello App", "Hello " + username$, "info"  
```

  

## See also

* [_NOTIFYPOPUP](_NOTIFYPOPUP.md)
* [_MESSAGEBOX (function)](_MESSAGEBOX (function).md) "MESSAGEBOX (function)")
* [_INPUTBOX$](_INPUTBOX$.md)
* [_SELECTFOLDERDIALOG$](_SELECTFOLDERDIALOG$.md)
* [_COLORCHOOSERDIALOG](_COLORCHOOSERDIALOG.md)
* [_OPENFILEDIALOG$](_OPENFILEDIALOG$.md)
* [_SAVEFILEDIALOG$](_SAVEFILEDIALOG$.md)

  
