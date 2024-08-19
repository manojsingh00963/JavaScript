
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
