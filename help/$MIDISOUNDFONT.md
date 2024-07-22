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

## [\$MIDISOUNDFONT](\$MIDISOUNDFONT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$MIDISOUNDFONT)
---
<blockquote>

### The $MIDISOUNDFONT metacommand enables MIDI support for _SNDOPEN .

</blockquote>

#### SYNTAX

<blockquote>

`$MIDISOUNDFONT : {DEFAULT|" Filename "}`

</blockquote>

#### PARAMETERS

<blockquote>

*  DEFAULT indicates that the soundfont provided by QB64-PE should be used to play MIDI files.
	* The provided soundfont is about 1MB in size.
*  Filename can be used to provide your own soundfont for playing MIDI files.
	* The specified soundfont file is compiled into your program and is not required at runtime.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The use of this metacommand allows [_SNDOPEN](SNDOPEN.md)  to [OPEN](OPEN.md)  MIDI files.
*  The selected soundfont is what is used to play all MIDI files.
*  $MIDISOUNDFONT metacommand was deprecated in QB64-PE v3.14.0 . Use [_MIDISOUNDBANK](MIDISOUNDBANK.md)  instead.


</blockquote>

#### SEE ALSO

<blockquote>

*  $UNSTABLE
*  [_SNDOPEN](SNDOPEN.md) 

</blockquote>
