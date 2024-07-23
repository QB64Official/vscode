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


## [_CLIP](CLIP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_CLIP)
---
<blockquote>

### The _CLIP option is used in a QB64 graphics PUT to allow placement of an image partially off of the screen.

</blockquote>

#### SYNTAX

<blockquote>

`PUT [[[STEP]]]( column, row ), image_array(start) [, _CLIP ] [{XOR|PSET|AND|OR|PRESET}][, omitcolor ]`

</blockquote>

#### DESCRIPTION

<blockquote>


* [_CLIP](CLIP.md) should be placed immediately before the [PUT](PUT.md) action if used. [XOR](XOR.md) is default when not used.
* The offscreen portions of the image will be the omit color.
* [GET](GET.md) can get portions of the images off screen in QB64 .

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Placing an image partially or fully offscreen.
```vb
DIM mypic(500)
SCREEN 13

CLS
CIRCLE (10, 10), 10
GET (0, 0)-(20, 20), mypic(0)

PRINT "This program puts an image off screen."
PRINT "Select which option you'd like to try."
PRINT "1 will produce an illegal function call."
PRINT "1 is putting without _CLIP."
PRINT "2 is putting with _CLIP PSET."
PRINT "3 is putting with _CLIP XOR."
PRINT "4 is putting with _CLIP PSET, 4."

INPUT sel
IF sel = 1 THEN PUT (-10, 10), mypic(0), PSET ' this causes an illegal function call
IF sel = 2 THEN PUT (-10, 10), mypic(0), _CLIP PSET ' allows graphic to be drawn off-screen
IF sel = 3 THEN PUT (-10, 10), mypic(0), _CLIP ' uses the default PUT XOR operation
IF sel = 4 THEN PUT (-10, 10), mypic(0), _CLIP PSET, 4 ' doesn't draw red pixels

END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [PUT](PUT.md) (graphics statement)
* [GET](GET.md) (graphics statement)
* [STEP](STEP.md)
</blockquote>
