## SEEK (function)
---
<blockquote>

### The SEEK function returns the byte or record position in a file, which is read or written next.

</blockquote>

#### SYNTAX

<blockquote>

`byte = SEEK ( filenumber& )`

</blockquote>

#### PARAMETERS

<blockquote>

* filenumber& is the number of an [OPEN](./OPEN.md) file in any mode.
* In [RANDOM](./RANDOM.md) files [SEEK](./SEEK.md) returns the record position to read or write.
* In [BINARY](./BINARY.md) or sequencial files [SEEK](./SEEK.md) returns the byte position to read or write (first byte = 1).
* Since the first file position is 1 it may require adding one to an offset value when documentation uses that position as 0.
* Devices that do not support [SEEK](./SEEK.md) (SCRN, CONS, KBRD, COMn and LPTn) return 0.

</blockquote>

#### SEE ALSO

<blockquote>

* [SEEK](./SEEK.md) , [LOC](./LOC.md)
* [GET](./GET.md) , [PUT](./PUT.md)

</blockquote>
