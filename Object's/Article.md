# Objects in Javascript.


### Syntax:
```code
new Object(value)
Object(value)
let object_name = {
    key_name : value,
    ...
}
```

## Creating Objects in JavaScript

####  There are 3 ways to create objects.

1) By object literal
2) By creating instance of Object directly (using new keyword)
3) By using an object constructor (using new keyword)

 ## Literal Form:

  The literal form uses the construction of object literals that can be said as a collection of key-value pairs enclosed within a pair of curly braces. The syntaxial form is shown below.
#### Example:
```javascript
let obj = {
    key1: value1,
    key2: value2,
    ...
};
```
```javascript
// Creating an object using object literal
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

// Accessing object properties and methods
console.log(person.name); // Output: John
console.log(person.age); // Output: 30
person.greet(); // Output: Hello, John

```
### By creating instance of Object:
The `Object` in JavaScript is the base for all objects. When you create an object using the **new Object()** syntax, you are creating an instance of the Object class. This approach allows you to create a generic object that can have properties and methods added dynamically.

#### Creating an Instance of Object
To create an instance of an Object, you use the new keyword followed by Object(). This creates an empty object, to which you can add properties and methods.
#### Example:
```javascript
// Creating an object using the new Object() method
const car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2022;

car.getDetails = function() {
    return this.brand + " " + this.model + " (" + this.year + ")";
};

// Accessing object properties and methods
console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: Corolla
console.log(car.getDetails()); // Output: Toyota Corolla (2022)
```

## By using an Object constructor
Here, you need to create function with arguments. Each argument value can be assigned in the current object by using this keyword.

You can define a constructor function and then use the **new** keyword to create multiple objects of the same type.
#### Example:
```javascript
// Defining a constructor function
function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
    this.makeSound = function() {
        console.log(this.sound);
    };
}

// Creating an object using the constructor function
const dog = new Animal("Dog", "Woof");
const cat = new Animal("Cat", "Meow");

// Accessing object properties and methods
console.log(dog.type); // Output: Dog
console.log(cat.type); // Output: Cat
dog.makeSound(); // Output: Woof
cat.makeSound(); // Output: Meow
```

The **this keyword** refers to the current object.


The example of creating object by object constructor is given below.

### JavaScript Object Methods
The various methods of Object are as follow:
| S.No | Methods                        | Description                                                                 |
|------|--------------------------------|-----------------------------------------------------------------------------|
| 1    | Object.assign()                | This method is used to copy enumerable and own properties from a source object to a target object. |
| 2    | Object.create()                | This method is used to create a new object with the specified prototype object and properties. |
| 3    | Object.defineProperty()        | This method is used to describe some behavioral attributes of the property. |
| 4    | Object.defineProperties()      | This method is used to create or configure multiple object properties.      |
| 5    | Object.entries()               | This method returns an array with arrays of the key, value pairs.           |
| 6    | Object.freeze()                | This method prevents existing properties from being removed.                |
| 7    | Object.getOwnPropertyDescriptor() | This method returns a property descriptor for the specified property of the specified object. |
| 8    | Object.getOwnPropertyDescriptors() | This method returns all own property descriptors of a given object.         |
| 9    | Object.getOwnPropertyNames()   | This method returns an array of all properties (enumerable or not) found.   |
| 10   | Object.getOwnPropertySymbols() | This method returns an array of all own symbol key properties.              |
| 11   | Object.getPrototypeOf()        | This method returns the prototype of the specified object.                  |
| 12   | Object.is()                    | This method determines whether two values are the same value.               |
| 13   | Object.isExtensible()          | This method determines if an object is extensible.                          |
| 14   | Object.isFrozen()              | This method determines if an object was frozen.                             |
| 15   | Object.isSealed()              | This method determines if an object is sealed.                              |
| 16   | Object.keys()                  | This method returns an array of a given object's own property names.        |
| 17   | Object.preventExtensions()     | This method is used to prevent any extensions of an object.                 |
| 18   | Object.seal()                  | This method prevents new properties from being added and marks all existing properties as non-configurable. |
| 19   | Object.setPrototypeOf()        | This method sets the prototype of a specified object to another object.     |
| 20   | Object.values()                | This method returns an array of values.                                     |
|
|
+ These method Example: [W3School](https://www.w3schools.com/js/js_object_methods.asp)

#

### : -[JavaScript.Info.](https://javascript.info/object)
### :- [MDN.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### :- [Javascript-tutorial:](https://www.javascripttutorial.net/javascript-objects/)


# Object Spread Operator
> The object spread operator is a popular and powerful syntax in JavaScript. The spread operator takes all the key-value pairs of an object and copies the key name and value into a new object.

>An object is a reference value, and if you want a copy of the object without pointing to the same property in memory, the spread operator is the answer.

```javascript 
  let person = {
  name:'kamal',
  age:30,
  hobbies:[
     'reading','playing','sleeping'
  ]
}
console.log(person);
const person2 ={...person};
console.log(person2.age);
```

# Object Destructuring
Object destructuring is an important feature in JavaScript that allows you to pull out values from an object and assign them to individual variables.

To perform object destructuring, you use a destructuring pattern on the left-hand side of an assignment statement, and the object that you want to extract values from on the right-hand side.
``
 > For example:

```javascript
const person = { name: 'lawal', age: 39 };
const { person, age } = person;
console.log(name); // 'lawal'
console.log(age); // 39
```

## This Keyword in JavaScript:

 **this** is a specific keyword in JavaScript which is most important when used inside of a function in an object. But you can use it anywhere in your code aside from the function body of an object.

**this** is a powerful keyword used in referencing the current object in which it's used.

```javascript
let person = {
  name:'kamal',
  age:30,
  greet:function(){
    return `My name is ${this.name}, and my age is ${this.age} years old`;
  },
}
console.log(person.greet());
// My name is kamal, and my age is 30 years old.
```
```javascript
let person = {
  name:'kamal',
  age:30,
  greet:function(){
    return `My name is ${this.name}, and my age is ${this.age} years old`;
  },
}
```
The output of the code shows that the **this** keyword when console.logged will print a window object.

## [freeCodeCamp:](https://www.freecodecamp.org/news/objects-in-javascript/)