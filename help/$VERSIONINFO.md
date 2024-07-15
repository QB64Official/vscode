# $VERSIONINFO

The $VERSIONINFO [metacommand](metacommand.md) adds text metadata to the resulting executable for identification purposes across the OS. Windows-only.

  

## Syntax

$VERSIONINFO:*key*=*value*
  

## Parameters

* Text *keys* can be: **Comments, CompanyName, FileDescription, FileVersion, InternalName, LegalCopyright, LegalTrademarks, OriginalFilename, ProductName, ProductVersion, Web**
* Numeric *keys* can be:**FILEVERSION#** and **PRODUCTVERSION#**
	+ When provided, the numerical keys **FILEVERSION#** and **PRODUCTVERSION#** will also provide values to the text keys **FileVersion** and **ProductVersion,** if the text versions are not provided separately. (QB64-PE v0.6.0 and up)

  

## Description

* Text and numerical values are string literals without quotes entered by programmer. **No variables are accepted.** (variable names would be interpreted as literals).
* Numeric key=*value* must be 4 comma-separated numerical text values entered by programmer which usually stand for major, minor, revision and build numbers).
* A manifest file is automatically embedded into the resulting .exe file so that Common Controls v6.0 gets linked at runtime, if required.
* **[Keyword not supported in Linux or macOS versions](Keyword not supported in Linux or macOS versions.md)**

  

## Availability

* [![v1.2](![v1.2.md)](File:Qb64.png "v1.2")

**v1.2**
* [![all](![all.md)](File:Qbpe.png "all")

**all**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![no](![no.md)](File:Lnx.png "no")

**no**
* [![no](![no.md)](File:Osx.png "no")

**no**

  

## Examples

*Example:* Adding metadata to a Windows exe compiled with QB64:

``` $VERSIONINFO:CompanyName=Your company name goes here $VERSIONINFO:FILEVERSION#=1,0,0,0 $VERSIONINFO:PRODUCTVERSION#=1,0,0,0  
```

  

## See also

* [$EXEICON]($EXEICON.md)
* [_ICON](_ICON.md)
* [VERSIONINFO resource (MSDN)](VERSIONINFO resource (MSDN).md).aspx)

  
