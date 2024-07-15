# ENVIRON$

The ENVIRON$ function returns a [STRING](STRING.md) environmental value from **Windows'** environmental settings list.

  

## Syntax

*setting$* = ENVIRON$({*listIndex%*|*systemID$*})
  

## Description

* The function can use an [INTEGER](INTEGER.md) *listIndex%* value or [STRING](STRING.md) *systemID$* parameter.
* *listIndex%* refers to the number order of the environmental list. Returns are not in any particular numerical order.
* *systemID$* is the specific [STRING](STRING.md) parameter requested. Returns only the specified environmental [STRING](STRING.md) setting:
	+ "BLASTER" = current Sound Blaster settings if installed.
	+ "COMPUTERNAME" or "USERDOMAIN" = OEM PC serial number or the computer name assigned by owner.
	+ "HOMEDRIVE" or "SystemDrive" = Windows root drive, normally C: on single partition drives.
	+ "HOMEPATH" = current user's Administrator or the single user's "OWNER" folder path.
	+ "OS" = Windows Operating System version. Often WindowsNT in modern computers.
	+ "PATH" = full path setting that Windows uses to look for file extensions in PATHEXT below.
	+ "PATHEXT = Windows extensions used: COM, EXE, BAT, CMD, VBS, VBE, JS, JSE, WSF, WSH, MSC
	+ "PROCESSOR_ARCHITECTURE" = x86 for 32 or 64 bit.
	+ "PROGRAMFILES" = path to *Program files* folder, normally "C:\PROGRAM FILES"
	+ "PROMPT" = normally "$P$G" on Windows NT.
	+ "SYSTEMROOT" or "windir" = path to the Windows folder including the drive letter like "C:\WINDOWS"
	+ "TEMP" or "TMP" = path to TEMP folder. "C:\TEMP" or the user specific temp folder on later versions.
	+ "USERNAME" = current Administrator name or "OWNER".

*Note:* There are other possible system settings that are not listed or never used on older versions. Run *Example 1* below for a complete list in your system.
* *Note:* **QB64** may not return the same environment list as QBasic or SET did in DOS.

  

## Examples

*Example 1:* Viewing the list of environmental parameter settings using a counter loop like SET does in DOS.

``` [DO](DO.md)   i = i + 1   setting$ = ENVIRON$(i) ' get a setting from the list   [PRINT](PRINT.md) setting$   [IF](IF.md) i [MOD](MOD.md) 20 = 0 [THEN](THEN.md) [PRINT](PRINT.md) "Press a key": [SLEEP](SLEEP.md): [CLS](CLS.md) [LOOP](LOOP.md) [UNTIL](UNTIL.md) setting$ = ""  
```

``` ALLUSERSPROFILE=C:\ProgramData COMPUTERNAME=TED-LAPTOP ComSpec=C:\WINDOWS\system32\cmd.exe HOMEDRIVE=C: HOMEPATH=\Users\Ted LOCALAPPDATA=C:\Users\Ted\AppData\Local OS=Windows_NT Path=C:\PROGRAMDATA\ORACLE\JAVA\JAVAPATH;C:\WINDOWS\SYSTEM32;C:\WINDOWS; C:\WINDOWS\SYSTEM32\WBEM;C:\WINDOWS\SYSTEM32\WINDOWSPOWERSHELL\V1.0\;C:\ WINDOWS\system32;C:\WINDOWS;C:\WINDOWS\System32\Wbem;C:\WINDOWS\System32 \WindowsPowerShell\v1.0\ PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC PROCESSOR_ARCHITECTURE=x86 PROCESSOR_IDENTIFIER=x86 Family 6 Model 14 Stepping 8, GenuineIntel ProgramFiles=C:\Program Files PROMPT=$P$G PSModulePath=C:\WINDOWS\system32\WindowsPowerShell\v1.0\Modules\ SystemRoot=C:\WINDOWS TEMP=C:\Users\TED\AppData\Local\Temp TMP=C:\Users\TED\AppData\Local\Temp USERDOMAIN=TED-LAPTOP USERNAME=Ted USERPROFILE=C:\Users\Ted  
```

*Note:* Windows environmental settings are listed alphabetically, 20 at a time. **QB64 may not read all of them or may return an empty string.** The settings above were returned with SET in DOS. PROMPT returned nothing where SET returned $P$G.
  

*Example 2:* Creating a shortcut on a user's desktop for QB64.EXE using the program's icon. Must be run in program's folder to work!

``` '=== Enter the EXE file and ICON or BMP image for the shortcut.  Program$ = "QB64.EXE"  '<<<<<<<<<< Enter the **exact** program name for shortcut ICON$ = "QB64ICON.BMP" '<<<<<<<<<< Enter icon or bitmap to use from program's folder  DeskTopShortcut Program$, ICON$  [END](END.md)             '====== END DEMO CODE ======  [SUB](SUB.md) DeskTopShortcut (Program$, ICON$) f = [FREEFILE](FREEFILE.md) [SHELL](SHELL.md) [_HIDE](_HIDE.md) "CD > PRGMDIR.INF"  'get the current program path [OPEN](OPEN.md) "PRGMDIR.INF" [FOR](FOR.md) "FOR (file statement)") [INPUT](INPUT.md) "INPUT (file mode)") [AS](AS.md) #f [LINE INPUT](LINE INPUT.md) "LINE INPUT (file statement)") #f, PATH$ [CLOSE](CLOSE.md) #f [KILL](KILL.md) "PRGMDIR.INF" PATH$ = PATH$ + "\": FILE$ = PATH + Program$ PRINT PATH$                         'DEMO print A$ = ENVIRON$("HOMEDRIVE")          '=== Get Current User setting from Environment. B$ = ENVIRON$("HOMEPATH") C$ = A$ + B$                        'shortcut to user's desktop if found  [IF](IF.md) C$ = "" [THEN](THEN.md) C$ = ENVIRON$("ALLUSERSPROFILE") 'try desktop for all users PRINT C$                            'DEMO print URLFILE$ = [MID$](MID$.md) "MID$ (function)")(Program$, 1, [INSTR](INSTR.md)(Program$, ".")) + "URL" 'change EXE to URL  [IF](IF.md) C$ > "" [THEN](THEN.md)      SHORTCUT$ = C$ + "\Desktop\" + URLFILE$ 'create filename for the desktop [ELSE](ELSE.md) SHORTCUT$ = PATH$ + URLFILE$   'if all else fails put in program folder [END IF](END IF.md) PRINT SHORTCUT                      'DEMO print [OPEN](OPEN.md) SHORTCUT$ [FOR](FOR.md) "FOR (file statement)") [APPEND](APPEND.md) [AS](AS.md) #f [IF](IF.md) [LOF](LOF.md)(f) [THEN](THEN.md) [CLOSE](CLOSE.md) #f: [EXIT SUB](EXIT SUB.md)   '=== if filesize is NOT Zero don't overwrite!  Q$ = [CHR$](CHR$.md)(34)                       '=== Write URL Shortcut file info. [PRINT](PRINT.md) "PRINT (file statement)") #f, "[InternetShortcut]"                    'URL type [PRINT](PRINT.md) "PRINT (file statement)") #f, "URL=" + Q$ + "file://" + FILE$ + Q$    'URL program file [PRINT](PRINT.md) "PRINT (file statement)") #f, "WorkingDirectory=" + Q$ + PATH$ + Q$   'Working path [PRINT](PRINT.md) "PRINT (file statement)") #f, "IconIndex = " + Q$ + "0" + Q$          '0 is first index [PRINT](PRINT.md) "PRINT (file statement)") #f, "IconFile = " + Q$ + PATH$ + ICON$ + Q$ 'Icon path in working folder [CLOSE](CLOSE.md) #f [END SUB](END SUB.md)  
```

*Explanation:* The SUB program finds the current program's path and user's desktop path. It then creates the shortcut on the desktop with a program icon. The custom icon should be in the program's folder. If an environmental path is not found, the shortcut is placed in the program's folder. The SUB can be added to any program.
**NOTE:** A temorary file named PRGMDIR.INF is created and deleted in the example above.
  

## See also

* [ENVIRON](ENVIRON.md) (statement)
* [_DEVICES](_DEVICES.md), [_DEVICE$](_DEVICE$.md)
* [_LASTBUTTON](_LASTBUTTON.md), [_OS$](_OS$.md)
* [Windows Environment](Windows Environment.md)
* [Windows User Paths Library](Windows User Paths Library.md)

  
