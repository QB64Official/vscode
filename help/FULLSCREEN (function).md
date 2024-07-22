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

## [_FULLSCREEN_(function)](FULLSCREEN_(function).md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_FULLSCREEN (function))
---
<blockquote>

### The _FULLSCREEN function returns the present full screen mode setting of the screen window.

</blockquote>

#### SYNTAX

<blockquote>

`full% = _FULLSCREEN`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Function returns:
	* 0 = [_OFF]( [OFF](OFF.md) .md)  (any positive non-0 value means fullscreen is on)
	* 1 = [_STRETCH]( [STRETCH](STRETCH.md) .md) 
	* 2 = [_SQUAREPIXELS](SQUAREPIXELS.md) 
*  It cannot be assumed that calling [_FULLSCREEN](FULLSCREEN.md)  will succeed. It cannot be assumed that the type of full [SCREEN](SCREEN.md)  will match the requested one. Always check the [_FULLSCREEN](FULLSCREEN.md)  (function) return in your programs.
*  Warning: Despite your software, the user's hardware, drivers and monitor may not function in some modes. Thus, it is highly recommended that you manually confirm with the user whether the switch to full screen was successful. This can be done "quietly" in some cases by getting the user to click on a button on screen with their mouse or press an unusual key. If the user does not respond after about 8 seconds, switch them back to windowed mode.
Using large fonts with _FULLSCREEN can cause monitor or Windows Desktop problems or kill a program.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_FULLSCREEN](FULLSCREEN.md)  (statement)
*  [_ALLOWFULLSCREEN](ALLOWFULLSCREEN.md) 
*  [_SCREENMOVE](SCREENMOVE.md)  , [_SCREENX](SCREENX.md)  , [_SCREENY](SCREENY.md) 

</blockquote>
