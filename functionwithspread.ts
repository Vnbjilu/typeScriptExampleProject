function add(x?:number, y?:number,z?:number,a?:number,b?:number):number {
    return x+y+z+a+b;
}
let numbers:Array<number>=[1,2,3,4,5];

console.log(numbers);
let data:string="got sum of numbers="+add(...numbers);

this.document.getElementById("data").innerHTML="<pre> numbers are "+numbers;
this.document.getElementById("data").innerHTML+=data+'</pre>';


