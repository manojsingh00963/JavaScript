// function bggrey(){
//     document.querySelector('#grey').addEventListener('click',()=>{
//         document.body.style.backgroundColor = "grey";})
//         document.body.style.color = "beige";
// }
// function bgwhite(){
//     document.querySelector('#white').addEventListener('click',()=>{
//         document.body.style.backgroundColor = "white";})
//         document.body.style.color = "black";
// }
// function bgblue(){
//     document.querySelector('#blue').addEventListener('click',()=>{
//         document.body.style.backgroundColor = "blue";})
//         document.body.style.color = "white";
// }
// function bgyellow(){
//     document.querySelector('#yellow').addEventListener('click',()=>{
//         document.body.style.backgroundColor = "yellow";
//         document.body.style.color = "red";
//     })
// }

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if (e.target.id === grey) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
