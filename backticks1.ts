let user={
    fname:'vikas',
    lname:'srivastava',
    username:'vikasRatan'
};
let userDetails={
    address:'gida sec 5 d-119',
    email:'vikas1.srivastava@gmail.com'};

    let data:string=` the user name is ${user.fname} has an email ${userDetails.email}`;
    this.document.getElementById("data").innerHTML=data;
    