# _INPUTBOX$

The **_INPUTBOX$** function displays a prompt in a dialog box, waits for the user to input text or click a button, and returns a string containing the contents of the text box.

  

## Syntax

*result$* = _INPUTBOX$([*title$*][, *message$*][, *defaultInput$*])
  

## Parameters

* *title$* is an optional dialog box title.
* *message$* is an optional message or prompt that will be displayed in the dialog box.
* *defaultInput$* is an optional string that is displayed in the text box as the default response if no other input is provided.

  

## Description

* Use *message$* to specify instructions to the user.
* All parameters are optional, hence omitting *defaultInput$* will display a empty text box.
	+ However, if *defaultInput$* is provided, but is an empty string (**""**), then a password box is shown, and the text input will be masked.
* The *result$* may be an empty string (**""**), if the user simply cancelled the dialog.
* The dialog box automatically becomes a modal window, if the application window is visible.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.4.0](![v3.4.0.md)](File:Qbpe.png "v3.4.0")

**v3.4.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example 1
Hello world, with common dialogs.

``` username$ = _INPUTBOX$("Hello App", "Enter your name:", "anonymous")  [_MESSAGEBOX](_MESSAGEBOX.md) "Hello App", "Hello " + username$, "info"  
```

---

Example 2
Checking whether the user cancelled the input dialog.

``` age$ = [_TRIM$](_TRIM$.md)(_INPUTBOX$(, "Enter your age:"))  [IF](IF.md) [LEN](LEN.md)(age$) = 0 [THEN](THEN.md)     [_MESSAGEBOX](_MESSAGEBOX.md) , "Cancelled." [ELSE](ELSE.md)     [_MESSAGEBOX](_MESSAGEBOX.md) , "Age = " + age$ [END IF](END IF.md)  
```

---

Example 3
Getting passwords.

``` password$ = _INPUTBOX$("Login", "Enter password:", "")  [IF](IF.md) [LEN](LEN.md)(password$) = 0 [THEN](THEN.md)     [_MESSAGEBOX](_MESSAGEBOX.md) , "Cancelled." [ELSE](ELSE.md)     [_MESSAGEBOX](_MESSAGEBOX.md) , "You entered = " + password$ [END IF](END IF.md)  
```

  

## See also

* [_MESSAGEBOX](_MESSAGEBOX.md), [_MESSAGEBOX (function)](_MESSAGEBOX (function).md) "MESSAGEBOX (function)")
* [_NOTIFYPOPUP](_NOTIFYPOPUP.md), [_COLORCHOOSERDIALOG](_COLORCHOOSERDIALOG.md)
* [_SELECTFOLDERDIALOG$](_SELECTFOLDERDIALOG$.md), [_OPENFILEDIALOG$](_OPENFILEDIALOG$.md), [_SAVEFILEDIALOG$](_SAVEFILEDIALOG$.md)

  
