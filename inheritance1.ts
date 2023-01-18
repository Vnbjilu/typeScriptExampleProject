class Employee extends Person{

    constructor(
        private id:number,
        fname:string,
        private middle:string,
        lname:string,
        age:number,
        private email:string){
            super(fname,lname,age);

        }
       getFullName():string{
        const namesegment:Array<string>=super.getFullName().split(' ');
        namesegment.splice(1,0,this.middle);
        const fullname:string=namesegment.join(' ');
        return fullname;

            
        }
}
const employee:Person=new Employee(1,'vikas','kumar','srivastava',45,'vikas1@gmail.com');
this.document.getElementById("data").innerHTML+=`<p> your full vikas name is ${employee.getFullName}</p>`;


