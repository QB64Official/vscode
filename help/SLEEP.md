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

## [SLEEP](SLEEP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/SLEEP)
---
<blockquote>

### SLEEP pauses the program indefinitely or for a specified number of seconds, program is unpaused when the user presses a key or when the specified number of seconds has passed.

</blockquote>

#### SYNTAX

<blockquote>

`SLEEP [seconds]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example:
```vb
CLS
PRINT "Press a key..."
SLEEP
PRINT "You pressed a key, now wait for 2 seconds."
SLEEP 2
PRINT "You've waited for 2 seconds."
PRINT "(or you pressed a key)"
```
  
<br>

##### Example:
```vb
Press a key...
You pressed a key, now wait for 2 seconds.
You've waited for 2 seconds.
(or you pressed a key)
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  [TIMER](TIMER.md)  (function) , [INKEY\$](INKEY\$.md) 
*  [_DELAY](DELAY.md)  , [_LIMIT](LIMIT.md) 

</blockquote>
