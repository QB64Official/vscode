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


## [_INSTRREV](INSTRREV.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_INSTRREV)
---
<blockquote>

### The _INSTRREV function searches for a substring inside another string, but unlike INSTR it searches from right to left.

</blockquote>

#### SYNTAX

<blockquote>

`position% = _INSTRREV ([ start% ,] baseString$ , subString$ )`

</blockquote>

#### PARAMETERS

<blockquote>


* The optional literal or variable [INTEGER](INTEGER.md) start% indicates where in the baseString$ the search must start, counted from the left.
* The baseString$ is a literal or variable [STRING](STRING.md) value to be searched for an exact match including letter cases .
* The subString$ is a literal or variable [STRING](STRING.md) value being searched.
</blockquote>

#### DESCRIPTION

<blockquote>


* The function returns the position% in the baseString$ where the subString$ was found, from right to left.
* position% will be 0 if the search found no matches in the base string.
* [_INSTRREV](INSTRREV.md) returns 0 if an empty baseString$ is passed, and returns [LEN](LEN.md) ( baseString$ ) with an empty subString$ .
* The start% position is useful when making multiple searches in the same string. See the example below.
* The subString$ should be smaller or equal in length to the baseString$ , or 0 is returned.
* A start% value of 0 or less starts search from the end of the baseString$ (same as not passing a start% parameter).

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Separating a file name from a full path.
```vb
fullPath$ = "C:\Documents and Settings\Administrator\Desktop\qb64\internal\c\libqb\os\win\libqb_1_2_000000000000.o"
file$ = MID$(fullPath$, _INSTRREV(fullPath$, "\") + 1)
PRINT file$
```
  
<br>

```vb
libqb_1_2_000000000000.o
```
  
<br>



##### Example 2: Searching for multiple instances of a substring inside a base string, going from the end to the start.
```vb
sentence$ = " This is a string full of spaces, including at start and end... "
PRINT sentence$
DO
findPrevSpace% = _INSTRREV(findPrevSpace% - 1, sentence$, SPACE$(1))
IF findPrevSpace% = 0 THEN
LOCATE 4, 1
PRINT "No more spaces"
EXIT DO
END IF

LOCATE 2, findPrevSpace%
PRINT "^"
totalSpaces = totalSpaces + 1

IF findPrevSpace% = 1 THEN
LOCATE 4, 1
PRINT "Last space found at position 1"
EXIT DO
END IF
LOOP
PRINT "Total spaces found: "; totalSpaces
```
  
<br>

```vb
This is a string full of spaces, including at start and end...
^    ^  ^ ^      ^    ^  ^       ^         ^  ^     ^   ^      ^

Last space found at position 1
Total spaces found: 13
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [MID&dollar;](MID&dollar;.md) (function) , [INSTR](INSTR.md)
* [SPACE&dollar;](SPACE&dollar;.md)
</blockquote>
