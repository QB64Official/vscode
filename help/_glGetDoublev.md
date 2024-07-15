# _glGetDoublev

The **_glGetDoublev** statement returns the value or values of a selected parameter.

  

## Syntax

_glGetDoublev GLenum *pname*, GLdouble **params*
  

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
* [_glAccum](_glAccum.md), [_glAlphaFunc](_glAlphaFunc.md), [_glBegin](_glBegin.md), [_glBlendFunc](_glBlendFunc.md)
* [_glCallList](_glCallList.md), [_glClearAccum](_glClearAccum.md), [_glClearColor](_glClearColor.md), [_glClearDepth](_glClearDepth.md)
* [_glClearIndex](_glClearIndex.md), [_glClearStencil](_glClearStencil.md), [_glClipPlane](_glClipPlane.md), [_glColor](_glColor.md)
* [_glColorMask](_glColorMask.md), [_glColorMaterial](_glColorMaterial.md), [_glCullFace](_glCullFace.md), [_glDepthFunc](_glDepthFunc.md)
* [_glDepthMask](_glDepthMask.md), [_glDepthRange](_glDepthRange.md), [_glDrawBuffer](_glDrawBuffer.md), [_glEdgeFlag](_glEdgeFlag.md)
* [_glEnd](_glEnd.md), [_glFog](_glFog.md), [_glFrontFace](_glFrontFace.md), [_glGetClipPlane](_glGetClipPlane.md)
* [_glGetError](_glGetError.md), [_glGetLight](_glGetLight.md), [_glGetMap](_glGetMap.md), [_glGetMaterial](_glGetMaterial.md)
* [_glGetPixelMap](_glGetPixelMap.md), [_glGetPolygonStipple](_glGetPolygonStipple.md), [_glGetString](_glGetString.md), [_glGetTexEnv](_glGetTexEnv.md)
* [_glGetTexGen](_glGetTexGen.md), [_glGetTexImage](_glGetTexImage.md), [_glGetTexLevelParameter](_glGetTexLevelParameter.md), [_glGetTexParameter](_glGetTexParameter.md)
* [_glHint](_glHint.md), [_glIndex](_glIndex.md), [_glIndexMask](_glIndexMask.md), [_glIsEnabled](_glIsEnabled.md)
* [_glLight](_glLight.md), [_glLightModel](_glLightModel.md), [_glLineStipple](_glLineStipple.md), [_glLineWidth](_glLineWidth.md)
* [_glListBase](_glListBase.md), [_glLogicOp](_glLogicOp.md), [_glMap1](_glMap1.md), [_glMap2](_glMap2.md)
* [_glMapGrid](_glMapGrid.md), [_glMatrixMode](_glMatrixMode.md), [_glNewList](_glNewList.md), [_glNormal](_glNormal.md)
* [_glPixelMap](_glPixelMap.md), [_glPixelStore](_glPixelStore.md), [_glPixelTransfer](_glPixelTransfer.md), [_glPixelZoom](_glPixelZoom.md)
* [_glPointSize](_glPointSize.md), [_glPolygonMode](_glPolygonMode.md), [_glPolygonStipple](_glPolygonStipple.md), [_glPushAttrib](_glPushAttrib.md)
* [_glPushMatrix](_glPushMatrix.md), [_glPushName](_glPushName.md), [_glRasterPos](_glRasterPos.md), [_glReadPixels](_glReadPixels.md)
* [_glScissor](_glScissor.md), [_glShadeModel](_glShadeModel.md), [_glStencilFunc](_glStencilFunc.md), [_glStencilMask](_glStencilMask.md)
* [_glStencilOp](_glStencilOp.md), [_glTexCoord](_glTexCoord.md), [_glTexEnv](_glTexEnv.md), [_glTexGen](_glTexGen.md)
* [_glTexImage1D](_glTexImage1D.md), [_glTexImage2D](_glTexImage2D.md), [_glViewport](_glViewport.md)

  
