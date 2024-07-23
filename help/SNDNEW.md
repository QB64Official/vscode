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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_SNDNEW](SNDNEW.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_SNDNEW)
---
<blockquote>

### The _SNDNEW function creates a raw empty sound in memory and returns a LONG handle value for later access.

</blockquote>

#### SYNTAX

<blockquote>

`soundHandle& = _SNDNEW ( frames& , channels& , bits& )`

</blockquote>

#### PARAMETERS

<blockquote>


* frames& is the number of sample frames needed. The number needed for one second of sound is determined by your sound hardware's sample rate, hence you may use the following formula:
* frames& = [_SNDRATE](SNDRATE.md) 
* neededSeconds! where you may also specify fractional seconds.
* channels& is the number of channels needed (1 = mono, 2 = stereo).
* bits& is the number of bits per channel (8 = 8-bit unsigned integer, 16 = 16-bit signed integer, 32 = 32-bit floating point).
</blockquote>

#### DESCRIPTION

<blockquote>


* Use this function to create a raw sound in memory.
* Once the sound is created, it can be accessed and manipulated using the [_MEM](MEM.md) interface statements and functions, mainly [_MEMSOUND](MEMSOUND.md) , [_MEMGET](MEMGET.md) & [_MEMPUT](MEMPUT.md) .
* Using this function can generate sounds once programmatically and then play it multiple times.
* The sound memory can also be filled with sample data from other sources like files, [DATA](DATA.md) statements and more.
* Sound memory pointers obtained with [_MEMSOUND](MEMSOUND.md) must be freed using [_MEMFREE](MEMFREE.md) and the Sound handle value itself must be freed using [_SNDCLOSE](SNDCLOSE.md) when no longer required.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
OPTION _EXPLICIT

RANDOMIZE TIMER

CONST SOUND_DURATION = 5 ' duration is seconds
CONST SAMPLE_CHANNELS = 1 ' number of channes. For stereo we need to add another _MEMPUT below and +offset by SAMPLE_BYTES
CONST SAMPLE_BYTES = 4 ' number of bytes / sample (not frame!)

DIM h AS LONG: h = _SNDNEW(SOUND_DURATION * _SNDRATE, SAMPLE_CHANNELS, SAMPLE_BYTES * 8)
IF (h < 1) THEN
PRINT "Failed to create sound!"
END
END IF

DIM sndblk AS _MEM: sndblk = _MEMSOUND(h, 0)
IF sndblk.SIZE = 0 THEN
_SNDCLOSE h
PRINT "Failed to access sound data!"
END
END IF

DIM t AS _INTEGER64
FOR t = 0 TO (SOUND_DURATION * _SNDRATE) - 1
_MEMPUT sndblk, sndblk.OFFSET + (t * SAMPLE_BYTES * SAMPLE_CHANNELS), SIN(2 * _PI * 440 * t / _SNDRATE) + RND - RND AS SINGLE ' mixes noise and a sine wave
NEXT

_SNDPLAY h

SLEEP SOUND_DURATION

_SNDCLOSE h

END
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [_MEM](MEM.md) , [_MEMSOUND](MEMSOUND.md) , [_MEMFREE](MEMFREE.md)
* [_MEMPUT](MEMPUT.md) , [_MEMGET](MEMGET.md) , [_MEMGET](MEMGET.md) (function)
* [_SNDOPEN](SNDOPEN.md) , [_SNDCLOSE](SNDCLOSE.md) , [_SNDRAW](SNDRAW.md) , [_SNDRATE](SNDRATE.md)
</blockquote>
