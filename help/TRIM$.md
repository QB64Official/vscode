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

## [_TRIM\$](TRIM\$.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_TRIM$)
---
<blockquote>

### The _TRIM$ function removes both leading and trailing space characters from a STRING value.

</blockquote>

#### SYNTAX

<blockquote>

`return$ = _TRIM$ ( text$ )`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Shorthand to using LTRIM$ ( RTRIM$ ("text"))
*  text$ is the [STRING](STRING.md)  value to trim.
*  If text$ contains no leading or trailing space characters, it is returned unchanged.
*  Convert fixed length [STRING](STRING.md)  values by using a different return$ variable.


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  RTRIM$ , [LTRIM\$](LTRIM\$.md) 

</blockquote>
