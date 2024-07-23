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


## [_BLEND](BLEND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BLEND)
---
<blockquote>

### The _BLEND statement turns on 32 bit alpha blending for an image or screen mode and is on by default.

</blockquote>

#### SYNTAX

<blockquote>

`_BLEND [ imageHandle& ]`

</blockquote>

#### PARAMETERS

<blockquote>


* imageHandle& refers to an image in memory. If not specified, the current destination page (See [_DEST](DEST.md) ) is affected.
</blockquote>

#### DESCRIPTION

<blockquote>


* Alpha blending is on by default when loading a .PNG image to a 32-bit surface.
* Normally it is used to turn blending on after a previous [_DONTBLEND](DONTBLEND.md) call.
* [_BLEND](BLEND.md) can only be used on 32-bit surfaces, otherwise it will produce the error Illegal Function Call .
* Note: [_DONTBLEND](DONTBLEND.md) is faster than the default [_BLEND](BLEND.md) unless you really need to use it in 32 bit.
* 32 bit screen surface backgrounds (black) have zero [_ALPHA](ALPHA.md) so that they are transparent when placed over other surfaces.

</blockquote>

#### EXAMPLES

<blockquote>



##### Example:
```vb
SCREEN _NEWIMAGE(640, 480, 32)

'CLS , _RGB(128, 128, 128) 'change background color for other results

_DONTBLEND

bg& = POINT(0, 0)
PRINT _RED(bg&), _GREEN(bg&), _BLUE(bg&), _ALPHA(bg&)

LINE (100, 100)-(200, 200), _RGBA32(255, 128, 0, 128), BF

LINE (440, 100)-(540, 200), _RGBA32(0, 0, 255, 64), BF

K$ = INPUT$(1)

_BLEND

LINE (270, 300)-(370, 400), _RGBA32(255, 128, 0, 128), BF
m& = POINT(303, 302)
PRINT _RED(m&), _GREEN(m&), _BLUE(m&), _ALPHA(m&)
K$ = INPUT$(1)

LINE (270, 300)-(370, 400), _RGBA32(0, 0, 255, 64), BF
m& = POINT(303, 302)
PRINT _RED(m&), _GREEN(m&), _BLUE(m&), _ALPHA(m&)
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_DONTBLEND](DONTBLEND.md) , [_BLEND](BLEND.md) (function)
* Images
</blockquote>
