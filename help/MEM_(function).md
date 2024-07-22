## _MEM (function)
---
<blockquote>

### The _MEM function returns a _MEM block referring to the largest possible continuous memory region beginning at a variable's offset.

</blockquote>

#### SYNTAX

<blockquote>

`memoryBlock = _MEM ( referenceVariable )`

</blockquote>

#### PARAMETERS

<blockquote>

* The memoryBlock created will hold the referenceVariable or array value(s), type and byte size in a separate memory area.
* The secure syntax referenceVariable is an existing variable's referenced memory block.
* The unsecure syntax's designated offset and byteSize cannot be guaranteed. Avoid if possible.

</blockquote>

#### DESCRIPTION

<blockquote>

* The memoryBlock [_MEM](./_MEM.md) type variable holds the following read-only elements: OFFSET, SIZE, [TYPE](./TYPE.md) and ELEMENTSIZE.
* All values created by memory functions MUST be freed using [_MEMFREE](./_MEMFREE.md) with a valid [_MEM](./_MEM.md) variable type.
* [_MEM](./_MEM.md) function cannot reference variable length [STRING](./STRING.md) variable values. String values must be designated as a fixed- length string.


</blockquote>

#### SEE ALSO

<blockquote>

* [_MEM](./_MEM.md)
* [_MEMNEW](./_MEMNEW.md) , [_MEMCOPY](./_MEMCOPY.md) , [_MEMFREE](./_MEMFREE.md)
* [_MEMGET](./_MEMGET.md) , [_MEMPUT](./_MEMPUT.md) , [_MEMFILL](./_MEMFILL.md)
* [_MEMIMAGE](./_MEMIMAGE.md) , [_MEMSOUND](./_MEMSOUND.md)

</blockquote>
