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


## [INSTR](INSTR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/INSTR)
---
<blockquote>

### The INSTR function searches for the first occurence of a search STRING within a base string and returns the position it was found.

</blockquote>

#### SYNTAX

<blockquote>

`position% = INSTR ([ start% ,] baseString$ , searchString$ )`

</blockquote>

#### PARAMETERS

<blockquote>


* The optional literal or variable [INTEGER](INTEGER.md) start% indicates where in the baseString$ the search must start.
* The baseString$ is a literal or variable [STRING](STRING.md) value to be searched for an exact match including letter cases .
* The searchString$ is a literal or variable [STRING](STRING.md) value being searched.
</blockquote>

#### DESCRIPTION

<blockquote>


* The function returns the position% in the baseString$ where the searchString$ was found.
* position% will be 0 if the search found no matches in the base string.
* [INSTR](INSTR.md) returns 0 if an empty baseString$ is passed, and returns 1 with an empty searchString$ .
* The start% position is useful when making multiple searches in the same string. See the example below.
* The searchString$ should be smaller or equal in length to the baseString$ , or 0 is returned.
* Non-zero position% return values can be used as a new start position by adding 1 to re-search the base string. See the example below.
* In a loop, [INSTR](INSTR.md) can search an entire file for occurences of certain words. See the [MID&dollar;](MID&dollar;.md) statement example.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Reading more than one instance of a word in a string using the INSTR return value as the start value plus 1.
```vb
text$ = "The cats and dogs where playing, even though dogs don't like cats."
DO
findcats% = INSTR(findcats% + 1, text$, "cats") ' find another occurance after
IF findcats% THEN PRINT "There is 'cats' in the string at position:"; findcats%
LOOP UNTIL findcats% = 0

findmonkey% = INSTR(text$, "monkeys")  ' find any occurance?
PRINT findmonkey%; "'monkeys' were found so it returned:"; findmonkey%
```
  
<br>

```vb
There is 'cats' in the string at position: 5
There is 'cats' in the string at position: 62
0 'monkeys' were found so INSTR returned: 0
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_INSTRREV](INSTRREV.md) , [MID&dollar;](MID&dollar;.md) (function)
* [LEFT&dollar;](LEFT&dollar;.md) , [RIGHT&dollar;](RIGHT&dollar;.md)
* [LCASE&dollar;](LCASE&dollar;.md) , [UCASE&dollar;](UCASE&dollar;.md)
* [STRING](STRING.md) , [INTEGER](INTEGER.md)
</blockquote>
