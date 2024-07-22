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

## [AND](AND.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/AND)
---
<blockquote>

### The logical AND numerical operator compares two values in respect of their bits. If both bits at a certain position in both values are set, then that bit position is set in the result.

</blockquote>

#### SYNTAX

<blockquote>

`result = firstvalue AND secondvalue`

</blockquote>

#### DESCRIPTION

<blockquote>

*  [AND](AND.md)  compares the bits of the firstvalue against the bits of the secondvalue , the result is stored in the result variable.
*  If both bits are on (1) then the result is on (1).
*  All other conditions return 0 (bit is off).
*  [AND](AND.md)  is often used to see if a bit is on by comparing a value to an exponent of 2.
*  Can turn off a bit by subtracting the bit on value from 255 [AND](AND.md)  using that value to [AND](AND.md)  a byte value.


</blockquote>

#### SEE ALSO

<blockquote>

*  [OR](OR.md)  , [XOR](XOR.md)  , [NOT](NOT.md)  (logical operators)
*  [AND](AND.md)  (boolean)
*  Binary , Boolean

</blockquote>
