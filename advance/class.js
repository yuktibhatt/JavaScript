class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];  //private varaible

    getInfo(){
        return {name: this.name, email : this.email };
    }
    enrollCourse(name) {
        this.#courseList.push(name);
    }
    getCourseList(){
        return this.#courseList;
    }

    login() {
        return "Your are logged in";
    }
}


class SubAdmin extends User{        //inheritance
    constructor(name, email){
      super(name, email);
    }
    getAdminInfo() {
        return "I am subAdmin";
    }
    login(){
        return "Login for admin only";
    }
}

module.exports = User;


const rock = new User("rock", "r@gmail.com");

console.log(rock.getInfo());
rock.enrollCourse("Angular");
console.log(rock.getCourseList());
console.log(rock.courseList);

const tom = new SubAdmin("tom", "tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());

