# Functions in JavaScript

## Basic Function

Functions are blocks of code designed to perform particular tasks. They help make code faster and more efficient by allowing for code reuse.

### Example:
```javascript
function name(parameter1, parameter2, ... parameterN) {
  // body
  // argument
}
```

To call a function for execution:
JavaScript

>name(arg1, arg2, ... argN);

 

## Arrow Functions

Arrow functions provide a concise syntax for creating functions, often preferred over Function Expressions.

### Example:

```javascript
let func = (arg1, arg2, ..., argN) => expression;

```

## Additional Information

### Function Declaration

A function can be declared using the `function` keyword:

>Example.
```javascript
function greet(name) {
  return \`Hello, ${name}!\`;
}
```
 

### Function Expression

Functions can also be defined as expressions:

>Example.
```javascript
const greet = function(name) {
  return \`Hello, ${name}!\`;
};
```

 

### Immediately Invoked Function Expression (IIFE)

Functions can be executed immediately after their creation:

JavaScript
```javascript
(function() {
  console.log("This is an IIFE");
})();
```
 

### Higher-Order Functions

Functions that take other functions as arguments or return them as results:

>Example.
```javascript
function higherOrderFunction(callback) {
  return callback();
}
```

### Anonymous Functions

Functions without a name, often used as arguments to other functions:

>Example.
```javascript
setTimeout(function() {
  console.log("This is an anonymous function");
}, 1000);
```

### Default Parameters

Functions can have default parameter values:

>Example.
```javascript
function greet(name = "Guest") {
  return \`Hello, ${name}!\`;
}
```
 

### Rest Parameters

Functions can accept an indefinite number of arguments as an array:

>Example.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
```

 

### Arrow Functions with No Parameters

If an arrow function has no parameters, you can use empty parentheses:

>Example:
```javascript
let greet = () => "Hello, World!";
``` 

### Arrow Functions with Single Parameter

If an arrow function has a single parameter, parentheses can be omitted:

>Example:
```javascript
let greet = name => \`Hello, ${name}!\`;

```