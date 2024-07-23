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


## [_NEGATE](NEGATE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_NEGATE)
---
<blockquote>

### _NEGATE is a boolean logical operator that will change a false statement to a true one and vice-versa.

</blockquote>

#### SYNTAX

<blockquote>

`result = _NEGATE value`

</blockquote>

#### DESCRIPTION

<blockquote>


* Unlike [NOT](NOT.md) , which evaluates a value and returns the bitwise opposite, [_NEGATE](NEGATE.md) returns the logical opposite. Meaning that [_NEGATE](NEGATE.md) non_zero_value = 0 .
* Often called a negative logic operator, it returns the opposite of a value as true or false.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: NOT versus _NEGATE
```vb
DECLARE LIBRARY
FUNCTION isdigit& (BYVAL n AS LONG)
END DECLARE

IF NOT isdigit(ASC("1")) THEN
PRINT "NOT: 1 is not a digit."
ELSE
PRINT "NOT: 1 is a digit."
END IF

IF _NEGATE isdigit(ASC("1")) THEN
PRINT "_NEGATE: 1 is not a digit."
ELSE
PRINT "_NEGATE: 1 is a digit."
END IF

END
```
  
<br>

```vb
NOT: 1 is not a digit.
_NEGATE: 1 is a digit.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_BIT](BIT.md) , &B , [_BYTE](BYTE.md)
* [AND](AND.md) , [XOR](XOR.md) , [OR](OR.md)
* [AND](AND.md) (boolean) , [XOR](XOR.md) (boolean) , [OR](OR.md) (boolean)
* [_ANDALSO](ANDALSO.md) , [_ORELSE](ORELSE.md)
* Binary , Boolean
* Mathematical Operations
</blockquote>
