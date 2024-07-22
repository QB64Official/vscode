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

## [Windows_Printer_Settings](Windows_Printer_Settings.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/Windows Printer Settings)
---
<blockquote>

### There are some Windows command line statements that allow one to (i) identify the current Windows default printer (as well as other printers associated with a PC) and (ii) change the default to a different printer.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SHELL _HIDE "CMD /C" + "wmic printer get name,default > default.txt"
```
  
<br>```vb
Default  Name
FALSE    Microsoft XPS Document Writer
TRUE     HP Photosmart C7200 series
FALSE    HP Officejet Pro 8600
FALSE    Fax
```
  
<br>```vb
SHELL _HIDE "CMD /C" + "wmic printer where name='HP Officejet Pro 8600' call setdefaultprinter"
```
  
<br>```vb
Default  Name
FALSE    Microsoft XPS Document Writer
FALSE    HP Photosmart C7200 series
TRUE     HP Officejet Pro 8600
FALSE    Fax
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [SHELL](SHELL.md)  , [_HIDE](HIDE.md) 
*  [LPRINT](LPRINT.md) 
*  Windows WMI commands
*  Linux Printer Commands

</blockquote>
