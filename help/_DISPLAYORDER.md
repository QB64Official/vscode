## _DISPLAYORDER
---

### The _DISPLAYORDER statement defines the order to render software, hardware and custom-OpenGL-code.

#### SYNTAX

`_DISPLAYORDER [{_SOFTWARE|_HARDWARE|_HARDWARE1|_GLRENDER}][, ...][, ...][, ...][, ...]`

#### PARAMETERS
* [_SOFTWARE](./_SOFTWARE.md) refers to software created surfaces or SCREENs .
* [_HARDWARE](./_HARDWARE.md) and [_HARDWARE1](./_HARDWARE1.md) refer to surfaces created by OpenGL hardware acceleration.
* [_GLRENDER](./_GLRENDER.md) refers to OpenGL code rendering order


#### DESCRIPTION
* The default on program start is: [_DISPLAYORDER](./_DISPLAYORDER.md) [_SOFTWARE](./_SOFTWARE.md), [_HARDWARE](./_HARDWARE.md), [_GLRENDER](./_GLRENDER.md), [_HARDWARE1](./_HARDWARE1.md)
* Any content or combination order is allowed, except listing the same content twice consecutively.
* Simply using [_DISPLAYORDER](./_DISPLAYORDER.md) [_HARDWARE](./_HARDWARE.md) will render hardware surfaces only.
* Use an underscore to continue a code line on a new text row in the IDE.
* After [_DISPLAYORDER](./_DISPLAYORDER.md) has been used, it must be used to make any changes, even to default.


#### SEE ALSO
* [_DISPLAY](./_DISPLAY.md)
* [_PUTIMAGE](./_PUTIMAGE.md)
* [_LOADIMAGE](./_LOADIMAGE.md)
* [_COPYIMAGE](./_COPYIMAGE.md)
* Hardware images
