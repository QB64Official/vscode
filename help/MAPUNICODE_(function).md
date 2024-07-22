## _MAPUNICODE (function)
---
<blockquote>

### The _MAPUNICODE function returns the Unicode (UTF-32) code point value of a mapped ASCII character code.

</blockquote>

#### SYNTAX

<blockquote>

`utfValue& = _MAPUNICODE ( asciiCode% )`

</blockquote>

#### DESCRIPTION

<blockquote>

* UTF-32 values have 4-byte encoding so the return variable should be [LONG](./LONG.md) .
* The asciiCode% can be any [INTEGER](./INTEGER.md) value from 0 to 255.
* Returns can be used to verify or catalog the present Unicode mapping.
* The function returns Unicode values for the control characters, CHR$(127) and extended characters without mapping them first.


</blockquote>

#### SEE ALSO

<blockquote>

* Featured in our "Keyword of the Day" series
* [_MAPUNICODE](./_MAPUNICODE.md)
* Unicode , Code Pages
* ASCII , CHR$ , [ASC](./ASC.md) (function)
* Text Using Graphics

</blockquote>
