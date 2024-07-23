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


## [MID\$ (function)](MID\$_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/MID%24%20%28function%29)
---
<blockquote>

### The MID$ function returns a portion of a STRING .

</blockquote>

#### SYNTAX

<blockquote>

`portion$ = MID$ ( stringValue$ , startPosition% [, bytes% ])`

</blockquote>

#### PARAMETERS

<blockquote>


* stringValue$ can be any literal or variable non-empty [STRING](STRING.md) value. Use [LEN](LEN.md) to check the length of a string.
* startPosition% designates the non-zero position of the first character to be returned by the function.
* bytes% (optional) tells the function how many characters to return including the first character at startPosition% .
</blockquote>

#### DESCRIPTION

<blockquote>


* When the bytes% value is not passed, the function returns the remainder of the string from the starting character position.
* Number of character bytes% should be within the string's length from the start position, but will only return the string's remainder when exceeded.
* If the bytes% value is 0 or the startPosition% is 0 or greater than the length of the string, an empty string is returned (no error is triggered).
* In QB64 , the [ASC](ASC.md) (function) reads string byte positions about 5 times faster than [MID&dollar;](MID&dollar;.md) when parsing strings character wise. See Example 2 below.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
PRINT TIME$

hour$ = LEFT$(TIME$, 2)
minutes$ = MID$(TIME$, 4, 2) ' skip hours and the colon (first 3 characters)

PRINT "hour = "; hour$; ": minutes = "; minutes$
```
  
<br>

```vb
11:23:30
hour = 11: minutes = 23
```
  
<br>

```vb
_TITLE "String Speed Test"
DEFLNG A-Z

'First let's build a string for testing.
Limit = 100000 'the size of the string
LoopCount = 1000 'the number of times we want to deconstruct it

FOR i = 1 TO Limit
t$ = t$ + CHR$(RND * 255)
NEXT

'now for some times

t1# = TIMER
FOR j = 1 TO LoopCount
FOR i = 1 TO Limit
m$ = MID$(t$, i, 1)
NEXT
NEXT
t2# = TIMER
FOR j = 1 TO LoopCount
FOR i = 1 TO Limit
m = ASC(t$, i)
NEXT
NEXT

t3# = TIMER
$CHECKING:OFF
DIM m AS _MEM, m1 AS STRING * 1, m2 AS _UNSIGNED _BYTE
m = _MEMNEW(Limit) 'create new memory space for string
_MEMPUT m, m.OFFSET, t$ 'put string t$ into memory space
FOR j = 1 TO LoopCount
FOR i = 1 TO Limit
_MEMGET m, m.OFFSET + i - 1, m1
NEXT
NEXT
t4# = TIMER
FOR j = 1 TO LoopCount
FOR i = 1 TO Limit
_MEMGET m, m.OFFSET + i - 1, m2
NEXT
NEXT
t5# = TIMER

'results

PRINT USING "##.###### seconds for MID$"; t2# - t1#
PRINT USING "##.###### seconds for ASC"; t3# - t2#
PRINT USING "##.###### seconds for _MEMGET String"; t4# - t3#
PRINT USING "##.###### seconds for _MEMGET Byte"; t5# - t4#
```
  
<br>

```vb
6.593750 seconds for MID$
1.044922 seconds for ASC
0.494141 seconds for _MEMGET String
0.494141 seconds for _MEMGET Byte
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [MID&dollar;](MID&dollar;.md)
* [ASC](ASC.md) , [ASC](ASC.md) (function)
* [LEFT&dollar;](LEFT&dollar;.md) , [RIGHT&dollar;](RIGHT&dollar;.md)
* [LTRIM&dollar;](LTRIM&dollar;.md) , [RTRIM&dollar;](RTRIM&dollar;.md)
* [INSTR](INSTR.md) , [LEN](LEN.md)
* [_MEMPUT](MEMPUT.md) , [_MEMGET](MEMGET.md)
</blockquote>
