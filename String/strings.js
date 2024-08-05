// 1) By string literal
// The string literal is created using double quotes. The syntax of creating string using string literal 

let Js = "Hello World!";
console.log(Js)
// 2) By string object (using new keyword)

//Second method of creat sting . 
// careate new instance of string .

const playerName = new String(" Cristiano Ronaldo ") 

console.log(playerName)

// -------------------------------------------------------------------- //

// -------------------------------------------------------------------- //


const name = "Shivam"
const repoCount = 50

// console.log(name + repoCount + " Value");
//name is a defalut and reserved key words,thererfor it show not allow (strike).

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Shivam-uk-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  


console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Shivam    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam%20.uk%11@gmail.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('Rohit'))

console.log(gameName.split('-'));


let Character_name = "Iron-Man";
let real_name = " Robert downy Junior.";

console.log(Character_name.concat(real_name))

console.log(real_name.slice(1,7))

