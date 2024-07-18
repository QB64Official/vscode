## _glTexSubImage1D
---

### The _glTexSubImage1D statement specifies a portion of an existing one-dimensional texture image. You cannot define a new texture with _glTexSubImage1D .

#### SYNTAX

`_glTexSubImage1D GLenum target , GLint level , GLint xoffset , GLsizei width , GLenum format , GLenum type , const GLvoid *pixels`

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
* _glTexGen , [_glTexImage1D](./_glTexImage1D.md) , [_glTexImage2D](./_glTexImage2D.md) , _glTexParameter
* [_glTexSubImage2D](./_glTexSubImage2D.md)
