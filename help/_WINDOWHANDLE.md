# _WINDOWHANDLE

The _WINDOWHANDLE function returns the window handle assigned to the current program by the OS. Windows-only.

  

## Syntax

*hwnd&&* = _WINDOWHANDLE
  

## Description

* The result is an [_INTEGER64](_INTEGER64.md) number assigned by Windows to your running program.
* Use it to make [API calls](API calls.md) that require a window handle to be passed.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Availability

* **Build 20170924/68**.

  

## Examples

*Example:* Showing the system-default message box in Windows.

``` 'Message Box Constant values as defined by Microsoft (MBType) [CONST](CONST.md) MB_OK& = 0                'OK button only [CONST](CONST.md) MB_OKCANCEL& = 1          'OK & Cancel [CONST](CONST.md) MB_ABORTRETRYIGNORE& = 2  'Abort, Retry & Ignore [CONST](CONST.md) MB_YESNOCANCEL& = 3       'Yes, No & Cancel [CONST](CONST.md) MB_YESNO& = 4             'Yes & No [CONST](CONST.md) MB_RETRYCANCEL& = 5       'Retry & Cancel [CONST](CONST.md) MB_CANCELTRYCONTINUE& = 6 'Cancel, Try Again & Continue [CONST](CONST.md) MB_ICONSTOP& = 16         'Error stop sign icon [CONST](CONST.md) MB_ICONQUESTION& = 32     'Question-mark icon [CONST](CONST.md) MB_ICONEXCLAMATION& = 48  'Exclamation-point icon [CONST](CONST.md) MB_ICONINFORMATION& = 64  'Letter i in a circle icon [CONST](CONST.md) MB_DEFBUTTON1& = 0        '1st button default(left) [CONST](CONST.md) MB_DEFBUTTON2& = 256      '2nd button default [CONST](CONST.md) MB_DEFBUTTON3& = 512      '3rd button default(right) [CONST](CONST.md) MB_APPLMODAL& = 0         'Message box applies to application only [CONST](CONST.md) MB_SYSTEMMODAL& = 4096    'Message box on top of all other windows [CONST](CONST.md) MB_SETFOCUS& = 65536      'Set message box as focus [CONST](CONST.md) IDOK& = 1                 'OK button pressed [CONST](CONST.md) IDCANCEL& = 2             'Cancel button pressed [CONST](CONST.md) IDABORT& = 3              'Abort button pressed [CONST](CONST.md) IDRETRY& = 4              'Retry button pressed [CONST](CONST.md) IDIGNORE& = 5             'Ignore button pressed [CONST](CONST.md) IDYES& = 6                'Yes button pressed [CONST](CONST.md) IDNO& = 7                 'No button pressed [CONST](CONST.md) IDTRYAGAIN& = 10          'Try again button pressed [CONST](CONST.md) IDCONTINUE& = 1           'Continue button pressed '----------------------------------------------------------------------------------------  [DECLARE DYNAMIC LIBRARY](DECLARE DYNAMIC LIBRARY.md) "user32" [FUNCTION](FUNCTION.md) MessageBoxA& ([BYVAL](BYVAL.md) hwnd [AS](AS.md) [LONG](LONG.md), Message [AS](AS.md) [STRING](STRING.md), Title [AS](AS.md) [STRING](STRING.md), [BYVAL](BYVAL.md) MBType [AS](AS.md) [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)) [END DECLARE](END DECLARE.md)  DO   msg& = 0: icon& = 0: DB& = 0   [INPUT](INPUT.md) "Enter Message Box type(0 to 6 other Quits): ", BOX&   [IF](IF.md) BOX& < 0 [OR](OR.md) "OR (boolean)") BOX& > 6 [THEN](THEN.md) [EXIT DO](EXIT DO.md)    [INPUT](INPUT.md) "Enter Icon&(0=none, 1=stop, 2=?, 3=!, 4=info): ", Icon&    [IF](IF.md) BOX& [THEN](THEN.md) [INPUT](INPUT.md) "INPUT (file mode)") "Enter Default Button(1st, 2nd or 3rd): ", DB&   [IF](IF.md) DB& [THEN](THEN.md) DB& = DB& - 1     'adjust value to 0, 1, or 2   msg& = MsgBox&("Box Title", "Box text message", BOX&, Icon&, DB&, 4096) 'on top of all windows    [PRINT](PRINT.md) "Button ="; msg& [LOOP](LOOP.md) [END](END.md)  [FUNCTION](FUNCTION.md) MsgBox& (Title$, Message$, BoxType&, Icon&, DBtn&, Mode&) [SELECT CASE](SELECT CASE.md) Icon&   [CASE](CASE.md) 1: Icon& = MB_ICONSTOP&          'warning X-sign icon   [CASE](CASE.md) 2: Icon& = MB_ICONQUESTION&      'question-mark icon   [CASE](CASE.md) 3: Icon& = MB_ICONEXCLAMATION&   'exclamation-point icon   [CASE](CASE.md) 4: Icon& = MB_ICONINFORMATION&   'lowercase letter i in circle   [CASE ELSE](CASE ELSE.md): Icon& = 0 'no icon [END SELECT](END SELECT.md) [IF](IF.md) BoxType& > 0 [AND](AND.md) "AND (boolean)") DBtn& > 0 [THEN](THEN.md) 'set default button as 2nd(256) or 3rd(512)   [SELECT CASE](SELECT CASE.md) BoxType&     [CASE](CASE.md) 2, 3, 6      [IF](IF.md) DBtn& = 2 [THEN](THEN.md) Icon& = Icon& + MB_DEFBUTTON3& [ELSE](ELSE.md) Icon& = Icon& + MB_DEFBUTTON2& '3 button     [CASE ELSE](CASE ELSE.md): Icon& = Icon& + MB_DEFBUTTON2& '2nd button default   [END SELECT](END SELECT.md) [END IF](END IF.md) Focus& = MB_SetFocus& MsgBox& = MessageBoxA&(_WINDOWHANDLE, Message$, Title$, BoxType& + Icon& + Mode& + Focus&) 'focus on button [END FUNCTION](END FUNCTION.md)  
```

*Explanation:* Notice how the call to the external dynamic library function MessageBoxA& passes _WINDOWHANDLE to the API and how the message box shown is created as a child of your program's window, not allowing the main window to be manipulated while the message box is open.
  

## See also

* [_WINDOWHASFOCUS](_WINDOWHASFOCUS.md)
* [_SCREENEXISTS](_SCREENEXISTS.md)
* [Windows Libraries](Windows Libraries.md)

  
