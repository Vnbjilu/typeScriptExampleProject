interface Shape{
    radius:number;
    Area?:number;
    Perimeter?:number;
    Areacalculate(radius:number):number;
    PerimeterCalculate(radius:number):number;
}

const UserCircle:Shape={
    radius: 10,
    
    Areacalculate: (radius:number) => { return radius*radius*3.14 },
    PerimeterCalculate: (radius:number) => { return 3.14 * radius * 2; },
   
};


console.log(UserCircle.Areacalculate(UserCircle.radius));
console.log(UserCircle.Area);
console.log(UserCircle.PerimeterCalculate(UserCircle.radius));

    

