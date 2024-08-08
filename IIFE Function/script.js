(function (name){
    this.name;
    console.log("His name is : ",name);
})('Rohan');

((company)=>{
    console.log("He is a coder in : ",company);
})('Microsoft.');

const text = "javascript is fun language, I love javascript !";
// const search1 = text.replace("javascript", "python");// replace element "valuename" "change value name",
// const search2 = text.replace(/javascript/g, "python");// replace element "but replace all by slash/ g & gi " to see both side has been changed.
const search3 = text.replace(/javascript/g, "python");// replace element "but replace all by slash/ g & gi "
console.log(text)
// console.log(search1)
// console.log(search2)//to see both side has been changed.
console.log(search3);//to see both side has been changed.


((cls)=>{
    this.cls;
    console.log("He studied in class:",cls);

})('10th');


((num1,num2)=>{
    result = num1 + num2;
    return console.log(result);

})(2,3);
