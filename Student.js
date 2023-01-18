var Student = /** @class */ (function () {
    function Student(fname, lname, age, email, contact) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.email = email;
        this.contact = contact;
    }
    Object.defineProperty(Student.prototype, "StFname", {
        get: function () { return this.fname; },
        set: function (fname) {
            this.fname = fname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "StLname", {
        get: function () { return this.lname; },
        set: function (lname) {
            this.lname = lname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "StAge", {
        get: function () { return this.age; },
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "StContact", {
        get: function () { return this.contact; },
        set: function (contact) {
            this.contact = contact;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "StEmail", {
        get: function () { return this.email; },
        set: function (email) {
            this.email = email;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var vikas = new Student('vikas', 'srivastava', 45, 'vikas@gmail.com', '8009492817');
console.log("first Name=" + vikas.StFname);
console.log("last Name=" + vikas.StLname);
console.log(" Age =" + vikas.StAge);
console.log("contact=" + vikas.StContact);
console.log("Email id=" + vikas.StEmail);
