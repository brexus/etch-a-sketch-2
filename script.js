// const grid_container = document.getElementById("grid-container");

// function getSizeGrid() {
//     const eight_button = document.getElementById("eight");
//     const sixteen_button = document.getElementById("sixteen");

//     eight_button.addEventListener('click', () => {
//         return 8;
//     });

//     sixteen_button.addEventListener('click', () => {
//         return 16;
//     });
// }

function createGrid() {
    const grid_container = document.getElementById("grid-container");
    // const toolkit_buttons = document.querySelectorAll('data-buttons');
    // ZAMIENIC TE 3 QUERYSELECTORY NA 1 JAKO LISTA
    const toolkit_button = document.querySelectorAll('.toolkit-button');

    console.log(toolkit_button[0]);
    let size;
    let oneGrid;

    for (let j = 1; j < 3; j++) {
        toolkit_button[j].addEventListener('click', function(e) {
            deleteGridItems();
            if(j == 1){
                grid_container.style.gridTemplateColumns = "repeat(8, 1fr)";
                grid_container.style.gridTemplateRows = "repeat(8, 1fr)";
                size = 8;
            } else if(j == 2){
                grid_container.style.gridTemplateColumns = "repeat(16, 1fr)";
                grid_container.style.gridTemplateRows = "repeat(16, 1fr)";
                size = 16;
            }

            for (let i = 0; i < size*size; i++) {
                gridItem = document.createElement("div");
                gridItem.classList.add("grid-item");
                grid_container.appendChild(gridItem);
                // console.log(grid_container);
            }
        });
    }

}

function deleteGridItems() {
    const grid_container = document.getElementById("grid-container");
    const grid_items = document.querySelectorAll("#grid-container > div");

    grid_items.forEach(item => {
        grid_container.removeChild(item);
    });
}

function painting() {
    const grid_container = document.getElementById("grid-container");
    const grid_items = document.querySelectorAll("#grid-container > div");

    grid_items.forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = "red";
        })
    });
}

