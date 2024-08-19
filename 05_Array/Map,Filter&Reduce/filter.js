// # Filter in Javascript (Array.Method)

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNums  = myNums.filter((num)=> num >4 );
// const newNums = myNums.filter(function(num){
// return num > 4;
// });
// console.log(newNums);

function CanVoter(age){
    return age>=18;
}

function Voters(){
    const ages = [12,14,18,21,22,30,41].filter(CanVoter)
    // const EligibalForVote = ages.filter(CanVoter);
    // console.log(EligibalForVote);
    // console.log(ages);
}

// Voters();

// # Check Is Positive or Not.

function isPositive(num){
    // return num%2;
    return num > 0;
}

const P_Numbers = [1.2,3.4,-2,-4,23.5,-8,10.01].filter(isPositive)

// console.log(P_Numbers)


// # Multiple of 2 (Xnumber)

function isMultiple(num){
    return num%2 == 0;
    // return num%2;
}

const Xnum = [2,4,5,6,7,8,9,10];
const check = Xnum.filter(isMultiple);
// console.log(check)



// # Check number is even ;

function isEven(value){
return value%2 === 0;
}

const Numbers = [12,14,2,9,17,37,63,83,90,101,104].filter(isEven);
// console.log(Numbers);


// Function inside funtion. check student which is pass or not.

// function checkPassed(studentsmarks){
//     return studentsmarks > 33;
// }

// const s1 = [36,33,45,26,46,].filter(checkPassed);
// console.log(s1);


function checkPassed(studentsmarks){
    return studentsmarks > 33;
}
function checkSt(){
    const student = [34,23,33,54,35,40].filter(checkPassed);
    return student;
};
// console.log(checkSt());

// # Same 

const student = [23,33,54,35,40,80,90].filter((num)=> num > 33 || (num == 33));
// console.log(student)

// --------------------------------------------------------------------------
// ************ By using For Loop **************** //



const student2 = [23,33,34,54,40,80,89,90]
const PassedMarks = [];

            student2.forEach((stnum)=>{

                    // stnum >= 33 ;
                    // return PassedMarks.push(stnum)
                    //  console.log(PassedMarks[st]);
                    // //  console.log(st)
                    // //  console.log(student2)
                    // //return PassedMarks[st] = st>33;

                    if(stnum>=33){
                        return PassedMarks.push(stnum);
                    }
            })
            // console.log(PassedMarks);



// Real world project Example.


let users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]


// const getUser = users.filter((ur)=> ur.age >= 50);
const getUser = users.filter((ur)=> ur.age >= 50 && ur.occupation === 'programmer');

// console.log(getUser)

const getDetails = users.filter((getData)=>{
   return getData.age >= 50 && getData.occupation === 'programmer';
    // return getData;
});
console.log(getDetails);


//https://www.freecodecamp.org/news/filter-arrays-in-javascript/