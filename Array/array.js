const fruits = ["Apple", "Oranges", "Bananas", "PineApple"];
// console.log(fruits);

// console.log(typeof fruits)// the data type of array is object.

// console.log(fruits[0]);
const Arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Arr);

const Alphabate = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
// console.log(Alphabate)

//----------------------------------------------------------//
// -------------------Array Methods------------------------//
//--------------------------------------------------------//

// ======> Push & Pop. <======= 

const student = ['Rohan', 'Akash'];

console.log(student);

// student.push('shivam')
// student.push('Manish')
student.push('Shivam', 'Manish')

console.log(student);

console.log(student.length);
// console.log(student.keys())

console.log(student.pop());
console.log(student)

////////////// -- JOIN Shift index of & include.---------------

const Books = ['Math', 'Science', 'Computer-Science', 'Social-Science'];

// console.log(Books);

console.log(Books.join(','));

const join = Books.join(` ~ `)

console.log(join)

// Books.shift()
console.log(Books)

console.log(Books.indexOf('Science')) // give index of the array element.

console.log(Books.includes('Math'))  // true & false.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
// ++++++++++++++++++++// String to Arrya //++++++++++++++++++++++//
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Convert a String into an array , by using Split() method.
// The `split`() method takes a `separator` string as its argument. 
// the method splits the string at each point where the `separator` occur


const course = " 'Python','JavaScript','C','C++','Java','HTML','CSS' ";

const arr = course.split('');
console.log(arr)
console.log(typeof arr + ":", arr)

console.log(course.split(","))


// ====================Merging Arrays

const CapitalLetter = ['A','B','C','D','E','F','XYZ'];
const SmallLetter = ['a','b','c','d','e','xyz'];

const MergeArray = CapitalLetter.concat(SmallLetter)
console.log(MergeArray)

//-------------Concatenate Three or more Aarrays.


const numbers1 = [1,2,3];
const numbers2 = [4,5,6];
const numbers3 = [7,8,9,0];

const Natural_number = numbers1.concat(numbers2,numbers3);
console.log(Natural_number)



/// ===========Searching an item

const fruits3 = ["Apple","Banana","Orange","mango"];
const i = fruits3.indexOf('mango')
console.log(i)
// if item not found the return index is -1;
const i2 = fruits3.indexOf('strawberry')
console.log(i2)

// Slicing an Array

const city = ['delhi','mumbai','banglore','haydrabad']

const techcity = city.slice(2,3)// only included index before end index , last index-1;
const Nontechcity = city.splice(2,3)// include last index
console.log(techcity);
console.log(Nontechcity);


// replacing an item's value 

const months = ['january',"February","March","April"]

console.log(months)

months[1] = "December";

console.log(months)
