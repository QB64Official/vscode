<style type="text/css">
body {
    background: #00a !important;
    color: #ccc !important;
}
li {
    list-style-type: square !important;
    color: #ccc !important;
}
li::marker {
    color: #77f !important;
}    
hr {
    border-color: #55f !important;
    border-width: 2px !important;
}
h2 {
    color: #fff !important;
    border: 0 !important;
}
h3 {
    color: #cfc !important;
    border: 0 !important;
}
h4 {
    color: #ccc !important;
    border: 0 !important;
}
h5 {
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
}
pre > code {
    background: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
    border-radius: inherit !important; 
    border: 0 !important;
}
blockquote {
    border: 0 !important;
    background: transparent !important;
    margin: 0 !important;
    padding: 0 1em !important;
}
pre {
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}

</style>

## [_PRINTMODE_(function)](PRINTMODE_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PRINTMODE (function))
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

*  If no imageHandle& is given, the current destination [SCREEN](SCREEN.md)  page or image is assumed.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Returns a status value from 1 to 3 designating the current mode setting:
	* 1 : mode is [_KEEPBACKGROUND](KEEPBACKGROUND.md) 
	* 2 : mode is [_ONLYBACKGROUND](ONLYBACKGROUND.md) 
	* 3 : mode is [_FILLBACKGROUND](FILLBACKGROUND.md)  (default)
*  The [_PRINTMODE](PRINTMODE.md)  statement and function can only be used in graphic [SCREEN](SCREEN.md)  modes, not [SCREEN](SCREEN.md)  0


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_PRINTMODE](PRINTMODE.md) 
*  [_LOADFONT](LOADFONT.md) 
*  [_NEWIMAGE](NEWIMAGE.md) 
*  [_PRINTSTRING](PRINTSTRING.md) 

</blockquote>
