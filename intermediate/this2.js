//for all regular function calls,this points to window object

console.log(this);

var user = {
    firstName : "Yukti",
    courseCount : 4,
    getCourseCount: function () {
        console.log("Line 9", this);
        function sayHi(){
            console.log("Hi");
            console.log("Line 10", this);
        }
        sayHi();
    },
};

user.getCourseCount(); //not a regular function call


function sayHello() {
    console.log("Hello");
}

sayHello(); //a regular function call

