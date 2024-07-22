<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [PEEK_and_POKE_Library](PEEK_and_POKE_Library.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PEEK and POKE Library)
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
  
<br>```vb
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
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [DECLARE](DECLARE.md) [LIBRARY](LIBRARY.md) 
*  [PEEK](PEEK.md)  , [POKE](POKE.md) 
*  Libraries

</blockquote>
