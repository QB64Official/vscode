## OPTION BASE
---
<blockquote>

### The OPTION BASE statement is used to set the default lower bound of arrays.

</blockquote>

#### SYNTAX

<blockquote>

`OPTION BASE {0|1}`

</blockquote>

#### DESCRIPTION

<blockquote>

* This statement affects array declarations where the lower bound of a dimension is not specified.
* When used, [OPTION](./OPTION.md) [BASE](./BASE.md) must come before any array declarations ( [DIM](./DIM.md) ) to be affected.
* By default, the lower bound for arrays is zero, and may be changed to one using the statement.
* Otherwise, arrays will be dimensioned from element 0 if you [DIM](./DIM.md) just the upper bounds.
* You can also set other array boundaries by using [TO](./TO.md) in the [DIM](./DIM.md) declaration such as [DIM](./DIM.md) array(5 [TO](./TO.md) 10)


</blockquote>

#### SEE ALSO

<blockquote>

* Arrays , [LBOUND](./LBOUND.md) , [UBOUND](./UBOUND.md)
* [DIM](./DIM.md) , [REDIM](./REDIM.md) , [STATIC](./STATIC.md) , [COMMON](./COMMON.md)

</blockquote>
