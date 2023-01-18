class User{
    constructor(
        protected fname:string,
        protected lname:string,
        protected age:number,
        protected contact:string){}
    

}

class Staff extends User{
    get stId():number{
        return this.stfId;
    }
    set stId(stId:number){
        this.stfId = stId;
    }
    get stEmailId():string{
        return this.email;
    }
    set stEmailId(emailId:string){
        this.email = emailId;
    }
    get stContact():string{
        return this.contact;
    }
    constructor(
        protected stfId:number,
        fname:string,
        protected middleName:string,
        lname:string,
        age:number,
        contact:string,
        protected email:string){
            super(fname,lname,age,contact);

        }
        
        getFullName():string{
            return `Name: ${this.fname} ${this.middleName} ${this.lname} `;
        }
        getFullDetails():string{
            return `Name : $(this.getFullName())
                    Email : ${this.email}
                    Age: ${this.age}
                    Contact : ${this.contact}`;
               }
    }
    const Manager:Staff=new Staff(1,'vikas','kumar','srivastava',45,'8009492817','vikas1@gmail.com');
    console.log("full name: "+Manager.getFullName());
    console.log(Manager.stEmailId);

