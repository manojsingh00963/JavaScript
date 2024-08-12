// FETCH API FORM THE NETWORK.

// async function apiGet() {
//   try {
//     const response2 = await fetch("https://api.github.com/users/manojsingh00963");
//     const Datast = await response2.json()
//     console.log(Datast);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }

// apiGet();


fetch('https://api.github.com/users/manojsingh00963')
    .then((response)=>{
        return response.json();
    })
    .then((responseData)=>{
        console.log(responseData);
    }).catch((error)=>console.log(error))