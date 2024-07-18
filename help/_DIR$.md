## _DIR$
---

### The _DIR$ function returns common paths such as Documents, Pictures, Music, Desktop, etc.

#### SYNTAX

`d$ = _DIR$ (" folderspecification ")`

#### PARAMETERS
* folderspecification may be "desktop", "downloads", "documents", "music", "video", "pictures", "appdata", "common program data", "local data", "program files", "program files (x86)", "temp", "home", "fonts", "user fonts".
* Some variation is accepted for the folder specification:


#### DESCRIPTION
* The path returned ends with a backslash on Windows and a forward-slash on Linux and macOS.
* A nonexistent folder specification usually defaults to the Desktop folder path.


#### EXAMPLES
```vb
PRINT "DESKTOP=" + _DIR$("desktop")
PRINT "DOWNLOADS=" + _DIR$("download")
PRINT "DOCUMENTS=" + _DIR$("my documents")
PRINT "PICTURES=" + _DIR$("pictures")
PRINT "MUSIC=" + _DIR$("music")
PRINT "VIDEO=" + _DIR$("video")
PRINT "APPLICATION DATA=" + _DIR$("data")
PRINT "LOCAL APPLICATION DATA=" + _DIR$("local application data")
```
  
```vb
DESKTOP=C:\Documents and Settings\Administrator\Desktop\
DOWNLOADS=C:\Documents and Settings\Administrator\Downloads\
DOCUMENTS=C:\Documents and Settings\Administrator\My Documents\
PICTURES=C:\Documents and Settings\Administrator\My Documents\My Pictures\
MUSIC=C:\Documents and Settings\Administrator\My Documents\My Music\
VIDEO=C:\Documents and Settings\Administrator\My Documents\My Videos\
APPLICATION DATA=C:\Documents and Settings\Administrator\Application Data\
LOCAL APPLICATION DATA=C:\Documents and Settings\Administrator\Local Settings\Application Data\
```
  


#### SEE ALSO
* _CWD$
* _STARTDIR$
