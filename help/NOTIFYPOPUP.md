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

## [_NOTIFYPOPUP](NOTIFYPOPUP.md) [📖](https://qb64phoenix.com/qb64wiki/index.php/_NOTIFYPOPUP)
---
<blockquote>

### The _NOTIFYPOPUP statement shows a system notification.

</blockquote>

#### SYNTAX

<blockquote>

`_NOTIFYPOPUP [ title$ ][, message$ ][, iconType$ ]`

</blockquote>

#### PARAMETERS

<blockquote>

*  title$ is the notification title (usually appears above message and in bold)
*  message$ is the notification message
*  iconType$ is the notification icon type (this can be "info" , "warning" , or "error" )

</blockquote>

#### DESCRIPTION

<blockquote>

*  All parameters are optional
*  Not using any parameters will show a blank notification
*  The notification popup will show where OS notifications are expected / configured by the system


</blockquote>

#### SEE ALSO

<blockquote>

*  Featured in our "Keyword of the Day" series
*  [_MESSAGEBOX](MESSAGEBOX.md) 
*  [_MESSAGEBOX](MESSAGEBOX.md)  (function)
*  [_INPUTBOX\$](INPUTBOX\$.md) 
*  [_SELECTFOLDERDIALOG\$](SELECTFOLDERDIALOG\$.md) 
*  [_COLORCHOOSERDIALOG](COLORCHOOSERDIALOG.md) 
*  [_OPENFILEDIALOG\$](OPENFILEDIALOG\$.md) 
*  [_SAVEFILEDIALOG\$](SAVEFILEDIALOG\$.md) 

</blockquote>
