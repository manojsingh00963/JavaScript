const array = [1,2,3,4,5,6]

const sumArray = array.reduce(function(acc,val){
return acc + val;
},0);

// console.log(sumArray);


const array1 = [10,15,16,18,20];

const newNum = array1.reduce((arr,val)=>(arr+val));

console.log(newNum)