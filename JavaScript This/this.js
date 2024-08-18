
console.log(this)// Here this will refer to object of this javascript corrent context [object Window];

function exampleFunction() {
    console.log(this); // Refers to the current execution context
  }

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);