const CricatPlayer = ["Virat-kohali", "Ms-Dhoni", "Siraj", "Bumbrah"];

// const checkPlayer = CricatPlayer.map((pl)=>(pl=="Virat-kohali"))
// const checkPlayer = CricatPlayer.filter((pl)=>(pl=="Virat-kohali"))
// console.log(checkPlayer)

const numbers = [10, 20, 30, 40, 50, 60];

// const result = numbers.map((num)=>(num*2));
const result = numbers.map(function (num) {
    return num * 2;
})

console.log(result)



// const age = [12,23,4,5,6,3,34,].map((ag)=>ag+5);
const age = [12, 23, 4, 5, 6, 3, 34,].map(function (ag) {
    return ag + 5;
})
// console.log(age)
















// ---------- This is roughly practice, It is wrong! code.
// function checkAge(age){
//     if(age>18){
//         return `You are eligible for voting.`
//     }
//     else if(age=18){

//        return age + 2;
//     }else{
//         return `You are not, go to play video game.`;
//     }
// };

// function insertAge(){
//     const age = [33,18,25,30,8,0].map(checkAge)
//     console.log(age)
// }
// insertAge();