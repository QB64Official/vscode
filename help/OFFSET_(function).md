## _OFFSET (function)
---
<blockquote>

### The _OFFSET function returns the memory offset of/within a given variable.

</blockquote>

#### SYNTAX

<blockquote>

`offset%& = _OFFSET ( variable )`

</blockquote>

#### DESCRIPTION

<blockquote>

* The variable parameter can be any type of numerical or string variable name.
* API [LIBRARY](./LIBRARY.md) parameter or type names may include lp, ptr or p which designates them as a pointer type.
* [_OFFSET](./_OFFSET.md) function return values should be stored in [_OFFSET](./_OFFSET.md) type variables. As no other variable type is 'elastic' like [_OFFSET](./_OFFSET.md) , there can be no guarantee that any other variable type can hold the value of an [_OFFSET](./_OFFSET.md).
* Returns the memory offset of variables, user-defined-types & elements, arrays & indices and the base offset of STRINGs .
* Offset values are currently only useful when used in conjunction with [_MEM](./_MEM.md) or [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md) procedures.
* OFFSET values are used as a part of the [_MEM](./_MEM.md) variable type in QB64; variable .OFFSET returns or sets the current position in memory.
* Warning: QB64 variable length strings can move about in memory at any time. If you get the [_OFFSET](./_OFFSET.md) of a variable length sting on one line and use it on the next it may not be there anymore. To be safe, move variable length strings into fixed length strings first.


</blockquote>

#### SEE ALSO

<blockquote>

* [_OFFSET](./_OFFSET.md)
* [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md)
* [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md)
* Using [_OFFSET](./_OFFSET.md)

</blockquote>
