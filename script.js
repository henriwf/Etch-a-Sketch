const container = document.querySelector(".container");

document.querySelector('#gridSizeButton').addEventListener('click', promptMsg);

function promptMsg() {
    let gridSize = prompt("Choose a size between 1 and 64");

    gridSize = parseInt(gridSize);

    
    if (gridSize <= 64) {
        createGrid(gridSize);
    } else {
        alert("Invalid size! Please choose a size between 1 and 64");
    }
}

function createGrid(size) {
    container.innerHTML = "";


    for (let i = 0; i < size; i++){

        const boxA = document.createElement("div");
        boxA.classList.add("boxA");

        container.appendChild(boxA);

        for (let j = 0; j < size; j++) {
            const box = document.createElement("div");
            box.classList.add("box");

            box.addEventListener("mouseover", event =>{
                box.style.backgroundColor = "black";
            })


            boxA.appendChild(box);

        }

    }

}

