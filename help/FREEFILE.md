## FREEFILE
---

### The FREEFILE function returns a LONG value that is an unused file access number.

#### SYNTAX

`fileHandle& = FREEFILE`

#### DESCRIPTION
* [FREEFILE](./FREEFILE.md) values should be given to unique variables so that each file has a specific variable value assigned to it.
* Once the number is assigned in an [OPEN](./OPEN.md) statement, the file number can later be used to read, write or [CLOSE](./CLOSE.md) that file.
* File numbers CLOSEd are made available to [FREEFILE](./FREEFILE.md) for reuse immediately.
* [FREEFILE](./FREEFILE.md) returns are normally sequential starting with 1. Only file numbers in use will not be returned.
* [OPEN](./OPEN.md) each file number after each [FREEFILE](./FREEFILE.md) return or the values returned may be the same.


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* [GET](./GET.md) , [PUT](./PUT.md) , [CLOSE](./CLOSE.md)
