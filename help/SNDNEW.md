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
    margin: 0 0 1em 0  !important;
    color: #88f !important;
    border: 0 !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
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
    border-radius: 8px !important; 
    border: 1px solid #567 !important;
    margin: 0 !important;
    box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.25) !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
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

*  frames& is the number of sample frames needed. The number needed for one second of sound is determined by your sound hardware's sample rate, hence you may use the following formula:
	* frames& = [_SNDRATE](SNDRATE.md)  * neededSeconds! where you may also specify fractional seconds.
*  channels& is the number of channels needed (1 = mono, 2 = stereo).
*  bits& is the number of bits per channel (8 = 8-bit unsigned integer, 16 = 16-bit signed integer, 32 = 32-bit floating point).

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use this function to create a raw sound in memory.
*  Once the [SOUND](SOUND.md)  is created, it can be accessed and manipulated using the [_MEM](MEM.md)  interface statements and functions, mainly [_MEMSOUND](MEMSOUND.md)  , [_MEMGET](MEMGET.md)  & [_MEMPUT](MEMPUT.md)  .
*  Using this function can generate sounds once programmatically and then play it multiple times.
*  The sound memory can also be filled with sample [DATA](DATA.md)  from other sources like files, [DATA](DATA.md)  statements and more.
*  [SOUND](SOUND.md)  memory pointers obtained with [_MEMSOUND](MEMSOUND.md)  must be freed using [_MEMFREE](MEMFREE.md)  and the [SOUND](SOUND.md)  handle value itself must be freed using [_SNDCLOSE](SNDCLOSE.md)  when no longer required.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md)  , [_MEMSOUND](MEMSOUND.md)  , [_MEMFREE](MEMFREE.md) 
*  [_MEMPUT](MEMPUT.md)  , [_MEMGET](MEMGET.md)  , [_MEMGET](MEMGET.md)  (function)
*  [_SNDOPEN](SNDOPEN.md)  , [_SNDCLOSE](SNDCLOSE.md)  , [_SNDRAW](SNDRAW.md)  , [_SNDRATE](SNDRATE.md) 

</blockquote>
