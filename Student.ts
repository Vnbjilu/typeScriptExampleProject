class Student{
    set StFname(fname:string){
        this.fname = fname;
    }
    set StLname(lname:string){
        this.lname = lname;
    }
    set StAge(age:number){
        this.age = age;
    }    
    set StContact(contact:string){
    this.contact = contact;
    }
    set StEmail(email:string){
    this.email = email;
    }
    get StEmail():string { return this.email; }
    get StFname():string { return this.fname; }
    get StLname():string { return this.lname; }
    get StAge():number { return this.age; }
    get StContact():string { return this.contact; }

    constructor(
        protected fname:string,
        protected lname:string,
        protected age:number,
        protected email:string,
        protected contact:string){}
    
}
const vikas:Student=new Student('vikas','srivastava',45,'vikas@gmail.com','8009492817');
console.log("first Name="+vikas.StFname);
console.log("last Name="+vikas.StLname);
console.log(" Age ="+vikas.StAge);
console.log("contact="+vikas.StContact);
console.log("Email id="+vikas.StEmail);