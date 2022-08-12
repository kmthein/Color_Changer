let color = ["red", "green", "purple", "pink", "orange"];

let body = document.querySelector('body');
let button = document.querySelector('button');
button.addEventListener('click', change);

function change(){
    let colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
}