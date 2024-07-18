## $NOPREFIX
---

### The $NOPREFIX metacommand allows all QB64 functions and statements to be used without the leading underscore (_).

#### SYNTAX

`$NOPREFIX`

#### DESCRIPTION
* QB64-specific keywords are by default prefixed with an underscore, in order to differentiate them from legacy keywords inherited from QBasic/QuickBASIC 4.5.
* The convention exists in order to allow older code to be loaded and compiled in QB64 without naming conflicts with existing variables or constants.
* If you are writing new code with QB64, and not importing code from QBasic/QuickBASIC 4.5 nor any 3rd party .bi/.bm style libraries, then $NOPREFIX allows you to reduce typing by not having to use underscores in modern keywords.


#### SEE ALSO
* Keyword Reference - Alphabetical
* Metacommand
