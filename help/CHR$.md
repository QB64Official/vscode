<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [CHR\$](CHR\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CHR%24)
---
<blockquote>

### The CHR$ function returns the character associated with a certain character code as a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`result$ = CHR$ ( code% )`

</blockquote>

#### DESCRIPTION

<blockquote>


* Valid ASCII code% numbers range from 0 to 255.
* The character code of a character can be found using the [ASC](ASC.md) (function) .
* Some control codes below 32 will not [PRINT](PRINT.md) or will move the screen cursor, unless [_CONTROLCHR](CONTROLCHR.md) [OFF](OFF.md) is used.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Outputs the characters of several character codes:
```vb
PRINT CHR$(65); CHR$(65 + 32)
PRINT CHR$(66); CHR$(66 + 32)
```
  
<br>

```vb
Aa
Bb
```
  
<br>


<div class="explanation">Explanation: 65 is the ASCII code for "A" and 65 + 32 is the ASCII code for "a". 66 is the ASCII code for "B" and 66 + 32 is the ASCII code for "b"</div>



##### Example 2: To cut down on typing CHR\$(???) all day, define often used characters as variables such as Q\$ = CHR\$(34) as shown.
```vb
DIM Q AS STRING * 1   'define as one byte string(get rid of $ type suffix too)
Q = CHR$(34)          'Q will now represent the elusive quotation mark in a string

PRINT "This text uses "; Q; "quotation marks"; Q; " that could have caused a syntax error!"
```
  
<br>

```vb
This text uses "quotation marks" that could have caused a syntax error!
```
  
<br>



##### Example 3: Using ASC and CHR\$ to encrypt a text file size up to 32K bytes
```vb
OPEN FileName$ FOR INPUT AS #1 ' FileName to be encrypted
IF LOF(1) <= 32000 THEN Text$ = INPUT$(LOF(1), 1) ' get Text as one string
CLOSE #1
Send$ = "" ' clear value
FOR i = 1 TO LEN(Text$)
Letter$ = MID$(Text$, i, 1) ' get each character in the text
Code = ASC(Letter$)
IF (Code > 64 AND Code < 91) OR (Code > 96 AND Code < 123) THEN
Letter$ = CHR$(Code + 130) ' change letter's ASCII character by 130
END IF
Send$ = Send$ + Letter$ ' reassemble string with just letters encrypted
NEXT i
OPEN FileName$ FOR OUTPUT AS #1 ' erase FileName to be encrypted
PRINT #1, Send$   ' Text as one string
CLOSE #1
```
  
<br>



##### Example 4: Decrypting the above encrypted text file (32K byte file size limit).
```vb
OPEN FileName$ FOR INPUT AS #1       ' FileName to be decrypted
Text$ = INPUT$(LOF(1), 1)         ' open Text as one string
CLOSE #1
Send$ = ""
FOR i = 1 TO LEN(Text$)
Letter$ = MID$(Text$, i, 1)
Code = ASC(Letter$)
IF (Code > 194 AND Code < 221) OR (Code > 226 AND Code < 253) THEN
Letter$ = CHR$(Code - 130)  ' change back to a Letter character
END IF
Send$ = Send$ + Letter$ ' reassemble string as normal letters
NEXT i
OPEN FileName$ FOR OUTPUT AS #1 ' Erase file for decrypted text
PRINT #1, Send$ ' place Text as one string
CLOSE #1
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [ASC](ASC.md) , [ASC](ASC.md) (function)
* [INKEY&dollar;](INKEY&dollar;.md)
* ASCII character codes
</blockquote>
