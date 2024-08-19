// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



const rohan = {
    class:"10th",
    subject:"pcm",
    "Ncc cadet": false,
    location :"Delhi",
    "Roll no ":22,

}
rohan.birthday = function(){
    return "Happy birthday rohan,";
}

rohan["Roll no "] = 21;
rohan["Ncc cadet"] = true;

console.log(rohan.class,rohan.subject,rohan["Roll no "],rohan["Ncc cadet"],rohan.location)
console.log(rohan.birthday())



////------------Object new constructor.

const person = new Object();

person.firstname = "Shivam";
person.email = "xyz@gmail.com";
person["Home Address"] = "South Delhi, south extension.";
person.profession = "Codder";

// const personData = JSON.parse(person)
// console.log(personData)

console.log(person.firstname + " Email " + person.email + "\n Home address : "+ person["Home Address"]+'\nProfession: '+person['profession'])











//----------------------------------------------------------------------------
//----------------------------[ Loop's In Object ]----------------------------
//----------------------------------------------------------------------------
// for (const key in person) {
//     if(person.hasOwnProperty(key)){

//         // console.log(person[key])
//     }
// }


// for (const key in pl1) {
//     if (Object.hasOwnProperty.call(pl1, key)) {
//         // const element = pl1[key];
//         // console.log(pl1[key])
        
//     }
// }

// ///[[[[[[[[[[[[[ GET ALL ENTRIES OF THE OBJECT'S ]]]]]]]]]]]]]

// const entries = Object.entries(person)

// console.log("\nObject all entries are printed by this mehtod.\n")

// entries.forEach(([key , value]) => {
//     console.log(key ,":",value ,"\n")
// });

