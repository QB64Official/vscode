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

## [PLAY_(function)](PLAY_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/PLAY (function))
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

*  remaining& is the number of notes/samples/seconds left to play in the background music queue.
*  numericExpression& can be any numeric expression.
*  See also the important version dependent notes in the Availability section.

</blockquote>

#### DESCRIPTION

<blockquote>

*  This function may be used to detect, if the background music queue is still playing.
*  When there is nothing left to play, then this function returns zero.


</blockquote>

#### SEE ALSO

<blockquote>

*  [PLAY](PLAY.md) 
*  [SOUND](SOUND.md) 
*  [BEEP](BEEP.md) 
*  [_SNDOPEN](SNDOPEN.md) 
*  [_SNDRAW](SNDRAW.md) 

</blockquote>
