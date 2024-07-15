# SWAP

The SWAP statement is used to exchange two variable or array element values.

  

## Syntax

SWAP *variable1*, *variable2*
  

## Description

* *variable1* and *variable2* are any type variables whose values will be exchanged.
* If either *variable1* or *variable2* is an array, then an element in the array must be designated.
* SWAP can be used with string or number variable values. Both must be of the same type.
* SWAP is often used to sort array elements into greater or lesser numerical or cumulative [ASCII](ASCII.md) [STRING](STRING.md) values.
* SWAP can be used in page flipping to change between source and destination pages.

  

*Example 1:* A simple SWAP of [string](string.md) values.

``` a$ = "one" b$ = "two"  SWAP a$, b$  [PRINT](PRINT.md) a$ [PRINT](PRINT.md) b$  
```

``` two one  
```

  

*Example 2:* Creating Cryptograms by scrambling EVERY capital letter in the alphabet.

``` [DIM](DIM.md) Letter$(65 [TO](TO.md) 90) [RANDOMIZE](RANDOMIZE.md) [TIMER](TIMER.md) "TIMER (function)") [CLS](CLS.md) [FOR](FOR.md) a = 65 [TO](TO.md) 90                    'set ASCII codes and letters in order   Letter$(a) = [CHR$](CHR$.md)(a)              'create capitalized characters [NEXT](NEXT.md) a  [COLOR](COLOR.md) 11: [LOCATE](LOCATE.md) 10, 10 [FOR](FOR.md) i = 65 [TO](TO.md) 90   [IF](IF.md) Letter$(i) = [CHR$](CHR$.md)(i) [THEN](THEN.md)      'find characters the same as the [ASCII](ASCII.md) code index     [DO](DO.md): j = [INT](INT.md)([RND](RND.md) * 26) + 65: [LOOP](LOOP.md) [WHILE](WHILE.md) j = i    'loop until j <> i     SWAP Letter$(i), Letter$(j)     'swap corresponding letter characters   [END IF](END IF.md)   [PRINT](PRINT.md) [CHR$](CHR$.md)(i); " ";               'print normal alphabetical order [NEXT](NEXT.md)  [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 12, 10 [FOR](FOR.md) a = 65 [TO](TO.md) 90                    'display new alphabetical order   [PRINT](PRINT.md) Letter$(a); " "; [NEXT](NEXT.md)  text$ = "This is how a normal sentence would look before being encrypted." [COLOR](COLOR.md) 11: [LOCATE](LOCATE.md) 20, 5: [PRINT](PRINT.md) text$ L = [LEN](LEN.md)(text$) [DIM](DIM.md) Code(L)                         'place ASCII code solution into an array [COLOR](COLOR.md) 14: [LOCATE](LOCATE.md) 22, 5 [FOR](FOR.md) i = 1 [TO](TO.md) L   Code(i) = [ASC](ASC.md) "ASC (function)")([UCASE$](UCASE$.md)(text$), i)   'in QB64, ASC can read by character position   [IF](IF.md) Code(i) >= 65 [AND](AND.md) "AND (boolean)") Code(i) <= 90 [THEN](THEN.md) [PRINT](PRINT.md) Letter$(Code(i)); [ELSE](ELSE.md) [PRINT](PRINT.md) [CHR$](CHR$.md)(Code(i)); [NEXT](NEXT.md) [END](END.md)  
```

 *Explanation:* The Letter$ [STRING](STRING.md) [array](array.md) is first created with the letters matching the [ASCII](ASCII.md) code index value. Every index is **swap**ped when the letter matches it's index code until every letter is different. The Code array holds the text code solution.
  

*Example 3:* A very quick array sorting SUB procedure using recursion sorts 10 thousand numbers in milliseconds.

``` [DEFINT](DEFINT.md) A-Z [DIM](DIM.md) [SHARED](SHARED.md) swap2 [AS](AS.md) [LONG](LONG.md)  'Demo only [DIM](DIM.md) array(10000) [AS](AS.md) [SINGLE](SINGLE.md) 'array can hold any type of value [RANDOMIZE](RANDOMIZE.md) [TIMER](TIMER.md) "TIMER (function)") [FOR](FOR.md) i = 0 [TO](TO.md) 10000   array(i) = [RND](RND.md) * 1000 'populate array with random values to sort [NEXT](NEXT.md) start = [LBOUND](LBOUND.md)(array)  'lowest element finish = [UBOUND](UBOUND.md)(array) 'highest element swap2 = 0                     'count swaps for demo only start! = [TIMER](TIMER.md) "TIMER (function)")(.001) [CALL](CALL.md) QuickSort(start, finish, array()) ending! = [TIMER](TIMER.md) "TIMER (function)")(.001) tmp$ = " array(0)= ##.#####     array(5000)= ###.####   array(10000)= ###.####" [PRINT USING](PRINT USING.md) tmp$; array(0); array(5000); array(10000) [PRINT USING](PRINT USING.md) " Elapsed time: #.###### seconds with #######, swaps"; ending! - start!; swap2& [FOR](FOR.md) n = 0 [TO](TO.md) 10000             'check array sort order   [IF](IF.md) array(n) >= max! [THEN](THEN.md)     'max should match the array type     max! = array(n)   [ELSE](ELSE.md) [BEEP](BEEP.md)     [PRINT](PRINT.md) "Bad sort order!"     [EXIT](EXIT.md) [FOR](FOR.md)   [END IF](END IF.md) [NEXT](NEXT.md) [END](END.md)  [SUB](SUB.md) QuickSort (start [AS](AS.md) [INTEGER](INTEGER.md), finish [AS](AS.md) [INTEGER](INTEGER.md), array() [AS](AS.md) [SINGLE](SINGLE.md)) [DIM](DIM.md) Hi [AS](AS.md) [INTEGER](INTEGER.md), Lo [AS](AS.md) [INTEGER](INTEGER.md), Middle [AS](AS.md) [SINGLE](SINGLE.md) Hi = finish: Lo = start Middle = array((Lo + Hi) / 2) 'find middle of array [DO](DO.md)   [DO](DO.md) [WHILE](WHILE.md) array(Lo) < Middle: Lo = Lo + 1: [LOOP](LOOP.md)   [DO](DO.md) [WHILE](WHILE.md) array(Hi) > Middle: Hi = Hi - 1: [LOOP](LOOP.md)   [IF](IF.md) Lo <= Hi [THEN](THEN.md)     SWAP array(Lo), array(Hi)     swap2 = swap2 + 1                  'count swaps for demo only     Lo = Lo + 1: Hi = Hi - 1   [END IF](END IF.md)                               'If homework, you will fail [LOOP](LOOP.md) [UNTIL](UNTIL.md) Lo > Hi [IF](IF.md) Hi > start [THEN](THEN.md) [CALL](CALL.md) QuickSort(start, Hi, array()) [IF](IF.md) Lo < finish [THEN](THEN.md) [CALL](CALL.md) QuickSort(Lo, finish, array()) [END SUB](END SUB.md)  
```

```  array(0)= 0.20200    array(5000)= 525.8505   array(10000)= 999.6196  Elapsed time: 0.023438 seconds with 33,759 swaps  
```

**NOTE:** The *swap2* shared value is used to count the swaps for the demo and can be removed from the SUB procedure for speed.
  

## See also

* [RND](RND.md), [RANDOMIZE](RANDOMIZE.md)
* [CHR$](CHR$.md), [ASC (function)](ASC (function).md) "ASC (function)")
* [ASCII](ASCII.md), [Arrays](Arrays.md)

  
