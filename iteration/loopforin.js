// for in loop for object.

const programmingLanguages ={
    js:"java Scirpt",
    py:"Pythond",
    cpp:"C++",
    rb:"ruby",
}

for (const key in programmingLanguages) {
    
    //this will print only key only;
    // console.log(key)
    
    //This will print value;
    // console.log(programmingLanguages[key]);
}
for (const key in programmingLanguages) {
    // console.log(`${key} Shortcut is for : ${programmingLanguages[key]} ,`);
}


// for (const key in programmingLanguages) {
//     if (programmingLanguages.hasOwnProperty.call(programmingLanguages, key)) {
//         const element = programmingLanguages[key];
//         console.log(element)
        
//     }
// }

//-------------for in loop at Array.

const programming = ['js','py','java','c','c++'];

for (const key in programming) {
    //it will be print indexes of the array.
    //    console.log(key)


    // it will be print full array.
    //    console.log(programming)

    // <- Will be print element of the array.
    console.log(programming[key])
}