var myMap = new Map();

myMap.set(1, "Uno");
myMap.set(2, "dos");
myMap.set(3, "Tres");
myMap.set(4, "Cautro");

console.log(myMap);

// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`value is ${value}`);
// }


for(let [key,value] of myMap){
    console.log(`key is ${key} and value is ${value}`);
}
 
myMap.forEach((v, k) => console.log(`${v} and key is ${k}`) );


myMap.delete(2);
console.log(myMap);



