## _STATUSCODE
---

### _STATUSCODE gives the HTTP status code of an HTTP response that was opened using _OPENCLIENT .

#### SYNTAX

`_STATUSCODE ( Handle )`

#### PARAMETERS
* Handle is the handle returned from [_OPENCLIENT](./_OPENCLIENT.md) when making an HTTP request.


#### DESCRIPTION


#### EXAMPLES
```vb
$UNSTABLE:HTTP

' This URL simply returns a fake JSON response
h& = _OPENCLIENT("HTTP:https://httpbin.org/json")

' Print the status code on the HTTP response
PRINT _STATUSCODE(h&)

CLOSE h&
```
  
```vb
200
```
  

