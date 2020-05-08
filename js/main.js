const table = document.querySelector('.table');
const nullTable = document.querySelector('.js-container')
const title=document.querySelector('.title');
let sortDirection=false;

loadTable(bookData);

function loadTable(bookData){
if (bookData.length != 0) {
title.innerHTML=`            
<img src="img/580b585b2edbce24c47b2772.png">
<h1>Knygos</h1>`
table.innerHTML=`
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
} else {
    nullTable.innerHTML = `
  
    <div class="no-data"><span>Knygų sąrašas tuščias<span></div>
    `
}

}


