## LINE INPUT (file statement)
---
<blockquote>

### The LINE INPUT # file statement reads an entire line from a text file into a string variable.

</blockquote>

#### SYNTAX

<blockquote>

`LINE INPUT # fileNumber& , stringVariable$`

</blockquote>

#### PARAMETERS

<blockquote>

* fileNumber& is the [INTEGER](./INTEGER.md) number of the file previously opened with the [OPEN](./OPEN.md) statement.
* stringVariable$ holds the text line read from the file.

</blockquote>

#### DESCRIPTION

<blockquote>

* Reads a file using the fileNumber& OPENed in the [INPUT](./INPUT.md) (file mode) or [BINARY](./BINARY.md) file mode as one file line text string.
* NOTE: [LINE](./LINE.md) [INPUT](./INPUT.md) will work faster in [BINARY](./BINARY.md) mode than in [INPUT](./INPUT.md) mode.
	* Using [LINE](./LINE.md) [INPUT](./INPUT.md) # in [BINARY](./BINARY.md) mode is possible in version 1.000 and up
* Can be used with [EOF](./EOF.md) to count the number of lines of data (records) in a file using a loop.
* Use the [EOF](./EOF.md) function to avoid going past the end of a file and creating an error.
* [LINE](./LINE.md) [INPUT](./INPUT.md) # can even retain the original quotation marks in text.
* Note: QB64 will not remove CHR$(0) from the end of [LINE](./LINE.md) [INPUT](./INPUT.md) # string return values like QBasic did.


</blockquote>

#### SEE ALSO

<blockquote>

* [OPEN](./OPEN.md) , [CLOSE](./CLOSE.md)
* [INPUT](./INPUT.md) (file mode) , [INPUT](./INPUT.md) # , [INPUT](./INPUT.md)$ (file input)
* [INPUT](./INPUT.md) , [LINE](./LINE.md) [INPUT](./INPUT.md) , [INPUT](./INPUT.md)$ (keyboard input)
* [_FILEEXISTS](./_FILEEXISTS.md) , [_DIREXISTS](./_DIREXISTS.md)
* FILELIST$ (member-contributed function replacement for [FILES](./FILES.md) )

</blockquote>
