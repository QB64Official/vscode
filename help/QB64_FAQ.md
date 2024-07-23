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


## [QB64 FAQ](QB64_FAQ.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/QB64%20FAQ)
---
<blockquote>

### As with everything else, this list will be updated to correspond to new progress of the QB64 language, so make sure that you are using the latest version of QB64 or in our case QB64-PE , which stands for QB64 Phoenix Edition . Please note that it may take a short time to update this list.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
Early development was kept private by the original creator of QB64 (Galleon) v0.xxx to v1.0
|
The original Repository Galleon (2013-2019) v1.1 to v1.3
|
The QB64Team Repository QB64Team (2019-2022) v1.4 to v2.0.2
|                   |
|     The QB64Official Repository QB64Official (2022-Today) v2.1 (then stuck)
|
The Phoenix Edition Repository Phoenix Edition (2022-Today) v3.0.0 - v3.12.0++ (and active)
```
  
<br>

```vb
1) Full graphic functions for images up to 32 bit color. Alpha transparency supported.

2) Instant loading of image files including BMP, PNG, JPEG, GIF and more...

3) Supports stereo sound files like WAV, OGG, MP3, speaker and volume control and more...

4) Animation is easy to do using _DISPLAY instead of page flipping, to achieve flicker-free graphics.

5) Clipboard reading and writing support.

6) Networking over TCP/IP and Email.

7) True type font and Unicode support for many Languages.

8) Integrated mouse and game controller input including scroll wheel support.

9) Support for C++, OpenGL, Windows API and other custom Dynamic Link Libraries.
```
  
<br>

```vb
Usage: qb64pe [switches] <file>

Options:
<file>                  Source file to load
-v                      Print version
-c                      Compile instead of edit
-o <output file>        Write output executable to <output file>
-x                      Compile instead of edit and output the result to the
console
-w                      Show warnings
-q                      Quiet mode (does not inhibit warnings or errors)
-m                      Do not colorize compiler output (monochrome mode)
-e                      Enable OPTION _EXPLICIT, making variable declaration
mandatory (per-compilation; doesn't affect the
source file or global settings)
-s[:switch=true/false]  View/edit compiler settings
-l:<line number>        Start the IDE at the specified line number
-p                      Purge all pre-compiled content first
-z                      Generate C code without compiling to executable
-f[:setting=value]      compiler settings to use

Note: Defaults can be changed by IDE settings

Valid switches:
-s                             Show current switches and exit
-s:DebugInfo=[true|false]      Embed C++ debug info into .EXE
-s:ExeWithSource=[true|false]  Save .EXE in the source folder

Valid settings:
-f:OptimizeCppProgram=[true|false]   Use C++ Optimization flag, default false
-f:StripDebugSymbols=[true|false]    Strip C++ debug symbols, default true
-f:ExtraCppFlags=[string]            Extra flags to pass to the C++ compiler
-f:ExtraLinkerFlags=[string]         Extra flags to pass at link time
-f:MaxCompilerProcesses=[integer]    Max C++ compiler processes to start in parallel
-f:GenerateLicenseFile=[true|false]  Produce a license.txt file for the program
```
  
<br>


</blockquote>
