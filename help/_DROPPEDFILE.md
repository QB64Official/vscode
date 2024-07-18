## _DROPPEDFILE
---

### The _DROPPEDFILE function returns the list of items (files or folders) dropped in a program's window after _ACCEPTFILEDROP is enabled.

#### DESCRIPTION
* After [_ACCEPTFILEDROP](./_ACCEPTFILEDROP.md) is enabled, once [_TOTALDROPPEDFILES](./_TOTALDROPPEDFILES.md) is greater than 0 the list of dropped items will be available for retrieval with [_DROPPEDFILE](./_DROPPEDFILE.md)
* When using [_DROPPEDFILE](./_DROPPEDFILE.md) to read the list sequentially (without specifying an index& ), an empty string ("") indicates the list is over and then [_TOTALDROPPEDFILES](./_TOTALDROPPEDFILES.md) gets reset to 0.
* When using [_DROPPEDFILE](./_DROPPEDFILE.md) with an index (which goes from 1 to [_TOTALDROPPEDFILES](./_TOTALDROPPEDFILES.md) ), you must call [_FINISHDROP](./_FINISHDROP.md) after you finish working with the list.
* Because it returns a string, [_DROPPEDFILE](./_DROPPEDFILE.md) also accepts being followed by a string suffix ( [_DROPPEDFILE](./_DROPPEDFILE.md) $ )
* Keyword not supported in Linux or macOS versions


#### EXAMPLES
##### Example: Accepting files dragged from a folder and processing the list received by specifying an index.
```vb
SCREEN _NEWIMAGE(128, 25, 0)

_ACCEPTFILEDROP 'enables drag/drop functionality
PRINT "Drag files from a folder and drop them in this window..."

DO
   IF _TOTALDROPPEDFILES THEN
       FOR i = 1 TO _TOTALDROPPEDFILES
           a$ = _DROPPEDFILE(i)
           COLOR 15
           PRINT i,
           IF _FILEEXISTS(a$) THEN
               COLOR 2: PRINT "file",
           ELSE
               IF _DIREXISTS(a$) THEN
                   COLOR 3: PRINT "folder",
               ELSE
                   COLOR 4: PRINT "not found", 'highly unlikely, but who knows?
               END IF
           END IF
           COLOR 15
           PRINT a$
       NEXT
       _FINISHDROP
   END IF

   _LIMIT 30
LOOP
```
  


#### SEE ALSO
* [_ACCEPTFILEDROP](./_ACCEPTFILEDROP.md) , [_TOTALDROPPEDFILES](./_TOTALDROPPEDFILES.md) , [_FINISHDROP](./_FINISHDROP.md)
* [_FILEEXISTS](./_FILEEXISTS.md) , [_DIREXISTS](./_DIREXISTS.md)
