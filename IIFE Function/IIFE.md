# IIFE
An IIFE ***( Immediately Invoked Function Expression )*** is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his [blog](https://web.archive.org/web/20171201033208/http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife).

- The function is wrapped in parentheses(),

|JS     |
----------------------------
```javascript
(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();
```

|  |
---
| Immediately Invoked Function Expressions (IIFE) |
 are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.
 |
 | Syntax:
 ```javascript
 (function() {
    let code = 'Hello, World!';
    console.log(code);
})();
```

**IIFE** is a design pattern that is also known as the **Self-Executing Anonymous Function.** It contains two major parts:

- The first part is the anonymous function having a lexical scope, which is enclosed within the **Grouping operator ()**.
- The second part creates the IIFE by which the JavaScript engine will interpret the function directly.

*  SemiColon (;) is neccessory end of the fucntion.
 
 