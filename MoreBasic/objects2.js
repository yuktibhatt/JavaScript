var User = {
    name : "",
    getUserName : function (){
        console.log(`User name is : ${this.name}`);
    }
};

var yukti = Object.create(User);
console.log(yukti);

yukti.name = "Yukti";
yukti.getUserName();


//another way
var sam = Object.create(User, {
    name : {value: "sammy"},
    courseCount : {value : 3},
});

sam.getUserName();


