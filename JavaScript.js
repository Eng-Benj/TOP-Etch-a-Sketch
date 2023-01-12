function createRows(res) {
    const topLevel = document.querySelector('.grid');
    for (let i=0;i<res;i++){
        let divRow = document.createElement('div');
        divRow.className = "row";
        topLevel.appendChild(divRow);
    };
};

function createSquares(res) {
    const rows = Array.from(document.querySelectorAll('.row'));
    rows.forEach((row) => {
        for (let i=0;i<res;i++) {
            let divSqr = document.createElement('div');
            divSqr.className = "sqr";
            divSqr.id = "r" + (rows.indexOf(row)+1) + "c" + (i+1);
            row.appendChild(divSqr);
        }
    });
};

function pencil() {
    const sqrs = Array.from(document.querySelectorAll('.sqr'));
    sqrs.forEach((sqr) => {
        sqr.addEventListener('mouseover', () => {
            sqr.style.cssText = "background-color: grey;";
        });
    });
};

function deleteGrid() {
    const grid = document.querySelector('.grid')
    const rows = Array.from(document.querySelectorAll('.row'));
    const sqrs = Array.from(document.querySelectorAll('.sqr'));
    grid.style.cssText = "border-left: 0px solid black; border-top: 0px solid black"
    rows.forEach((row) => {
        grid.removeChild(row)
    })
}

function etchASketch(res){
    if (res != null && res < 65 && res > 0){
        deleteGrid()
        createRows(res)
        createSquares(res)
        pencil()
    }
    console.log(res)
}

const newGrid = document.querySelector('#newGrid')
newGrid.addEventListener('click', () => etchASketch(prompt("How many squares wide would you like the grid to be? (1-64)")))

const clearGrid = document.querySelector('#clearGrid')
clearGrid.addEventListener('click', () => {
    const sqrs = Array.from(document.querySelectorAll('.sqr'));
    sqrs.forEach((sqr) => {
        sqr.style.cssText = "background-color: white;";
    });
})