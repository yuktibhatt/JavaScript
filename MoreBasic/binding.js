const yukti = {
    firstName : "Yukti",
    lastName : "Bhatt",
    role : "Admin",
    courseCount : 3,
    getInfo : function() {
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        Her role is ${this.role}
        and she is studying ${this.courseCount} courses
        `);
    }
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Subadmin",
    courseCount : 4,
}


//yukti.getInfo();

//bind gives you the reference
yukti.getInfo.bind(dj)();

var djinfo =  yukti.getInfo.bind(dj);
djinfo();


//directly calls it  
yukti.getInfo.call(dj);


