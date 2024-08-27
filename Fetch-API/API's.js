(async()=>{
    let storage = [];
let FetchData = await fetch("https://api.nettoolkit.com/v1/account/test-api-keys")
// let getData = await FetchData.json();
// // console.log(getData)
// // storage.push(getData)
// storage  = getData;
// console.log(storage)


// // put fetch data into json ..
// let text = await FetchData.text(); // read response body as text

// console.log(text.slice(0, 80) + '...');

})
// ();

/*

// iT is a correct code but ,
// see fetch API calling inside the for loop and
//  for of loop which iterate at till names lenght 
// so it will become long . 

*/

async function getUsers(names) {
    let jobs = [];
  
    for(let name of names) {
      let job = fetch(`https://api.github.com/users/${name}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
    }
  
    let results = await Promise.all(jobs);
//   return results;
    console.log(results)
  }

//   getUsers();

 // =====================>> It is okay. <<====================

 async function getUsers(names) {
    let jobs = [];  
     
    let job = fetch(`https://api.github.com/users/${names}`).then(
        successResponse => {
          if (successResponse.status != 200) {
            return null;
          } else {
            return successResponse.json();
          }
        },
        failResponse => {
          return null;
        }
      );
      jobs.push(job);
  
    let results = await Promise.all(jobs);
//   return results;
    console.log(results)
  }

  getUsers("manojsingh00963");