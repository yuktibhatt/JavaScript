// for(let i = 0;i < 10; i++){
//     console.log(i);
// }

const states = ["Delhi", "Mumbai", "Rajasthan", "Assam",1947,  "Tamil Nadu"];

for(let i=0; i< states.length; i++) {
    if(typeof states[i] != 'string') continue;  //only skips
    console.log(states[i]);
}

for(let i=0; i< states.length; i++) {
    if(typeof states[i] != 'string') break; //stops after it matches the condition
    console.log(states[i]);
}

