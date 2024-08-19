# Arrays 

- A JavaScript array is a Collection of values('Element'). Each value is separated with a comma(,).

* Array is contigues Memory location. 

* It is written with square brackets [].

<p style="background-color:white;color:red;">&emsp;<b>Note :</b> The data type of <i>Array</i> is <b><i> **Object**.</b></i></p> 

***Syntax***: -

```javascript
const Arr = [1,2,3,4,5,6,7,8,9,10] ;
console.log(Arr);
```
* Index is strat form **0** in **Array**.
- [0], [1], [2], [3 ]. . . . . . [n] 

>Output: [1,2,3,4,5,6,7,8,9,10] ;



#
# JavaScript Array Methods

### The `forEach()` Method
 The The `forEach()` Method is another way to loop over an array,
or access each element's data.

It executes a callback function for each array element.


<a href='http://127.0.0.1:3000/index.html'>Try it Yourself ▹</a>

```javascript 
const array = ['Python','JavaScript','C','C++','Java','HTML','CSS'];
console.log(array)

array.forEach((value,Index,array)=>{
    console.log(Index,value,array)
})
```

The callback function is invoked with 3 arguments.

1) The `value` of the element.
1) The `Index` of the element.
1) The `array` itself.

# Array to Strings

The `join()` method creates and retuern a new string by combining all elements.

The elements are separated by the specified separator character.
 if none is specified, it separates the elements with commas.

The `join()` method does not modify the method does not modify the existing array, instead it creates and returns a new one. 

```javascript

const cities = ['Delhi','Uttarakhand','U.P','Mumbai'];
const convert_city = cities.join(' ) + ( ');
console.log(convert_city);
```
# String to Arrays 

Convert a `String` into an `array` , by using Split() method.

>The `split`() method takes a `separator` string as its argument. 

>The method splits the string at each point where the `separator` occur


```javascript

const course = "Python','JavaScript','C','C++','Java','HTML','CSS";

const arr = course.split('');
console.log(arr)
console.log(typeof arr + ":", arr)


```

# Merging Arrays

The `concat()` method merges two or more arrays.

> Example:

```javascript

const fruits1 = ["Banana","Apple","Orange"];
const fruits2 = ['Grapes','Mango','Strawberry'];

const fruits = fruits1.concat(fruits2);
console.log(fruits);

```

>To concatenate three or more arrays, separate the arrays with commas.

```javascript
const numbers1 = [1,2,3];
const numbers2 = [4,5,6];
const numbers3 = [7,8,9,0];

const Natural_number = numbers1.concat(numbers2,numbers3);
console.log(Natural_number);
```

# Searching an Item

The `indexof()` method returns the idex of the first occurence of an item (element) in the array.

```javascript 
const fruits = ["Apple","Banana","Orange","mango"];
const i = fruits.indexOf('mango');
console.log(i);
```
<p style="background-color:white;color:red;">&emsp;<b>If The item is not found in the array index.</b><b style="color: blue;"> the return value is : -1. </b></p>

#

| **Method**                | **Description**                                                                 | **Example**                                    |
|---------------------------|---------------------------------------------------------------------------------|------------------------------------------------|
| `Array.prototype.push()`   | Adds one or more elements to the end of an array and returns the new length.     | `arr.push(1, 2)`                                |
| `Array.prototype.pop()`    | Removes the last element from an array and returns that element.                 | `arr.pop()`                                     |
| `Array.prototype.shift()`  | Removes the first element from an array and returns that element.                | `arr.shift()`                                   |
| `Array.prototype.unshift()`| Adds one or more elements to the beginning of an array and returns the new length.| `arr.unshift(1, 2)`                             |
| `Array.prototype.concat()` | Merges two or more arrays and returns a new array.                               | `arr1.concat(arr2)`                             |
| `Array.prototype.join()`   | Joins all elements of an array into a string.                                    | `arr.join('-')`                                 |
| `Array.prototype.reverse()`| Reverses the order of the elements in an array.                                  | `arr.reverse()`                                 |
| `Array.prototype.slice()`  | Returns a shallow copy of a portion of an array into a new array object.         | `arr.slice(1, 3)`                               |
| `Array.prototype.splice()` | Adds/Removes elements from an array and returns the removed elements.            | `arr.splice(1, 2, 'a', 'b')`                    |
| `Array.prototype.indexOf()`| Returns the first index at which a given element can be found.                   | `arr.indexOf(2)`                                |
| `Array.prototype.includes()`| Determines whether an array includes a certain value.                          | `arr.includes(2)`                               |
| `Array.prototype.forEach()`| Executes a provided function once for each array element.                        | `arr.forEach(x => console.log(x))`              |
| `Array.prototype.map()`    | Creates a new array populated with the results of calling a provided function on every element. | `arr.map(x => x * 2)`         |
| `Array.prototype.filter()` | Creates a new array with all elements that pass the test implemented by the provided function. | `arr.filter(x => x > 10)`      |
| `Array.prototype.reduce()` | Executes a reducer function on each element of the array, resulting in a single output value. | `arr.reduce((a, b) => a + b, 0)` |
| `Array.prototype.find()`   | Returns the first element in the array that satisfies the provided testing function. | `arr.find(x => x > 10)`           |
| `Array.prototype.findIndex()`| Returns the index of the first element in the array that satisfies the provided testing function. | `arr.findIndex(x => x > 10)`|
| `Array.prototype.every()`  | Tests whether all elements in the array pass the test implemented by the provided function. | `arr.every(x => x > 10)`          |
| `Array.prototype.some()`   | Tests whether at least one element in the array passes the test implemented by the provided function. | `arr.some(x => x > 10)`  |
| `Array.prototype.sort()`   | Sorts the elements of an array in place and returns the array.                   | `arr.sort((a, b) => a - b)`                     |
| `Array.prototype.flat()`   | Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. | `arr.flat(2)`         |
| `Array.prototype.flatMap()`| Maps each element using a mapping function, then flattens the result into a new array. | `arr.flatMap(x => [x * 2])`          |
| `Array.prototype.fill()`   | Fills all the elements of an array from a start index to an end index with a static value. | `arr.fill(0, 1, 3)`            |
| `Array.prototype.copyWithin()`| Shallow copies part of an array to another location in the same array and returns it without modifying its length. | `arr.copyWithin(0, 3)` |


#
#### [JavaScript.info](https://javascript.info/array-methods)
#### [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
#