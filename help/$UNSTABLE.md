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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [\$UNSTABLE](\$UNSTABLE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/%24UNSTABLE)
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


* The current unstable features are as follows:
* MIDI allows usage of the [&dollar;MIDISOUNDFONT](&dollar;MIDISOUNDFONT.md) metacommand
* HTTP allows opening HTTP connections using [_OPENCLIENT](OPENCLIENT.md)
</blockquote>

#### DESCRIPTION

<blockquote>


* [&dollar;UNSTABLE](&dollar;UNSTABLE.md) exists as a way to allow usage of new language features before they are finalized as part of the language.
* Any languages features hidden behind [&dollar;UNSTABLE](&dollar;UNSTABLE.md) may be changed in breaking ways in the next version of QB64-PE.
* Language features that become a permanent part of the language will no longer require [&dollar;UNSTABLE](&dollar;UNSTABLE.md) to be used.
* More than one [&dollar;UNSTABLE](&dollar;UNSTABLE.md) can be used in a program.
* MIDI keyword was deprecated in QB64-PE v3.14.0 . Use [_MIDISOUNDBANK](MIDISOUNDBANK.md) instead.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
$UNSTABLE:MIDI

' This line is only allowed when $UNSTABLE:MIDI is used
$MIDISOUNDFONT: Default

_SNDPLAYFILE "example.mid"
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [&dollar;MIDISOUNDFONT](&dollar;MIDISOUNDFONT.md)
* [_OPENCLIENT](OPENCLIENT.md)
</blockquote>
