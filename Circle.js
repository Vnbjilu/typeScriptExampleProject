var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        this.Area = 3.14 * this.radius * this.radius;
    };
    Circle.prototype.calculatePerimeter = function () {
        this.Perimeter = 2 * 3.14 * this.radius;
    };
    Object.defineProperty(Circle.prototype, "Areat", {
        get: function () { return this.Area; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "Perimeters", {
        get: function () { return this.Perimeter; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "crRadius", {
        get: function () { return this.radius; },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
var ques1 = new Circle(4.5);
ques1.calculateArea();
ques1.calculatePerimeter();
console.log(" Radius of circle :" + ques1.crRadius);
console.log(" Area of circle =" + ques1.Areat);
console.log(" Perimeter of circle =" + ques1.Perimeters);
