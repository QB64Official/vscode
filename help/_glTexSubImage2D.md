## _glTexSubImage2D
---

### The _glTexSubImage2D statement specifies a portion of an existing one-dimensional texture image. You cannot define a new texture with _glTexSubImage2D .

#### SYNTAX

`_glTexSubImage2D GLenum target , GLint level , GLint xoffset , GLint yoffset , GLsizei width , GLsizei height , GLenum format , GLenum type , const GLvoid *pixels`

#### PARAMETERS
* OpenGL is using its own set of variable types to describe its command parameters.
* Use the following table to find the respective QB64 Variable Types .


#### DESCRIPTION
* OpenGL's documentation is available in several places, so we won't reproduce it here for another time.
* The full description for this command can be found at Microsoft Docs and is also valid for QB64 usage.


#### SEE ALSO
* [SUB](./SUB.md) _GL
* [_glCopyTexImage1D](./_glCopyTexImage1D.md) , [_glCopyTexImage2D](./_glCopyTexImage2D.md) , [_glCopyTexSubImage1D](./_glCopyTexSubImage1D.md) , [_glCopyTexSubImage2D](./_glCopyTexSubImage2D.md)
* [_glDrawPixels](./_glDrawPixels.md) , [_glEnable](./_glEnable.md) , _glFog , [_glGetTexImage](./_glGetTexImage.md)
* [_glIsEnabled](./_glIsEnabled.md) , _glPixelStore , _glPixelTransfer , _glTexEnv
* _glTexGen , [_glTexImage1D](./_glTexImage1D.md) , [_glTexImage2D](./_glTexImage2D.md) , [_glTexSubImage1D](./_glTexSubImage1D.md)
* [_glTexImage2D](./_glTexImage2D.md) , _glTexParameter
