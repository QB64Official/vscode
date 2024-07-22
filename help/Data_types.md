## Data types
---
<blockquote>

### Any expression , including constants and variables all have an associated type to describe their value. QB64 has various built-in data types used to represent number and text values. Numeric types represent number values, while string types represent text values.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DIM n AS INTEGER
n = -1
PRINT n
```
  
```vb
-1
```
  
```vb
' display the largest value representable by an _UNSIGNED INTEGER:
DIM n AS _UNSIGNED INTEGER
n = -1
PRINT n
```
  
```vb
65535
```
  
```vb
f! = 76.0
c! = (5.0 / 9.0) * (f! - 32.0)

PRINT f! ; "degrees Fahrenheit is" ; c! ; "degrees Celcius."
```
  
```vb
76 degrees Fahrenheit is 24.44444 degrees Celcius.
```
  
```vb
message$ = "Hello"
message$ = message$ + " world!" 'add to string variables using string concatenation only!
PRINT message$
```
  
```vb
Hello world!
```
  
```vb
DIM message AS STRING * 5
message$ = "Hello"
message$ = message$ + " world!"
PRINT message$
```
  
```vb
Hello
```
  
```vb
Table 1: The variable types supported by the QB64 language.
┌───────────────────────────────────────────────────────────────────────────┐
│                              Numerical types                              │
├──────────────────────┬───────────┬────────────────────────────┬───────────┤
│      Type Name       │   Type    │       Minimum value        │  Size in  │
│                      │  suffix   │       Maximum value        │   Bytes   │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│         _BIT         │     &grave;     │                         -1 │    1/8    │
│                      │           │                          0 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│       _BIT * n       │    &grave;n     │                       -128 │    n/8    │
│                      │           │                        127 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│    _UNSIGNED _BIT    │    ~&grave;     │                          0 │    1/8    │
│                      │           │                          1 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        _BYTE         │    %%     │                       -128 │     1     │
│                      │           │                        127 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│   _UNSIGNED _BYTE    │    ~%%    │                          0 │     1     │
│                      │           │                        255 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│       INTEGER        │     %     │                    -32,768 │     2     │
│                      │           │                     32,767 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│  _UNSIGNED INTEGER   │    ~%     │                          0 │     2     │
│                      │           │                     65,535 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│         LONG         │     &     │             -2,147,483,648 │     4     │
│                      │           │              2,147,483,647 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│    _UNSIGNED LONG    │    ~&     │                          0 │     4     │
│                      │           │              4,294,967,295 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│      _INTEGER64      │    &&     │ -9,223,372,036,854,775,808 │     8     │
│                      │           │  9,223,372,036,854,775,807 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│ _UNSIGNED _INTEGER64 │    ~&&    │                          0 │     8     │
│                      │           │ 18,446,744,073,709,551,615 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        SINGLE        │     !     │              -2.802597E-45 │     4     │
│                      │ (or none) │              +3.402823E+38 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        DOUBLE        │     #     │    -4.490656458412465E-324 │     8     │
│                      │           │    +1.797693134862310E+308 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        _FLOAT        │    ##     │                -1.18E-4932 │    32     │
│                      │           │                +1.18E+4932 │ (10 used) │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│       _OFFSET        │    %&     │ -9,223,372,036,854,775,808 │  use LEN  │
│                      │           │  9,223,372,036,854,775,807 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│  _UNSIGNED _OFFSET   │    ~%&    │                          0 │  use LEN  │
│                      │           │ 18,446,744,073,709,551,615 │           │
├──────────────────────┼───────────┼────────────────────────────┴───────────┤
│         _MEM         │   none    │ An internal TYPE like memory variable. │
└──────────────────────┴───────────┴────────────────────────────────────────┘
 For the floating-point numeric types SINGLE (default when not assigned),
DOUBLE and _FLOAT, the minimum values represent the smallest values closest
 to zero, while the maximum values represent the largest values closest to
   pos./neg. infinity. _OFFSET dot values are used as a part of the _MEM
      variable type in QB64 to return or set the position in memory.

┌───────────────────────────────────────────────────────────────────────────┐
│                                Text types                                 │
├──────────────────────┬───────────┬────────────────────────────┬───────────┤
│      Type Name       │   Type    │       Minimum value        │  Size in  │
│                      │  suffix   │       Maximum value        │   Bytes   │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│        STRING        │     $     │                          0 │  use LEN  │
│                      │           │              2,147,483,647 │           │
├──────────────────────┼───────────┼────────────────────────────┼───────────┤
│      STRING * n      │    $n     │                          1 │     n     │
│                      │           │              2,147,483,647 │           │
└──────────────────────┴───────────┴────────────────────────────┴───────────┘
 While a regular variable length STRING may have a minimum length of zero
  (empty string), the fixed length string type STRING * n, where n is an
integer length value, must have a minimum length of at least one character.
```
  

</blockquote>
