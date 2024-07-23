<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_WINDOWHANDLE](WINDOWHANDLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_WINDOWHANDLE)
---
<blockquote>

### The _WINDOWHANDLE function returns the window handle assigned to the current program by the OS. Windows-only.

</blockquote>

#### SYNTAX

<blockquote>

`hwnd&& = _WINDOWHANDLE`

</blockquote>

#### DESCRIPTION

<blockquote>


* The result is an [_INTEGER64](INTEGER64.md) number assigned by Windows to your running program.
* Use it to make API calls that require a window handle to be passed.
* Keyword not supported in Linux or macOS versions

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Showing the system-default message box in Windows.
```vb
'Message Box Constant values as defined by Microsoft (MBType)
CONST MB_OK& = 0                'OK button only
CONST MB_OKCANCEL& = 1          'OK & Cancel
CONST MB_ABORTRETRYIGNORE& = 2  'Abort, Retry & Ignore
CONST MB_YESNOCANCEL& = 3       'Yes, No & Cancel
CONST MB_YESNO& = 4             'Yes & No
CONST MB_RETRYCANCEL& = 5       'Retry & Cancel
CONST MB_CANCELTRYCONTINUE& = 6 'Cancel, Try Again & Continue
CONST MB_ICONSTOP& = 16         'Error stop sign icon
CONST MB_ICONQUESTION& = 32     'Question-mark icon
CONST MB_ICONEXCLAMATION& = 48  'Exclamation-point icon
CONST MB_ICONINFORMATION& = 64  'Letter i in a circle icon
CONST MB_DEFBUTTON1& = 0        '1st button default(left)
CONST MB_DEFBUTTON2& = 256      '2nd button default
CONST MB_DEFBUTTON3& = 512      '3rd button default(right)
CONST MB_APPLMODAL& = 0         'Message box applies to application only
CONST MB_SYSTEMMODAL& = 4096    'Message box on top of all other windows
CONST MB_SETFOCUS& = 65536      'Set message box as focus
CONST IDOK& = 1                 'OK button pressed
CONST IDCANCEL& = 2             'Cancel button pressed
CONST IDABORT& = 3              'Abort button pressed
CONST IDRETRY& = 4              'Retry button pressed
CONST IDIGNORE& = 5             'Ignore button pressed
CONST IDYES& = 6                'Yes button pressed
CONST IDNO& = 7                 'No button pressed
CONST IDTRYAGAIN& = 10          'Try again button pressed
CONST IDCONTINUE& = 1           'Continue button pressed
'----------------------------------------------------------------------------------------

DECLARE DYNAMIC LIBRARY "user32"
FUNCTION MessageBoxA& (BYVAL hwnd AS LONG, Message AS STRING, Title AS STRING, BYVAL MBType AS _UNSIGNED LONG)
END DECLARE

DO
msg& = 0: icon& = 0: DB& = 0
INPUT "Enter Message Box type(0 to 6 other Quits): ", BOX&
IF BOX& < 0 OR BOX& > 6 THEN EXIT DO

INPUT "Enter Icon&(0=none, 1=stop, 2=?, 3=!, 4=info): ", Icon&

IF BOX& THEN INPUT "Enter Default Button(1st, 2nd or 3rd): ", DB&
IF DB& THEN DB& = DB& - 1     'adjust value to 0, 1, or 2
msg& = MsgBox&("Box Title", "Box text message", BOX&, Icon&, DB&, 4096) 'on top of all windows

PRINT "Button ="; msg&
LOOP
END

FUNCTION MsgBox& (Title$, Message$, BoxType&, Icon&, DBtn&, Mode&)
SELECT CASE Icon&
CASE 1: Icon& = MB_ICONSTOP&          'warning X-sign icon
CASE 2: Icon& = MB_ICONQUESTION&      'question-mark icon
CASE 3: Icon& = MB_ICONEXCLAMATION&   'exclamation-point icon
CASE 4: Icon& = MB_ICONINFORMATION&   'lowercase letter i in circle
CASE ELSE: Icon& = 0 'no icon
END SELECT
IF BoxType& > 0 AND DBtn& > 0 THEN 'set default button as 2nd(256) or 3rd(512)
SELECT CASE BoxType&
CASE 2, 3, 6
IF DBtn& = 2 THEN Icon& = Icon& + MB_DEFBUTTON3& ELSE Icon& = Icon& + MB_DEFBUTTON2& '3 button
CASE ELSE: Icon& = Icon& + MB_DEFBUTTON2& '2nd button default
END SELECT
END IF
Focus& = MB_SetFocus&
MsgBox& = MessageBoxA&(_WINDOWHANDLE, Message$, Title$, BoxType& + Icon& + Mode& + Focus&) 'focus on button
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_WINDOWHASFOCUS](WINDOWHASFOCUS.md)
* [_SCREENEXISTS](SCREENEXISTS.md)
* Windows Libraries
</blockquote>
