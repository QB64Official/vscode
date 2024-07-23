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


## [ENVIRON\$](ENVIRON\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ENVIRON%24)
---
<blockquote>

### The ENVIRON$ function returns a STRING environmental value from Windows' environmental settings list.

</blockquote>

#### SYNTAX

<blockquote>

`setting$ = ENVIRON$ ({ listIndex% | systemID$ })`

</blockquote>

#### DESCRIPTION

<blockquote>


* The function can use an [INTEGER](INTEGER.md) listIndex% value or [STRING](STRING.md) systemID$ parameter.
* listIndex% refers to the number order of the environmental list. Returns are not in any particular numerical order.
* systemID$ is the specific [STRING](STRING.md) parameter requested. Returns only the specified environmental [STRING](STRING.md) setting:
* "BLASTER" = current Sound Blaster settings if installed.
* "COMPUTERNAME" or "USERDOMAIN" = OEM PC serial number or the computer name assigned by owner.
* "HOMEDRIVE" or "SystemDrive" = Windows root drive, normally C: on single partition drives.
* "HOMEPATH" = current user's Administrator or the single user's "OWNER" folder path.
* "OS" = Windows Operating System version. Often WindowsNT in modern computers.
* "PATH" = full path setting that Windows uses to look for file extensions in PATHEXT below.
* "PATHEXT = Windows extensions used:  COM, EXE, BAT, CMD, VBS, VBE, JS, JSE, WSF, WSH, MSC
* "PROCESSOR_ARCHITECTURE" = x86 for 32 or 64 bit.
* "PROGRAMFILES" = path to Program files folder, normally "C:\PROGRAM FILES"
* "PROMPT" = normally "$P$G" on Windows NT.
* "SYSTEMROOT" or "windir" = path to the Windows folder including the drive letter like "C:\WINDOWS"
* "TEMP" or "TMP" = path to TEMP folder. "C:\TEMP" or the user specific temp folder on later versions.
* "USERNAME" = current Administrator name or "OWNER".

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Viewing the list of environmental parameter settings using a counter loop like SET does in DOS.
```vb
DO
i = i + 1
setting$ = ENVIRON$(i) ' get a setting from the list
PRINT setting$
IF i MOD 20 = 0 THEN PRINT "Press a key": SLEEP: CLS
LOOP UNTIL setting$ = ""
```
  
<br>

```vb
ALLUSERSPROFILE=C:\ProgramData
COMPUTERNAME=TED-LAPTOP
ComSpec=C:\WINDOWS\system32\cmd.exe
HOMEDRIVE=C:
HOMEPATH=\Users\Ted
LOCALAPPDATA=C:\Users\Ted\AppData\Local
OS=Windows_NT
Path=C:\PROGRAMDATA\ORACLE\JAVA\JAVAPATH;C:\WINDOWS\SYSTEM32;C:\WINDOWS;
C:\WINDOWS\SYSTEM32\WBEM;C:\WINDOWS\SYSTEM32\WINDOWSPOWERSHELL\V1.0\;C:\
WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32
\WindowsPowerShell\v1.0\
PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC
PROCESSOR_ARCHITECTURE=x86
PROCESSOR_IDENTIFIER=x86 Family 6 Model 14 Stepping 8, GenuineIntel
ProgramFiles=C:\Program Files
PROMPT=$P$G
PSModulePath=C:\WINDOWS\system32\WindowsPowerShell\v1.0\Modules\
SystemRoot=C:\WINDOWS
TEMP=C:\Users\TED\AppData\Local\Temp
TMP=C:\Users\TED\AppData\Local\Temp
USERDOMAIN=TED-LAPTOP
USERNAME=Ted
USERPROFILE=C:\Users\Ted
```
  
<br>


<div class="explanation">Note: Windows environmental settings are listed alphabetically, 20 at a time. QB64 may not read all of them or may return an empty string. The settings above were returned with SET in DOS. PROMPT returned nothing where SET returned \$P\$G.</div>



##### Example 2: Creating a shortcut on a user's desktop for QB64.EXE using the program's icon. Must be run in program's folder to work!
```vb
'=== Enter the EXE file and ICON or BMP image for the shortcut.

Program$ = "QB64.EXE"  '<<<<<<<<<< Enter the exact program name for shortcut
ICON$ = "QB64ICON.BMP" '<<<<<<<<<< Enter icon or bitmap to use from program's folder

DeskTopShortcut Program$, ICON$

END             '====== END DEMO CODE ======

SUB DeskTopShortcut (Program$, ICON$)
f = FREEFILE
SHELL _HIDE "CD > PRGMDIR.INF"  'get the current program path
OPEN "PRGMDIR.INF" FOR INPUT AS #f
LINE INPUT #f, PATH$
CLOSE #f
KILL "PRGMDIR.INF"
PATH$ = PATH$ + "\": FILE$ = PATH + Program$
PRINT PATH$                         'DEMO print
A$ = ENVIRON$("HOMEDRIVE")          '=== Get Current User setting from Environment.
B$ = ENVIRON$("HOMEPATH")
C$ = A$ + B$                        'shortcut to user's desktop if found

IF C$ = "" THEN C$ = ENVIRON$("ALLUSERSPROFILE") 'try desktop for all users
PRINT C$                            'DEMO print
URLFILE$ = MID$(Program$, 1, INSTR(Program$, ".")) + "URL" 'change EXE to URL

IF C$ > "" THEN
SHORTCUT$ = C$ + "\Desktop\" + URLFILE$ 'create filename for the desktop
ELSE SHORTCUT$ = PATH$ + URLFILE$   'if all else fails put in program folder
END IF
PRINT SHORTCUT                      'DEMO print
OPEN SHORTCUT$ FOR APPEND AS #f
IF LOF(f) THEN CLOSE #f: EXIT SUB   '=== if filesize is NOT Zero don't overwrite!

Q$ = CHR$(34)                       '=== Write URL Shortcut file info.
PRINT #f, "[InternetShortcut]"                    'URL type
PRINT #f, "URL=" + Q$ + "file://" + FILE$ + Q$    'URL program file
PRINT #f, "WorkingDirectory=" + Q$ + PATH$ + Q$   'Working path
PRINT #f, "IconIndex = " + Q$ + "0" + Q$          '0 is first index
PRINT #f, "IconFile = " + Q$ + PATH$ + ICON$ + Q$ 'Icon path in working folder
CLOSE #f
END SUB
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ENVIRON](ENVIRON.md) (statement)
* [_DEVICES](DEVICES.md) , [_DEVICE&dollar;](DEVICE&dollar;.md)
* [_LASTBUTTON](LASTBUTTON.md) , [_OS&dollar;](OS&dollar;.md)
* Windows Environment
* Windows User Paths Library
</blockquote>
