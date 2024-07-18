## $DEBUG
---

### $DEBUG is precompiler metacommand , which enables debugging features, allowing you to step through your code running line by line and to inspect variables and change their values in real time.

#### SYNTAX

`$DEBUG`

#### DESCRIPTION
* $DEBUG injects extra code in the resulting binary, allowing the IDE to control the execution flow of your program.
* When $DEBUG is used, the IDE will connect to your running program using a local TCP/IP connection.
	* You may get a prompt from your Operating System regarding this, so it may be necessary to allow the IDE to receive connections.
	* No external connections are created, and your running program will only attempt to connect locally to the IDE.
* The default TCP/IP port starts at 9001. Multiple running instances of the IDE will attempt to open ports 9002 and up.
	* You can change the base port in the Debug menu.
* The metacommand is supposed to be removed once your program is ready for release, although leaving it in won't have any effect if your program isn't run from the IDE.
	* The only drawback of leaving the metacommand in is that your binary will end up being larger than required.


#### SEE ALSO
* Metacommands
