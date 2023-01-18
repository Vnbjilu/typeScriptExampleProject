interface Circle{
    radius:number;
    readonly Area:number;
    readonly Perimeter:number
    AreaCalculate():void;
    PerimeterCalculate():void;
    
}

class shapes implements Circle
{
    radius: number;
    Area:number;
    Perimeter:number;
    AreaCalculate(): void {
        this.Area=3.14*this.radius*this.radius;
      // return 3.14*this.radius*this.radius;
    }
    PerimeterCalculate(): void{
        this.Perimeter=3.14*2*this.radius;
        //return 3.14*this.radius*2;
    }
    constructor(radius:number){
        this.radius=radius;
    }
    get ShapesArea():number {return this.Area;}
    get ShapesPerimeter():number {return this.Perimeter;}
    
}
const Quest1:shapes=new shapes(4.5);
Quest1.AreaCalculate();
Quest1.PerimeterCalculate();
console.log("Area of Circle="+Quest1.ShapesArea);
console.log("Perimeter of Circle="+Quest1.Perimeter);