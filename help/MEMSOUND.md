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

## [_MEMSOUND](MEMSOUND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_MEMSOUND)
---
<blockquote>

### The _MEMSOUND function returns a _MEM value referring to a sound's raw data in memory using a designated sound handle created by the _SNDOPEN or _SNDNEW function.

</blockquote>

#### SYNTAX

<blockquote>

`soundBlock = _MEMSOUND ( soundHandle& [, channel& ])`

</blockquote>

#### PARAMETERS

<blockquote>

*  The soundBlock [_MEM](MEM.md)  [TYPE](TYPE.md)  variable holds the read-only elements .OFFSET, .SIZE, .ELEMENTSIZE, . [TYPE](TYPE.md)  and . [SOUND](SOUND.md) .
	* .OFFSET is the starting memory address of the sound sample data.
	* .SIZE is the size of the sample data in bytes
	* .ELEMENTSIZE will contain the number of bytes-per-sample the audio contains.
		* Can return 1 (8-bit mono), 2 (8-bit stereo), 2 (16-bit mono), 4 (16-bit stereo), 4 (32-bit mono) or 8 (32-bit stereo).
		* Use . [TYPE](TYPE.md)  to determine the data [TYPE](TYPE.md)  of the sample data.
	* . [TYPE](TYPE.md)  will contain the data [TYPE](TYPE.md)  of the sample data. See [_MEM](MEM.md)  for details.
	* . [SOUND](SOUND.md)  will contain the same handle value as returned by the [_SNDOPEN](SNDOPEN.md)  function.
*  The second parameter channel& is optional and deprecated. This was used to specify the sound channel. In QB64-PE v3.1.0 and above stereo data is always interleaved. You must use .ELEMENTSIZE and . [TYPE](TYPE.md)  to determine the [TYPE](TYPE.md)  of audio data you are dealing with.

</blockquote>

#### DESCRIPTION

<blockquote>

*  Use this function to obtain a pointer to the raw sound data in memory for direct access.
*  Even if the memory pointer obtained by this fuction was already freed again using [_MEMFREE](MEMFREE.md)  , the respective Sound handle itself must still be freed using [_SNDCLOSE](SNDCLOSE.md)  when no longer required.
*  If .SIZE returns 0, that means the data could not be accessed. It may happen if you try to access the right channel in a mono file or the format simply does not support accessing raw PCM samples.
*  channel& - 1 (left channel/mono) or 2 (right channel; for stereo files) was supported on the old OpenAL backend. For the new miniaudio backend, this must be 0.


</blockquote>

#### SEE ALSO

<blockquote>

*  [_MEM](MEM.md)  , [_MEMFREE](MEMFREE.md) 
*  [_MEMPUT](MEMPUT.md)  , [_MEMGET](MEMGET.md)  , [_MEMGET](MEMGET.md)  (function)
*  [_SNDOPEN](SNDOPEN.md)  , [_SNDNEW](SNDNEW.md)  , [_SNDCLOSE](SNDCLOSE.md)  , [_SNDRAW](SNDRAW.md) 
*  [_SNDRATE](SNDRATE.md) 

</blockquote>
