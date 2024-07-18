## _FINISHDROP
---

### The _FINISHDROP statement resets _TOTALDROPPEDFILES and clears the _DROPPEDFILE list of items (files/folders).

#### SYNTAX

`_FINISHDROP`

#### DESCRIPTION
* When using [_DROPPEDFILE](./_DROPPEDFILE.md) with an index (which goes from 1 to [_TOTALDROPPEDFILES](./_TOTALDROPPEDFILES.md) ), you must call [_FINISHDROP](./_FINISHDROP.md) after you finish working with the list in order to prepare for the next drag/drop operation.
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
       _FINISHDROP 'If _FINISHDROP isn't called here then _TOTALDROPPEDFILES never gets reset.
   END IF

   _LIMIT 30
LOOP
```
  


#### SEE ALSO
* [_ACCEPTFILEDROP](./_ACCEPTFILEDROP.md) , [_TOTALDROPPEDFILES](./_TOTALDROPPEDFILES.md) , [_DROPPEDFILE](./_DROPPEDFILE.md)
* [_FILEEXISTS](./_FILEEXISTS.md) , [_DIREXISTS](./_DIREXISTS.md)
