// this is the in [ Immediately Invoked Function Expression (IIFE.)]
// Write code as : (()=>{})(); and till end semicolon is compelsary . 

// Three method for writting and using IIFE.
/*

(function () {
  // …
})();

(() => {
  // …
})();

(async () => {
  // …
})();

*/

(()=>{
    console.log("This is the IIFE function.");
})();

((fname)=>{
    fname = "IIFE";
    console.log(`This is the ${fname} function.`);
})();

((username)=>{
    let ausername = username;
    
})(console.log("leo"));

//// you can only async type this. 
(async (username)=>{
    
    console.log("This is the method using async for writting IIFE.")
    
})();

//// of using function type .

(function () {
  console.log("This is the method using function for writting IIFE.")
})(); 