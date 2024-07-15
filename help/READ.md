# READ

The **READ** statement reads values from a [DATA](DATA.md) field and assigns them to one or a comma separated list of variables.

  

## Syntax

READ value1$[, value2!, value3%, ...]
  

* READ statements assign variables to [DATA](DATA.md) statement values on a one-to-one basis sequentially.
* A single READ statement may access one or more [DATA](DATA.md) values. They are accessed in the order set.
* Several READ statements may access the same [DATA](DATA.md) statement block at the following sequential position.
* [DATA](DATA.md) can be READ using [STRING](STRING.md) or numerical [TYPE](TYPE.md) variables singularly or in a comma separated list:

[STRING](STRING.md) READ variables can read quoted or unquoted text or numerical DATA values!
Numerical type READ variables can only read **unquoted** numerical DATA values!
**If they do not agree, a ["Syntax error"]("Syntax error".md) may result when run reading string data as numerical values!**
* If the number of variables specified is fewer than the number of elements in the DATA statement(s), subsequent READ statements begin reading data at the next unread element. If there are no subsequent READ statements, the extra data is ignored.
* If variable reads exceed the number of elements in the DATA field(s), an ["Out of data" error]("Out of data" error.md) will occur!
* Use the [RESTORE](RESTORE.md) statement to reread DATA statements from the start, with or without a line label as required.
* [ACCESS](ACCESS.md) READ can be used in an [OPEN](OPEN.md) statement to limit file access to read only, preserving file data.
* **WARNING! Do not place DATA fields after [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures! QB64 will FAIL to compile properly!**

QBasic allowed programmers to add DATA fields anywhere because the IDE separated the main code from other procedures.
  

*Example 1:* Placing data into an array.

``` [DIM](DIM.md) A(10) AS [SINGLE](SINGLE.md) [FOR](FOR.md) I = 1 [TO](TO.md) 10    READ A(I) [NEXT](NEXT.md) I [FOR](FOR.md) J = 1 [TO](TO.md) 10    [PRINT](PRINT.md) A(J); [NEXT](NEXT.md) [END](END.md)  [DATA](DATA.md) 3.08, 5.19, 3.12, 3.98, 4.24 [DATA](DATA.md) 5.08, 5.55, 4.00, 3.16, 3.37  
```

```  3.08  5.19  3.12  3.98  4.24  5.08  5.55  4  3.16  3.37  
```

*Explanation:* This program reads the values from the DATA statements into array A. After execution, the value of A(1) is 3.08, and so on. The DATA statements may be placed anywhere in the program; they may even be placed ahead of the READ statement.
  

*Example 2:* Reading three pieces of data at once.

```  PRINT " CITY ", " STATE  ", " ZIP"  PRINT [STRING$](STRING$.md)(30, "-")  'divider    READ C$, S$, Z&  PRINT C$, S$, Z&   [DATA](DATA.md) "DENVER,", COLORADO, 80211  
```

```   CITY        STATE       ZIP  ------------------------------  DENVER,     COLORADO     80211  
```

*Note:* String DATA values do not require quotes unless they contain commas, end spaces or QBasic keywords.
  

## See also

* [DATA](DATA.md), [RESTORE](RESTORE.md)
* [$EMBED]($EMBED.md). [_EMBEDDED$](_EMBEDDED$.md)
