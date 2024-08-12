
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

