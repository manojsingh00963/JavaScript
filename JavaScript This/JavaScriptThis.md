JavaScript This
===============

## What is this?

 + In JavaScript, the this keyword refers to an object.

 + The this keyword refers to different objects depending on how it is used:

 + In an object method, this refers to the object.
 Alone, this refers to the global object.
 + In a function, this refers to the global object.
 + In a function, in strict mode, this is undefined.
 + In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object.




----------------------

This
----

<!-- >This keyword is used in JavaScript to refer to the current object. It is used to access the properties and methods of the current object. It is also used to call the functions of the current object. It is also used to refer to the current function. The ***'this'*** keyword always refers to the object that is currently executing the code. It can refer to the global object, a function, or an object. The ***'this'*** keyword can be used in two ways: 1. Implicitly: This is when the ***'this'*** keyword is used without any explicit reference. In this case, the ***'this'*** keyword refers to the global object. 2. Explicitly: This is when the ***'this'*** keyword is used with an explicit reference. In this case, the ***'this'*** keyword refers to the object that is referenced.**index.js** -->

## How to Call this By Itself

> If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object.

> If print console.log('this alone', this); you'll get this in your console: [object Window]

```javascript 
 console.log(this)
 ```
----------
----------
<img src="https://www.freecodecamp.org/news/content/images/2023/01/image-367.png" alt=" Window Object this.">

----------
----------

### Example 1: Implicitly using ***'this'*** keyword

In this example,******'this'****** keyword implicitly to refer to the global object.

**index.js**

```javascript 
 const obj = {    name: 'John',    sayName: function() {      console.log(this);    }  };  obj.sayName();   
```

### Example 2: Explicitly using ***'this'*** keyword

In this example, ***'this'*** keyword explicitly to refer to the object that is passed as an argument.

**index.js**

```javascript 
 function sayName() {    console.log(this);  }  sayName()
 ```

### Example 3: Using ***'this'*** keyword in a function

In this example, ***'this'*** keyword to refer to the function itself.

**index.js**

```javascript
    const obj = {   
    name: 'John',   
    sayName: function(){
        
            console.log(this);   
        }    
    };
     
    obj.sayName()

```

### Example 4: Using ***'this'*** keyword in an object

In this example, ***'this'*** keyword to refer to the object itself.


-------

More: 
======

#### [freeCodeCamp:](https://www.freecodecamp.org/news/the-this-keyword-in-javascript/)
------