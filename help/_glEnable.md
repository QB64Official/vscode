# _glEnable

The **_glEnable** and **_glDisable** statements enable or disable OpenGL capabilities.

  

## Syntax

_glEnable GLenum *cap*
  

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
* [_glAlphaFunc](_glAlphaFunc.md), [_glArrayElement](_glArrayElement.md), [_glBegin](_glBegin.md), [_glBlendFunc](_glBlendFunc.md)
* [_glClipPlane](_glClipPlane.md), [_glColorMaterial](_glColorMaterial.md), [_glColorPointer](_glColorPointer.md), [_glCullFace](_glCullFace.md)
* [_glDepthFunc](_glDepthFunc.md), [_glDepthRange](_glDepthRange.md), [_glDisable](_glDisable.md), [_glDrawArrays](_glDrawArrays.md)
* [_glEdgeFlagPointer](_glEdgeFlagPointer.md), [_glEnd](_glEnd.md), [_glEvalCoord](_glEvalCoord.md), [_glEvalMesh](_glEvalMesh.md)
* [_glEvalPoint](_glEvalPoint.md), [_glFog](_glFog.md), [_glGet](_glGet.md), [_glIndexPointer](_glIndexPointer.md)
* [_glIsEnabled](_glIsEnabled.md), [_glLight](_glLight.md), [_glLightModel](_glLightModel.md), [_glLineWidth](_glLineWidth.md)
* [_glLineStipple](_glLineStipple.md), [_glLogicOp](_glLogicOp.md), [_glMap1](_glMap1.md), [_glMap2](_glMap2.md)
* [_glMaterial](_glMaterial.md), [_glNormal](_glNormal.md), [_glNormalPointer](_glNormalPointer.md), [_glPointSize](_glPointSize.md)
* [_glPolygonMode](_glPolygonMode.md), [_glPolygonStipple](_glPolygonStipple.md), [_glScissor](_glScissor.md), [_glStencilFunc](_glStencilFunc.md)
* [_glStencilOp](_glStencilOp.md), [_glTexCoordPointer](_glTexCoordPointer.md), [_glTexGen](_glTexGen.md), [_glTexImage1D](_glTexImage1D.md)
* [_glTexImage2D](_glTexImage2D.md)

  
