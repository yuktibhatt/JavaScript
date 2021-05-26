const uno = () => {
    console.log("I am One");
};

const duos = () => {
    setTimeout(() => {
        console.log("Woooohoooooo!");
    }, 1000);
    console.log("I am Two");
};

const tres = () => {
    console.log("I am Three");
};

uno();
duos();
tres();

