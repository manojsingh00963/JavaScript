// // singleton
// // Object.create

// // object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// // console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// const rohan = {
//     class:"10th",
//     subject:"pcm",
//     "Ncc cadet": false,
//     location :"Delhi",
//     "Roll no ":22,

// }
// rohan.birthday = function(){
//     return "Happy birthday rohan,";
// }

// rohan["Roll no "] = 21;
// rohan["Ncc cadet"] = true;

// console.log(rohan.class,rohan.subject,rohan["Roll no "],rohan["Ncc cadet"],rohan.location)
// console.log(rohan.birthday())



////------------Object new constructor.

const person = new Object();

person.firstname = "Shivam";
person.email = "xyz@gmail.com";
person["Home Address"] = "South Dekhi , south extension.";
person.profession = "Codder";

const obj = JSON.parse(person);
console.log(obj)
// console.log(person.firstname + " Email " + person.email + " Home address : "+ person["Home Address"])


// create object a constructor function..


// const playerboy = function (_firstname, lastname, address, player) { //can define the both types
function  playerboy(firstname, lastname, address, player) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.address = address;
    this.player = player;

    this.fullname = function () {
        return "fullname is " + this.firstname + " " + lastname;
    }
}

const pl1 = new playerboy("rohan", "sharama", "Mumbai", true);
const pl2= new playerboy("Lakshit", "Varma", "Banglore", false);


// console.log(pl1.fullname())
// console.log(pl1.firstname)
// console.log(pl1.lastname)
// console.log(pl1.address)
// console.log(pl1.player)

// console.log(pl2.fullname() + " are from " + pl2.address + " and he is a player " + pl2.player)

for (const key in person) {
    if(person.hasOwnProperty(key)){

        // console.log(person[key])
    }
}

for (const key in pl1) {
    if (Object.hasOwnProperty.call(pl1, key)) {
        // const element = pl1[key];
        // console.log(pl1[key])
        
    }
}

///[[[[[[[[[[[[[ GET ALL ENTRIES OF THE OBJECT'S ]]]]]]]]]]]]]
const entries = Object.entries(person)

console.log("\nObject all entries are printed by this mehtod.\n")

entries.forEach(([key , value]) => {
    console.log(key ,":",value ,"\n")
});



// let obj = {
//     a:1,
//     b:2,

// }

// console.log(obj);

// let animal = {
//     eats:true,
// };

// let rabit = {
//     jumps:true,
// }

// rabit.__proto__ = animal // Sets rabbit.[[prototype]] = animal //prototype is the method of the more property in a object's..

class Animal{
    constructor(name){
        this.name = name 
        console.log("Object is created...");
    }

    eats(){
        console.log("Kha raha hoon");
    }

    jumps(){
        console.log("Kood raha hoon");
    }

}

let a = new Animal();
console.log(a)


