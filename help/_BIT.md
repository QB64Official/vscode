## _BIT
---

### The _BIT datatype can return only values of 0 (bit off) and -1 (bit on).

#### SYNTAX

`DIM variable AS [[[_UNSIGNED]]] _BIT [* numberofbits ]`

#### DESCRIPTION
* An [_UNSIGNED](./_UNSIGNED.md) [_BIT](./_BIT.md) can hold 0 or 1 instead of 0 and -1, if you set the numberofbits you can hold larger values depending on the number of bits you have set ([_BIT](./_BIT.md) * 8 can hold the same values as [_BYTE](./_BYTE.md) for example) and the information below is compromised if setting any number of bits other than 1.
* If you set the variable to any other number then the least significant bit of that number will be set as the variables number, if the bit is 1 (on) then the variable will be -1 and if the bit is 0 (off) then the variable will be 0.
* The least significant bit is the last bit on a string of bits (11111) since that bit will only add 1 to the value if set. The most significant bit is the first bit on a string of bits and changes the value more dramatically (significantly) if set on or off.
* The [_BIT](./_BIT.md) datatype can be succesfully used as a Boolean (TRUE or FALSE) and it requires minimal amount of memory (the lowest amount possible actually, one byte can hold 8 bits, if you want to use bits in order to decrease memory usage, use them as arrays as a [_BIT](./_BIT.md) variable by itself allocates 4 bytes - [DIM](./DIM.md) bitarray(800) [AS](./AS.md) [_BIT](./_BIT.md) uses 100 bytes).
* When a variable has not been assigned or has no type suffix, the value defaults to [SINGLE](./SINGLE.md) .
* [_BIT](./_BIT.md) is not supported in User Defined TYPES. Use a [_BYTE](./_BYTE.md) and assign up to 8 bit values as shown below.


#### EXAMPLES
##### Example: Shifting bits in a value in QB64 versions prior to 1.3 (you can use _SHL and _SHR starting with version 1.3).
```vb
n = 24
Shift = 3

PRINT LShift(n, Shift)
PRINT RShift(n, Shift)
END

FUNCTION LShift& (n AS LONG, LS AS LONG)
   IF LS < 0 THEN EXIT FUNCTION
   LShift = INT(n * (2 ^ LS))
END FUNCTION

FUNCTION RShift& (n AS LONG, RS AS LONG)
   IF RS < 0 THEN EXIT FUNCTION
   RShift = INT(n / (2 ^ RS))
END FUNCTION
```
  
```vb
192
3
```
  


#### SEE ALSO
* &B (binary), [_BYTE](./_BYTE.md)
* [_SHL](./_SHL.md) , [_SHR](./_SHR.md)
* [_DEFINE](./_DEFINE.md) , [_UNSIGNED](./_UNSIGNED.md)
* [DIM](./DIM.md)
* Binary , Boolean
* Variable Types
* Converting Bytes to Bits
