# _MAPUNICODE

The _MAPUNICODE statement maps a [Unicode](Unicode.md) value to an [ASCII](ASCII.md) character code value.

  

## Syntax

_MAPUNICODE *unicode&* **TO** *asciiCode%*
  

* The [LONG](LONG.md) *unicode&* value is a [hexadecimal](hexadecimal.md) or decimal code value from a [Unicode](Unicode.md) [Code Page](Code Page.md).
* The *asciiCode%* [INTEGER](INTEGER.md) parameter is any [ASCII](ASCII.md) or Extended code value from 0 to 255.
* Use the Unicode Page Table values listed here: [DOS Code Pages](DOS Code Pages.md) or [Windows Mapping](Windows Mapping.md)
* Once the codes are mapped, key entries will display the unicode character in the **monospace**  [font](font.md) selected.
* The [_MAPUNICODE](_MAPUNICODE.md) "MAPUNICODE (function)") function can be used to verify or read the present [Unicode](Unicode.md) UTF32 code point settings.
* **_MAPUNICODE can place the Unicode characters TO any [ASCII](ASCII.md) code space you desire (0 to 255)**.

  

## Examples

*Example:* Converting the extended [ASCII](ASCII.md) characters to other characters using DATA from the Unicode [Code Pages](Code Pages.md).

``` [SCREEN](SCREEN.md) 0 [_FONT](_FONT.md) [_LOADFONT](_LOADFONT.md)("C:\windows\fonts\cour.ttf", 20, "MONOSPACE")  [RESTORE](RESTORE.md) Microsoft_pc_cpMIK [FOR](FOR.md) ASCIIcode = 128 [TO](TO.md) 255   [READ](READ.md) unicode   _MAPUNICODE Unicode [TO](TO.md) ASCIIcode [NEXT](NEXT.md)   [FOR](FOR.md) i = 128 [TO](TO.md) 255   [PRINT](PRINT.md) [CHR$](CHR$.md)(i) + " ";   cnt = cnt + 1   [IF](IF.md) cnt [MOD](MOD.md) 16 = 0 [THEN](THEN.md) [PRINT](PRINT.md) [NEXT](NEXT.md) [END](END.md)  Microsoft_pc_cpMIK: [DATA](DATA.md) 1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055 [DATA](DATA.md) 1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071 [DATA](DATA.md) 1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087 [DATA](DATA.md) 1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103 [DATA](DATA.md) 9492,9524,9516,9500,9472,9532,9571,9553,9562,9566,9577,9574,9568,9552,9580,9488 [DATA](DATA.md) 9617,9618,9619,9474,9508,8470,167,9559,9565,9496,9484,9608,9604,9612,9616,9600 [DATA](DATA.md) 945,223,915,960,931,963,181,964,934,920,937,948,8734,966,949,8745 [DATA](DATA.md) 8801,177,8805,8804,8992,8993,247,8776,176,8729,183,8730,8319,178,9632,160  
```

*Note:* The Unicode data field is created by adding DATA before each line listed for the appropriate [Code Page](Code Page.md).
  

## See also

* [Featured in our "Keyword of the Day" series](Featured in our "Keyword of the Day" series.md)
* [_MAPUNICODE (function)](_MAPUNICODE (function).md) "MAPUNICODE (function)")
* [ASCII](ASCII.md), [Unicode](Unicode.md), [_FONT](_FONT.md)
* [_KEYHIT](_KEYHIT.md), [_KEYDOWN](_KEYDOWN.md)
* [ASC](ASC.md), [INKEY$](INKEY$.md), [CHR$](CHR$.md)
* [Code Pages](Code Pages.md)
* [Text Using Graphics](Text Using Graphics.md)

  
