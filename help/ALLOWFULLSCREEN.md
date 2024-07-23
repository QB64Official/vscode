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


## [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_ALLOWFULLSCREEN)
---
<blockquote>

### The _ALLOWFULLSCREEN statement allows setting the behavior of the ALT+ENTER combo.

</blockquote>

#### SYNTAX

<blockquote>

`_ALLOWFULLSCREEN [{_STRETCH|_SQUAREPIXELS|OFF|_ALL}][, {_SMOOTH|OFF|_ALL}]`

</blockquote>

#### DESCRIPTION

<blockquote>


* Calling the statement with no parameters enables all four possible full screen modes (and is the default state when a program is started): both [_STRETCH](STRETCH.md) ( [_SMOOTH](SMOOTH.md) and [_OFF](OFF.md) ) and [_SQUAREPIXELS](SQUAREPIXELS.md) ( [_SMOOTH](SMOOTH.md) and [_OFF](OFF.md) ).
* Using [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) [_ALL](ALL.md) , [_ALL](ALL.md) has the same effect.
* [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) only affects the behavior of ALT+ENTER. The [_FULLSCREEN](FULLSCREEN.md) statement is not bound by [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) 's settings so all modes can be accessed programmatically.
* To limit just the mode but allow both [_SMOOTH](SMOOTH.md) + [_OFF](OFF.md) antialiasing modes, pass just the first parameter: Example: [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) [_SQUAREPIXELS](SQUAREPIXELS.md)
* To allow multiple modes with [_SMOOTH](SMOOTH.md) or [_OFF](OFF.md) as default, pass just the second parameter. Example: [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) , [_SMOOTH](SMOOTH.md)
* Any possible permutation of the parameters is allowed.
* With [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) [_OFF](OFF.md) you can trap Alt+Enter manually in your program and reassign it. See example 2 below.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example 1: Allowing only one fullscreen mode with square pixels and no antialiasing:
```vb
_ALLOWFULLSCREEN _SQUAREPIXELS , OFF
```
  
<br>



##### Example 2: Disabling _FULLSCREEN with Alt+ENTER so the combo can be manually trapped:
```vb
DO
CLS

LOCATE 7
PRINT "    - Press ALT+ENTER to test trapping the combo..."
PRINT "    _ Press SPACEBAR to allow fullscreen again..."

k& = _KEYHIT

IF k& = 13 THEN
IF _KEYDOWN(100307) OR _KEYDOWN(100308) THEN
altEnter = altEnter + 1
END IF
ELSEIF k& = 32 THEN
fullscreenEnabled = NOT fullscreenEnabled
END IF

LOCATE 14
IF fullscreenEnabled THEN
_ALLOWFULLSCREEN _ALL , _ALL
altEnter = 0
PRINT "_ALLOWFULLSCREEN _ALL, _ALL"

LOCATE 18
PRINT "ALT+ENTER will trigger all four fullscreen modes now."
ELSE
_ALLOWFULLSCREEN OFF
PRINT "_ALLOWFULLSCREEN OFF"
END IF

IF altEnter THEN
LOCATE 18
PRINT "ALT+ENTER manually trapped"; altEnter; "times."
END IF

_DISPLAY
_LIMIT 30
LOOP
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_FULLSCREEN](FULLSCREEN.md) , [_SMOOTH](SMOOTH.md) (function)
</blockquote>
