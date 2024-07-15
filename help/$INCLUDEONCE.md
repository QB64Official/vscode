# $INCLUDEONCE

The **$INCLUDEONCE** metacommand, when placed in include files, prevents that the file's contents is injected multiple times into a program, even if the file is [included](included.md) multiple times directly or indirectly through other include files.

  

## Syntax

$INCLUDEONCE
  

## Description

* As QB64 [metacommand](metacommand.md) it does not require a comment *[']('.md)* or [REM](REM.md) before it.
* It can be placed everywhere in an include file, but must be the **only** thing in the line, hence without additional whitespace or comments.
	+ Even if placed in the middle or the end of the file, it always designates the **entire** file contents.
* If placed in the main program, **$INCLUDEONCE** does nothing and is simply ignored without error.
* **$INCLUDEONCE** will not work when placed inside pre-compiler [$IF]($IF.md)..[$ELSE]($ELSE.md)...[$END IF]($END IF.md) blocks.

  

## Availability

* [![none](![none.md)](File:Qb64.png "none")

**none**
* [![v3.12.0](![v3.12.0.md)](File:Qbpe.png "v3.12.0")

**v3.12.0**
* [![Apix.png](![Apix.png.md)](File:Apix.png)
* [![yes](![yes.md)](File:Win.png "yes")

**yes**
* [![yes](![yes.md)](File:Lnx.png "yes")

**yes**
* [![yes](![yes.md)](File:Osx.png "yes")

**yes**

  

## Examples

Example
* Show how the command prevents included code to be injected multiple times.
* First save the include files in your qb64pe folder, then take the main program.

``` 'included by test.bas and incl.bm  $INCLUDEONCE  [PRINT](PRINT.md) [PRINT](PRINT.md) "This prints from file once.bm, and should appear only once on screen."  
```

``` 'included 2 times by test.bas  [PRINT](PRINT.md) [PRINT](PRINT.md) "This prints from file incl.bm, it should appear 2 times on screen."  '[$INCLUDE]($INCLUDE.md): 'once.bm'  
```

``` 'this is a test for $INCLUDEONCE behavior  [PRINT](PRINT.md) "This prints from the test.bas main program."  '[$INCLUDE]($INCLUDE.md): 'incl.bm' '[$INCLUDE]($INCLUDE.md): 'once.bm' '[$INCLUDE]($INCLUDE.md): 'incl.bm'  [END](END.md)  
```

``` This prints from the test.bas main program.  This prints from file incl.bm, it should appear 2 times on screen.  This prints from file once.bm, and should appear only once on screen.  This prints from file incl.bm, it should appear 2 times on screen.  
```

``` **Explanation**  Even as the file *once.bm* is included 3 times into the *test.bas* program  (2 times indirectly through *incl.bm* and 1 time directly), the contained  PRINT statements are injected only once into the program due to the use  of the $INCLUDEONCE metacommand.  
```

  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [$INCLUDE]($INCLUDE.md)
* [Metacommand](Metacommand.md)

  
