class User{
    constructor(
        protected fname:string,
        protected lname:string,
        protected age:number,
        protected contact:string){}
    

}

class Staff extends User{
    constructor(
        protected staffId:number,
        fname:string,
        protected middleName:string,
        lname:string,
        age:number,
        contact:string,
        protected email:string){
            super(fname,lname,age,contact);

        }
        get StaffId():number
        {
            return this.staffId;
        }
        set StaffId(staffd:number)
        {
            this.staffId = staffd;
        }
        set staffMiddleName(middlename:string)
        {
            this.middleName = middlename;
        }
        set staffEmailId(emailid:string)
        {
            this.email = emailid;
        }
        get staffEmailId():string{
            return this.email;
        }
        get staffMiddleName():string{
            return this.middleName;
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
    
