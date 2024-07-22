## OPTION _EXPLICITARRAY
---
<blockquote>

### OPTION _EXPLICITARRAY instructs the compiler to require arrays to be properly dimensioned with DIM or REDIM before first use. However, it doesn't require regular variables to be declared.

</blockquote>

#### SYNTAX

<blockquote>

`OPTION _EXPLICITARRAY`

</blockquote>

#### DESCRIPTION

<blockquote>

* Normally statements like x(2) = 3 will implicitly create an array x(). [OPTION](./OPTION.md) [_EXPLICITARRAY](./_EXPLICITARRAY.md) requires proper dimensioning for the array, helping to catch mistyped array and function names.
* Unlike [OPTION](./OPTION.md) [_EXPLICIT](./_EXPLICIT.md) , simple variables can still be used without a declaration. Example: i = 1


</blockquote>

#### SEE ALSO

<blockquote>

* [OPTION](./OPTION.md) [_EXPLICIT](./_EXPLICIT.md)
* [DIM](./DIM.md) , [REDIM](./REDIM.md)
* [SHARED](./SHARED.md)
* [STATIC](./STATIC.md)

</blockquote>
