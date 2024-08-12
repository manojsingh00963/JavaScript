// console.log('hello')

const btn = document.querySelectorAll(".button");

console.log(btn);

btn.forEach((e) => {
  console.log(e);
  // check arrow function is not here.
  e.addEventListener("click", (a) => {
    // console.log(a)
    // console.log(a.target)
    console.log(a.target.id);

    if (a.target.id === grey) {
      // console.log(a.target.id.parentNode)
      body.style.backgroundColor = a.target.id;
    } else if (a.target.id === white) {
      body.style.backgroundColor = a.target.id;
    } else if (a.target.id === blue) {
      body.style.backgroundColor = a.target.id;
    } else if (a.target.id === yellow) {
      body.style.backgroundColor = a.target.id;
    }
  });
});
