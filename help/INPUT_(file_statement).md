## INPUT (file statement)
---
<blockquote>

### The INPUT # file or port statement reads sequential data using one variable or a comma separated list of matching variable types.

</blockquote>

#### SYNTAX

<blockquote>

`INPUT # fileNumber& , variable1 [, variable2 , ..., variableN ]`

</blockquote>

#### PARAMETERS

<blockquote>

* fileNumber& is a positive [LONG](./LONG.md) integer value used to [OPEN](./OPEN.md) the file [FOR](./FOR.md) [INPUT](./INPUT.md) mode.
* The type of the variable used defines the value or list of values to be returned from the file. Numeric types must match the values returned.
* As reflected in the syntax you can list a number of variables with different types seperated by a comma and they will hold the values in the file (keep in mind that the information in the file should match the variable types used).

</blockquote>

#### DESCRIPTION

<blockquote>

* The file number can be determined by the programmer or be an unused number returned by the [FREEFILE](./FREEFILE.md) function.
* Variable types must match the numerical types being read. [STRING](./STRING.md) variables can return unquoted numeric values.
* Leading or trailing spaces of [STRING](./STRING.md) values must be inside of quotes. [WRITE](./WRITE.md) # writes strings inside of quotes automatically. [PRINT](./PRINT.md) # removes quotes.
* [INPUT](./INPUT.md) # will read each value until it encounters a comma for the next value in a list.
* Use the [EOF](./EOF.md) function to avoid reading past the end of a file.
* Files created by [WRITE](./WRITE.md) # usually have the same number of values on each file line. If [INPUT](./INPUT.md) reads more or less values, it may read beyond the end of file or return bad data.
* Use the [LINE](./LINE.md) [INPUT](./INPUT.md) (file statement) for files created with [PRINT](./PRINT.md) # or [PRINT](./PRINT.md) #, [USING](./USING.md).
* [INPUT](./INPUT.md) can read Excel CSV files, but beware of unquoted text or numerical values containing commas.


</blockquote>

#### SEE ALSO

<blockquote>

* [INPUT](./INPUT.md) (file mode) , [LINE](./LINE.md) [INPUT](./INPUT.md) # , [INPUT](./INPUT.md)$ (file input)
* [INPUT](./INPUT.md) , [LINE](./LINE.md) [INPUT](./INPUT.md) , [INPUT](./INPUT.md)$ (keyboard input)
* [PRINT](./PRINT.md) # , [PRINT](./PRINT.md) #, [USING](./USING.md)
* [GET](./GET.md) #

</blockquote>
