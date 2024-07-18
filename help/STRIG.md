## STRIG
---

### The STRIG function returns button press True or False status of game port (&H201) or USB joystick control device(s).

#### DESCRIPTION
* Function returns -1 when a button event(even functions) has occurred or a button is pressed(odd functions).
* [STRIG](./STRIG.md) will not read keyboard or mouse buttons detected by [_DEVICES](./_DEVICES.md) .
* The device number must be used with more than 2 devices. Use device 1 function numbers for just one joystick.
* QB64 can read many buttons from many devices and allows the use of devices with more than 2 buttons.
* Returns True(-1) or False(0) button press values for 2 devices. Each leading [STRIG](./STRIG.md) checks for missed button press events:


#### EXAMPLES
##### Example: Displays the input from 3 joysticks, all with dual sticks and 3 buttons.
```vb
DO: _LIMIT 10

 LOCATE 1, 1
 PRINT "JOY1: STICK"; STICK(0); STICK(1); STICK(0, 2); STICK(1, 2);_
 "STRIG"; STRIG(0); STRIG(1); STRIG(4); STRIG(5); STRIG(8); STRIG(9)

 PRINT "JOY2: STICK"; STICK(2); STICK(3); STICK(2, 2); STICK(3, 2);_
 "STRIG"; STRIG(2); STRIG(3); STRIG(6); STRIG(7); STRIG(10); STRIG(11)

 PRINT "JOY3: STICK"; STICK(4); STICK(5); STICK(4, 2); STICK(5, 2);_
 "STRIG"; STRIG(0, 3); STRIG(1, 3); STRIG(4, 3); STRIG(5, 3); STRIG(8, 3); STRIG(9, 3)

LOOP UNTIL INKEY$ > ""
```
  


#### SEE ALSO
* [STRIG](./STRIG.md)(n)
* [ON](./ON.md) [STRIG](./STRIG.md)(n) , [STICK](./STICK.md)
* [_DEVICES](./_DEVICES.md) , _DEVICE$ , [_LASTBUTTON](./_LASTBUTTON.md)
* Single and Dual Stick Controllers
