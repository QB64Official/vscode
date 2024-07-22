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

## [_glVertex4d](glVertex4d.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_glVertex4d)
---
<blockquote>

### The _glVertex4d statement specifies a vertex.

</blockquote>

#### SYNTAX

<blockquote>

`_glVertex4d GLdouble x , GLdouble y , GLdouble z , GLdouble w`

</blockquote>

#### PARAMETERS

<blockquote>

*  OpenGL is using its own set of variable types to describe its command parameters.
*  Use the following table to find the respective QB64 Variable Types .

</blockquote>

#### DESCRIPTION

<blockquote>

*  OpenGL's documentation is available in several places, so we won't reproduce it here for another time.
*  The full description for this command can be found at Microsoft Docs and is also valid for QB64 usage.


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

*  [SUB](SUB.md)  _GL
*  [_glBegin](glBegin.md)  , [_glCallList](glCallList.md)  , _glColor , [_glEdgeFlag](glEdgeFlag.md) 
*  [_glEnd](glEnd.md)  , _glEvalCoord , _glIndex , _glMaterial
*  _glNormal , _glRect , _glTexCoord

</blockquote>
