# LOCK

The LOCK statement restricts access to parts of a file by other programs or processes.

  

## Syntax

LOCK [#]*fileNumber%*
LOCK [#]*fileNumber%*, *record&*
LOCK [#]*fileNumber%*, [*firstRecord&*] TO *lastRecord&*
  

## Description

* *fileNumber%* is the file number of the file to lock.
* In the first syntax, the entire file is locked.
* In the second syntax, *record&* is the record number of the file to lock.
* In the third syntax, the records or bytes in the range [*firstRecord&*,*lastRecord&*] are locked. If *firstRecord&* is omitted, it is assumed to be one (the first record or byte).
* For files opened in [BINARY](BINARY.md) mode, each record corresponds to a single byte.
* LOCK and [UNLOCK](UNLOCK.md) statements are always used in pairs and each statement must match the other one.
* Files must be unlocked using [UNLOCK](UNLOCK.md) before other programs can access them, and before the file is closed.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

### QBasic/QuickBASIC

* Required DOS **SHARED.EXE** to be run for QBasic to use networking access modes. No longer required.

  

## See also

* [UNLOCK](UNLOCK.md)
* [OPEN](OPEN.md)
* [ACCESS](ACCESS.md)

  
