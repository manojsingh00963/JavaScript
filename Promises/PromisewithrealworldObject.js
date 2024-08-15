// Promise with real world Object and make self error .......
// Here I made my self error Promise when we have no Object or Object detail's then what will do.
const Student = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let s1 = {
        studentname:"saksham",
        studentage:19,
      };
  
      // the function check if s1 is here (true). then resolve promise other-wise reject. 
      if(s1 ){
        resolve (`The student name is: ${s1.studentname}, & his age is: ${s1.studentage}.`);
      }
      reject(`Student is not enrolled here.`);
    },3000)
  }).then((resolve)=>{
    console.log(resolve);
  }).catch((error)=>console.log(error));
  
  
  /// the error s1 is not defined problem solved by chat gpt and given two solution.
  
  // 1) ==>
  
  const Student1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      // Check if s1 is defined and is truthy
  
      if (typeof s1 !== "undefined" && s1) {
        resolve(`The student name is: ${s1.studentname}, & his age is: ${s1.studentage}.`);
      } else {
        reject(`Student is not enrolled here.`);
      }
    }, 4000);
  }).then((resolve) => {
    console.log(resolve);
  }).catch((error) => console.log(error));
  
  // 2) ==> using by try & catch
  
    const Student2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        // Ensure that s1 is both declared and defined.
        let s1;
        try {
          if (typeof s1 !== "undefined" && s1) {
            resolve(`The student name is: ${s1.studentname}, & his age is: ${s1.studentage}.`);
          } else {
            reject(`Student is not enrolled here.`);
          }
        } catch (error) {
          reject(`Error: ${error.message}`);
        }
      }, 5000);
    }).then((resolve) => {
      console.log(resolve);
    }).catch((error) => console.log(error));
    