class Circle{
    protected radius:number;
    protected Area:number;
    protected Perimeter:number;
    constructor(radius:number)
    {
        this.radius = radius;

    }
    calculateArea()
    {
        this.Area=3.14*this.radius*this.radius;
    }
    calculatePerimeter()
    {
        this.Perimeter=2*3.14*this.radius;
    }
    get Areat():number{return this.Area;}
    get Perimeters():number{return this.Perimeter;}
    get crRadius():number{return this.radius;}

}
const ques1:Circle=new Circle(4.5);
ques1.calculateArea();
ques1.calculatePerimeter();
console.log(" Radius of circle :"+ques1.crRadius);
console.log(" Area of circle ="+ques1.Areat)
console.log(" Perimeter of circle ="+ques1.Perimeters);
