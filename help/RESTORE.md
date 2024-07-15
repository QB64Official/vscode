# RESTORE

The **RESTORE** statement is used to reset the DATA pointer to the beginning of the data.

  

## Syntax

RESTORE [datafield]
  

* The datafield line label or number enables a labeled data field to be [READ](READ.md) more than once as required.
* Datafield label names are not required when working with ONE or a progression of data fields in the main body of code.
* Label multiple data fields to restore them to use them again when necessary.
* If RESTORE is used with unlabeled data fields or no datafield is designated then the first data field is read.
* Use RESTORE to avoid an ["Out of Data" error]("Out of Data" error.md) when reading a data field!
* See the [DATA](DATA.md) statement for [STRING](STRING.md) data value specifications.
* **Do not place [DATA](DATA.md) fields after [SUB](SUB.md) or [FUNCTION](FUNCTION.md) procedures! QB64 will FAIL to RESTORE properly!**

QBasic allowed programmers to add DATA fields anywhere because the IDE separated the main code from other procedures.
  

*Example:* Restoring a labeled DATA field to avoid going past the end of DATA.

``` DO    [INPUT](INPUT.md) "Enter a month number(1 to 12): ", monthnum%     RESTORE Months    FOR i = 1 TO monthnum%       [READ](READ.md) month$, days%   'variables must match data field types    NEXT    [PRINT](PRINT.md) "The month "; month$; " has"; days%; "days." LOOP UNTIL monthnum% < 1 OR monthnum% > 12   Months:  [DATA](DATA.md) January, 31, February, 28, March, 31, April, 30, May, 31, June, 30  [DATA](DATA.md) July, 31, August, 31, September, 30, October, 31, November, 30, December, 31  
```

``` Enter a month number(1 to 12): 6 The month June has 30 days.  
```

*Note:* String DATA values do not require quotes unless they have commas, end spaces or QBasic keywords in them.
  

*Example:* Using RESTORE to know the number of elements in the DATA in order to dimension and store the items in a array.

``` [DO](DO.md) [READ](READ.md) dummy$ 'we won't actually use this string for anything else than to know when there is no more DATA. count = count + 1 [LOOP](LOOP.md) [UNTIL](UNTIL.md) dummy$ = "stop" 'when dummy$ = "stop" then we know that it is the last entry so it only does the above loop until then.  count = count - 1 'since the last string is "stop" and we don't want to store it in the array.  [PRINT](PRINT.md) "The number of relevant entries are:"; count  [DIM](DIM.md) entry$(count) 'Now we know how many elements we need to make space for (DIM)  RESTORE 'We restore it so that it begins reading from the first DATA again.   [FOR](FOR.md) c = 1 [TO](TO.md) count [READ](READ.md) entry$(c) 'read the DATA and store it into the array. [NEXT](NEXT.md)  'we can now print the contents of the array:  [FOR](FOR.md) c = 1 [TO](TO.md) count [PRINT](PRINT.md) entry$(c) [NEXT](NEXT.md)  [END](END.md)  [DATA](DATA.md) "entry1", "entry2", "entry3", "stop"  
```

``` The number of relevant entries are: 3 entry1 entry2 entry3  
```

*Note:* Now we can add any number of entries without further compensation to the code.

  

## See also

* [DATA](DATA.md), [READ](READ.md)
* [$EMBED]($EMBED.md). [_EMBEDDED$](_EMBEDDED$.md)
* [line numbers](line numbers.md)

  
