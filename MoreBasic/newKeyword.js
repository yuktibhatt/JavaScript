var User = function(firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course Count is : ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function() {
    console.log(`Your First name is: ${this.firstName}`);
};

var yukti = new User("Yukti" , 2);   //new invokes the constructor and creates a new instance every single time
yukti.getCourseCount();
//console.log(yukti);  
if(yukti.hasOwnProperty("firstName")) {
    yukti.getFirstName
};

var aaku = new User("Aakrit", 3);
aaku.getCourseCount();
//console.log(aaku);
aaku.getFirstName();


