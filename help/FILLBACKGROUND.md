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

## [_PRINTMODE](PRINTMODE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_PRINTMODE)
---
<blockquote>

### The _PRINTMODE statement sets the text or _FONT printing mode on an image when using PRINT or _PRINTSTRING .

</blockquote>

#### SYNTAX

<blockquote>

`_PRINTMODE { _KEEPBACKGROUND | _ONLYBACKGROUND | _FILLBACKGROUND }[, imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  One of 3 mode keywords is mandatory when using this statement to deal with the text background.
	* [_KEEPBACKGROUND](KEEPBACKGROUND.md)  (mode 1): Text background transparent. Only the text is displayed over anything behind it.
	* [_ONLYBACKGROUND](ONLYBACKGROUND.md)  (mode 2): Text background [ONLY](ONLY.md)  is displayed. Text is transparent to anything behind it.
	* [_FILLBACKGROUND](FILLBACKGROUND.md)  (mode 3): Text and background block anything behind them like a normal [PRINT](PRINT.md)  . Default setting.
*  If the optional imageHandle& is omitted or is 0 then the setting will be applied to the current destination image.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use the [_PRINTMODE](PRINTMODE.md)  (function) to find the current [_PRINTMODE](PRINTMODE.md)  setting mode number for an image.
*  The [_PRINTMODE](PRINTMODE.md)  statement and function can only be used on graphic images, not text-based ones such as [SCREEN](SCREEN.md)  0


</blockquote>

#### SEE ALSO

<blockquote>

*  [_PRINTMODE](PRINTMODE.md)  (function)
*  [_PRINTSTRING](PRINTSTRING.md) 
*  [_LOADFONT](LOADFONT.md) 
*  [_NEWIMAGE](NEWIMAGE.md) 
*  [PRINT](PRINT.md)  , _PRINT [USING](USING.md) 

</blockquote>
