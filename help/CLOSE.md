## CLOSE
---

### CLOSE closes an open file or port using the number(s) assigned in an OPEN statement.

#### SYNTAX

`CLOSE [ fileNumber [, ...]]`

#### PARAMETERS
* fileNumber indicates the file or list of file numbers to close. When not specified, all open files are closed.


#### DESCRIPTION
* A file must be closed when changing to another file mode.
* [CLOSE](./CLOSE.md) files when they are no longer needed, in order to save memory.
* Files cannot be opened in the same [OPEN](./OPEN.md) mode using another number until the first one is closed.
* Use holding variables for each file number returned by [FREEFILE](./FREEFILE.md) so that the file reference is known.
* Will not return an error if a filenumber is already closed or was never opened. It does not verify that a file was closed.
* [CLEAR](./CLEAR.md) can be used to close all open files.
* [CLOSE](./CLOSE.md) can also be used to close an open TCP/IP or HTTP connection using a handle returned by QB64 .


#### SEE ALSO
* [OPEN](./OPEN.md) , [OPEN](./OPEN.md) [COM](./COM.md)
* [_OPENCLIENT](./_OPENCLIENT.md) , [_OPENHOST](./_OPENHOST.md)
* [_OPENCONNECTION](./_OPENCONNECTION.md)
* [_SNDCLOSE](./_SNDCLOSE.md)
