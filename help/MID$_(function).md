## MID$ (function)
---
<blockquote>

### The MID$ function returns a portion of a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`portion$ = MID$ ( stringValue$ , startPosition% [, bytes% ])`

</blockquote>

#### PARAMETERS

<blockquote>

* stringValue$ can be any literal or variable non-empty [STRING](./STRING.md) value. Use [LEN](./LEN.md) to check the length of a string.
* startPosition% designates the non-zero position of the first character to be returned by the function.
* bytes% (optional) tells the function how many characters to return including the first character at startPosition% .

</blockquote>

#### DESCRIPTION

<blockquote>

* When the bytes% value is not passed, the function returns the remainder of the string from the starting character position.
* Number of character bytes% should be within the string's length from the start position, but will only return the string's remainder when exceeded.
* If the bytes% value is 0 or the startPosition% is 0 or greater than the length of the string, an empty string is returned (no error is triggered).
* In QB64 , the [ASC](./ASC.md) (function) reads string byte positions about 5 times faster than MID$ when parsing strings character wise. See Example 2 below.


</blockquote>

#### SEE ALSO

<blockquote>

* MID$
* [ASC](./ASC.md) , [ASC](./ASC.md) (function)
* LEFT$ , RIGHT$
* LTRIM$ , RTRIM$
* [INSTR](./INSTR.md) , [LEN](./LEN.md)
* [_MEMPUT](./_MEMPUT.md) , [_MEMGET](./_MEMGET.md)

</blockquote>
