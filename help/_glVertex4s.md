# _glVertex4s

The **_glVertex4s** statement specifies a vertex.

  

## Syntax

_glVertex4s GLshort *x*, GLshort *y*, GLshort *z*, GLshort *w*
  

## Parameters

* OpenGL is using its own set of variable types to describe its command parameters.
* Use the following table to find the respective QB64 [Variable Types](Variable Types.md).

```    Table 2: Relations between the OpenGL variable types vs. C/C++ and QB64.  ┌──────────────┬────────────────┬──────────────────────────────────────────┐  │    **OpenGL**    │     **C/C++**      │     **QB64**                                 │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLenum       │ unsigned int   │ [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)                           │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLboolean    │ unsigned char  │ [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)                          │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLbitfield   │ unsigned int   │ [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)                           │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLbyte       │ signed char    │ [_BYTE](_BYTE.md)                                    │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLshort      │ short          │ [INTEGER](INTEGER.md)                                  │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLint        │ int            │ [LONG](LONG.md)                                     │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLsizei      │ int            │ [LONG](LONG.md)                                     │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLubyte      │ unsigned char  │ [_UNSIGNED](_UNSIGNED.md) [_BYTE](_BYTE.md)                          │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLushort     │ unsigned short │ [_UNSIGNED](_UNSIGNED.md) [INTEGER](INTEGER.md)                        │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLuint       │ unsigned int   │ [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md)                           │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLfloat      │ float          │ [SINGLE](SINGLE.md)                                   │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLclampf     │ float          │ [SINGLE](SINGLE.md)                                   │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLdouble     │ double         │ [DOUBLE](DOUBLE.md)                                   │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLclampd     │ double         │ [DOUBLE](DOUBLE.md)                                   │  ├──────────────┼────────────────┼──────────────────────────────────────────┤  │ GLvoid   **(1)** │ void           │ [_OFFSET](_OFFSET.md)(any fixed lenght string or [_BYTE](_BYTE.md) │  │              │                │         array element)                   │  └──────────────┴────────────────┴──────────────────────────────────────────┘  **Note:** If a parameter has an asterisk (*) in front, then it's a pointer to        the designated OpenGL variable type, rather than a value of that type.        Those must be passed using the [_OFFSET](_OFFSET.md)(...) notation.   **E.g.**  GLuint *anyParam is actually the offset of a [_UNSIGNED](_UNSIGNED.md) [LONG](LONG.md) (~&)        variable or array, which must be passed as [_OFFSET](_OFFSET.md)(anyVar~&) or        [_OFFSET](_OFFSET.md)(anyArr~&()) respectively.    **(1)**  This type is regularly only used for pointers (with asterisk (*)) to        any byte sized memory data, hence [_BYTE](_BYTE.md) or fixed length strings.  
```

  

## Description

* OpenGL's documentation is available in several places, so we won't reproduce it here for another time.
* The full description for this command can be found at [Microsoft Docs](Microsoft Docs.md) and is also valid for QB64 usage.

  

## See also

* [SUB _GL](SUB _GL.md)
* [_glBegin](_glBegin.md), [_glCallList](_glCallList.md), [_glColor](_glColor.md), [_glEdgeFlag](_glEdgeFlag.md)
* [_glEnd](_glEnd.md), [_glEvalCoord](_glEvalCoord.md), [_glIndex](_glIndex.md), [_glMaterial](_glMaterial.md)
* [_glNormal](_glNormal.md), [_glRect](_glRect.md), [_glTexCoord](_glTexCoord.md)

  
