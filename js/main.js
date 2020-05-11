const table = document.querySelector('.table');
const title = document.querySelector('.title');
let sortOrder={
    year:null,
    title:null
};
let sortBy = null;



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
        const titleHeader = table.querySelector("span:nth-of-type(1)");


        yearHeader.addEventListener("click", sortByYear);
        titleHeader.addEventListener("click", sortByTitle);
    
        switch (sortBy) {
            case 'year':
                if (sortOrder.year == 'asc') {
                    bookData.sort((a, b) => a.year - b.year);
                    yearHeader.classList.add('desc');
                } else {
                    bookData.sort((a, b) => b.year - a.year);
                    yearHeader.classList.add('asc');
                }
                break;

            case 'title':
                bookData.sort((a, b) => (a.title > b.title ? 1 : a.title == b.title ? 0 : -1) * (sortOrder.title == 'asc' ? 1 : -1));
                titleHeader.classList.add(sortOrder.title);
                break;

        }

    } else {
        nullTable.innerHTML = `
  
    <div class="no-data"><span>Knygų sąrašas tuščias<span></div>
    `
    }

}


function sortByYear() {
    sortBy = 'year';
    if (sortOrder.year == 'asc') {
        sortOrder.year = 'desc';
    } else {
        sortOrder.year = 'asc';
    }
    loadTable(bookData);
}
function sortByTitle() {
    sortBy = 'title';
    if (sortOrder.title == 'asc') {
        sortOrder.title = 'desc';
    } else {
        sortOrder.title = 'asc';
    }
    loadTable(bookData);
}


