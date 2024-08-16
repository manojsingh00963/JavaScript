# Ternary Operator
> The ternary operator is simplified conditional operator like:<p style="color:red; text-decoration:underline;" > if / else</p>.


**Syntax:** <p style="color:red"> Condition ? < expression if true > : < expression if false > </>

> #### Example
> Before:
```javascript
let x = 2;
if (x > 0){
    console.log(`X is greater than 0;`);
}else{
    console.log(`X is less than 0;`);
};
```

> #### Example
> with Ternary:
```javascript
let x = 2;
x > 0 ? console.log(`greater `) : console.log(` lesser`) ;
```