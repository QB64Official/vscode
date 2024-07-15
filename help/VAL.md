# VAL

The **VAL** Function returns the decimal numerical equivalent value of a [STRING](STRING.md) numerical value.

  

## Syntax

*value* = **VAL**(*string_value$*)
  

* VAL converts string numbers to numerical values including decimal point values and prefixed "[&B](&B.md)" binary, "[&H](&H.md)" hexadecimal, "[&O](&O.md)" octal.
* VAL conversion stops at non-numeric characters except for letter "D" or "E" exponential notation values.

String values with "D" and "E" letters between numbers may be converted also! EX: **VAL("9D4") = 90000**
* If the first string character is not a number VAL returns 0. VAL may return erratic values with "%" or "&" starting characters.
* Binary [_BIN$](_BIN$.md) string values with the "[&B](&B.md)" prefix can be converted to a decimal value with digits from 0 to 1 only.
* Hexadecimal [HEX$](HEX$.md) string values with the "[&H](&H.md)" prefix can be converted to a decimal value with digits 0 to 9 and letters A to F, like; dec = VAL("&H"+hexvar$).
* Octal [OCT$](OCT$.md) string values with the "[&O](&O.md)" prefix can be converted to a decimal value with digits from 0 to 7 only.
* For character values of [ASCII](ASCII.md) data use the [ASC (function)](ASC (function).md) "ASC (function)") to get the value.
* In QB64 use an [INTEGER](INTEGER.md) return variable to hold integer values returned by VAL [Hex](Hex.md) strings: **value% = VAL("&HFFFF") = -1**

  

*Example 1:* Differences in values returned with QBasic and QB64:

``` [PRINT](PRINT.md) VAL("[&H](&H.md)") '203 in QB, 0 in QB64 [PRINT](PRINT.md) VAL("[&H](&H.md)FFFF") ' -1 QB, 65535 in QB64 [PRINT](PRINT.md) VAL("[&H](&H.md)FFFF&") '65535 in both  
```

*Explanation:* A quirk in QBasic returned VAL values of 203 for "&" and "&H" that was never fixed until PDS(7.1).
  

*Example 2:* Converting a string with some number characters

```  text$ = "1.23Hello"  number! = VAL(text$)  PRINT number!  
```

``` 1.23  
```

  

*Example 3:* Converting literal and variable [string](string.md) values to numerical values.

```  a$ = "33"  PRINT VAL("10") + VAL(a$) + 1  
```

``` 44  
```

*Explanation:* 10 + 33 + 1 = 44, the strings were converted to values.
You have to convert the string to values in order to use them in a mathematical expression also since mixing strings with numbers isn't allowed. VAL will stop at a text letter so VAL("123G56) would return 123.
If VAL wasn't used the program would break with an error, as you can't add the value 1 to a string, if the 1 was a string ("1") then the program would return "10331", but now since we used VAL, the numbers were added as they should.
  

*Example 4:* Converting a hexadecimal value to decimal value using HEX$ with VAL.

```  decnumber% = 96  hexnumber$ = "&H" + [HEX$](HEX$.md)(decnumber%)  'convert decimal value to hex and add hex prefix  PRINT hexnumber$  decimal% = VAL(hexnumber$)  PRINT decimal%  
```

``` &H60  96  
```

*Explanation:* [HEX$](HEX$.md) converts a decimal number to hexadecimal, but VAL will only recognize it as a valid value with the "&H" prefix. Especially since hexadecimal numbers can use "A" through "F" in them. Create a converter function from this code!
  

## See also

* [ASC (function)](ASC (function).md) "ASC (function)"), [STR$](STR$.md)
* [_BIN$](_BIN$.md), [HEX$](HEX$.md), [OCT$](OCT$.md)

  
