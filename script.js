const container = document.querySelector(".container");

document.querySelector('#gridSizeButton').addEventListener('click', promptMsg);

function promptMsg() {
    let gridSize = prompt("Choose a size between 16, 32 and 64");
}


for (let i = 0; i < 16; i++){
const box = document.createElement("div");
box.classList.add("box");

box.addEventListener("mouseover", event =>{
    box.style.backgroundColor = "black";
})

container.appendChild(box);
}
