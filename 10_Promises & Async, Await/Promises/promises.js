/////// Promises/

// fetch('https://somthing.com').then().catch().finally();

// resolved directely coneedted with .then ,

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("Promises has been decleared.");
    resolve();
  }, 2000);
});

promise.then(function () {
  // console.log("Promise completed.!");
});

//second methond of promises.

new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log("Second promise are being declearing...");
    resolve();
  }, 2000);
}).then(() => {
  // console.log("Done.\n \t\tSecond promise has been decleared.")
  setTimeout(() => {
    // console.log("\t Done.!\n\tSecond promise has been decleared.")
  }, 4000);
});

// By resolve we can pass data as a parameter in .then, can pass obeject,Array, function.etc

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve({username:"manish",email:"manoj9412rawat@gmail.com",});
  }, 1000);
});

promiseThree.then(function (user) {
  // console.log(user);
});

////-------PROMISE CHAINING.-------

const promiseFour = new Promise((resolve, reject) => {
  let error = false;
  if (!error) {
    // resolve({username:"manish",email:"manish@gmail.com",userid:123412,});
  } else {
    // reject('Something went wrong .!');
  }
})
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((myusername, userid) => {
    console.log(myusername);
    return userid;
  })
  .then((userid) => {
    console.log(userid);
  })
  .catch((error) => {
    console.log(error);
    // }).finally(()=>console.log("The promise is either resolved or rejected."))
  });
// .finally(()=>console.log(`" The promise is either resolves or rejectes. "`))

// This is same as above code I just not use (setTimeout function) for knowledge purpose , here i used.

const promiseFour2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      // resolve({username:"manish",email:"manish@gmail.com",userid:123412,});
    } else {
      // reject('\nSomething went wrong pin promiseFour2.!');
    }
  }, 1000);
});
promiseFour2
  .then((user) => {
    // only get for user name not full object.
    console.log(user);
    return user.username;
  })
  .then((myusername) => {
    /// this is called chaining..
    console.log(myusername);
    return user.userid;
  })
  .then((userid) => {
    console.log(userid);
  })
  .catch((error) => {
    console.log(error);
    // }).finally(()=>console.log("The promise is either resolved or rejected."))
  })
.finally(()=>console.log(`" The promise is either resolves or rejectes. "`));

// It not Necessary to always use .then and .catch , can use instead of both async & await.

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ student: "Rohan", Id_NO: 23, batch_Name: "2A6L" });
    } else {
      reject("Error has been come, Student details not be found.");
    }
  }, 1000);
});

const GetStudenDetails = (async()=>{
    try {
        const response = await promiseFive;
    console.log(response)
    } catch (error) {
        console.log(error);
    }
})();

async function getStudentDetails() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
getStudentDetails();

// fetch api 

async function apiGet() {
  try {
    const response2 = await fetch("https://api.github.com/users/manojsingh00963");
    const Datast = await response2.json()
    console.log(Datast);
  } catch (error) {
    console.log("E: ", error);
  }
}

apiGet();


fetch('https://api.github.com/users/manojsingh00963')
    .then((response)=>{
        return response.json();
    })
    .then((responseData)=>{
        console.log(responseData);
    }).catch((error)=>console.log(error))