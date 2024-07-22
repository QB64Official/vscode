## PALETTE USING
---
<blockquote>

### The PALETTE USING statement sets all RGB screen color intensities using values from an array .

</blockquote>

#### SYNTAX

<blockquote>

`PALETTE USING array%( startIndex% )`

</blockquote>

#### DESCRIPTION

<blockquote>

* The array holds the RGB color value using the color value as red% + 256 * green% + 65536 * blue% .
	* Color intensities range from 0 to 63.
* startIndex% indicates the index in the array from which the statement should start reading. The statement will read all color attributes available in that [SCREEN](./SCREEN.md) mode. The number of values required in the array is listed below:


</blockquote>

#### EXAMPLES

<blockquote>

```vb
Screen mode       Attributes       Colors         Values
                  0              0 - 15         0 - 63           16
                  1              0 - 3          0 - 3             4
                  2              0 - 1          0 - 1             2
                  7              0 - 15         0 - 15           16
                  8              0 - 15         0 - 15           16
                  9              0 - 15         0 - 63           16
                 10              0 - 3          0 - 8             4
                 11              0 - 1          0 - 1             2
                 12              0 - 15         0 - 262,143      16
                 13              0 - 15         0 - 263,143     256
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [PALETTE](./PALETTE.md) , [COLOR](./COLOR.md)
* [_PALETTECOLOR](./_PALETTECOLOR.md)
* [SCREEN](./SCREEN.md)

</blockquote>
