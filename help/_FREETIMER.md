## _FREETIMER
---

### The _FREETIMER function returns a free TIMER number for multiple ON TIMER(n) events.

#### SYNTAX

`timerhandle% = _FREETIMER`

#### DESCRIPTION
* QB64 can use an unlimited number of [ON](file:/home/grymmjack/git/QB64pe/internal/help/ON.md) [TIMER](file:/home/grymmjack/git/QB64pe/internal/help/TIMER.md) (number, seconds!) event [INTEGER](file:/home/grymmjack/git/QB64pe/internal/help/INTEGER.md) values at once.
* Every time [_FREETIMER](file:/home/grymmjack/git/QB64pe/internal/help/_FREETIMER.md) is called the [INTEGER](file:/home/grymmjack/git/QB64pe/internal/help/INTEGER.md) value returned will increase by one, starting at 1, whether it is used or not.
* Store multiple returns in different variable names to refer to separate events later.


#### SEE ALSO
* [ON](file:/home/grymmjack/git/QB64pe/internal/help/ON.md) [TIMER](file:/home/grymmjack/git/QB64pe/internal/help/TIMER.md)(n)
