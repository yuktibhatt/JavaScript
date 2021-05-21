var name = "Yukti";

console.log("line number 3", name);

function sayName() {
    //var name = "Mr h";
    console.log("Line number 7", name);
    sayNameTwo();

    function sayNameTwo() {
        //var name = "Mr HC";
        console.log("line number 11", name);
        
    }
}

sayName();

