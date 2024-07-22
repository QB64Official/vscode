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

## [NEXT](NEXT.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/NEXT)
---
<blockquote>

### NEXT is used in a FOR counter loop to progress through the loop count.

</blockquote>

#### SYNTAX

<blockquote>

`FOR counterVariable = startValue TO stopValue [[[STEP]] increment ] {code} ⋮`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [NEXT](NEXT.md)  is required in a [FOR](FOR.md)  loop [OR](OR.md)  a " [FOR](FOR.md)  without [NEXT](NEXT.md) " error will occur.
*  The [FOR](FOR.md)  variable name is not required after [NEXT](NEXT.md)  .
*  [NEXT](NEXT.md)  can be grouped with other NEXTs in nested [FOR](FOR.md)  loops using colons like [NEXT](NEXT.md)  : [NEXT](NEXT.md) 
*  [NEXT](NEXT.md)  can also end more than one nested [FOR](FOR.md)  loop using comma separated variables like [NEXT](NEXT.md)  j, i
*  [NEXT](NEXT.md)  increases the [FOR](FOR.md)  loop count, so after the loop is over the counterVariable's value will be stopValue + 1 ( [OR](OR.md)  stopValue + increment).
*  [NEXT](NEXT.md)  is also used with the [RESUME](RESUME.md)  statement.


</blockquote>

#### SEE ALSO

<blockquote>

*  [FOR](FOR.md) ... [NEXT](NEXT.md) 
*  [DO](DO.md) ... [LOOP](LOOP.md) 
*  [RESUME](RESUME.md) [NEXT](NEXT.md) 

</blockquote>
