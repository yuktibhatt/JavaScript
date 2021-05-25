const courses = [
    {
        name : "Complete React Js course",
        price : "2.3"
    },
    {
        name : "Complete Angular Js course",
        price : "2.4"
    },
    {
        name : "Complete Mern course",
        price : "2.1"
    },
    {
        name : "Complete C++ course",
        price : "2.0"
    },
];

function generateList () {
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach((course) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });
}

//generateList();
window.addEventListener("load", generateList);

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
    courses.sort( (a,b) => a.price - b.price );
    generateList();
});


