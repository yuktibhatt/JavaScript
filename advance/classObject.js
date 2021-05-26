//import User form "./class.js";

const User = require("./class.js");


const yukti = new User("Yukti", "y@gmaill.com");

console.log(yukti.getInfo());

yukti.enrollCourse("React Bootcamp");
yukti.enrollCourse("Angular Js");

console.log(yukti.getCourseList());

let courses = yukti.getCourseList();
courses.forEach(c => console.log(c));

