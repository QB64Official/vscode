## CONST
---

### The CONST statement globally defines one or more named numeric or string values which will not change while the program is running.

#### SYNTAX

`CONST constantName = value [, ...]`

#### PARAMETERS
* constantName is the constant name or list of names assigned by the programmer.
* value is the value to initialize the global constant which cannot change once defined.
	* If constantName specifies a numeric type, value must be a numeric expression containing literals and other constants.
	* If constantName specifies a string type, the value must be a literal value.


#### DESCRIPTION
* The constantName does not have to include a type suffix. The datatype is automatically infered by the compiler using the value .
* Constant values cannot reference a variable, [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) return values when defined.
	* The exception to the above are color functions [_RGB32](./_RGB32.md) and [_RGBA32](./_RGBA32.md) , which can be used in a [CONST](./CONST.md) statement. See Example 2 below.
* Constants cannot be reassigned values. They retain the same value throughout all of the program procedures.
* Constants defined in module-level code have shared scope, so they can also be used in [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) procedures.
* Constants defined in [SUB](./SUB.md) or [FUNCTION](./FUNCTION.md) procedures are local to those procedures.
* [CLEAR](./CLEAR.md) will not affect or change constant values.


#### EXAMPLES
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
  
```vb
Enter the radius of a circle or zero to quit? 10
The circumference of the circle is 62.83186
The area of the circle is 314.1593

Enter the radius of a circle or zero to quit? 123.456
The circumference of the circle is 775.697
The area of the circle is 47882.23

Enter the radius of a circle or zero to quit? 0
```
  
##### Example 2 : Using _RGB32 to set a constant's value.
```vb
CONST Red = _RGB32(255,0,0)

COLOR Red
PRINT "Hello World"
```
  


#### SEE ALSO
* [DIM](./DIM.md) , [SHARED](./SHARED.md)
* [STATIC](./STATIC.md) , [COMMON](./COMMON.md)
* [_PI](./_PI.md) , [_RGB32](./_RGB32.md) , [_RGBA32](./_RGBA32.md)
* Windows 32 API constant values
