## PLAY (function)
---
<blockquote>

### The PLAY function returns the number of remaining notes/samples/seconds in the background music queue.

</blockquote>

#### SYNTAX

<blockquote>

`remaining& = PLAY ( numericExpression& )`

</blockquote>

#### PARAMETERS

<blockquote>

* remaining& is the number of notes/samples/seconds left to play in the background music queue.
* numericExpression& can be any numeric expression.
* See also the important version dependent notes in the Availability section.

</blockquote>

#### DESCRIPTION

<blockquote>

* This function may be used to detect, if the background music queue is still playing.
* When there is nothing left to play, then this function returns zero.


</blockquote>

#### SEE ALSO

<blockquote>

* [PLAY](./PLAY.md)
* [SOUND](./SOUND.md)
* [BEEP](./BEEP.md)
* [_SNDOPEN](./_SNDOPEN.md)
* [_SNDRAW](./_SNDRAW.md)

</blockquote>
