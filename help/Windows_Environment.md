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


## [Windows Environment](Windows_Environment.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Windows%20Environment)
---
<blockquote>

### You can try to set environmental values for a program. The program doesn't affect anything other than itself and its child processes.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DECLARE DYNAMIC LIBRARY "kernel32"
FUNCTION SetEnvironmentVariableA& (BYVAL lpName AS _OFFSET, BYVAL lpValue AS _OFFSET)
FUNCTION GetLastError~& ()
END DECLARE

DIM Nam AS STRING
DIM Value AS STRING

Nam = "CalkinsDeleteMe" + CHR$(0)
Value = "CalkinsDeleteMe1" + CHR$(0)

IF 0 = SetEnvironmentVariableA(_OFFSET(Nam), _OFFSET(Value)) THEN
PRINT "SetEnvironmentVariableA failed. Error: 0x" + LCASE$(HEX$(GetLastError))
END
END IF

PRINT "Type 'set|more' into the console then 'exit' to close it"
SLEEP 1
SHELL "cmd.exe"
CLS
PRINT "open another cmd.exe, and use 'set|more' to verify that the change was local."
END
```
  
<br>

```vb
'public domain, feb 2012, michael calkins

CONST milliseconds = 5000

CONST HKEY_CURRENT_USER = &H80000001~&
CONST HKEY_LOCAL_MACHINE = &H80000002~&
CONST REG_SZ = 1
CONST KEY_ALL_ACCESS = &HF003F&

CONST ERROR_SUCCESS = 0
CONST ERROR_ACCESS_DENIED = 5
CONST ERROR_TIMEOUT = &H5B4

CONST WM_SETTINGCHANGE = &H1A
CONST HWND_BROADCAST = &HFFFF&

DECLARE DYNAMIC LIBRARY "advapi32"
FUNCTION RegOpenKeyExA& (BYVAL hKey AS _OFFSET, BYVAL lpSubKey AS _OFFSET, BYVAL ulOptions AS _UNSIGNED LONG, BYVAL samDesired AS _UNSIGNED LONG, BYVAL phkResult AS _OFFSET)
FUNCTION RegCloseKey& (BYVAL hKey AS _OFFSET)
FUNCTION RegSetValueExA& (BYVAL hKey AS _OFFSET, BYVAL lpValueName AS _OFFSET, BYVAL Reserved AS _UNSIGNED LONG, BYVAL dwType AS _UNSIGNED LONG, BYVAL lpData AS _OFFSET, BYVAL cbData AS _UNSIGNED LONG)
FUNCTION RegDeleteValueA& (BYVAL hKey AS _OFFSET, BYVAL lpValueName AS _OFFSET)
END DECLARE

DECLARE DYNAMIC LIBRARY "user32"
'lParem is actually a LONG_PTR, but qb64 complains if I make it a LONG.
FUNCTION SendMessageTimeoutA& (BYVAL hWnd AS _OFFSET, BYVAL Msg AS _UNSIGNED LONG, BYVAL wParam AS _UNSIGNED LONG, BYVAL lParam AS _OFFSET, BYVAL fuFlags AS _UNSIGNED LONG, BYVAL uTimeout AS _UNSIGNED LONG, BYVAL lpdwResult AS _OFFSET)
END DECLARE

DECLARE DYNAMIC LIBRARY "kernel32"
FUNCTION GetLastError~& ()
END DECLARE

DIM hKeySys AS _OFFSET
DIM hKeyUsr AS _OFFSET
DIM SubKey AS STRING
DIM Value AS STRING
DIM bData AS STRING
DIM l AS LONG

PRINT "Please open 'System Properties', click 'Advanced', and click 'Environment"
PRINT "Variables'."
PRINT
PRINT "Press any key to add them."
PRINT "Expect to get an error message if you aren't admin, but the user variable should"
PRINT "still change."
SLEEP: DO WHILE LEN(INKEY$): LOOP

SubKey = "System\CurrentControlSet\Control\Session Manager\Environment" + CHR$(0)
l = RegOpenKeyExA(HKEY_LOCAL_MACHINE, _OFFSET(SubKey), 0, KEY_ALL_ACCESS, _OFFSET(hKeySys))
IF l THEN
PRINT "(hKeySys) RegOpenKeyExA failed. Error: 0x" + LCASE$(HEX$(l))
hKeySys = 0
ELSE
Value = "CalkinsDeleteMeSys" + CHR$(0)
bData = "DeleteMe2" + CHR$(0)
l = RegSetValueExA(hKeySys, _OFFSET(Value), 0, REG_SZ, _OFFSET(bData), LEN(bData))
IF l THEN
PRINT "RegSetValueExA failed. Error: 0x" + LCASE$(HEX$(l))
END
END IF
END IF

SubKey = "Environment" + CHR$(0)
l = RegOpenKeyExA(HKEY_CURRENT_USER, _OFFSET(SubKey), 0, KEY_ALL_ACCESS, _OFFSET(hKeyUsr))
IF l THEN
PRINT "(hKeyUsr) RegOpenKeyExA failed. Error: 0x" + LCASE$(HEX$(l))
END
END IF

Value = "CalkinsDeleteMeUsr" + CHR$(0)
bData = "DeleteMe3" + CHR$(0)
l = RegSetValueExA(hKeyUsr, _OFFSET(Value), 0, REG_SZ, _OFFSET(bData), LEN(bData))
IF l THEN
PRINT "RegSetValueExA failed. Error: 0x" + LCASE$(HEX$(l))
END
END IF

PRINT
PRINT "Please wait while broadcasting the change."

'SubKey still contains "Environment"+chr$(0)
IF 0 = SendMessageTimeoutA(HWND_BROADCAST, WM_SETTINGCHANGE, 0, _OFFSET(SubKey), 0, milliseconds, _OFFSET(l)) THEN
PRINT "SendMessageTimeoutA failed. Error: 0x" + LCASE$(HEX$(GetLastError))
END IF

PRINT
PRINT "You might need to exit and reopen the 'Environment Variables' window."
PRINT "Press any key to delete them."
SLEEP: DO WHILE LEN(INKEY$): LOOP

'Value still contains "CalkinsDeleteMeUsr"+chr$(0)
l = RegDeleteValueA(hKeyUsr, _OFFSET(Value))
IF l THEN
PRINT "RegDeleteValueA failed. Error: 0x" + LCASE$(HEX$(l))
END IF

l = RegCloseKey(hKeyUsr)
IF l THEN
PRINT "RegCloseKey failed. Error: 0x" + LCASE$(HEX$(l))
END
END IF

IF hKeySys THEN
Value = "CalkinsDeleteMeSys" + CHR$(0)
l = RegDeleteValueA(hKeySys, _OFFSET(Value))
IF l THEN
PRINT "RegDeleteValueA failed. Error: 0x" + LCASE$(HEX$(l))
END IF

l = RegCloseKey(hKeySys)
IF l THEN
PRINT "RegCloseKey failed. Error: 0x" + LCASE$(HEX$(l))
END
END IF
END IF

PRINT
PRINT "Please wait while broadcasting the change."

'SubKey still contains "Environment"+chr$(0)
IF 0 = SendMessageTimeoutA(HWND_BROADCAST, WM_SETTINGCHANGE, 0, _OFFSET(SubKey), 0, milliseconds, _OFFSET(l)) THEN
PRINT "SendMessageTimeoutA failed. Error: 0x" + LCASE$(HEX$(GetLastError))
END IF

PRINT
PRINT "You might need to exit and reopen the 'Environment Variables' window."
PRINT "Please verify that they are deleted."
END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md)
* Libraries
* Windows Libraries
* Windows Registry Access
* Windows User Paths
</blockquote>
