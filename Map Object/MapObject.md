# Map Object:
>A Map holds key-value pairs where the keys can be any datatype.

>A Map remembers the original insertion order of the keys.

### How to Create a Map

#### Create a JavaScript Map by:
##### Passing an Array to new Map()
### Create a Map and use Map.set()
> create a Map by passing an Array to the **new Map()** constructor:

> Example:
```javascript
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```
### The set() method can also be used to change existing Map values:

```javascript
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
```

### The get() method gets the value of a key in a Map:

```javascript
fruits.get("apples");    // Returns 500
```
-----
## Maps are Objects
```javascript
typeof returns object:
```

----
## [More:](https://javascript.info/map-set)

## Map

> Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

### Methods and properties are:

| Method          | Description                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| `new Map()`     | Creates the map.                                                            |
| `map.set(key, value)` | Stores the value by the key.                                           |
| `map.get(key)`  | Returns the value by the key, `undefined` if the key doesn’t exist in the map. |
| `map.has(key)`  | Returns `true` if the key exists, `false` otherwise.                        |
| `map.delete(key)` | Removes the element (the key/value pair) by the key.                       |
| `map.clear()`   | Removes everything from the map.                                            |
| `map.size`      | Returns the current element count.                                          |
----

[ReadMore:](https://www.javascripttutorial.net/javascript-Map/)
----