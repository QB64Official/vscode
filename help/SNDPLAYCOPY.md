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


## [_SNDPLAYCOPY](SNDPLAYCOPY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDPLAYCOPY)
---
<blockquote>

### The _SNDPLAYCOPY statement copies a sound, plays it, and automatically closes the copy using a handle parameter passed from _SNDOPEN or _SNDCOPY

</blockquote>

#### SYNTAX

<blockquote>

`_SNDPLAYCOPY handle& [, [ volume! ][, x! ][, y! ][, z! ]]`

</blockquote>

#### PARAMETERS

<blockquote>


* The [LONG](LONG.md) handle& value is returned by [_SNDOPEN](SNDOPEN.md) using a specific sound file.
* The volume! parameter can be any [SINGLE](SINGLE.md) value from 0 (no volume) to 1 (full volume).
* x! distance values go from left (negative) to right (positive) (beginning with v3.3.x ).
* y! distance values go from below (negative) to above (positive) (beginning with v3.3.x ).
* z! distance values go from behind (negative) to in front (positive) (beginning with v3.3.x ).
</blockquote>

#### DESCRIPTION

<blockquote>


* Makes coding easier by doing all of the following automatically:

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Playing a previously opened sound from left and right speakers.
```vb
DIM AS LONG h, i

h = _SNDOPEN("explosion.wav")

IF h > 0 THEN
FOR i = 0 TO 9
_LIMIT 1

IF i MOD 2 = 0 THEN
PRINT "Playing from right"
_SNDPLAYCOPY h, , 1
ELSE
PRINT "Playing from left"
_SNDPLAYCOPY h, , -1
END IF
NEXT
END IF
```
  
<br>



##### Example 2: Playing a sound at random volumes.
```vb
chomp& = _SNDOPEN("chomp.wav")
IF chomp& > 0 THEN _SNDPLAYCOPY chomp&, 0.5 + RND * 0.49
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_SNDOPEN](SNDOPEN.md)
* [_SNDCOPY](SNDCOPY.md)
* [_SNDPLAYFILE](SNDPLAYFILE.md)
</blockquote>
