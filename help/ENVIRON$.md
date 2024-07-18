## ENVIRON$
---

### The ENVIRON$ function returns a STRING environmental value from Windows' environmental settings list.

#### SYNTAX

`setting$ = ENVIRON$ ({ listIndex% | systemID$ })`

#### DESCRIPTION
* The function can use an [INTEGER](./INTEGER.md) listIndex% value or [STRING](./STRING.md) systemID$ parameter.
* listIndex% refers to the number order of the environmental list. Returns are not in any particular numerical order.
* systemID$ is the specific [STRING](./STRING.md) parameter requested. Returns only the specified environmental [STRING](./STRING.md) setting:
	* "BLASTER" = current Sound Blaster settings if installed.
	* "COMPUTERNAME" or "USERDOMAIN" = OEM PC serial number or the computer name assigned by owner.
	* "HOMEDRIVE" or "SystemDrive" = Windows root drive, normally C: on single partition drives.
	* "HOMEPATH" = current user's Administrator or the single user's "OWNER" folder path.
	* "OS" = Windows Operating System version. Often WindowsNT in modern computers.
	* "PATH" = full path setting that Windows uses to look for file extensions in PATHEXT below.
	* "PATHEXT = Windows extensions used:  [COM](./COM.md), EXE, BAT, CMD, VBS, VBE, JS, JSE, WSF, WSH, MSC
	* "PROCESSOR_ARCHITECTURE" = x86 for 32 or 64 bit.
	* "PROGRAMFILES" = path to Program files folder, normally "C:\PROGRAM [FILES](./FILES.md)"
	* "PROMPT" = normally "$P$G" on Windows NT.
	* "SYSTEMROOT" or "windir" = path to the Windows folder including the drive letter like "C:\WINDOWS"
	* "TEMP" or "TMP" = path to TEMP folder. "C:\TEMP" or the user specific temp folder on later versions.
	* "USERNAME" = current Administrator name or "OWNER".


#### EXAMPLES
##### Example 1: Viewing the list of environmental parameter settings using a counter loop like SET does in DOS.
```vb
DO
 i = i + 1
 setting$ = ENVIRON$(i) ' get a setting from the list
 PRINT setting$
 IF i MOD 20 = 0 THEN PRINT "Press a key": SLEEP: CLS
LOOP UNTIL setting$ = ""
```
  
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
  


#### SEE ALSO
* [ENVIRON](./ENVIRON.md) (statement)
* [_DEVICES](./_DEVICES.md) , _DEVICE$
* [_LASTBUTTON](./_LASTBUTTON.md) , _OS$
* Windows Environment
* Windows User Paths Library
