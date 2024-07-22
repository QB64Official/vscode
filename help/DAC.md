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

## [DAC](DAC.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/DAC)
---
<blockquote>

### 

</blockquote>

#### EXAMPLES

<blockquote>

```vb
DAC stands for the QBasic Digital to Analog Converter color attributes used in screens 0, 7 and 9.
```
  
<br>```vb
SCREEN 0 or 9                     SCREEN 7
Attribute = DAC setting         Attribute = DAC setting
0 to 5 = 0 to 5                 0 to 5 = 0 to 5
6 = 20                          6 = 6
7 = 7                           7 = 7
8 = 56                          8 = 16
9 = 57                          9 = 17
10 = 58                         10 = 18
11 = 59                         11 = 19
12 = 60                         12 = 20
13 = 61                         13 = 21
14 = 62                         14 = 22
15 = 63                         15 = 23

OUT can change RGB intensities where the DAC value matches the attribute value.
```
  
<br>

##### Example 1: Changing the DAC attributes to use OUT for custom colors.
```vb
SCREEN 9   'use 0, 7 or 9 only"
InitDAC% = INP(&H3DA)    ' prepare DAC port for access
FOR attribute% = 6 TO 15 ' attributes 0 to 5 are already non-DAC
OUT &H3C0, attribute% ' send attribute to change
OUT &H3C0, attribute% ' change DAC value to normal number
NEXT attribute%"
OUT &H3C0, 32            ' close port access
```
  
<br>

##### Example 2: Disabling blinking colors in fullscreen SCREEN 0 mode enabling high intensity only. ( DAC )
```vb
D = INP(&H3DA)    'prepares port for access
OUT &H3C0, &H30
OUT &H3C0, 4
```
  
<br>```vb
D = INP(&H3DA)    'prepares port for access
OUT &H3C0, &H30
OUT &H3C0, 12
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [SCREEN](SCREEN.md)  , [COLOR](COLOR.md) 
*  [PALETTE](PALETTE.md) 

</blockquote>
