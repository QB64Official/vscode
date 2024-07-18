## _MK$
---

### The _MK$ function can convert any numerical type into an ASCII STRING value that can be converted back using _CV .

#### SYNTAX

`string_value$ = _MK$ ( numericalType , numericalValue )`

#### PARAMETERS
* numericalType is any QB64 numerical type: [INTEGER](./INTEGER.md) , [LONG](./LONG.md) , [SINGLE](./SINGLE.md) , [DOUBLE](./DOUBLE.md) , [_INTEGER64](./_INTEGER64.md) , [_BYTE](./_BYTE.md) or [_BIT](./_BIT.md) .
* Whole integer values can be signed or [_UNSIGNED](./_UNSIGNED.md) .
* numericalValue must match the numericalType used.


#### DESCRIPTION
* Supports converting any QBasic or QB64 numerical value into a string value.
* Some resulting ASCII string characters might not be able to be printed to the screen.


#### SEE ALSO
* [_CV](./_CV.md)
* MKI$ , [CVI](./CVI.md) , [INTEGER](./INTEGER.md)
* MKL$ , [CVL](./CVL.md) , [LONG](./LONG.md)
* MKS$ , [CVS](./CVS.md) , [SINGLE](./SINGLE.md)
* MKD$ , [CVD](./CVD.md) , [DOUBLE](./DOUBLE.md)
* MKSMBF$ , [CVSMBF](./CVSMBF.md)
* MKDMBF$ , [CVDMBF](./CVDMBF.md)
* CURRENCY
