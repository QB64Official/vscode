## QB64 FAQ
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
  

</blockquote>
