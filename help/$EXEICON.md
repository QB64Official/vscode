## $EXEICON
---

### $EXEICON pre-compiler  metacommand embeds a designated icon file into the compiled EXE file to be viewed in Windows Explorer.

#### SYNTAX

`$EXEICON : ' iconfile.ico '`

#### PARAMETERS
* iconfile.ico is a valid ICO file


#### DESCRIPTION
* Calling [_ICON](./_ICON.md) without an imageHandle& uses the embeded icon, if available.
	* Starting with build 20170906/64 , the window will automatically use the icon embedded by $EXEICON , without having to call [_ICON](./_ICON.md).
* Keyword not supported in Linux or macOS versions


#### EXAMPLES
##### Example: Embeds a designated icon file into the compiled EXE which can be viewed in Windows Explorer folders.
```vb
$EXEICON:'mush.ico'
_ICON
```
  


#### SEE ALSO
* [_ICON](./_ICON.md)
* [_TITLE](./_TITLE.md)
