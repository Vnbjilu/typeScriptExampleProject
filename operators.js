// let fd:Array<string> = ['🍎','🍏','🍌'];
// let ft:Array<string> = ['🍕','🍔','🍟'];
// let ed:Array<string> = [...fd,...ft];
// console.log(ed);
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = {
    fname: 'vikas',
    lname: 'srivastava',
    username: 'vnbjilu'
};
var userdetails = __assign(__assign({}, users), { address: 'gida sec 5 d119 gorakhpur', email: 'vikas1.srivastava@gmail.com' });
console.log(users);
console.log(userdetails);
