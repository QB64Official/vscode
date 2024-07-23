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
    margin: 0 0 0.5em 0  !important;
    color: #88f !important;
    border: 0 !important;
    font-style: italic !important;
    font-weight: normal !important;
}
code {
    background: #000 !important;
    margin: 0 !important;
    padding: 8px !important;
    border-radius: 4px !important; 
    border: 1px solid #333 !important;
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
    border-radius: 4px !important;
    background: #000 !important;
    border: 1px solid #333 !important;
    margin: 0 !important;
}
a:link, a:visited, a:hover, a:active {
    color: #ff0 !important;
}
br + pre {
    border-radius: 0 !important;
    border-style: inset !important;
    border-width: 5px !important;
    border-color: #999 !important;
    background-color: #000 !important;
    box-shadow: 0px 10px 3px rgba(0, 0, 0, 0.25) !important;
    margin-top: -1em !important;
}
br + pre::before {
    content: "OUTPUT \A" !important;
    color: #555 !important;
    border-bottom: 1px solid #333;
    font-size: x-small;
    display: block !important;
    padding: 0 3px !important;
    margin: -1em -1em 1em -1em !important;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */    
}
br ~ h5 {
    margin-top: 2em !important;
}
.explanation {
    color: #995 !important;
    /* background-color: rgba(150, 150, 100) !important; */
    border-radius: 10em !important;
    border: 2px #441 dashed !important;
    padding: 8px 32px !important;
    margin-bottom: 4em !important;
    font-size: x-small !important;
}
</style>


## [_BlankPage](BlankPage.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_BlankPage)
---
<blockquote>

### The _BlankPage serves as a skeleton for new Wiki pages.

</blockquote>

#### SYNTAX

<blockquote>

`_BlankSub arg1 [, arg2 ]`

</blockquote>

#### PARAMETERS

<blockquote>


* arg1 is a mandatory argument
* the arg2 is optional
</blockquote>

#### DESCRIPTION

<blockquote>



</blockquote>

#### EXAMPLES

<blockquote>

```vb
This is a nice piece of paper for quotes and similar things. In case of short code snippets you may use the "Cb" (code blue) template to highlight and link keywords to the Wiki pages.

FOR x = 1 TO 5
PRINT "Hello World!"
NEXT x
END

As you see, this Text block is suitable for preformatted text, but note that the browser is still allowed to wrap too long lines. If you really need your preformatted text to be shown as is, then use a fixed text block instaed, see below.
```
  
<br>

```vb
Use this fixed text block for preformatted text, which is not even allowed to wrap long lines, such as tables etc..
As you see this very long line goes far over the display width, so please limit youself to the available space to not clutter the display too much.
```
  
<br>

```vb
'Place your code example here
'The "Cl" (code link) template can be used to link keywords to its
'respective Wiki page. Those words will also get highlighted.
COLOR 15,4
PRINT "Hello World!"
```
  
<br>

```vb
Note: To avoid the annoying task of manually inserting the templates
in your code examples, since v3.7.0 you may simply write your example
in the IDE and later use the menu "File > Export As > Wiki example" to
export a completely prepared code block, which you can paste "as is"
into the Wiki page.

Oh, and by the way, this preformatted text block is also new. Generally
it's the same as a fixed text block shown above, but it uses horizontal
scrollers instead of stretching the text box and it has a more plain
appearance. If you want avoid the horizontal scroller, then restrict
yourself to a line length of max. 72 characters.
```
  
<br>

```vb
Hello World!
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* Featured in our "Keyword of the Day" series
* Keyword Reference - Alphabetical
* Keyword Reference - By usage
</blockquote>
