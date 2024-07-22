## _PRINTMODE (function)
---
<blockquote>

### The _PRINTMODE function returns the current _PRINTMODE status as a numerical value from 1 to 3 in graphic screen modes.

</blockquote>

#### SYNTAX

<blockquote>

`currentPrintMode = _PRINTMODE [( imageHandle& )]`

</blockquote>

#### PARAMETERS

<blockquote>

* If no imageHandle& is given, the current destination [SCREEN](./SCREEN.md) page or image is assumed.

</blockquote>

#### DESCRIPTION

<blockquote>

* Returns a status value from 1 to 3 designating the current mode setting:
	* 1 : mode is [_KEEPBACKGROUND](./_KEEPBACKGROUND.md)
	* 2 : mode is [_ONLYBACKGROUND](./_ONLYBACKGROUND.md)
	* 3 : mode is [_FILLBACKGROUND](./_FILLBACKGROUND.md) (default)
* The [_PRINTMODE](./_PRINTMODE.md) statement and function can only be used in graphic screen modes, not [SCREEN](./SCREEN.md) 0


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

* [_PRINTMODE](./_PRINTMODE.md)
* [_LOADFONT](./_LOADFONT.md)
* [_NEWIMAGE](./_NEWIMAGE.md)
* [_PRINTSTRING](./_PRINTSTRING.md)

</blockquote>
