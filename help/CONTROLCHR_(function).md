## _CONTROLCHR (function)
---
<blockquote>

### The _CONTROLCHR function returns the current state of the _CONTROLCHR statement as -1 when OFF and 0 when ON.

</blockquote>

#### SYNTAX

<blockquote>

`status% = _CONTROLCHR`

</blockquote>

#### DESCRIPTION

<blockquote>

* The function requires no parameters.
* Default return is 0 when the [_CONTROLCHR](./_CONTROLCHR.md) statement has never been used previous to a function read.
* When the statement has been use to turn [OFF](./OFF.md) control characters, the characters can be printed as text without screen formatting.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

* Featured in our "Keyword of the Day" series
* [_CONTROLCHR](./_CONTROLCHR.md)
* CHR$ , [ASC](./ASC.md) (function)
* INKEY$ , [_KEYHIT](./_KEYHIT.md)
* ASCII (codes)

</blockquote>
