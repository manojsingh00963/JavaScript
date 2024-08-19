/* An object always has a default key like the prototype.
A key of an object must be a string or a symbol, you cannot use an object as a key.
An object does not have a property that represents the size of the map. */

/*ES6 provides a new collection type called Map that addresses these deficiencies.

By definition, a Map object holds key-value pairs. Keys are unique in a Map’s collection. In other words, a key in a Map object only appears once.

Keys and values of a Map can be any values.

When iterating a Map object, each iteration returns a 2-member array of [key, value]. The iteration order follows the insertion order which corresponds to the order in which each key-value pair was
 first inserted into the Map by the set() method.*/

let map = new Map([])

// let john = { name: 'john deo' },
//     lily = { name: 'lily ' },
//     peter = { name: 'Peter Drucker' }

// let userRole = new Map();
// console.log(typeof userRole);
// console.log(userRole instanceof Map);

// Set method .
/*
userRole.Set(john,'admin');
userRole.Set(lily,'editor')
.Set(peter,'subscriber');
*/

// let userRoles = new Map([[john, 'admin'], 
//                      [lily, 'editor'], 
//                      [peter, 'subscriber']]);

// console.log(userRoles.get(john)) 

// console.log(userRoles.has(lily))



/*To get the keys of a Map object, you use the keys() method. The keys() returns a new iterator object that contains the keys of elements in the map.

The following example displays the username of the users in the userRoles map object.*/

let john = { name: 'John Doe' },
  lily = { name: 'Lily Bush' },
  peter = { name: 'Peter Drucker' };

let userRoles = new Map([
  [john, 'admin'],
  [lily, 'editor'],
  [peter, 'subscriber'],
]);

for (const user of userRoles.keys()) {
//   console.log(user.name);
}


/*Also, the entries() method returns an iterator object that contains an array of [key,value] of each element in the Map object:*/

for (const value of userRoles.values()) {
    // console.log(value)
    
}

for (const role of userRoles.entries()) {
    // console.log(role)
  console.log(`${role[0].name}: ${role[1]}`);
}