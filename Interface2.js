var UserCircle = {
    radius: 10,
    Areacalculate: function (radius) { return radius * radius * 3.14; },
    PerimeterCalculate: function (radius) { return 3.14 * radius * 2; },
};
console.log(UserCircle.Areacalculate(UserCircle.radius));
console.log(UserCircle.Area);
console.log(UserCircle.PerimeterCalculate(UserCircle.radius));
