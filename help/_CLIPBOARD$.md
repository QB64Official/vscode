## _CLIPBOARD$
---

### The _CLIPBOARD$ statement copies the STRING value into the system clipboard.

#### SYNTAX

`_CLIPBOARD$ = string_expression$`

#### DESCRIPTION
* string_expression$ is the string value to be sent to the clipboard.
* The string value will replace everything previously in the clipboard.
* Assemble long text into one string variable value before using this statement.
* Add CHR$(13) + CHR$(10) CRLF characters to move to a new clipboard line.
* When copying text files, end line CRLF characters 13 and 10 do not have to be added.
* Numerical values can be converted to strings using STR$ , _MK$ , MKI$ , MKL$ , MKS$ , MKD$ , _BIN$ , HEX$ or OCT$ .
* The clipboard can be used to copy, paste and communicate between running programs.


#### EXAMPLES
```vb
DIM CrLf AS STRING * 2 'define as 2 byte STRING
CrLf = CHR$(13) + CHR$(10) 'carriage return & line feed

_CLIPBOARD$ = "This is line 1" + CrLf + "This is line 2"
PRINT _CLIPBOARD$ 'display what is in the clipboard
```
  
```vb
This is line 1
This is line 2
```
  


#### SEE ALSO
* Featured in our "Keyword of the Day" series
* _CLIPBOARD$ (function)
* [_CLIPBOARDIMAGE](./_CLIPBOARDIMAGE.md) (function) , [_CLIPBOARDIMAGE](./_CLIPBOARDIMAGE.md) (statement)
* CHR$ , ASCII (code table)
