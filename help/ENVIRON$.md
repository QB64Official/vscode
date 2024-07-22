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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [ENVIRON\$](ENVIRON\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/ENVIRON$)
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

*  The function can use an [INTEGER](INTEGER.md)  listIndex% value or [STRING](STRING.md)  systemID$ parameter.
*  listIndex% refers to the number order of the environmental list. Returns are not in any particular numerical order.
*  systemID$ is the specific [STRING](STRING.md)  parameter requested. Returns only the specified environmental [STRING](STRING.md)  setting:
	* "BLASTER" = current Sound Blaster settings if installed.
	* "COMPUTERNAME" or "USERDOMAIN" = OEM PC serial number or the computer [NAME](NAME.md)  assigned by owner.
	* "HOMEDRIVE" or "SystemDrive" = Windows root drive, normally C: on single partition drives.
	* "HOMEPATH" = current user's Administrator or the single user's "OWNER" folder path.
	* "OS" = Windows Operating System version. Often WindowsNT in modern computers.
	* "PATH" = full path setting that Windows uses to look for file extensions in PATHEXT below.
	* "PATHEXT = Windows extensions used: [COM](COM.md) , EXE, BAT, CMD, VBS, VBE, JS, JSE, WSF, WSH, MSC
	* "PROCESSOR_ARCHITECTURE" = x86 for 32 [OR](OR.md)  64 bit.
	* "PROGRAMFILES" = path to Program [FILES](FILES.md)  folder, normally "C:\PROGRAM [FILES](FILES.md) "
	* "PROMPT" = normally "$P$G" on Windows NT.
	* "SYSTEMROOT" or "windir" = path to the Windows folder including the drive letter like "C:\WINDOWS"
	* "TEMP" or "TMP" = path to TEMP folder. "C:\TEMP" or the user specific temp folder on later versions.
	* "USERNAME" = current Administrator [NAME](NAME.md)  or "OWNER".


</blockquote>

#### SEE ALSO

<blockquote>

*  [ENVIRON](ENVIRON.md)  (statement)
*  [_DEVICES](DEVICES.md)  , [_DEVICE\$](DEVICE\$.md) 
*  [_LASTBUTTON](LASTBUTTON.md)  , [_OS\$](OS\$.md) 
*  Windows Environment
*  Windows User Paths Library

</blockquote>
