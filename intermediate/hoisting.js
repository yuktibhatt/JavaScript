tipper("80"); //function declarations are scanned and made available
function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
    
}

//bigTipper("200");  variable declarations are scanned and undefined


var bigTipper = function (a) {
    var bill= parseInt(a);
    console.log(bill + 15);
}

bigTipper("200"); //variable declarations are scanned and undefined



console.log(name);
var name = "Yukti";


function sayName() {
    var name = "Mr AAKU";
    console.log(name);
}

sayName();

console.log(name);

