var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.fname, " ").concat(this.lname);
    };
    return Person;
}());
var person = new Person('vikas', 'srivastava', 45);
this.document.getElementById("data").innerHTML = "<p> your full name is: ".concat(person.getFullName(), "</p>");
// class with members creation using constructor
var Student = /** @class */ (function () {
    function Student(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    Student.prototype.getFullDetails = function () {
        return "Name: ".concat(this.fname, " ").concat(this.lname, " and age: ").concat(this.age);
    };
    return Student;
}());
var student = new Student('Ratan', 'srivastava', 11);
//this.document.getElementById("data").innerHTML+=`<p> your Student Full  name is: ${student.getFullDetails()}</p>`;
