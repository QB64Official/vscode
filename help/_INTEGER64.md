## _INTEGER64
---

### _INTEGER64 is an 8 byte number type definition that can hold whole numerical values.

#### SYNTAX

`DIM variable AS _INTEGER64`

#### DESCRIPTION
* Can be used in 32 bit and 64 bit systems.
* Signed numerical values can range from -9223372036854775808 to 9223372036854775807.
* [_UNSIGNED](./_UNSIGNED.md) [_INTEGER64](./_INTEGER64.md) values range from 0 to 18446744073709551615.
* Variable type suffix is && or ~&& for [_UNSIGNED](./_UNSIGNED.md) . Suffix can also be placed after a literal or hexadecimal numerical value.
* Values can be converted to 8 byte ASCII character strings using _MK$ and back using [_CV](./_CV.md) .
* When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](./SINGLE.md) .


#### SEE ALSO
* [INTEGER](./INTEGER.md) , [LONG](./LONG.md)
* [_DEFINE](./_DEFINE.md) , [DIM](./DIM.md)
* [_UNSIGNED](./_UNSIGNED.md)
* [_CV](./_CV.md) , _MK$
* CURRENCY
* Variable Types
