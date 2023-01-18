var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, fname, middlename, lname, age, email) {
        var _this = _super.call(this, fname, lname, age) || this;
        _this.id = id;
        _this.middlename = middlename;
        _this.email = email;
        return _this;
    }
    Employee.prototype.getFullName = function () {
        var namesegment = _super.prototype.getFullName.call(this).split(' ');
        namesegment.splice(1, 0, this.middlename);
        namesegment.splice(3, 0, this.email);
        var fullname = namesegment.join(' ');
        return " Employee full name is: ".concat(fullname);
    };
    return Employee;
}(Person));
var emp = new Employee(1, 'vikas', 'kumar', 'srivastava', 45, 'vikas1@gmail.com');
console.log(emp.getFullName());
