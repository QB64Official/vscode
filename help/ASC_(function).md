## ASC (function)
---
<blockquote>

### The ASC function returns the ASCII code number of a certain STRING text character.

</blockquote>

#### SYNTAX

<blockquote>

`code% = ASC ( text$ [, position% ])`

</blockquote>

#### DESCRIPTION

<blockquote>

* The text$ parameter must have a length of at least 1 byte or an error occurs.
* In QB64 only the optional position% parameter specifies the character in a string to be returned. Must be greater than 0.
* If the optional position% parameter is omitted, [ASC](./ASC.md) will return the ASCII code of the first character.
* ASCII code  values returned range from 0 to 255.
* In QB64 , the [ASC](./ASC.md) function reads string byte positions about 5 times faster than MID$ when parsing strings character wise. See MID$ Example 2 .


</blockquote>

#### SEE ALSO

<blockquote>

* Featured in our "Keyword of the Day" series
* [ASC](./ASC.md)
* [_KEYHIT](./_KEYHIT.md) , [_KEYDOWN](./_KEYDOWN.md)
* MID$ , MID$ (function)
* CHR$ , INKEY$
* [VAL](./VAL.md) , [STRING](./STRING.md)$
* ASCII , [_MAPUNICODE](./_MAPUNICODE.md)
* Scancodes

</blockquote>
