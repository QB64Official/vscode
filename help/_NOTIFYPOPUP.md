# _NOTIFYPOPUP

The **_NOTIFYPOPUP** statement shows a system notification.

  

## Syntax

**_NOTIFYPOPUP** [*title$*][, *message$*][, *iconType$*]
  

## Parameters

* *title$* is the notification title (usually appears above message and in bold)
* *message$* is the notification message
* *iconType$* is the notification icon type (this can be **"info"**, **"warning"**, or **"error"**)

  

## Description

* All parameters are optional
* Not using any parameters will show a blank notification
* The notification popup will show where OS notifications are expected / configured by the system

  

## Availability

* **QB64-PE v3.4.0 and up**

  

## Examples

Example
Show a system notification after completing a lengthy task

``` _NOTIFYPOPUP "My Cool App", "Conversion complete!", "info"  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_MESSAGEBOX](_MESSAGEBOX.md)
* [_MESSAGEBOX (function)](_MESSAGEBOX (function).md) "MESSAGEBOX (function)")
* [_INPUTBOX$](_INPUTBOX$.md)
* [_SELECTFOLDERDIALOG$](_SELECTFOLDERDIALOG$.md)
* [_COLORCHOOSERDIALOG](_COLORCHOOSERDIALOG.md)
* [_OPENFILEDIALOG$](_OPENFILEDIALOG$.md)
* [_SAVEFILEDIALOG$](_SAVEFILEDIALOG$.md)

  
