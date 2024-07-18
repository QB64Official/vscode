## INTEGER
---

### INTEGER is a 2-byte number type definition that can hold whole numerical values.

#### SYNTAX

`DIM variable AS INTEGER`

#### EXAMPLES
##### Example 1: QBasic signed integers were limited from -32768 to 32767, but could not exceed 32767 or it would error:
```vb
DO: _LIMIT 2000
 i% = i% + 1
 PRINT i%
LOOP UNTIL i% = 0
```
  
##### Example 2: When a signed QB64 INTEGER value exceeds 32767, the value may become a negative value:
```vb
i% = 38000
PRINT i%
```
  
```vb
-27536
```
  
##### Example 3: In QB64 _UNSIGNED INTEGER values greater than 65535 cycle over again from zero:
```vb
i~% = 70000
PRINT i~%
```
  
```vb
4464
```
  


#### SEE ALSO
* [DIM](./DIM.md) , [DEFINT](./DEFINT.md)
* [LONG](./LONG.md) , [_INTEGER64](./_INTEGER64.md)
* [LEN](./LEN.md) , MKI$ , [CVI](./CVI.md)
* [_DEFINE](./_DEFINE.md) , [_UNSIGNED](./_UNSIGNED.md)
* Variable Types
* &B (binary), &O (octal), &H (hexadecimal)
* Integer Division , [MOD](./MOD.md) (Integer remainder division)
