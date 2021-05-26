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
}


module.exports = User;


const rock = new User("rock", "r@gmail.com");

console.log(rock.getInfo());
rock.enrollCourse("Angular");
console.log(rock.getCourseList());
console.log(rock.courseList);

