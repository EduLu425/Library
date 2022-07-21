let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
}


const contentDiv = document.getElementById('content');

const bookCard = document.createElement('div');

const changeReadButton = document.createElement('button');

const bookForm = document.getElementById('form-popup');

const popUpButton = document.getElementById('popup-button');

const closeButton = document.getElementById('close-icon');

let deleteButtons = [];

let readButtons = [];

let titleInput = document.getElementById('title');

let authorInput = document.getElementById('author');

let pagesInput = document.getElementById('pages');

let readInput = document.getElementById('read');

const stopSubmission = function(e) {
    e.preventDefault();
}



bookCard.setAttribute('class', 'book-card')

bookCard.style.color = 'black';

bookCard.style.backgroundColor = 'white';

bookCard.style.textAlign = 'center';

bookCard.style.borderRadius = '15px';

/* helper function to loop through array and generate a book info card for each element */

function generateLibrary () {
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.lastChild)
    } /* Remove old cards, so the entire array doesn't get repeated each time function is called */
    for (let element of myLibrary) {
        let content = `<h2>${element.title}</h2><span><img src='./images/close.svg' viewbox='0 0 100 100' class = 'delete-button' data-index =${myLibrary.indexOf(element)}></span>
        <p>by ${element.author}</p>
         <p>${element.pages} pages</p>
         <p>Read: ${element.read}</p>
         <button class='toggle-read'>Toggle read status</button>
         `;
        bookCard.innerHTML = content;
        contentDiv.appendChild(bookCard.cloneNode(true));
    }
}






function openForm() {
    bookForm.style.display = 'block';
}

function closeForm() {
    bookForm.style.display = 'none';
}

popUpButton.addEventListener('click', function(){
    openForm()
})



function turnOnDeleteButtons() {
        deleteButtons = Array.from(document.querySelectorAll('.delete-button'))
        for (let button of deleteButtons) {
            button.addEventListener('click', function() {
                myLibrary.splice(button.getAttribute('data-index'), 1);
                generateLibrary();
                if (myLibrary.length > 0) {
                    turnOnDeleteButtons();
                }
            })
        }
    
}

function turnOnReadButtons() {
    readButtons = Array.from(document.querySelectorAll('.toggle-read'));
    console.log(readButtons);
    for (let i = 0; i < myLibrary.length; i++) {
        readButtons[i].addEventListener('click', function() {
            if (myLibrary[i].read === 'Yes') {
                console.log(myLibrary[i].read)
                myLibrary[i].read = 'No';
                generateLibrary();
                turnOnDeleteButtons();
                if (myLibrary.length > 0) {
                    turnOnReadButtons();
                }
            }
            else {
                console.log(myLibrary[i].read);
                myLibrary[i].read = 'Yes';
                generateLibrary();
                turnOnDeleteButtons();
                if (myLibrary.length > 0) {
                    turnOnReadButtons();
                }
            }
        })
    }
}

function addBookToLibrary() {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);
    myLibrary.push(newBook);
    console.log(myLibrary);
    generateLibrary();
    turnOnDeleteButtons();
    turnOnReadButtons();
    closeForm();
}

const submitButton = document.getElementById('submit');

document.getElementById('input-form').addEventListener('submit', stopSubmission);


submitButton.addEventListener('click', function() {
    addBookToLibrary()

}, false);

closeButton.addEventListener('click', function() {closeForm()

});


if (myLibrary.length > 0) {
    turnOnDeleteButtons();
}