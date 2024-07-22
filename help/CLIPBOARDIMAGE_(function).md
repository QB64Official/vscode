## _CLIPBOARDIMAGE (function)
---
<blockquote>

### The _CLIPBOARDIMAGE function pastes an image from the clipboard into a new 32-bit image in memory.

</blockquote>

#### SYNTAX

<blockquote>

`newImageHandle& = _CLIPBOARDIMAGE`

</blockquote>

#### DESCRIPTION

<blockquote>

* When the paste operation is successful, newImageHandle& will be < -1. Handle values of -1 or 0 indicate that there wasn't an image in the clipboard or that the format wasn't accepted.
* Use [_FREEIMAGE](./_FREEIMAGE.md) to free the memory used by newImageHandle& when it's no longer needed by your program.


</blockquote>

#### SEE ALSO

<blockquote>

* [_CLIPBOARDIMAGE](./_CLIPBOARDIMAGE.md) (statement - used to copy an image to the clipboard)
* _CLIPBOARD$ , _CLIPBOARD$ (function) (used to copy/paste text)

</blockquote>
