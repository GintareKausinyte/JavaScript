const table = document.querySelector('.table');
const title = document.querySelector('.title');
let isAccending=true;



loadTable(bookData);

function loadTable(bookData) {
    if (bookData.length != 0) {
        title.innerHTML = `            
<img src="img/580b585b2edbce24c47b2772.png">
<h1>Knygos</h1>`
        table.innerHTML = `
<div class="table-header">
                <span>Pavadinimas</span>
                <span>Autorius</span>
                <span>Žanras</span>
                <span>Metai</span>
            </div>
            <hr>
`
        bookData.forEach(books => {
            table.innerHTML += `  
<div class="table-data">
<span>${books.title}</span>
<span>${books.author}</span>
<span>${books.genre}</span>
<span>${books.year}</span>
</div>
`
        });

        const yearHeader = table.querySelector("span:nth-of-type(4)");
        console.log(yearHeader);
    
        yearHeader.addEventListener("click", sortDir);
        console.log(isAccending);
        switch(isAccending){
            case true:
                bookData.sort((a, b)=>a.year-b.year);
                yearHeader.classList.add('desc');
                break;
            case false:
                bookData.sort((a, b)=> b.year-a.year);
                yearHeader.classList.add('asc');
                break;
        }
        
    } else {
        nullTable.innerHTML = `
  
    <div class="no-data"><span>Knygų sąrašas tuščias<span></div>
    `
    }

}


function sortDir(){
    if(isAccending==true){
        isAccending=false;
    }else{
        isAccending=true;
    }
    loadTable(bookData);
}


