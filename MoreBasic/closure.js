// function init() {
//     var firstName = "Yukti";
//     console.log("I am init");
//     function sayFirstName() {
//         console.log(firstName);
//     }    
//     return sayFirstName();
// }


// var value = init();

// value();

function doAdd(x) {
    return function(y) {
        return x + y ;
    }
}
var add5 = doAdd(4);
console.log( add5(5));

console.log(doAdd(5)(6));

