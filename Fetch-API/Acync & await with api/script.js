// function resolvedafter2second(){
//     return new promise((resolve) =>{
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall(){
//     console.log('calling');
//     const result = await resolvedafter2second();
//     console.log(result);
//     //Expected output : "resolved"
// }

// // console.log("I am working ")
// // console.log("Here is everything okay.");
// asyncCall();


async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchData();

async function fetchAPI() {
  try {
    let get_data = await fetch('https://api.github.com/users/manojsingh00963')
    if(!get_data.ok){
      throw new Error(`Failde processing.`);
    }
    const new_data = await get_data.json();
    console.log(new_data);
  } catch (error) {
    console.log(error);
    
  }
  
}
fetchAPI();
