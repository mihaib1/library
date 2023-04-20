let myLibrary = [];

function Book(title, author, pageCount, isRead, rating, shortDescription, image) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
    this.rating = rating;
    this.shortDescription = shortDescription;
    this.image = image;
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

    let bookImage = document.createElement("div");
    bookImage.classList.add("book-image");
    bookCard.appendChild(bookImage);

    let image = document.createElement("img");
    image.alt="book-cover";
    image.classList.add("book-cover");
    image.src="";
    bookImage.appendChild(image);

    let aboutBook = document.createElement("div");
    aboutBook.classList.add("about-book");
    bookCard.appendChild(aboutBook);

    let title = document.createElement("h3");
    title.textContent = bookObject.title;
    title.value = bookObject.title;
    aboutBook.appendChild(title);

    let bookDescription = document.createElement("div");
    bookDescription.classList.add("book-description");
    if(bookObject.shortDescription) {
        bookDescription.textContent = bookObject.shortDescription;
    }
    
    let bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    if(bookObject.title){
        bookTitle.textContent += bookObject.title;
    }

    bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");
    if(bookObject.author){
        bookAuthor.textContent += bookObject.author;
    }
    
    let bookPageCount = document.createElement("div");
    bookPageCount.classList.add("book-page-num");
    if(isNullOrEmpty(bookObject.pageCount)){
        bookPageCount.style="display: none";
    }
    bookPageCount.textContent += bookObject.pageCount;

    let bookRating = document.createElement("div");
    bookRating.classList.add("book-rating");
    if(isNullOrEmpty(bookObject.rating)) {
        bookRating.style="display: none"; 
    }
    bookRating.textContent += bookObject.rating;

    let elementsToAppend = [bookTitle, bookAuthor, bookPageCount, bookRating];
    elementsToAppend.forEach((element) => bookDescription.appendChild(element));

    aboutBook.appendChild(bookDescription);

    /*let buttonsRow = document.createElement("div");
    buttonsRow.classList.add("buttons-row");
    createBottomButtons(buttonsRow);
    aboutBook.appendChild(buttonsRow);*/

    let removeButtonWrapper = document.createElement("div");
    removeButtonWrapper.classList.add("remove-btn");
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("removeBtn");
    removeButtonWrapper.appendChild(removeBtn);
    bookCard.appendChild(removeButtonWrapper);
    setDeleteButtonAttributes(removeBtn, bookObject);
}

/*function createBottomButtons(divToAppendTo){
    let buttonsList = ["star.svg", "follow.svg", "share.svg"];
    buttonsList.forEach(function(element) {
        button = document.createElement("object");
        button.data = element;
        button.classList.add("card-svg");
        divToAppendTo.appendChild(button);
    });
} */

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