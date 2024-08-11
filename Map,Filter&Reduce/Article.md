# Map()

##### map() creates a new array from calling a function for every array element.

##### map() does not execute the function for empty elements.

##### map() does not change the original array.

**Syntax:**

```
 array.map(function(currentValue, index, arr), thisValue)
```

| Parameter    | Description                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| function()   | Required. A function to be run for each array element.                                            |
| currentValue | Required. The value of the current element.                                                       |
| index        | Optional. The index of the current element.                                                       |
| arr          | Optional. The array of the current element.                                                       |
| thisValue    | Optional. Default value undefined. A value passed to the function to be used as its `this` value. |
|
|

- On iterating a map object returns the key, and value pair in the same order as inserted. Map() constructor is used to create Map in JavaScript.
- JavaScript Map has a property that represents the size of the map.

## Syntax of the map Method.

```javascript
const newArray = array.map(callback(currentValue[, index[, array]]) {
  // return element for newArray, after executing something
}[, thisArg]);
```

> - `array`: The original array that you want to iterate over.
> - `callback`: A function that will be executed on each element of the array.
> - `currentValue`: The current element being processed in the array.
> - `index` (optional): The index of the current element being processed.
> - `array` (optional): The array that map was called upon.
> - `thisArg` (optional): An optional object to which this can refer in the callback function.



## Example:

## Without Map:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
// doubledNumbers: [2, 4, 6, 8, 10]
```
## With Map:

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
// doubledNumbers: [2, 4, 6, 8, 10]
```

#### [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

#
#
# Filter()

The method creates a new **array** filled with elements that pass a test provided by a function.

> - _The filter() method does not execute the function for empty elements._

> - _The filter() method does not change the original array._

**Syntax:**

```javascript
array.filter(callback(element, index, arr), thisValue);
```

| Parameter   | Description                                                                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback`  | The function to be called for each element of the array.                                                                                                         |
| `element`   | The value of the element currently being processed.                                                                                                              |
| `index`     | _(Optional)_ The index of the current element in the array, starting from 0.                                                                                     |
| `arr`       | _(Optional)_ The complete array on which `Array.every` is called.                                                                                                |
| `thisValue` | _(Optional)_ The context to be passed as `this` to be used while executing the callback function. If not provided, `"undefined"` is used as the default context. |

**Example:**

```javascript
// JavaScript to illustrate findIndex() method
function canVote(age) {
  return age >= 18;
}

function func() {
  let filtered = [24, 33, 16, 40].filter(canVote);
  console.log(filtered);
}
func();
```

**Output:**

```
[24,33,40]
```

|| For more: [| Click here - MDN |](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#

# #Question - ?

| -- What are some common use cases for the _**filter()**_ method? -- |

> The filter() method is commonly used in various scenarios where you need to extract a subset of elements from an array based on certain conditions. Common use cases include:
>
> 1.  Filtering out invalid or unwanted data from an array.
> 2.  Creating a new array with elements that meet specific criteria, such as finding all positive numbers in a list.
> 3.  Extracting elements that satisfy multiple conditions by combining logical operators in the callback function.
> 4.  Selecting elements based on their properties in an array of objects, such as filtering users by age or status.

[_More:- click-here_](https://www.geeksforgeeks.org/javascript-array-filter-method/)

#

#

# Reduce().

 **The reduce()** method reduces the given array into a single value by executing a reducer function. The user implements the reducer function that works on every element present in the array.

### Reducer Function

 >  The reducer function is the user implemented code. It uses the following four arguments to perform its task: 

> + Accumulator: It accumulates the return values of the array.
> + Current Value: Current element is the current value.
> + Current Index: The index of the current element is the value of the current index.
> + Source array: The array defined by the user for implementing reduce() method.
#

#### Syntax:
```code
  arr.reduce(callback(accumulator, currentValue, currentIndex,array), initialValue)
  ``` 

#


### Example:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum); // 21

// using arrow function
let summation = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
console.log(summation); // 21

```
#

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

#

