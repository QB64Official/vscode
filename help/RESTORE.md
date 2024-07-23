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


## [RESTORE](RESTORE.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/RESTORE)
---
<blockquote>

### The RESTORE statement is used to reset the DATA pointer to the beginning of the data.

</blockquote>

#### SYNTAX

<blockquote>

`RESTORE [datafield]`

</blockquote>

#### EXAMPLES

<blockquote>



##### Example: Restoring a labeled DATA field to avoid going past the end of DATA.
```vb
DO
INPUT "Enter a month number(1 to 12): ", monthnum%

RESTORE Months
FOR i = 1 TO monthnum%
READ month$, days%   'variables must match data field types
NEXT
PRINT "The month "; month$; " has"; days%; "days."
LOOP UNTIL monthnum% < 1 OR monthnum% > 12

Months:
DATA January, 31, February, 28, March, 31, April, 30, May, 31, June, 30
DATA July, 31, August, 31, September, 30, October, 31, November, 30, December, 31
```
  
<br>

```vb
Enter a month number(1 to 12): 6
The month June has 30 days.
```
  
<br>


<div class="explanation">Note: String DATA values do not require quotes unless they have commas, end spaces or QBasic keywords in them.</div>



##### Example: Using RESTORE to know the number of elements in the DATA in order to dimension and store the items in a array.
```vb
DO
READ dummy$ 'we won't actually use this string for anything else than to know when there is no more DATA.
count = count + 1
LOOP UNTIL dummy$ = "stop" 'when dummy$ = "stop" then we know that it is the last entry so it only does the above loop until then.

count = count - 1 'since the last string is "stop" and we don't want to store it in the array.

PRINT "The number of relevant entries are:"; count

DIM entry$(count) 'Now we know how many elements we need to make space for (DIM)

RESTORE 'We restore it so that it begins reading from the first DATA again.


FOR c = 1 TO count
READ entry$(c) 'read the DATA and store it into the array.
NEXT

'we can now print the contents of the array:

FOR c = 1 TO count
PRINT entry$(c)
NEXT

END

DATA "entry1", "entry2", "entry3", "stop"
```
  
<br>

```vb
The number of relevant entries are: 3
entry1
entry2
entry3
```
  
<br>


</blockquote>

#### SEE ALSO

<blockquote>


* [DATA](DATA.md) , [READ](READ.md)
* [&dollar;EMBED](&dollar;EMBED.md) . [_EMBEDDED&dollar;](EMBEDDED&dollar;.md)
* line numbers
</blockquote>
