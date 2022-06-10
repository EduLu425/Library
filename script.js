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

bookCard.style.color = 'black';

bookCard.style.backgroundColor = 'white';


function addBookToLibrary() {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild)
    }
    let newBook = new book();
    newBook.title = prompt('What is the title of this book?', '');
    newBook.author = prompt('Who wrote this book?', '');
    newBook.pages = prompt('How many pages is this book?', '');
    newBook.read = prompt('Have you read this book?', '');
    myLibrary.push(newBook);
    for (let element of myLibrary) {
        let content = `<h2>${element.title}</h2>
        <p>by ${element.author}</p>
         <p>${element.pages} pages</p>
         <p>Read? ${element.read}</p>
         `;
        bookCard.innerHTML = content;
        contentDiv.appendChild(bookCard.cloneNode(true));
        

    }
}





/* let bookButton = document.getElementById('newBookButton'); 

bookButton.addEventListener('click', addBookToLibrary()); */