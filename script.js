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


function addBookToLibrary() {
    let newBook = new book();
    newBook.title = prompt('What is the title of this book?', '');
    newBook.author = prompt('Who wrote this book?', '');
    newBook.pages = prompt('How many pages is this book?', '');
    newBook.read = prompt('Have you read this book?', '');
    myLibrary.push(newBook);
}





/* let bookButton = document.getElementById('newBookButton'); 

bookButton.addEventListener('click', addBookToLibrary()); */