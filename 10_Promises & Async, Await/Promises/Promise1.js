// const promp = new Promise(function(resolve,reject){
//     let x = 10; 
//     if(x<10){
//         resolve(`The code is working.`);
//     }
//     reject(`Code is overloading.`);
// });

// promp.then(function(e){
//     console.log(e);
// }).catch(function(err){
//     console.log(err)
// })


const checkData = new Promise((res,rej)=>{
// let data = 'row data'; // resolve.
let data = 'rowdata';   // reject.
setTimeout(()=>{
    if(data === 'row data'){
      return  res(`The data is found.`)
    }else{
    return rej(`The data is not founded!`)
    }
},1000)
}).then((e)=>{
    console.log(e);
}).catch((err)=>{console.log(err)});


// Check number or not ,simple promise.

const checkNumber = new Promise ((resolve,reject)=>{
  // let number = 'j';
  let number = 4;
  setTimeout(() => {
    if( isFinite(number)){
      resolve(`The number is ${number};`)
    }else{
      reject(`it is not a number.`);
    }
  },1000);
}).then((number)=>{
  console.log(number);
}).catch((error)=>{
  console.log(error);
})

// Object data promise

const user = new Promise((res,rej)=>{
  setTimeout(() => {
    res( {username:'rohan',userage:'45'});
    rej(`User Not found!.`);
  },2*1000);
}).then((user)=>{
  // console.log(user);
  return user.username;
}).then((username)=>{
console.log(`The username is: ${username},`);
}).catch((err)=>(console.log(err)));


