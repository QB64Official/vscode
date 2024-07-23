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


## [_ORELSE](ORELSE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ORELSE)
---
<blockquote>

### _ORELSE is a boolean logical operator that performs short-circuiting inclusive logical disjunction on two expressions.

</blockquote>

#### SYNTAX

<blockquote>

`result = firstvalue _ORELSE secondvalue`

</blockquote>

#### DESCRIPTION

<blockquote>


* A logical operation is said to be short-circuiting if the compiled code can bypass the evaluation of one expression depending on the result of another expression.
* If the result of the first expression evaluated determines the final result of the operation, there is no need to evaluate the second expression, because it cannot change the final result.
* Short-circuiting can improve performance if the bypassed expression is complex, or if it involves procedure calls.
* If either or both expressions evaluate to true, result is true.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: OR versus _ORELSE
```vb
PRINT "Trying _ORELSE"

' _ORELSE performs short-circuiting logical conjunction and hence for "strawberry", only isFruit() is called
IF isFruit("strawberry") _ORELSE isRed("strawberry") _ORELSE isSeasonal("strawberry") THEN
PRINT "Probably a strawberry."
ELSE
PRINT "Certainly not a strawberry."
END IF

PRINT
PRINT "Trying OR"

' OR does not performs short-circuiting logical conjunction and hence all is***() functions are called
IF isFruit("strawberry") OR isRed("strawberry") OR isSeasonal("strawberry") THEN
PRINT "Probably a strawberry."
ELSE
PRINT "Certainly not a strawberry."
END IF

END

FUNCTION isFruit%% (fruit AS STRING)
PRINT "isFruit() called!"
isFruit = (fruit = "strawberry")
END FUNCTION

FUNCTION isRed%% (fruit AS STRING)
PRINT "isRed() called!"
isRed = (fruit = "strawberry")
END FUNCTION

FUNCTION isSeasonal%% (fruit AS STRING)
PRINT "isSeasonal() called!"
isSeasonal = (fruit = "strawberry")
END FUNCTION
```
  
<br>

```vb
Trying _ORELSE
isFruit() called!
Probably a strawberry.

Trying OR
isFruit() called!
isRed() called!
isSeasonal() called!
Probably a strawberry.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [_BIT](BIT.md) , &B , [_BYTE](BYTE.md)
* [AND](AND.md) , [XOR](XOR.md) , [OR](OR.md)
* [AND](AND.md) (boolean) , [XOR](XOR.md) (boolean) , [OR](OR.md) (boolean)
* [_ANDALSO](ANDALSO.md) , [_NEGATE](NEGATE.md)
* Binary , Boolean
* Mathematical Operations
</blockquote>
