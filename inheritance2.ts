class Person{
    constructor(
        private fname:string,
        private lname:string,
        private age:number){}
    
    getFullName():string{
        return `${this.fname} ${this.lname}`;

    }
}
class Employee extends Person{
    constructor(
        private id:number,
        fname:string,
        private middlename:string,
        lname:string,
        age:number,
        private email:string){
            super(fname,lname,age);

        }
    getFullName(): string {
        const namesegment:Array<string>=super.getFullName().split(' ');
        namesegment.splice(1,0,this.middlename);
        namesegment.splice(3,0,this.email);
       
        const fullname=namesegment.join(' ');
        return ` Employee full name is: ${fullname}`;
    }

    }
    const emp:Person=new Employee(1,'vikas','kumar','srivastava',45,'vikas1@gmail.com');
    console.log(emp.getFullName());
