## RND
---

### The RND function returns a random number with a value between 0 (inclusive) and 1 (exclusive).

#### SYNTAX

`result! = RND [( n )]`

#### PARAMETERS
* n is a [SINGLE](./SINGLE.md) numeric value that defines the behavior of the [RND](./RND.md) function but is [NOT](./NOT.md) normally required :


#### DESCRIPTION
* The random numbers generated range from 0 minimum to .9999999 maximum [SINGLE](./SINGLE.md) values that never equal 1.
* To get values in a range larger than 1, multiply [RND](./RND.md) with a number to get returns up to but not including that numerical value.
* To get values starting at a certain number, add that number to the [RND](./RND.md) result as [RND](./RND.md) minimums can be 0.
* If you need an integer range of numbers, like a dice roll, round it down to an [INT](./INT.md) . Add 1 to the maximum number with [INT](./INT.md) .
* The random sequence is 2 ^ 24 or 16,777,216 entries long, which can allow repeated patterns in some procedures.
* Formulas for the Integer or Closest Integer of ANY number range from min% (lowest value) to max% (greatest value):


#### SEE ALSO
* [RANDOMIZE](./RANDOMIZE.md) , [TIMER](./TIMER.md) (function)
* [INT](./INT.md) , [CINT](./CINT.md) , [FIX](./FIX.md)
