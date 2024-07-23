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


## [CONST](CONST.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/CONST)
---
<blockquote>

### The CONST statement globally defines one or more named numeric or string values which will not change while the program is running.

</blockquote>

#### SYNTAX

<blockquote>

`CONST constantName = value [, ...]`

</blockquote>

#### PARAMETERS

<blockquote>


* constantName is the constant name or list of names assigned by the programmer.
* value is the value to initialize the global constant which cannot change once defined.
* If constantName specifies a numeric type, value must be a numeric expression containing literals and other constants.
* If constantName specifies a string type, the value must be a literal value.
</blockquote>

#### DESCRIPTION

<blockquote>


* The constantName does not have to include a type suffix. The datatype is automatically infered by the compiler using the value .
* Constant values cannot reference a variable, [SUB](SUB.md) or [FUNCTION](FUNCTION.md) return values when defined.
* The exception to the above are color functions [_RGB32](RGB32.md) and [_RGBA32](RGBA32.md) , which can be used in a [CONST](CONST.md) statement. See Example 2 below.
* Constants cannot be reassigned values. They retain the same value throughout all of the program procedures.
* Constants defined in module-level code have shared scope, so they can also be used in [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures.
* Constants defined in [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures are local to those procedures.
* [CLEAR](CLEAR.md) will not affect or change constant values.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Display the circumference and area of circles:
```vb
' Declare a numeric constant approximately equal to the ratio of a circle's
' circumference to its diameter:
CONST PI = 3.141593

' Declare some string constants:
CONST circumferenceText = "The circumference of the circle is"
CONST areaText = "The area of the circle is"

DO
INPUT "Enter the radius of a circle or zero to quit"; radius
IF radius = 0 THEN END
PRINT circumferenceText; 2 * PI * radius
PRINT areaText; PI * radius * radius ' radius squared
PRINT
LOOP
```
  
<br>

```vb
Enter the radius of a circle or zero to quit? 10
The circumference of the circle is 62.83186
The area of the circle is 314.1593

Enter the radius of a circle or zero to quit? 123.456
The circumference of the circle is 775.697
The area of the circle is 47882.23

Enter the radius of a circle or zero to quit? 0
```
  
<br>


<div class="explanation">Explanation: PI cannot change as it is a mathematical constant so it is fitting to define it as a constant. Trying to change PI will result in a calculation error.</div>



##### Example 2 : Using _RGB32 to set a constant's value.
```vb
CONST Red = _RGB32(255,0,0)

COLOR Red
PRINT "Hello World"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DIM](DIM.md) , [SHARED](SHARED.md)
* [STATIC](STATIC.md) , [COMMON](COMMON.md)
* [_PI](PI.md) , [_RGB32](RGB32.md) , [_RGBA32](RGBA32.md)
* Windows 32 API constant values
</blockquote>
