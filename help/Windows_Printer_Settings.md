## Windows Printer Settings
---
<blockquote>

### There are some Windows command line statements that allow one to (i) identify the current Windows default printer (as well as other printers associated with a PC) and (ii) change the default to a different printer.

</blockquote>

#### EXAMPLES

<blockquote>

```vb
SHELL _HIDE "CMD /C" + "wmic printer get name,default > default.txt"
```
  
```vb
Default  Name
 FALSE    Microsoft XPS Document Writer
 TRUE     HP Photosmart C7200 series
 FALSE    HP Officejet Pro 8600
 FALSE    Fax
```
  
```vb
SHELL _HIDE "CMD /C" + "wmic printer where name='HP Officejet Pro 8600' call setdefaultprinter"
```
  
```vb
Default  Name
 FALSE    Microsoft XPS Document Writer
 FALSE    HP Photosmart C7200 series
 TRUE     HP Officejet Pro 8600
 FALSE    Fax
```
  

</blockquote>

#### SEE ALSO

<blockquote>

* [SHELL](./SHELL.md) , [_HIDE](./_HIDE.md)
* [LPRINT](./LPRINT.md)
* Windows WMI commands
* Linux Printer Commands

</blockquote>
