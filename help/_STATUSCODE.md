# _STATUSCODE

**_STATUSCODE** gives the HTTP status code of an HTTP response that was opened using [_OPENCLIENT](_OPENCLIENT.md).

**HTTP functionality is current unstable, and requires [$UNSTABLE]($UNSTABLE.md):HTTP to be able to use.**

  

## Syntax

_STATUSCODE(*Handle*)
  

## Parameters

* *Handle* is the handle returned from [_OPENCLIENT](_OPENCLIENT.md) when making an HTTP request.

  

## Description

**_STATUSCODE** is used to get the HTTP status code returned on an HTTP response. A list of HTTP status codes can be read [here](here.md), generally speaking codes in the 200 range indicate success, 400 range indicates a client error, and 500 range indicate a server error.

  

## Availability

* **QB64-PE v3.5.0 and up**

  

## Examples

``` [$UNSTABLE]($UNSTABLE.md):HTTP  ' This URL simply returns a fake JSON response h& = [_OPENCLIENT](_OPENCLIENT.md)("HTTP:https://httpbin.org/json")  ' Print the status code on the HTTP response [PRINT](PRINT.md) _STATUSCODE(h&)  [CLOSE](CLOSE.md) h&   
```

``` 200  
```

  
