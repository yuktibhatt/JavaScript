// var value = Math.max(2,3,4,5,6,7,9,0,8);
// console.log(value);


// var myObj = {} ;

// Object.assign(myObj, {a:1, b: 2, c: 3}, {z:9, y:8, x: 7});
// console.log(myObj);

function sumOne(a,b) {
    return a + b;
}


var myA = [5,4];
console.log(sumOne(...myA)); //spread operator ...takes a group and spreads into multiple value


function sumTwo(...args) {               //rest operator..converts individual values  into a array 
    console.log(args);        
    let sum = 0;
    for (const arg of args) {
        sum += arg;
        
    }
    return sum;
}

console.log(sumTwo(9,3,4,5,5));


function sumTwo(a,b,...args) {               //rest operator..converts individual values  into a array 
    
    let multi = a*b;       
    let sum = 0;
    for (const arg of args) {
        sum += arg;
        
    }
    return [sum, multi];
}

console.log(sumTwo(9,3,4,5,5));

