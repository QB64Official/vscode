# FREEFILE

The FREEFILE function returns a [LONG](LONG.md) value that is an unused file access number.

  

## Syntax

fileHandle& = FREEFILE
  

## Description

* FREEFILE values should be given to unique variables so that each file has a specific variable value assigned to it.
* Once the number is assigned in an [OPEN](OPEN.md) statement, the file number can later be used to read, write or [CLOSE](CLOSE.md) that file.
* File numbers [CLOSEd](CLOSEd.md) are made available to FREEFILE for reuse immediately.
* FREEFILE returns are normally sequential starting with 1. Only file numbers in use will not be returned.
* [OPEN](OPEN.md) each file number after each FREEFILE return or the values returned may be the same.

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [GET](GET.md), [PUT](PUT.md), [CLOSE](CLOSE.md)

  
