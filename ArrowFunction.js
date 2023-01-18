function Greet(name) {
    console.log(" Hello Mr. ".concat(name));
}
var greetUser = function (name) {
    console.log(" Hello Mr. ".concat(name, " !"));
};
var GreetUserArrow = function (name) { return console.log(" Hello Mr.  ".concat(name, "! using Arrow Functon")); };
Greet("vikas Srivastava");
greetUser("Ratan Srivastava");
GreetUserArrow("Raman Srivastava");
//Arrow Function using accesssing of Array functions
var Edibles = [
    {
        edible: '🍕',
        isVegan: false
    },
    {
        edible: '🍔',
        isVegan: false
    },
    {
        edible: '🍟',
        isVegan: true
    },
    {
        edible: '🍝',
        isVegan: true
    },
    {
        edible: '🌽',
        isVegan: true
    }
];
console.log(Edibles.filter(function (item) {
    return !item.isVegan;
}));
//using Arrow Function 
console.log(Edibles.filter(function (item) { return item.isVegan; }));
