/////// Promises/

// fetch('https://somthing.com').then().catch().finally();

const promise = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Promises has been decleared.");
        resolve();
    },2000);
});

promise.then(function(){
    console.log("Promise completed.!");
});

//second methond of promises.


new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("Second promise are being declearing...");
    resolve();
},2000);
}).then(()=>{
    // console.log("Done.\n \t\tSecond promise has been decleared.")
    setTimeout(()=>{
        console.log("\t Done.!\n\tSecond promise has been decleared.")
},4000);
})