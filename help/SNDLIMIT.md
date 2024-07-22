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

## [_SNDLIMIT](SNDLIMIT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDLIMIT)
---
<blockquote>

### The _SNDLIMIT statement stops playing a sound after it has been playing for a set number of seconds.

</blockquote>

#### SYNTAX

<blockquote>

`_SNDLIMIT handle& , numberOfSeconds!`

</blockquote>

#### PARAMETERS

<blockquote>

*  The handle& variable name is created using the [_SNDOPEN](SNDOPEN.md)  function from a loaded sound file.
*  numberOfSeconds! is a [SINGLE](SINGLE.md)  value of seconds that the sound will play.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Sets how long a sound will be played in seconds. If the limit is set after the sound is started, the timer starts counting down from when the limit is applied, not from the start of playing.
*  Set numberOfSeconds! to 0 seconds to remove the limit.
*  Pausing or stopping the sound will also remove the limit.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_SNDOPEN](SNDOPEN.md)  , [_SNDLEN](SNDLEN.md) 

</blockquote>
