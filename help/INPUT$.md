# INPUT$

The INPUT$ function is used to receive data from the user's keyboard, an open file or an open port.

  

## Syntax

*result$* = INPUT$(*numberOfBytes%*[, fileOrPortNumber])
  

## Description

* Keyboard input is limited to the [INTEGER](INTEGER.md) *numberOfBytes%* (characters) designated by program.
* The keyboard is the default device when a file or port number is omitted. The *numberOfBytes%* is number of key presses to read.
* INPUT$ will wait until the number of bytes are read from the keyboard or port. One byte per loop is recommended with ports.
* [RANDOM](RANDOM.md) opened file bytes can be up to the [LEN](LEN.md) = recordLength statement, or 128 if no statement is used.
* fileOrPortNumber is the number that was used in the [OPEN](OPEN.md) AS statement.
* Returns [STRING](STRING.md) values including spaces or even extended [ASCII](ASCII.md) characters.
* Backspace key results in the [CHR$](CHR$.md)(8) character being added to an entry.
* Use [LOCATE](LOCATE.md) , , 1 to view the cursor entry. Turn the cursor off using [LOCATE](LOCATE.md) , , 0.
* Use [_DEST](_DEST.md) [_CONSOLE](_CONSOLE.md) before INPUT$ is used to receive input from a [console](console.md) window.

### QBasic/QuickBASIC

* *numberOfBytes%* could not exceed 32767 in [BINARY](BINARY.md) files or a QBasic error would occur.
* Ctrl + Break would not interrupt the QBasic program until there was a full INPUT$ key entry. In **QB64** Ctrl + Break will immediately exit a running program.

  

## Examples

*Example 1:* A keyboard limited length entry can be made with a fixed blinking cursor. Entry must be completed before it can be shown.

``` [LOCATE](LOCATE.md) 10, 10, 1         'display fixed cursor at location year$ = INPUT$(4)        'waits until all 4 digits are entered PRINT year$              'display the text entry  
```

  

*Example 2:* Reading bytes from a text file for an 80 wide screen mode.

``` [LOCATE](LOCATE.md) 5, 5, 1                    'locate and display cursor [OPEN](OPEN.md) "Diary.txt" FOR [INPUT](INPUT.md) "INPUT (file mode)") AS #1  'open existing text file text$ = INPUT$(70, 1) [LOCATE](LOCATE.md) 5, 6, 0: PRINT text$       'print text and turn cursor off  
```

  

*Example 3:* Getting the entire text file data as one string value.

``` [OPEN](OPEN.md) "Diary.txt FOR [BINARY](BINARY.md) AS #1  'open an existing file up to 32767 bytes IF [LOF](LOF.md)(1) <= 32767 THEN Text$ = INPUT$(LOF(1), 1) [CLOSE](CLOSE.md) #1  
```

*Explanation:* The IF statement gets the entire contents when the file size is less than 32768. The program can then work with the string by using [MID$](MID$.md) "MID$ (function)") or [INSTR](INSTR.md). Note: A text file string will also have **CrLf** line break end characters [CHR$](CHR$.md)(13) + [CHR$](CHR$.md)(10).
  

## See also

* [INPUT](INPUT.md), [LINE INPUT](LINE INPUT.md) (keyboard input)
* [INPUT (file mode)](INPUT (file mode).md) "INPUT (file mode)"), [INPUT #](INPUT #.md) "INPUT (file statement)"), [LINE INPUT #](LINE INPUT #.md) "LINE INPUT (file statement)") (file input)
* [OPEN](OPEN.md), [LOC](LOC.md) (file)
* [LOCATE](LOCATE.md) (cursor on/off)

  
