//      High Ordered Array Loops

const number = [1, 2, 3, 4, 5, 6];

for (const num of number) {
//   console.log(num);
}
const greeting = "Hello World!";
for (const greet of greeting) {
    if (greet == " ") {
        continue;
      }
      console.log(` ${greet}`); 
    }


// const greeting = "Hello World!";
// const welcome = "Hi Welcome to :";

// for (const Welc of welcome ) {
// for (const greet of greeting) {
        
//         if (greet == " ") {
//             continue;
//           }
//           console.log(` ${Welc} ${greet}`); 
//         }
// }




// For off loop in object's

const mygame = {
    game1:"BGMI",
    game2:"GTA V",
}

// for (const gamer of mygame) {
//     console.log(gamer);
// }
// for (const [key,value] of mygame) {
//     console.log(gamer);
// }
//not can use for of loop in object.=> newt file object-loop.js