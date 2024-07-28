// console.log("hello world")

//-----FOR LOOP -----

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element)
    // console.log(i)
}

//---Nested loop ----.
for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value:${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value:${j}`)
        
    }
    
}

////---Multiplextion table.----

for (let i = 1; i <= 10; i++) {
//    console.log(`The table of : ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`${i} * ${j} = ${i*j}`);
    // console.log(i + '*' + j + '=' + i*j);
   }
    
}

///----ON array

let myArray = ["flash","batman","iron-man","superman"];

for (let index = 0; index < myArray.length; index++) {
    // console.log(myArray.length);
    const element = myArray[index];
    // console.log(element)
}

//-----Loop's keyword.

// break & continue.

for (let index = 1; index <= 20 ; index++) {
    if (index == 5) {
        // console.log(`Detected 5`)
        break;
    }
// console.log(`value of i is ${index}.`);    
}

for (let index = 1; index <= 20 ; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        continue;
            }
        else if(index==10){
            console.log(`Second number ${index} is Detected.`)
            continue
        }
console.log(`value of i is ${index}.`);    
}