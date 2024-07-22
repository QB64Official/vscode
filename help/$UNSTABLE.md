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

## [\$UNSTABLE](\$UNSTABLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/$UNSTABLE)
---
<blockquote>

### The $UNSTABLE metacommand is used to enable the use of features that have not yet been made a permanent part of the language. Features hidden behind this metacommand may have breaking changes or be removed between releases.

</blockquote>

#### SYNTAX

<blockquote>

`$UNSTABLE : {MIDI, HTTP}`

</blockquote>

#### PARAMETERS

<blockquote>

*  The current unstable features are as follows:
	* MIDI allows usage of the $MIDISOUNDFONT metacommand
	* HTTP allows opening HTTP connections using [_OPENCLIENT](OPENCLIENT.md) 

</blockquote>

#### DESCRIPTION

<blockquote>

*  $UNSTABLE exists as a way to allow usage of new language features before they are finalized as part of the language.
*  Any languages features hidden behind $UNSTABLE may be changed in breaking ways in the next version of QB64-PE.
*  Language features that become a permanent part of the language will no longer require $UNSTABLE to be used.
*  More than one $UNSTABLE can be used in a program.
*  MIDI keyword was deprecated in QB64-PE v3.14.0 . Use [_MIDISOUNDBANK](MIDISOUNDBANK.md)  instead.


</blockquote>

#### SEE ALSO

<blockquote>

*  $MIDISOUNDFONT
*  [_OPENCLIENT](OPENCLIENT.md) 

</blockquote>
