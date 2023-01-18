class Person{
    fname:string;
    lname:string;
    age:number;
    constructor(fname:string,lname:string,age:number)
    {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    getFullName():string {
        return `${this.fname} ${this.lname}`;
    }       
}
const person:Person=new Person('vikas','srivastava',45);
this.document.getElementById("data").innerHTML=`<p> your full name is: ${person.getFullName()}</p>`;
// class with members creation using constructor

class Student{
    constructor(
        private fname:string,
        private lname:string,
        private age:number){}
        getFullDetails():string {
        return `Name: ${this.fname} ${this.lname} and age: ${this.age}`;

        }
}
const student:Student=new Student('Ratan','srivastava',11);
//this.document.getElementById("data").innerHTML+=`<p> your Student Full  name is: ${student.getFullDetails()}</p>`;


