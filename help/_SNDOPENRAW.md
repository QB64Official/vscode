# _SNDOPENRAW

The _SNDOPENRAW function opens a new channel to fill with _SNDRAW content to manage multiple dynamically generated sounds.

  

## Syntax

*pipeHandle&* = _SNDOPENRAW
  

## Description

* You can manage multiple dynamically generated sounds at once without having to worry about mixing.
* Use [_SNDCLOSE](_SNDCLOSE.md) to remove the pipe sound handles from memory.

  

## Examples

*Example:* Combining 2 sounds without worrying about mixing:

``` a = _SNDOPENRAW b = _SNDOPENRAW  [FOR](FOR.md) x = 1 [TO](TO.md) 100000     [_SNDRAW](_SNDRAW.md) [SIN](SIN.md)(x / 10), , a 'fill with a tone     [_SNDRAW](_SNDRAW.md) [RND](RND.md) * 1 - 0.5, , b 'fill with static [NEXT](NEXT.md)  [_SNDCLOSE](_SNDCLOSE.md) a [_SNDCLOSE](_SNDCLOSE.md) b  
```

  

## See also

* [_SNDRAWDONE](_SNDRAWDONE.md)
* [_SNDRAW](_SNDRAW.md)
* [_SNDCLOSE](_SNDCLOSE.md)

  
