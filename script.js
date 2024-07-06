let myLibrary = [];

function Book(title, author, pageCount, isRead, rating, shortDescription) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.rating = rating;
    this.shortDescription = shortDescription;
    this.creationDate = new Date();
    this.bookId = myLibrary.length.toString() + "-" + this.title + "-" + this.author;
}

formId = document.getElementById("insert-form");

showFormBtn = document.getElementById("new");
showFormBtn.addEventListener("click", function(event){
    formId.classList.toggle("hidden");
    formId.classList.toggle("form-active");
});

closeFormBtn = document.getElementById("close-form")
closeFormBtn.addEventListener("click", function(event){
    closeForm();
});

document.addEventListener("keydown", function(event){
    if(event.key === "Escape"){
        closeForm();
    }
});


const form = document.getElementById("form");
form.addEventListener("submit", function(e){
    e.preventDefault();
    bookObj = new Book(title.value, author.value, pageCount.value, wasRead.checked, rating.value, shortDescription.value);
    form.reset();
    myLibrary.push(bookObj);
    createNewBookCard(myLibrary[myLibrary.length-1]);
    formId.classList.toggle("hidden");
    formId.classList.toggle("form-active");
});


function createNewBookCard(bookObject){
    let bookCardsContainer = document.getElementById("books-cards");

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCardsContainer.appendChild(bookCard);
    bookCard.setAttribute("bookId", bookObject.bookId);

    let aboutBook = document.createElement("div");
    aboutBook.classList.add("about-book");
    bookCard.appendChild(aboutBook);

    let title = document.createElement("h3");
    title.textContent = bookObject.title;
    title.value = bookObject.title;
    aboutBook.appendChild(title);

    let bookDescription = createNewElement("div", "book-description")
    if(bookObject.shortDescription) {
        //bookDescription.textContent = bookObject.shortDescription;
    }
    
    let bookTitle = createNewElement("div", "book-title");
    if(bookObject.title){
        bookTitle.textContent += bookObject.title;
    }

    let bookAuthor = createNewElement("div", "book-author");
    if(bookObject.author){
        bookAuthor.textContent += bookObject.author;
    }
    
    let bookPageCount = createNewElement("div", "book-page-num");
    if(isNullOrEmpty(bookObject.pageCount)){
        bookPageCount.style="display: none";
    }
    bookPageCount.textContent += bookObject.pageCount;

    let bookRating = createNewElement("div", "book-rating");
    if(isNullOrEmpty(bookObject.rating)) {
        bookRating.style="display: none"; 
    }
    bookRating.textContent += bookObject.rating + "/100";

    let elementsToAppend = [bookTitle, bookAuthor, bookPageCount, bookRating];
    elementsToAppend.forEach((element) => bookDescription.appendChild(element));

    aboutBook.appendChild(bookDescription);

    let buttonsContainer = createNewElement("div", "buttons-container");
    bookCard.appendChild(buttonsContainer);

    let readStatusDiv = createNewElement("div", "toggle-read");
    let readStatusButton = createNewElement("button", "readBtn");
    if (bookObject.isRead){
        readStatusButton.classList.add("is-read");
    } else {
        readStatusButton.classList.add("not-read");
    }
    readStatusDiv.appendChild(readStatusButton);
    buttonsContainer.appendChild(readStatusDiv);
    readButtonActions(readStatusButton, bookObject);

    let removeButtonWrapper = createNewElement("div", "remove-btn");
    let removeBtn = createNewElement("button", "removeBtn");
    removeButtonWrapper.appendChild(removeBtn);
    buttonsContainer.appendChild(removeButtonWrapper);
    setDeleteButtonAttributes(removeBtn, bookObject);
}



function createNewElement(elementName, ...classes){
    newElement = document.createElement(elementName);
    classes.forEach(function(cssClass){
        newElement.classList.add(cssClass);
    });
    return newElement;
}

function setDeleteButtonAttributes(button, bookObject) {
    const attributes = ["title", "author", "pageCount", "rating", "isRead", "bookId"];
    attributes.forEach(function(attribute){
        button.setAttribute(attribute, bookObject[attribute]);
    });
    button.addEventListener("click", function(event){
        removeBook(button.getAttribute("bookId"));
    });
};


function removeBook(bookIdToRemove){
    myLibrary.forEach(function(book){
        if(book.bookId === bookIdToRemove) {
            myLibrary.splice(myLibrary.indexOf(book), 1);
        }
    });
    let cardToRemove = document.querySelector(`[bookid="${bookIdToRemove}"]`);
    cardToRemove.remove()
}

function readButtonActions(button, bookObject){
    const attributes = ["bookId", "isRead"];
    attributes.forEach(function(attribute){
        button.setAttribute(attribute, bookObject[attribute]);
    });
    button.addEventListener("click", function(event){
        toggleReadStatus(bookObject.bookId, button);
    })
};

function toggleReadStatus(bookIdToChangeStatus, button){
    myLibrary.forEach(function(book){
        if(book.bookId === bookIdToChangeStatus) {
            book.isRead = !book.isRead;
            button.classList.toggle("is-read");
            button.classList.toggle("not-read");
        }
    });
}


function isNullOrEmpty(value){
    if(value === null){
        return true;
    }
    if(value === undefined){
        return true;
    }
    if(value == "" || value == " "){
        return true;
    }
    if(typeof value === "string" && value.trim().length == 0){
        return true;
    }
    return false;
}

function addBookToLibrary(book) {
    let bookAlreadyExists = true;
    if(myLibrary.includes(book)) {
        bookAlreadyExists = true;
    } else bookAlreadyExists = false;

    if(!bookAlreadyExists) {
        myLibrary.push(book);
    } else {
        alert("The book you are trying to enter already exists!");
    }
}

function closeForm(){
    if(!formId.classList.contains("hidden")){
        formId.classList.toggle("form-active");
        formId.classList.toggle("hidden");
    }
};

const title = document.getElementById("title");
title.addEventListener("input", (event) => {
    const minimumLength = event.target.minLength;
    if(title.validity.tooShort){
        title.setCustomValidity(`The title should be at least ${minimumLength} characters long`);
    } else {
        title.setCustomValidity("");
    }   
})

const author = document.getElementById("author");
author.addEventListener("input", (event) => {
    console.log(author.validity)
    const minimumLength = event.target.minLength;
    if(author.validity.patternMismatch){
        author.setCustomValidity("Author name should only contain letters!");
    } else {
        author.setCustomValidity("");
    }
    if(author.validity.tooShort){
        author.setCustomValidity(`Minimum length for this field is ${minimumLength}!`);
    } else {
        author.setCustomValidity("");
    }
})