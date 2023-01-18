interface Person{
   readonly fname:string;
    lname?:string;
     age:number;
}
const User:Person={
    fname:`vikas`,
 
    age:10
};
User.lname="srivastava";



console.log(User.fname);
console.log(User.lname);
console.log(User.age);