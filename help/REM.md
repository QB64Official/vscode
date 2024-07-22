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

## [REM](REM.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/REM)
---
<blockquote>

### REM or an apostrophe is used for programmer remarks, comments or to stop the execution of program code.

</blockquote>

#### SYNTAX

<blockquote>

`REM program comment or ignore code`

</blockquote>

#### DESCRIPTION

<blockquote>

*  Comments cannot be read by QBasic correctly and may cause syntax and other errors without [REM](REM.md) !
*  Instead of [REM](REM.md)  you can use the ' symbol which can be put anywhere.
*  Code can also be commented out for program testing purposes.
*  QBasic Metacommands such as $DYNAMIC and $INCLUDE require the use of [REM](REM.md)  or the apostrophe.


</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Avoiding an END IF error.
```vb
REM This is a remark...
' This is also a remark...
IF a = 0 THEN REM (REM follows syntax rules)
IF a = 0 THEN '(apostrophe doesn't follow syntax rules, so use END IF after this)
END IF
```
  
<br>
</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  Apostrophe
*  $DYNAMIC , $STATIC , $INCLUDE

</blockquote>
