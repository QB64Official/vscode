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


## [LEFT\$](LEFT\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/LEFT%24)
---
<blockquote>

### The LEFT$ string function returns a number of characters from the left of a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`LEFT$ ( stringValue$ , numberOfCharacters% )`

</blockquote>

#### PARAMETERS

<blockquote>


* stringValue$ can be any [STRING](STRING.md) literal or variable.
* numberOfCharacters% [INTEGER](INTEGER.md) determines the number of characters to return from left of string.
</blockquote>

#### DESCRIPTION

<blockquote>


* If the number of characters exceeds the string length the entire string is returned. Use [LEN](LEN.md) to determine a string's length.
* [LEFT&dollar;](LEFT&dollar;.md) returns always start at the first character of the string, even if it's a space. [LTRIM&dollar;](LTRIM&dollar;.md) can remove leading spaces.
* numberOfCharacters% cannot be a negative value.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Getting the left portion of a string value.
```vb
name$ = "Tom Williams"

First$ = LEFT$(name$, 3)

PRINT First$
```
  
<br>

```vb
Tom
```
  
<br>


<div class="explanation">Note: The MID\$ statement can only substitute words or sections of the original string length. It cannot change the string length.</div>



##### Example 2: A replace function using LEFT\$ and RIGHT\$ with INSTR to insert a different length word into an existing string.
```vb
text$ = "This is my sentence to change my words."
PRINT text$
oldword$ = "my"
newword$ = "your"

x = Replace(text$, oldword$, newword$)
IF x THEN PRINT text$; x

END

FUNCTION Replace (text$, old$, new$) 'can also be used as a SUB without the count assignment
DO
find = INSTR(start + 1, text$, old$) 'find location of a word in text
IF find THEN
count = count + 1
first$ = LEFT$(text$, find - 1) 'text before word including spaces
last$ = RIGHT$(text$, LEN(text$) - (find + LEN(old$) - 1)) 'text after word
text$ = first$ + new$ + last$
END IF
start = find
LOOP WHILE find
Replace = count 'function returns the number of replaced words. Comment out in SUB
END FUNCTION
```
  
<br>

```vb
This is my sentence to change my words.
This is your sentence to change your words.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [RIGHT&dollar;](RIGHT&dollar;.md) , [MID&dollar;](MID&dollar;.md) (function)
* [LTRIM&dollar;](LTRIM&dollar;.md) , [RTRIM&dollar;](RTRIM&dollar;.md)
* [INSTR](INSTR.md) , [LEN](LEN.md)
</blockquote>
