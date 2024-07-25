/////// Promises/

// fetch('https://somthing.com').then().catch().finally();

// resolved directely coneedted with .then ,

const promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        // console.log("Promises has been decleared.");
        resolve();
    },2000);
});

promise.then(function(){
    // console.log("Promise completed.!");
});

//second methond of promises.


new Promise((resolve,reject)=>{
setTimeout(()=>{
    // console.log("Second promise are being declearing...");
    resolve();
},2000);
}).then(()=>{
    // console.log("Done.\n \t\tSecond promise has been decleared.")
    setTimeout(()=>{
        // console.log("\t Done.!\n\tSecond promise has been decleared.")
},4000);
})

// By resolve we can pass data as a parameter in .then, can pass obeject,Array, function.etc

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        // resolve({username:"manish",email:"manoj9412rawat@gmail.com",});
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
});


////-------PROMISE CHAINING.-------

const promiseFour = new Promise((resolve,reject)=>{
    let error = false ;
    if(!error){
        resolve({username:"manish",email:"manish@gmail.com",userid:123412,});
    }else{
        reject('Something went wrong .!');
    }
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((myusername,userid)=>{
    console.log(myusername);
    return userid;
}).then((userid)=>{
    console.log(userid);
}).catch((error)=>{
console.log(error);
// }).finally(()=>console.log("The promise is either resolved or rejected."))
}).finally(()=>console.log(`" The promise is either resolves or rejectes. "`))


// This is same as above code I just not use (setTimeout function) for knowledge purpose , here i used.

const promiseFour2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true ;
    if(!error){
        resolve({username:"manish",email:"manish@gmail.com",userid:123412,});
    }else{
        reject('\nSomething went wrong .!');
    }
    },1000)
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((myusername,userid)=>{
    console.log(myusername);
    return userid;
}).then((userid)=>{
    console.log(userid);
}).catch((error)=>{
console.log(error);
// }).finally(()=>console.log("The promise is either resolved or rejected."))
}).finally(()=>console.log(`" The promise is either resolves or rejectes. "`));