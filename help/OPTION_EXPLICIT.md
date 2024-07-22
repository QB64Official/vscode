## OPTION _EXPLICIT
---
<blockquote>

### OPTION _EXPLICIT instructs the compiler to require variable declaration with DIM , REDIM or an equivalent statement.

</blockquote>

#### SYNTAX

<blockquote>

`OPTION _EXPLICIT`

</blockquote>

#### DESCRIPTION

<blockquote>

* With [OPTION](./OPTION.md) [_EXPLICIT](./_EXPLICIT.md) you can avoid typos by having QB64 immediately warn in the Status area of new variables used without previous declaration.
* The use of [OPTION](./OPTION.md) [_EXPLICIT](./_EXPLICIT.md) does also enforce the requirement to [DIM](./DIM.md) or [REDIM](./REDIM.md) any arrays before first use, no extra [OPTION](./OPTION.md) [_EXPLICITARRAY](./_EXPLICITARRAY.md) is needed.
* Enable [OPTION](./OPTION.md) [_EXPLICIT](./_EXPLICIT.md) temporarily even if a program source file doesn't contain the directive by specifying the -e switch when compiling via command line ( qb64 -c file.bas -e ).


</blockquote>

#### SEE ALSO

<blockquote>

* Featured in our "Keyword of the Day" series
* [OPTION](./OPTION.md) [_EXPLICITARRAY](./_EXPLICITARRAY.md)
* [DIM](./DIM.md) , [REDIM](./REDIM.md)
* [SHARED](./SHARED.md)
* [STATIC](./STATIC.md)

</blockquote>
