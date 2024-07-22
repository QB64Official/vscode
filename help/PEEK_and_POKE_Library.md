## PEEK and POKE Library
---
<blockquote>

### This header allows you to peek and poke bytes, words, and dwords in QB64. The functions seem to work okay when used with signed variables also. For example, I am able to assign the return of peekw~% to an INTEGER without problem. Regards, Michael Calkins

</blockquote>

#### EXAMPLES

<blockquote>

```vb
/*
peek and poke for bytes, words, and dwords in qb64
public domain, sept 2011, michael calkins
https://www.tapatalk.com/groups/qbasic/viewtopic.php?p=188921#p188921
*/

unsigned char peekb(void * p)
{return *(unsigned char *)p;}

unsigned short int peekw(void * p)
{return *(unsigned short int *)p;}

unsigned long int peekd(void * p)
{return *(unsigned long int *)p;}

void pokeb(void * p, unsigned char n)
{*(unsigned char *)p = n;}

void pokew(void * p, unsigned short int n)
{*(unsigned short int *)p = n;}

void poked(void * p, unsigned long int n)
{*(unsigned long int *)p = n;}
```
  
```vb
' peek and poke for bytes, words, and dwords in qb64
' requires peekpoke.h
' public domain, sept 2011, michael calkins

DECLARE CUSTOMTYPE LIBRARY "peekpoke"
   FUNCTION peekb~%% (BYVAL p AS _UNSIGNED _OFFSET) 'Byte
   FUNCTION peekw~% (BYVAL p AS _UNSIGNED _OFFSET)  'Integer(Word)
   FUNCTION peekd~& (BYVAL p AS _UNSIGNED _OFFSET)  'Long(Dword)
   SUB pokeb (BYVAL p AS _UNSIGNED _OFFSET, BYVAL n AS _UNSIGNED _BYTE)
   SUB pokew (BYVAL p AS _UNSIGNED _OFFSET, BYVAL n AS _UNSIGNED INTEGER)
   SUB poked (BYVAL p AS _UNSIGNED _OFFSET, BYVAL n AS _UNSIGNED LONG)
END DECLARE

' examples:

DIM buffer AS STRING * 16
DIM ptr AS _UNSIGNED _OFFSET

buffer = "abcd---- i-ptrs"
ptr = _OFFSET(buffer)

PRINT buffer

pokeb ptr + &HA, &H3
PRINT buffer

pokew ptr + 5, &H3FA8
PRINT buffer

poked ptr + 4, &HDBB2B1B0
PRINT buffer

poked ptr, CVL("QB64")
poked ptr + 4, &H2020011A
PRINT buffer

PRINT "0x" + HEX$(peekb~%%(ptr + 1))
PRINT "0x" + HEX$(peekw~%(ptr + 2))
PRINT "0x" + HEX$(peekd~&(ptr + 9))

END
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [DECLARE](./DECLARE.md) [LIBRARY](./LIBRARY.md)
* [PEEK](./PEEK.md) , [POKE](./POKE.md)
* Libraries

</blockquote>
