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

## [_KEYCLEAR](KEYCLEAR.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_KEYCLEAR)
---
<blockquote>

### _KEYCLEAR clears all keyboard input buffers.

</blockquote>

#### SYNTAX

<blockquote>

`_KEYCLEAR [ buffer& ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  buffer& indicates the buffer to be cleared:
	* 1 - Clear the regular keyboard buffer, as used by all input command except the following: [_KEYHIT](KEYHIT.md) , [_KEYDOWN](KEYDOWN.md) , [INP](INP.md) (&H60.  This is the same as the the emulated BIOS keyboard buffer, so legacy code reading from it via [PEEK](PEEK.md) / [POKE](POKE.md) / [CALL](CALL.md)  [ABSOLUTE](ABSOLUTE.md)  will also be affected.
	* 2 - Clear the buffer used by [_KEYHIT](KEYHIT.md) .
	* 3 - Clear [INP](INP.md) (&H60) buffer. (see Warning in the the description below)
*  If no parameter is passed, all three buffers are cleared.

</blockquote>

#### DESCRIPTION

<blockquote>

*  The [_KEYCLEAR](KEYCLEAR.md)  command clears the specified keyboard input buffer. In effect, it is as if a loop has been used to read from the buffer until it is empty. All keys cleared are lost.
*  Warning: The buffer read by [INP](INP.md) (&H60) does not behave as the other buffers do. Whilst reading from the others will eventually empty after reading all data, this buffer will continue to return the last value. For this reason, [_KEYCLEAR](KEYCLEAR.md)  is of little effect, but is included for completeness (an internal flag indicating new data on the port is cleared). However, using [INP](INP.md)  for anything is strongly discouraged, and is for backwards compatibility only.
*  This command is best used just before getting input, in order to clear stray [KEY](KEY.md)  presses from commands such as [SLEEP](SLEEP.md) , or just random keyboard bashing by the user. The programmer also ought to be aware of [KEY](KEY.md)  release events in the [_KEYHIT](KEYHIT.md)  buffer; consider the following code:


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [SLEEP](SLEEP.md) 
*  INKEY$ , [_KEYHIT](KEYHIT.md) 

</blockquote>
