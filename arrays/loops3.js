//For of for array
const names = [
    "Youtube",
    "Instagram",
    "Facebook",
    "Netflix",
    "Amazon"
];

for(const n of names ) {
    console.log(n);
}

//For in for object

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    nf: "Netflix"
}

for(const n in symbols ) {
    console.log(`key is ${n} and value is : ${symbols[n]}`);
}

