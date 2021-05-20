// var num1 = 7;
// var num2 = 6;
// console.log(num1 + num2);


// var answer = num1 > num2;
// console.log(answer);

var sellingPrice = 199;
var listPrice = 799;
var discount = ((listPrice - sellingPrice)/listPrice) * 100;
// console.log("Disount Percentage=" + discount);

//round of the extra digits
displayDiscount = Math.round(discount);
console.log("Discount Price = " + displayDiscount);

//typeof gives the data type
var result = listPrice > sellingPrice;
console.log(typeof result);

