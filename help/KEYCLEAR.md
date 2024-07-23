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


* buffer& indicates the buffer to be cleared:
* 1 - Clear the regular keyboard buffer, as used by all input command except the following:  _KEYHIT, _KEYDOWN, INP(&H60.  This is the same as the the emulated BIOS keyboard buffer, so legacy code reading from it via PEEK/POKE/CALL [ABSOLUTE](ABSOLUTE.md) will also be affected.
* 2 - Clear the buffer used by _KEYHIT.
* 3 - Clear INP(&H60) buffer. (see Warning in the the description below)
* If no parameter is passed, all three buffers are cleared.
</blockquote>

#### DESCRIPTION

<blockquote>


* The [_KEYCLEAR](KEYCLEAR.md) command clears the specified keyboard input buffer. In effect, it is as if a loop has been used to read from the buffer until it is empty. All keys cleared are lost.
* Warning: The buffer read by INP(&H60) does not behave as the other buffers do. Whilst reading from the others will eventually empty after reading all data, this buffer will continue to return the last value. For this reason, [_KEYCLEAR](KEYCLEAR.md) is of little effect, but is included for completeness (an internal flag indicating new data on the port is cleared). However, using [INP](INP.md) for anything is strongly discouraged, and is for backwards compatibility only.
* This command is best used just before getting input, in order to clear stray key presses from commands such as SLEEP, or just random keyboard bashing by the user. The programmer also ought to be aware of key release events in the [_KEYHIT](KEYHIT.md) buffer; consider the following code:

</blockquote>

#### EXAMPLES

<blockquote>

```vb
INPUT "Name: ", name$
_KEYCLEAR
_DELAY 2 'Simulate doing some processing that takes some time.
PRINT _KEYHIT
```
  
<br>

```vb
INPUT "Name: ", name$
_DELAY 2 'Simulate doing some processing that takes some time.
_KEYCLEAR
PRINT _KEYHIT
```
  
<br>



##### Example:
```vb
PRINT "Press a key"
SLEEP 'Wait for keypress
'Three alternative _KEYCLEAR calls. Try uncommenting different ones to see the effect.
'_KEYCLEAR
'_KEYCLEAR 1
'_KEYCLEAR 2
PRINT "In regular buffer, there is "; INKEY$ 'read regular buffer
PRINT "In _KEYHIT buffer, there is "; _KEYHIT 'read the _KEYHIT buffer
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* [SLEEP](SLEEP.md)
* [INKEY&dollar;](INKEY&dollar;.md) , [_KEYHIT](KEYHIT.md)
</blockquote>
