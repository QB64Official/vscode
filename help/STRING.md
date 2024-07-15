# STRING

**STRING** variables or literal values are one byte per character length text or [ASCII](ASCII.md) characters.

  

## Syntax

DIM variable AS STRING [* byte_length]
  

* *Byte length* is optional in [DIM](DIM.md) statements, but is required in [TYPE](TYPE.md) definitions as a literal or [constant](constant.md) [INTEGER](INTEGER.md) value.
* Literal strings are defined by quotation marks on each end. The quotes will not [PRINT](PRINT.md) to the screen.
* Quotation marks cannot be placed inside of literal string values! Use [CHR$](CHR$.md)(34) to display " quotes.
* Semicolons and commas outside of the string can be used to combine strings in a [PRINT](PRINT.md) statement only.
* [LEN](LEN.md) determines the number of bytes and number of string characters that are in a particular string.
* Literal string ends are designated by quotation marks such as: "text". Use [CHR$](CHR$.md)(34) to add quotes to string values.
* Variable suffix type definition is $ such as: text$.
* STRING values are compared according to the [ASCII](ASCII.md) code values from left to right until one string code value exceeds the other.
* **NOTE: Many QBasic keyword variable names CAN be used with a STRING suffix($) ONLY! You CANNOT use them without the suffix, use a numerical suffix or use [DIM](DIM.md), [REDIM](REDIM.md), [_DEFINE](_DEFINE.md), [BYVAL](BYVAL.md) or [TYPE](TYPE.md) variable [AS](AS.md) statements!**

  

**Creating a fixed length STRING variable in QBasic:**
* Variable$ = " " ' 1 space creates a one [byte](byte.md) string length in a procedure(not fixed)
* Variable$ = SPACE$(n%) ' defined as a n% length string in a procedure(not fixed)
* [DIM](DIM.md) variable AS STRING * n% ' fixed string length cannot be changed later
* Variable AS STRING * n% ' fixed string length in a [SUB](SUB.md) parameter or [TYPE](TYPE.md) definition.
* [CONST](CONST.md) variables can also be used after the constant value is defined.

  

**QB64 fixed length string type suffixes**
* A number after the string variable name $ suffix denotes the fixed string length: **X$2** denotes a 2 byte string.

  

**String [Concatenation](Concatenation.md) (addition)**
*Must be used when defining a string variable's literal value!*
* Concatenation uses the + addition symbol to add literal or variable parts to a string variable value.
* Quotation marks cannot be added. Use [CHR$](CHR$.md)(34) as quotes are used to define the ends of strings.
* Numerical values added must be converted to strings in string variable definitions. See the [STR$](STR$.md) function.
* Concatenation can be used in PRINT statements along with semicolons and commas used by [PRINT](PRINT.md) ONLY.
* Semicolons or commas outside of quotes cannot be used to make a string variable's literal string value!

  

*Example 1:* Using a string type suffix with a fixed length byte size in QB64 only. The number designates the fixed string length.

``` var$5 = "1234567"  PRINT var$5  
```

``` 12345 
```

*Note:* The suffix must keep the same byte length or it is considered a different string variable with a different value!
  

*Example 2:* Creating a string variable value by adding variable and literal string values. This procedure is called string [concatenation](concatenation.md).

``` age% = 10 a$ = "I am " + [CHR$](CHR$.md)(34) + [LTRIM$](LTRIM$.md)([STR$](STR$.md)(age%)) + [CHR$](CHR$.md)(34) + " years old." b$ = "How old are you?" question$ = a$ + [SPACE$](SPACE$.md)(1) + b$ [PRINT](PRINT.md) question$  
```

``` I am "10" years old. How old are you?  
```

*Note:* Since quotation marks are used to denote the ends of literal strings, [CHR$](CHR$.md)(34) must be used to place quotes inside them.
  

*Example 3:* How QB64 string type suffixes can fix the length by adding a number of bytes after it.

``` strings$5 = "Hello world"  PRINT strings$5  
```

``` Hello 
```

  

*Example 4:* STRING values can be compared by the [ASC](ASC.md) "ASC (function)") code value according to [ASCII](ASCII.md).

``` [PRINT](PRINT.md) "Enter a letter, number or punctuation mark from the keyboard: "; valu$ = [INPUT$](INPUT$.md)(1) [PRINT](PRINT.md) value$ value1$ = "A" value2$ = "m" value3$ = "z"  [SELECT CASE](SELECT CASE.md) value$   [CASE](CASE.md) value1$: [PRINT](PRINT.md) "A only"   [CASE](CASE.md) value1$ [TO](TO.md) value2$: [PRINT](PRINT.md) "B to m" 'A is already evaluated   [CASE](CASE.md) value1$, value2$, value3$: [PRINT](PRINT.md) "z only" 'A and m are already evaluated   [CASE IS](CASE IS.md) > value2$: [PRINT](PRINT.md) "greater than m but not z" 'z is already evaluated   [CASE ELSE](CASE ELSE.md): [PRINT](PRINT.md) "other value" 'key entry below A including all numbers [END SELECT](END SELECT.md)  
```

*Notes:* STRING values using multiple characters will be compared by the [ASCII](ASCII.md) code values sequentially from left to right. Once the equivalent code value of one string is larger than the other the evaluation stops. This allows string values to be compared and sorted alphabetically using [>](>.md) or [<](<.md) and to [SWAP](SWAP.md) values in [arrays](arrays.md) irregardless of the string lengths.
  

## See also

* [DIM](DIM.md), [DEFSTR](DEFSTR.md)
* [CHR$](CHR$.md), [ASC (function)](ASC (function).md) "ASC (function)")
* [LEFT$](LEFT$.md), [RIGHT$](RIGHT$.md), [MID$ (function)](MID$ (function).md) "MID$ (function)")
* [LTRIM$](LTRIM$.md), [RTRIM$](RTRIM$.md)
* [LCASE$](LCASE$.md), [UCASE$](UCASE$.md)
* [STR$](STR$.md)
* [HEX$](HEX$.md)
* [MKI$](MKI$.md), [MKL$](MKL$.md), [MKS$](MKS$.md), [MKD$](MKD$.md), [_MK$](_MK$.md)
* [CVI](CVI.md), [CVL](CVL.md), [CVS](CVS.md), [CVD](CVD.md), [_CV](_CV.md)
* [LEN](LEN.md), [VAL](VAL.md)
* [ASCII](ASCII.md), [DRAW](DRAW.md)
* [PRINT](PRINT.md), [PRINT USING](PRINT USING.md), [WRITE](WRITE.md)

  
