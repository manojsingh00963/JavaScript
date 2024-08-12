// // Simple class and constructor method.

class person{
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
    rohan(){
        console.log("\nIt is the inner operation of the class function.")
        this.name = "rohan";
        this.age = 23;
        this.address = "New Delhi"
        const rohan = new person(this.name , this.age ,this.address);
        console.log(rohan);
        console.log(rohan.name);
        console.log(rohan.age);
        console.log(rohan.address);

    }
}

const shivam = new person("Shivam",20,"New Delhi Mukharji-nagar.");

console.log(shivam.name + " is " + shivam.age, shivam.address);
console.log(shivam.rohan())

//------------------------------------------------------------------------//
//--------------------Define object in-side class.------------------------//
//------------------------------------------------------------------------//

class User{

    constructor(UserName,UserId){
        this.Name = UserName;
        this.id = UserId;
        // console.log(UserName,',',UserId)
        }
    default_User(){
        
        // this is calling this corrent function corrent context.

        this.Name= this.UserName;
        this.Name= 'Sakshi';
        this.Id = '@29'
        const sakshi = new User("Sakshi",'@29')

        console.log(sakshi)

        // console.log(this.UserName)
    }

}

const user1 = new User('Avinsh','A43')

console.log(User)

// console.log(user1.UserName)

console.log(user1)

console.log(user1.default_User())



//===============================================================================//
//=====================Logical method use in classes.===========================//
//=============================================================================//


class student {
    constructor(name, Roll_No, Subject, Faculty) {
        this.name = name;
        this.Roll_No = Roll_No;
        this.Subject = Subject;
        this.Faculty = Faculty;

        
    };
    FacultyStudent() {
        // let s1 = `${constructor} is the best student of ${this.Faculty}`;
        // let s1 = `${student} is the best student of ${this.Faculty}`;
        let s1 = `${this.name} is the best student of ${this.Faculty}`;
        return s1;
    };

    checkfaculty() {

        if (this.Subject === 'science') {


            return `${this.name} subject ${this.Subject} in science ;`


        }
        else {

            {
                return `${this.name} subject ${this.Subject} in Arts ;`

            }
        }
    }
}

let s1 = new student("Rohan", 15, 'math', 'Science');
let s2 = new student("Shivam", 15, 'Geography', 'Arts');

console.log(s1)

console.log(s1.FacultyStudent())

console.log(s2.name)
console.log(s2.checkfaculty())

