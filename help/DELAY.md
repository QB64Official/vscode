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

## [_DELAY](DELAY.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_DELAY)
---
<blockquote>

### The _DELAY statement suspends program execution for a SINGLE value of seconds.

</blockquote>

#### SYNTAX

<blockquote>

`_DELAY seconds!`

</blockquote>

#### DESCRIPTION

<blockquote>

*  seconds! is the time to wait, accurate to nearest millisecond (.001).
*  While waiting, cpu cycles are relinquished to other applications.
*  Delays are not affected by midnight timer corrections.


</blockquote>

#### EXAMPLES

<blockquote>


</blockquote>

#### SEE ALSO

<blockquote>

*  [_LIMIT](LIMIT.md) 
*  [TIMER](TIMER.md) 
*  [ON](ON.md)  [TIMER](TIMER.md) (n)

</blockquote>
