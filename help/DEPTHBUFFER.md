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


## [_DEPTHBUFFER](DEPTHBUFFER.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DEPTHBUFFER)
---
<blockquote>

### The _DEPTHBUFFER statement turns depth buffering ON or OFF, LOCKs or _CLEARS the buffer.

</blockquote>

#### SYNTAX

<blockquote>

`_DEPTHBUFFER {ON|OFF|LOCK|_CLEAR}[,handle&]`

</blockquote>

#### DESCRIPTION

<blockquote>


* Depth buffers store the distance of each pixel on an image/surface. When 3D drawing occurs new pixels are only drawn if they are closer than the existing pixels. After all content is drawn, it results in a scene which looks correct because content which is closer hides content which is further away.
* Depth buffers are automatically created for any hardware image or surface which is the target/destination of a 3D command (such as the 3D version of [_MAPTRIANGLE](MAPTRIANGLE.md) ).
* The buffering can be turned ON, [OFF](OFF.md) or LOCKed. The default state is ON.
* [_DEPTHBUFFER](DEPTHBUFFER.md) [_CLEAR](CLEAR.md) can be used to reset/erase the depth buffer, meaning that future drawing will not be blocked by existing/previously buffered depth content.
* Whenever [_DISPLAY](DISPLAY.md) is called the primary surface's depth buffer is automatically _CLEARed, so unless you are drawing onto a hardware image you may never need to use this option.
* LOCKing the depth buffer makes it read only. New content cannot be drawn unless it is closer than existing content, but when that new content is drawn it will not update the depth buffer.
* Turning [OFF](OFF.md) or LOCKing the depth buffer is typically performed when semi-transparent content is being drawn.

</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MAPTRIANGLE](MAPTRIANGLE.md)
* [_PUTIMAGE](PUTIMAGE.md)
* [_DISPLAY](DISPLAY.md)
</blockquote>
