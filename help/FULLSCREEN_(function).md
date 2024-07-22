## _FULLSCREEN (function)
---
<blockquote>

### The _FULLSCREEN function returns the present full screen mode setting of the screen window.

</blockquote>

#### SYNTAX

<blockquote>

`full% = _FULLSCREEN`

</blockquote>

#### DESCRIPTION

<blockquote>

* Function returns:
	* 0 = [_OFF](./_OFF.md) (any positive non-0 value means fullscreen is on)
	* 1 = [_STRETCH](./_STRETCH.md)
	* 2 = [_SQUAREPIXELS](./_SQUAREPIXELS.md)
* It cannot be assumed that calling [_FULLSCREEN](./_FULLSCREEN.md) will succeed. It cannot be assumed that the type of full screen will match the requested one. Always check the [_FULLSCREEN](./_FULLSCREEN.md) (function) return in your programs.
* Warning: Despite your software, the user's hardware, drivers and monitor may not function in some modes. Thus, it is highly recommended that you manually confirm with the user whether the switch to full screen was successful. This can be done "quietly" in some cases by getting the user to click on a button on screen with their mouse or press an unusual key. If the user does not respond after about 8 seconds, switch them back to windowed mode.
Using large fonts with _FULLSCREEN can cause monitor or Windows Desktop problems or kill a program.


</blockquote>

#### SEE ALSO

<blockquote>

* [_FULLSCREEN](./_FULLSCREEN.md) (statement)
* [_ALLOWFULLSCREEN](./_ALLOWFULLSCREEN.md)
* [_SCREENMOVE](./_SCREENMOVE.md) , [_SCREENX](./_SCREENX.md) , [_SCREENY](./_SCREENY.md)

</blockquote>
