//destructing in arrays
// const user = ["Yukti", 3, "admin"];

// // var role =user[2];
// // var name = user[0];


// var [ name, courseCount, role] = user;   //destructing in arrays may not have same names 

// console.log(role);


//destructing in objects
const MyUser = {
    name : "Yukti",
    courseCount : 5,
    role : "admin",
};
console.log(MyUser.courseCount);

const { name , courseCount , role} = MyUser;   ////destructing in objects should have same name
console.log(role);



