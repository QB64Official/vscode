## _AUTODISPLAY (function)
---
<blockquote>

### The _AUTODISPLAY function returns the current display mode as true (-1) if automatic or false (0) if disabled using _DISPLAY .

</blockquote>

#### SYNTAX

<blockquote>

`displayStatus%% = _AUTODISPLAY`

</blockquote>

#### DESCRIPTION

<blockquote>

* The function returns true (-1) if [_AUTODISPLAY](./_AUTODISPLAY.md) is enabled. This is the default state and indicates that every screen change (text or graphics) is displayed immediately to the user.
* If [_DISPLAY](./_DISPLAY.md) is used, then [_AUTODISPLAY](./_AUTODISPLAY.md) returns 0, to indicate that screen changes (text or graphics) are only displayed per request, by calling [_DISPLAY](./_DISPLAY.md) again to refresh the screen.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

* [_AUTODISPLAY](./_AUTODISPLAY.md)
* [_DISPLAY](./_DISPLAY.md)

</blockquote>
