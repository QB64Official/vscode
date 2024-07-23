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


## [_ANDALSO](ANDALSO.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ANDALSO)
---
<blockquote>

### _ANDALSO is a boolean logical operator that performs short-circuiting logical conjunction on two expressions.

</blockquote>

#### SYNTAX

<blockquote>

`result = firstvalue _ANDALSO secondvalue`

</blockquote>

#### DESCRIPTION

<blockquote>


* A logical operation is said to be short-circuiting if the compiled code can bypass the evaluation of one expression depending on the result of another expression.
* If the result of the first expression evaluated determines the final result of the operation, there is no need to evaluate the second expression, because it cannot change the final result.
* Short-circuiting can improve performance if the bypassed expression is complex, or if it involves procedure calls.
* If both expressions evaluate to true, result is true.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: AND versus _ANDALSO
```vb
DIM AS LONG index, values(1 TO 10), v

FOR index = 1 TO 10
values(index) = RND * 255
NEXT index

' value of index is now > 10

PRINT "Trying _ANDALSO"

' _ANDALSO performs short-circuiting logical conjunction and hence the GetArrayValue check is completely bypassed
IF index >= 1 _ANDALSO index <= 10 _ANDALSO GetArrayValue(values(), index, v) THEN
PRINT "_ANDALSO: Value ="; v
ELSE
PRINT "_ANDALSO: Outside range."
END IF

PRINT
PRINT "Trying AND"

' AND does not performs short-circuiting logical conjunction and hence QB64-PE will throw a runtime error: Subscript out of range
IF index >= 1 AND index <= 10 AND GetArrayValue(values(), index, v) THEN
PRINT "AND: Value ="; v
ELSE
PRINT "AND: Outside range."
END IF

END

FUNCTION GetArrayValue%% (arr() AS LONG, idx AS LONG, value AS LONG)
value = arr(idx)
GetArrayValue = -1 ' return true
END FUNCTION
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_BIT](BIT.md) , &B , [_BYTE](BYTE.md)
* [AND](AND.md) , [XOR](XOR.md) , [OR](OR.md)
* [AND](AND.md) (boolean) , [XOR](XOR.md) (boolean) , [OR](OR.md) (boolean)
* [_ORELSE](ORELSE.md) , [_NEGATE](NEGATE.md)
* Binary , Boolean
* Mathematical Operations
</blockquote>
