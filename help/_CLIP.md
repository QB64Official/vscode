# _CLIP

The _CLIP option is used in a QB64 graphics [PUT](PUT.md) "PUT (graphics statement)") to allow placement of an image partially off of the screen.

  

## Syntax

[PUT](PUT.md) "PUT (graphics statement)") PSET|AND|OR|PRESET}][, *omitcolor*]
  

## Description

* _CLIP should be placed immediately before the PUT action if used. XOR is default when not used.
* The offscreen portions of the image will be the omit color.
* [GET](GET.md) "GET (graphics statement)") can get portions of the images off screen in **QB64**.

  

## Examples

*Example:* Placing an image partially or fully offscreen.

``` [DIM](DIM.md) mypic(500) [SCREEN](SCREEN.md) 13  [CLS](CLS.md) [CIRCLE](CIRCLE.md) (10, 10), 10 [GET](GET.md) "GET (general)") (0, 0)-(20, 20), mypic(0)  [PRINT](PRINT.md) "This program puts an image off screen." [PRINT](PRINT.md) "Select which option you'd like to try." [PRINT](PRINT.md) "1 will produce an illegal function call." [PRINT](PRINT.md) "1 is putting without _CLIP." [PRINT](PRINT.md) "2 is putting with _CLIP PSET." [PRINT](PRINT.md) "3 is putting with _CLIP XOR." [PRINT](PRINT.md) "4 is putting with _CLIP PSET, 4."  [INPUT](INPUT.md) sel [IF](IF.md) sel = 1 [THEN](THEN.md) [PUT](PUT.md) "PUT (general)") (-10, 10), mypic(0), [PSET](PSET.md) ' this causes an illegal function call [IF](IF.md) sel = 2 [THEN](THEN.md) [PUT](PUT.md) "PUT (general)") (-10, 10), mypic(0), _CLIP [PSET](PSET.md) ' allows graphic to be drawn off-screen [IF](IF.md) sel = 3 [THEN](THEN.md) [PUT](PUT.md) "PUT (general)") (-10, 10), mypic(0), _CLIP ' uses the default PUT XOR operation [IF](IF.md) sel = 4 [THEN](THEN.md) [PUT](PUT.md) "PUT (general)") (-10, 10), mypic(0), _CLIP [PSET](PSET.md), 4 ' doesn't draw red pixels  [END](END.md)  
```

  

## See also

* [PUT (graphics statement)](PUT (graphics statement).md) "PUT (graphics statement)")
* [GET (graphics statement)](GET (graphics statement).md) "GET (graphics statement)")
* [STEP](STEP.md)

  
