var user = {
    fname: 'vikas',
    lname: 'srivastava',
    username: 'vikasRatan'
};
var userDetails = {
    address: 'gida sec 5 d-119',
    email: 'vikas1.srivastava@gmail.com'
};
var data = " the user name is ".concat(user.fname, " has an email ").concat(userDetails.email);
this.document.getElementById("data").innerHTML = data;
