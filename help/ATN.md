## ATN
---

### The ATN or arctangent function returns the angle in radians of a numerical tangent value.

#### SYNTAX

`radianAngle = ATN ( tangent! )`

#### PARAMETERS
* The return is the tangent!' s angle in radians .
* tangent! [SINGLE](./SINGLE.md) or [DOUBLE](./DOUBLE.md) values are used by the function. EX: Pi = 4 * [ATN](./ATN.md)(1)


#### DESCRIPTION
* To convert from radians to degrees, multiply radians * (180 / π).
* The tangent value would be equal to the tangent value of an angle. Ex: [TAN](./TAN.md) ([ATN](./ATN.md)(1)) = 1
* The function return value is between -π / 2 and π / 2.


#### EXAMPLES
##### Example 1: When the TANgent value equals 1, the line is drawn at a 45 degree angle (.7853982 radians) where SIN / COS = 1.
```vb
SCREEN 12
x = 100 * COS(ATN(1))
y = 100 * SIN(ATN(1))
LINE (200, 200)-(200 + x, 200 + y)
```
  
##### Example 2: ATN can be used to define π in SINGLE or DOUBLE precision. The calculation cannot be used as a CONSTant .
```vb
Pi = 4 * ATN(1)   'SINGLE precision
Pi# = 4 * ATN(1#) 'DOUBLE precision
PRINT Pi, Pi#
```
  
##### Example 3: Finds the angle from the center point to the mouse pointer.
```vb
SCREEN _NEWIMAGE(640, 480, 32)
x1! = 320
y1! = 240

DO
 PRESET (x1!, y1!), _RGB(255, 255, 255)
 dummy% = _MOUSEINPUT
 x2! = _MOUSEX
 y2! = _MOUSEY
 LINE (x1, y1)-(x2, y2), _RGB(255, 0, 0)
 LOCATE 1, 1: PRINT getangle(x1!, y1!, x2!, y2!)
 _DISPLAY
 _LIMIT 200
 CLS
LOOP UNTIL INKEY$ <> ""
END

FUNCTION getangle# (x1#, y1#, x2#, y2#) 'returns 0-359.99...
IF y2# = y1# THEN
 IF x1# = x2# THEN EXIT FUNCTION
 IF x2# > x1# THEN getangle# = 90 ELSE getangle# = 270
 EXIT FUNCTION
END IF
IF x2# = x1# THEN
 IF y2# > y1# THEN getangle# = 180
 EXIT FUNCTION
END IF
IF y2# < y1# THEN
 IF x2# > x1# THEN
   getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131
 ELSE
   getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131 + 360
 END IF
ELSE
 getangle# = ATN((x2# - x1#) / (y2# - y1#)) * -57.2957795131 + 180
END IF
END FUNCTION
```
  


#### SEE ALSO
* [_PI](./_PI.md) (QB64 function)
* [_ATAN2](./_ATAN2.md) ((QB64 function)
* [TAN](./TAN.md) (tangent function)
* [SIN](./SIN.md) , [COS](./COS.md)
* Mathematical Operations
* Derived Mathematical Functions
