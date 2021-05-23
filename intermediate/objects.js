var user = {
    firstName : "Yukti",
    lastName : "Bhatt",
    role : "Admin",
    loginCount : 30,
    facebookSignedIn : true
};

console.log(user.firstName);
console.log(user["lastName"]);  //passed as a string, not a good practice


user.loginCount = 44;
console.log(user.loginCount);

console.log(user);
console.table(user);



