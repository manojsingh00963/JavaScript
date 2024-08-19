# [ String ]

> The String object is used to represent and manipulate a sequence of characters.

- By string literal.
By string object (using new keyword).

 1) By string literal
 The string literal is created using double quotes. The syntax of creating string using string literal 

> let Js = "Hello World!";
```javascript
console.log('Js');
```
 2) By string object (using new keyword)

>Second method of creat sting . || careate new instance of string .

```javascript 
const playerName = new String(" Cristiano Ronaldo ");
console.log(playerName);

``` 

# Template literal's 

    Template literals are enclosed in backticks(`) instead of single or double qoutes.
    They allow you to embed expressions directly within the string using placeholders,

- Denoted by  ***${expression}***.

  `Example:`
    ```javascript
    const name = 'User';
    const age = '20';

    // using template literals for string interpolation,
    console.log(`My name is ${name} and I'm ${age} years old. `);

    ```
    > Output: My name is User and I'm 20 years old.

# 
#
# [ Array Methods ]

| Method            | Description                                                                                          |
|-------------------|------------------------------------------------------------------------------------------------------|
| `charAt()`        | It provides the char value present at the specified index.                                          |
| `charCodeAt()`    | It provides the Unicode value of a character present at the specified index.                       |
| `concat()`        | It provides a combination of two or more strings.                                                   |
| `indexOf()`       | It provides the position of a char value present in the given string.                               |
| `lastIndexOf()`   | It provides the position of a char value present in the given string by searching a character from the last position. |
| `search()`        | It searches a specified regular expression in a given string and returns its position if a match occurs. |
| `match()`         | It searches a specified regular expression in a given string and returns that regular expression if a match occurs. |
| `replace()`       | It replaces a given string with the specified replacement.                                           |
| `substr()`        | It is used to fetch the part of the given string on the basis of the specified starting position and length. |
| `substring()`     | It is used to fetch the part of the given string on the basis of the specified index.                |
| `slice()`         | It is used to fetch the part of the given string. It allows us to assign positive as well as negative index. |
| `toLowerCase()`   | It converts the given string into lowercase letters.                                                |
| `toLocaleLowerCase()` | It converts the given string into lowercase letters on the basis of the host's current locale.       |
| `toUpperCase()`   | It converts the given string into uppercase letters.                                                |
| `toLocaleUpperCase()` | It converts the given string into uppercase letters on the basis of the host's current locale.       |
| `toString()`      | It provides a string representing the particular object.                                              |
| `valueOf()`       | It provides the primitive value of a string object.                                                  |
| `split()`         | It splits a string into a substring array, then returns that newly created array.                    |
| `trim()`          | It trims the white space from the left and right side of the string.                                 |
|

# More. 
> [[ MDN ]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

> * Javascript.info: [click-here](https://javascript.info/string)