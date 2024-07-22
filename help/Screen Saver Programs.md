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

## [Screen_Saver_Programs](Screen_Saver_Programs.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Screen Saver Programs)
---
<blockquote>

### Screen savers are simply graphics EXE programs renamed with the SCR file extension. The program should NOT use a lot of Window's CPU resources! To check the CPU usage, open Task Manager by pressing Ctrl + Alt + Delete keys and look for the QB64 program running in the Processes tab list. CPU usage should be less than 50% and ideally less than 20%. Use _LIMIT or SLEEP when needed.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: A screen saver that un-organizes the Desktop.
```vb
S& = _SCREENIMAGE                  'get the image of the desktop
RANDOMIZE TIMER
screenx = _WIDTH(S&)    'use current screen resolution dimensions
screeny = _HEIGHT(S&)
SCREEN _NEWIMAGE(screenx, screeny, 32)
_FULLSCREEN
_DISPLAY
temp& = _NEWIMAGE(40, 40, 32)
DO: _LIMIT 10
x1 = INT(RND * screenx)
y1 = INT(RND * screeny)
x2 = x1 + 40
y2 = y1 + 40
_PUTIMAGE , S&, temp&, (x1, y1)-(x2, y2)  'place partial image into page box
xoff1 = INT(40 - RND * 81) + x1
yoff1 = INT(40 - RND * 81) + y1
xoff2 = INT(40 - RND * 81) + x2
yoff2 = INT(40 - RND * 81) + y2
_PUTIMAGE (xoff1, yoff1)-(xoff2, yoff2), temp&, 0    'place image on the screen
_DISPLAY
DO WHILE _MOUSEINPUT                'check for mouse movement
mx = mx + _MOUSEMOVEMENTX
my = my + _MOUSEMOVEMENTY
LOOP
LOOP UNTIL INKEY$ > "" OR mx <> 0 OR my <> 0  'check for any key press
SYSTEM                      'close screen saver immediately
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [_MOUSEMOVEMENTX](MOUSEMOVEMENTX.md)  , [_MOUSEMOVEMENTY](MOUSEMOVEMENTY.md) 
*  [SCREEN](SCREEN.md)  , [_SCREENIMAGE](SCREENIMAGE.md) 
*  SaveImage [SUB](SUB.md) 

</blockquote>
