## _NOTIFYPOPUP
---

### The _NOTIFYPOPUP statement shows a system notification.

#### SYNTAX

`_NOTIFYPOPUP [ title$ ][, message$ ][, iconType$ ]`

#### PARAMETERS
* title$ is the notification title (usually appears above message and in bold)
* message$ is the notification message
* iconType$ is the notification icon type (this can be "info" , "warning" , or "error" )


#### DESCRIPTION
* All parameters are optional
* Not using any parameters will show a blank notification
* The notification popup will show where OS notifications are expected / configured by the system


#### EXAMPLES
```vb
_NOTIFYPOPUP "My Cool App", "Conversion complete!", "info"
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [_MESSAGEBOX](./_MESSAGEBOX.md)
* [_MESSAGEBOX](./_MESSAGEBOX.md) (function)
* _INPUTBOX$
* _SELECTFOLDERDIALOG$
* [_COLORCHOOSERDIALOG](./_COLORCHOOSERDIALOG.md)
* _OPENFILEDIALOG$
* _SAVEFILEDIALOG$
