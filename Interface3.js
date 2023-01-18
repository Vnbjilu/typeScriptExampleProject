var shapes = /** @class */ (function () {
    function shapes(radius) {
        this.radius = radius;
    }
    shapes.prototype.AreaCalculate = function () {
        this.Area = 3.14 * this.radius * this.radius;
        // return 3.14*this.radius*this.radius;
    };
    shapes.prototype.PerimeterCalculate = function () {
        this.Perimeter = 3.14 * 2 * this.radius;
        //return 3.14*this.radius*2;
    };
    Object.defineProperty(shapes.prototype, "ShapesArea", {
        get: function () { return this.Area; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(shapes.prototype, "ShapesPerimeter", {
        get: function () { return this.Perimeter; },
        enumerable: false,
        configurable: true
    });
    return shapes;
}());
var Quest1 = new shapes(4.5);
Quest1.AreaCalculate();
Quest1.PerimeterCalculate();
console.log("Area of Circle=" + Quest1.ShapesArea);
console.log("Perimeter of Circle=" + Quest1.Perimeter);
