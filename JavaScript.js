const topLevel = document.querySelector('.grid')
for (let i=0;i<16;i++){
    let divRow = document.createElement('div');
    divRow.className = "row";
    topLevel.appendChild(divRow);
}

const rows = Array.from(document.querySelectorAll('.row'));
console.log(rows)
rows.forEach((row) => {
    for (let i=0;i<16;i++) {
        let divSqr = document.createElement('div');
        divSqr.className = "sqr" 
        divSqr.id = "r" + (rows.indexOf(row)+1) + "c" + (i+1);
        row.appendChild(divSqr)
    }
});