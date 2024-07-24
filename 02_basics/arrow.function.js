// Arrow funciton.
// console.log("This is the arrow function.");

const arrowfn =  () => {
    let username = "manish"
    console.log(username);
}
// arrowfn();

//use case of this.
const thisfn =  () => {
    let username = "this.is this"
    console.log(this);
}
// thisfn();//output:{} empty object's.



// const addTwo = (num1, num2) => {
//         return num1 + num2
//     }

// console.log(addTwo(2,2))

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "manish"})

console.log(addTwo(2,2))



const myArray = [2, 5, 3, 7, 8]

// myArray.forEach();