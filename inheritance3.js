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
var User = /** @class */ (function () {
    function User(fname, lname, age, contact) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.contact = contact;
    }
    return User;
}());
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(stfId, fname, middleName, lname, age, contact, email) {
        var _this = _super.call(this, fname, lname, age, contact) || this;
        _this.stfId = stfId;
        _this.middleName = middleName;
        _this.email = email;
        return _this;
    }
    Object.defineProperty(Staff.prototype, "stId", {
        get: function () {
            return this.stfId;
        },
        set: function (stId) {
            this.stfId = stId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "stEmailId", {
        get: function () {
            return this.email;
        },
        set: function (emailId) {
            this.email = emailId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Staff.prototype, "stContact", {
        get: function () {
            return this.contact;
        },
        enumerable: false,
        configurable: true
    });
    Staff.prototype.getFullName = function () {
        return "Name: ".concat(this.fname, " ").concat(this.middleName, " ").concat(this.lname, " ");
    };
    Staff.prototype.getFullDetails = function () {
        return "Name : $(this.getFullName())\n                    Email : ".concat(this.email, "\n                    Age: ").concat(this.age, "\n                    Contact : ").concat(this.contact);
    };
    return Staff;
}(User));
var Manager = new Staff(1, 'vikas', 'kumar', 'srivastava', 45, '8009492817', 'vikas1@gmail.com');
console.log("full name: " + Manager.getFullName());
console.log(Manager.stEmailId);
