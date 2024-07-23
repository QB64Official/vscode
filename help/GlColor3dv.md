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


## [_glColor3dv](glColor3dv.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_glColor3dv)
---
<blockquote>

### The _glColor3dv statement sets the current color from an already existing array of color values.

</blockquote>

#### SYNTAX

<blockquote>

`_glColor3dv const GLdouble *v`

</blockquote>

#### PARAMETERS

<blockquote>


* OpenGL is using its own set of variable types to describe its command parameters.
* Use the following table to find the respective QB64 Variable Types .
</blockquote>

#### DESCRIPTION

<blockquote>


* OpenGL's documentation is available in several places, so we won't reproduce it here for another time.
* The full description for this command can be found at Microsoft Docs and is also valid for QB64 usage.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Table 2: Relations between the OpenGL variable types vs. C/C++ and QB64.
┌──────────────┬────────────────┬──────────────────────────────────────────┐
│    OpenGL    │     C/C++      │     QB64                                 │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLenum       │ unsigned int   │ _UNSIGNED LONG                           │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLboolean    │ unsigned char  │ _UNSIGNED _BYTE                          │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLbitfield   │ unsigned int   │ _UNSIGNED LONG                           │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLbyte       │ signed char    │ _BYTE                                    │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLshort      │ short          │ INTEGER                                  │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLint        │ int            │ LONG                                     │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLsizei      │ int            │ LONG                                     │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLubyte      │ unsigned char  │ _UNSIGNED _BYTE                          │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLushort     │ unsigned short │ _UNSIGNED INTEGER                        │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLuint       │ unsigned int   │ _UNSIGNED LONG                           │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLfloat      │ float          │ SINGLE                                   │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLclampf     │ float          │ SINGLE                                   │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLdouble     │ double         │ DOUBLE                                   │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLclampd     │ double         │ DOUBLE                                   │
├──────────────┼────────────────┼──────────────────────────────────────────┤
│ GLvoid   (1) │ void           │ _OFFSET(any fixed lenght string or _BYTE │
│              │                │         array element)                   │
└──────────────┴────────────────┴──────────────────────────────────────────┘
Note: If a parameter has an asterisk (*) in front, then it's a pointer to
the designated OpenGL variable type, rather than a value of that type.
Those must be passed using the _OFFSET(...) notation.

E.g.  GLuint *anyParam is actually the offset of a _UNSIGNED LONG (~&)
variable or array, which must be passed as _OFFSET(anyVar~&) or
_OFFSET(anyArr~&()) respectively.

(1)  This type is regularly only used for pointers (with asterisk (*)) to
any byte sized memory data, hence _BYTE or fixed length strings.
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [SUB](SUB.md) _GL
* [_glBegin](glBegin.md) , [_glEnd](glEnd.md) , _glGet , _glIndex
</blockquote>
