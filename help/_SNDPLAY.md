# _SNDPLAY

The _SNDPLAY statement plays a sound designated by a file handle created by [_SNDOPEN](_SNDOPEN.md).

  

## Syntax

_SNDPLAY *handle&*
  

## Description

* Make sure that the *handle&* value is not 0 before attempting to play it.

  

## Examples

*Example:* Checking a handle value before playing

```  [IF](IF.md) h& [THEN](THEN.md) _SNDPLAY h&  
```

  

## See also

* [_SNDOPEN](_SNDOPEN.md), [_SNDPAUSE](_SNDPAUSE.md), [_SNDPLAYING](_SNDPLAYING.md)

  
