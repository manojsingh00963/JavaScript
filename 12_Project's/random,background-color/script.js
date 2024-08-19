// setTimeout(() => {
//   Array.from(item).forEach((e) => {
//     e.style.backgroundColor = getRandomColor();
//     e.style.color = getRandomColor();
//   });
// }, 3000);

async function start() {
    
  const canvas = document.querySelector(".canvas").children;
  const random = document.querySelector(".random").children;
  const color = document.querySelector(".color").children;

  function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
  }

  setInterval(() => {
    document.querySelector("#canvas").style.backgroundColor = getRandomColor();
  }, 300);
  setInterval(() => {
    Array.from(canvas).forEach((e) => {
      e.style.backgroundColor = getRandomColor();
      e.style.color = getRandomColor();
    });
  }, 500);
  setInterval(() => {
    Array.from(random).forEach((e) => {
      e.style.backgroundColor = getRandomColor();
      e.style.color = getRandomColor();
    });
  }, 300);
  setInterval(() => {
    Array.from(color).forEach((e) => {
      e.style.backgroundColor = getRandomColor();
      e.style.color = getRandomColor();
    });
  }, 200);
}
start();
