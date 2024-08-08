# The filter() 
The method creates a new **array** filled with elements that pass a test provided by a function.

> - *The filter() method does not execute the function for empty elements.*

> - *The filter() method does not change the original array.*

**Syntax:** 
```javascript
array.filter(callback(element, index, arr), thisValue)
```
| Parameter  | Description                                                                                                      |
|------------|------------------------------------------------------------------------------------------------------------------|
| `callback` | The function to be called for each element of the array.                                                         |
| `element`  | The value of the element currently being processed.                                                              |
| `index`    | _(Optional)_ The index of the current element in the array, starting from 0.                                      |
| `arr`      | _(Optional)_ The complete array on which `Array.every` is called.                                                 |
| `thisValue`| _(Optional)_ The context to be passed as `this` to be used while executing the callback function. If not provided, `"undefined"` is used as the default context. |

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


|| For more:  [| Click here  - MDN |](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


#
# #Question - ?
| --  What are some common use cases for the *__filter()__* method? -- |

> The filter() method is commonly used in various scenarios where you need to extract a subset of elements from an array based on certain conditions. Common use cases include:
>1. Filtering out invalid or unwanted data from an array.
>2. Creating a new array with elements that meet specific criteria, such as finding all positive numbers in a list.
>3. Extracting elements that satisfy multiple conditions by combining logical operators in the callback function.
>4. Selecting elements based on their properties in an array of objects, such as filtering users by age or status.

[_More:- click-here_](https://www.geeksforgeeks.org/javascript-array-filter-method/)

#