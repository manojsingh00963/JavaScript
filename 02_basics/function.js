function myfunction(num1,num2){
    // result = num1 + num2;
    // return console.log(result);
    // return result;
    return num1 + num2;

};
// console.log(myfunction(4,3));

//// >>---------------------Imprtant in one. -------------------------<<

// function addTwoNumbers(number1, number2){
    
//     console.log(number1 + number2);
// };

// const result = addTwoNumbers(4,2)
// // console.log("result:",result);//here will show undifine.


function loginuser(usernam){
    // if(usernam === undefined){//this is one method 
    // if(usernam == ""){//second method for check string is empty or not. 

    // Third and mainly used method for using logical NOT . 

    if(!usernam){ 
        console.log("PLease enter a username");
        return;
    }
    return `${usernam} Congratulation you have been Successfully logged in.`

};

// console.log(loginuser('manish')) //Output :manish Congratulation you have been Successfully logged in.
// console.log(loginuser()) //Output :PLease enter a username


///---------Rest operator..

// function calculateCartPrice(...num1){//all access meand all in rest . 
function calculateCartPrice(num1, num2 , num3 , ...num){//another mehtod for present value and can say 1,2,3 three value which is given will went in function parameter and other value goes on rest . 

    // return num1;
    all_num = [num1 , num2 , num3, num];
    return all_num;
};

// console.log(calculateCartPrice(300,200,500))//Output : it will give all value in array form .
// console.log(calculateCartPrice(300,200,500,600,700,800,900,1000))//Output : it will give [ 300, 200, 500,  There all are goes in rest =>[ 600, 700, 800, 900, 1000 ] ].

// const person = {
//     username:"Rohan",
//     age:20,
// };
function handleobeject(anyobject){
    // console.log(`Person name is ${anyobject.username} and age is ${anyobject.age}`);
};

// handleobeject(person)

const myNewArray = [ 100,200,300,400];
// function returnSecondValue(getArray){ // same as above object function 
function returnSecondValue(...getArray){
    // return getArray[1];
    return getArray ;
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,500,300]))
