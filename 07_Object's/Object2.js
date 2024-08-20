
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


// Object Assign

let widget = {
    color:'red',
}

const bgcolor = Object.assign({},widget)

console.log(bgcolor)


// Object.assign Merge 2 Object.

let box = {
    height:'10px',
    weight:'20px'
}

let style = {
    color:'red',
    borderStyle:'solid'
}

const boxStyle = Object.assign({},box,style)

console.log(boxStyle)

let Science_student = {
    s1:'Rohan',
    c2:'Science'
}

let Math_student = {
    s2:'Lisha',
    c1:'Math'
}

const bestStudent = Object.assign(Science_student,Math_student)
// use curly braces not complesary javascript auto maticaly use but for good practice should use,
// const bestStudent = Object.assign({},Science_student,Math_student)