// FETCH API FORM THE NETWORK.

// const FetchAPI = function(){
//    let data =  fetch('https://randomuser.me/api/')
// console.log(data)
// }
// FetchAPI();

const FetchAPI2 = (async()=>{
    let fetchData = await fetch('https://randomuser.me/api/');
    let getData = await fetchData.json();
    console.log(getData)
})
// FetchAPI2();




async function apiGet() {
  try {
    const response2 = await fetch("https://api.github.com/users/manojsingh00963");
    const Datast = await response2.json()
    console.log(Datast);
  } catch (error) {
    console.log("E: ", error);
  }
}

// apiGet();


// fetch('https://api.github.com/users/manojsingh00963')
//     .then((response)=>{
//         return response.json();
//     })
//     .then((responseData)=>{
//         console.log(responseData);
//     }).catch((error)=>console.log(error))