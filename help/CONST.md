# CONST

The CONST statement globally defines one or more named numeric or string values which will not change while the program is running.

  

## Syntax

CONST *constantName* = *value*[, ...]
  

## Parameters

* *constantName* is the constant name or list of names assigned by the programmer.
* *value* is the value to initialize the global constant which cannot change once defined.
	+ If *constantName* specifies a numeric type, *value* must be a numeric expression containing literals and other constants.
	+ If *constantName* specifies a string type, the *value* must be a literal value.

  

## Description

* The *constantName* does not have to include a type suffix. The datatype is automatically infered by the compiler using the *value*.
* Constant values cannot reference a variable, [SUB](SUB.md) or [FUNCTION](FUNCTION.md) return values when defined.
	+ The exception to the above are color functions [_RGB32](_RGB32.md) and [_RGBA32](_RGBA32.md), which can be used in a CONST statement. See *Example 2* below.
* Constants cannot be reassigned values. They retain the same value throughout all of the program procedures.
* Constants defined in module-level code have [shared](shared.md) scope, so they can also be used in [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures.
* Constants defined in [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures are local to those procedures.
* [CLEAR](CLEAR.md) will not affect or change constant values.

  

## Examples

*Example 1:* Display the circumference and area of circles:

``` ' Declare a numeric constant approximately equal to the ratio of a circle's ' circumference to its diameter: CONST PI = 3.141593  ' Declare some string constants: CONST circumferenceText = "The circumference of the circle is" CONST areaText = "The area of the circle is"  [DO](DO.md)     [INPUT](INPUT.md) "Enter the radius of a circle or zero to quit"; radius     [IF](IF.md) radius = 0 [THEN](THEN.md) [END](END.md)     [PRINT](PRINT.md) circumferenceText; 2 * PI * radius     [PRINT](PRINT.md) areaText; PI * radius * radius ' radius squared     [PRINT](PRINT.md) [LOOP](LOOP.md)  
```

``` Enter the radius of a circle or zero to quit? *10* The circumference of the circle is 62.83186 The area of the circle is 314.1593  Enter the radius of a circle or zero to quit? *123.456* The circumference of the circle is 775.697 The area of the circle is 47882.23  Enter the radius of a circle or zero to quit? *0*  
```

*Explanation:* PI cannot change as it is a mathematical constant so it is fitting to define it as a constant. Trying to change PI will result in a calculation error.
  

*Example 2*: Using _RGB32 to set a constant's value.

``` CONST Red = _RGB32(255,0,0)  [COLOR](COLOR.md) Red [PRINT](PRINT.md) "Hello World"  
```

  

## See also

* [DIM](DIM.md), [SHARED](SHARED.md)
* [STATIC](STATIC.md), [COMMON](COMMON.md)
* [_PI](_PI.md), [_RGB32](_RGB32.md), [_RGBA32](_RGBA32.md)
* [Windows 32 API constant values](Windows 32 API constant values.md)

  
