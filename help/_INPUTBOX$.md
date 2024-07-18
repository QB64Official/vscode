## _INPUTBOX$
---

### The _INPUTBOX$ function displays a prompt in a dialog box, waits for the user to input text or click a button, and returns a string containing the contents of the text box.

#### SYNTAX

`result$ = _INPUTBOX$ ([ title$ ][, message$ ][, defaultInput$ ])`

#### PARAMETERS
* title$ is an optional dialog box title.
* message$ is an optional message or prompt that will be displayed in the dialog box.
* defaultInput$ is an optional string that is displayed in the text box as the default response if no other input is provided.


#### DESCRIPTION
* Use message$ to specify instructions to the user.
* All parameters are optional, hence omitting defaultInput$ will display a empty text box.
	* However, if defaultInput$ is provided, but is an empty string ( "" ), then a password box is shown, and the text input will be masked.
* The result$ may be an empty string ( "" ), if the user simply cancelled the dialog.
* The dialog box automatically becomes a modal window, if the application window is visible.


#### EXAMPLES
```vb
username$ = _INPUTBOX$("Hello App", "Enter your name:", "anonymous")

_MESSAGEBOX "Hello App", "Hello " + username$, "info"
```
  
```vb
age$ = _TRIM$(_INPUTBOX$(, "Enter your age:"))

IF LEN(age$) = 0 THEN
   _MESSAGEBOX , "Cancelled."
ELSE
   _MESSAGEBOX , "Age = " + age$
END IF
```
  
```vb
password$ = _INPUTBOX$("Login", "Enter password:", "")

IF LEN(password$) = 0 THEN
   _MESSAGEBOX , "Cancelled."
ELSE
   _MESSAGEBOX , "You entered = " + password$
END IF
```
  


#### SEE ALSO
* [_MESSAGEBOX](./_MESSAGEBOX.md) , [_MESSAGEBOX](./_MESSAGEBOX.md) (function)
* [_NOTIFYPOPUP](./_NOTIFYPOPUP.md) , [_COLORCHOOSERDIALOG](./_COLORCHOOSERDIALOG.md)
* _SELECTFOLDERDIALOG$ , _OPENFILEDIALOG$ , _SAVEFILEDIALOG$
