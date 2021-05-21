//arrow function 
var isEven = (element) => {
    // if ( element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}

//console.log(isEven(2));

//callback function

// var result = [2, 4, 5, 6].every(isEven);
// console.log(result);


var result = [2, 4, 8, 6].every((e) => {                   //when there are {} you need a return keyword
    return e % 2 === 0; 
});
console.log(result);


var result = [2, 4, 8, 6].every((e) => (e % 2 === 0));    //when no return just remember () => ()
console.log(result);

