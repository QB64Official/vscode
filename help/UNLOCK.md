## UNLOCK
---

### This statement opens access to parts or all of a file to other programs and network users.

#### SYNTAX

`UNLOCK [#] fileNumber%`

#### DESCRIPTION
* fileNumber% is the file number of the file to unlock.
* In the first syntax, the entire file is unlocked.
* In the second syntax, record& is the record number of the file to unlock.
* In the third syntax, the records or bytes in the range [ firstRecord& , lastRecord& ] are unlocked. If firstRecord& is omitted, it is assumed to be the first record or byte.
* For files opened in [BINARY](./BINARY.md) mode, each record corresponds to a single byte.
* [LOCK](./LOCK.md) and [UNLOCK](./UNLOCK.md) statements are always used in pairs and each statement must match the other one.
* Files must be unlocked before other programs can access them, and before the file is closed.
* Keyword not supported in Linux or macOS versions


#### SEE ALSO
* [LOCK](./LOCK.md)
* [OPEN](./OPEN.md)
* [ACCESS](./ACCESS.md)
