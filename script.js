let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${title} by ${author}, ${pages} pages, ${read}.`
    }
}

const contentDiv = document.getElementById('content');

const bookCard = document.createElement('div');

let titleInput = document.getElementById('title');

let authorInput = document.getElementById('author');

let pagesInput = document.getElementById('pages');

let readInput = document.getElementById('read');

bookCard.style.color = 'black';

bookCard.style.backgroundColor = 'white';

bookCard.style.textAlign = 'center';

bookCard.style.borderRadius = '15px'

/* helper function to loop through array and generate a book info card for each element */

function generateLibrary () {
    for (let element of myLibrary) {
        let content = `<h2>${element.title}</h2>
        <p>by ${element.author}</p>
         <p>${element.pages} pages</p>
         <p>Read: ${element.read}</p>
         `;
        bookCard.innerHTML = content;
        contentDiv.appendChild(bookCard.cloneNode(true));
    }
}

function addBookToLibrary() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild)
    } /* Remove old cards, so the entire array doesn't get repeated each time function is called */
    let newBook = new book();
    newBook.title = titleInput.value;
    newBook.author = authorInput.value;
    newBook.pages = pagesInput.value;
    newBook.read = readInput.value;
    myLibrary.push(newBook);
    generateLibrary();
}

const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(){
    addBookToLibrary()
})
