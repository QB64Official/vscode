# _DIR$

The **_DIR$** function returns common paths such as Documents, Pictures, Music, Desktop, etc.

  

## Syntax

*d$* = _DIR$("*folderspecification*")
  

## Parameters

* *folderspecification* may be "desktop", "downloads", "documents", "music", "video", "pictures", "appdata", "common program data", "local data", "program files", "program files (x86)", "temp", "home", "fonts", "user fonts".
* Some variation is accepted for the folder specification:

MY DOCUMENTS, TEXT, DOCUMENT, DOCUMENTS, DOWNLOAD, DOWNLOADS
MY MUSIC, MUSIC, AUDIO, SOUND, SOUNDS
MY PICTURES, PICTURE, PICTURES, IMAGE, IMAGES, PHOTO, PHOTOS, DCIM, CAMERA, CAMERA ROLL
MY VIDEOS, VIDEO, VIDEOS, MOVIE, MOVIES,
DATA, APPDATA, APPLICATION DATA, PROGRAM DATA, LOCAL DATA, LOCALAPPDATA, LOCAL APPLICATION DATA, LOCAL PROGRAM DATA
PROGRAMFILES, PROGRAMFILESX86, PROGRAMFILES X86, PROGRAM FILES X86, PROGRAM FILES 86, PROGRAMFILES (X86), PROGRAM FILES(X86), PROGRAMFILES(X86)
FONT, USERFONT, USERFONTS, USER FONT
USER, PROFILE, USERPROFILE, USER PROFILE
  

## Description

* The path returned ends with a backslash on Windows and a forward-slash on Linux and macOS.
* A nonexistent folder specification usually defaults to the Desktop folder path.

  

## Availability

* [![v1.1](![v1.1.md)](File:Qb64.png "v1.1")

**v1.1**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

* In **QB64-PE v3.11.0** support for "font" & "user font" and full Linux and macOS support was added.

  

## Examples

Example
Displaying default paths in Windows.

``` [PRINT](PRINT.md) "DESKTOP=" + _DIR$("desktop") [PRINT](PRINT.md) "DOWNLOADS=" + _DIR$("download") [PRINT](PRINT.md) "DOCUMENTS=" + _DIR$("my documents") [PRINT](PRINT.md) "PICTURES=" + _DIR$("pictures") [PRINT](PRINT.md) "MUSIC=" + _DIR$("music") [PRINT](PRINT.md) "VIDEO=" + _DIR$("video") [PRINT](PRINT.md) "APPLICATION DATA=" + _DIR$("data") [PRINT](PRINT.md) "LOCAL APPLICATION DATA=" + _DIR$("local application data")  
```

``` DESKTOP=C:\Documents and Settings\Administrator\Desktop\ DOWNLOADS=C:\Documents and Settings\Administrator\Downloads\ DOCUMENTS=C:\Documents and Settings\Administrator\My Documents\ PICTURES=C:\Documents and Settings\Administrator\My Documents\My Pictures\ MUSIC=C:\Documents and Settings\Administrator\My Documents\My Music\ VIDEO=C:\Documents and Settings\Administrator\My Documents\My Videos\ APPLICATION DATA=C:\Documents and Settings\Administrator\Application Data\ LOCAL APPLICATION DATA=C:\Documents and Settings\Administrator\Local Settings\Application Data\  
```

  

## See also

* [_CWD$](_CWD$.md)
* [_STARTDIR$](_STARTDIR$.md)

  
