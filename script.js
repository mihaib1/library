let myLibrary = [];

function Book(title, author, pagesNumber, isRead, rating, firstPublicationYear, shortDescription) {
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.isRead = isRead;
    this.rating = rating;
    this.firstPublicationYear = firstPublicationYear;
    this.shortDescription = shortDescription
}

function addBookToLibrary(book) {
    let bookAlreadyExists = true;
    if(myLibrary.includes(book)) {
        bookAlreadyExists = true;
    } else bookAlreadyExists = false;

    if(!bookAlreadyExists) {
        myLibrary.push(book);
    } else {
        console.log("The book you are trying to enter already exists!");
    }
}

function seeAllBooks() {
    myLibrary.forEach(book => console.log(book));
}


function displayBook(){
    const test = document.getElementById("books");
    console.log(test);
    newDiv = document.createElement("div");
    let a = test.appendChild(newDiv);
    a.classList.add("test");
}

//displayBook();

harryPotter = new Book("Harry Potter", "J.K. Rolling", 200, true, 7.8);
harryPotter2 = new Book("Harry Potter 2", "J.K. Rolling", 300, false, 8.2);

myLibrary.push(harryPotter);
myLibrary.push(harryPotter2);

addBookToLibrary(harryPotter);


seeAllBooks();


formId = document.getElementById("insert-form");

showFormBtn = document.getElementById("new");
showFormBtn = document.addEventListener("click", function(event){
    formId.classList.toggle("hidden");
    formId.classList.toggle("form-active");
})

let container = document.getElementById("books-cards");
console.log(`container = ${container}`);



function createNewCardContainer(){
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    container.appendChild(bookCard);

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

    title = document.createElement("h3");
    title.textContent = "Trebuie modificat cu book.title";

    bookDescription = document.createElement("div");
    bookDescription.classList.add("book-description");
    

    bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");

    bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");

    bookPageCount = document.createElement("div");
    bookPageCount.classList.add("book-page-num");
    bookDescription.appendChild(bookTitle);
    bookDescription.appendChild(bookAuthor);
    bookDescription.appendChild(bookPageCount);

    aboutBook.appendChild(bookDescription);

    buttonsRow = document.createElement("div");
    buttonsRow.classList.add("buttons-row");

    star = document.createElement("object");
    star.data = "star.svg";

    follow = document.createElement("object");
    follow.data = "follow.svg";

    share = document.createElement("object");
    share.data = "share.svg";

    var buttons = [star, follow, share];
    buttons.forEach(function (button) {
        button.classList.add("card-svg");
        buttonsRow.appendChild(button);
    });
    aboutBook.appendChild(buttonsRow);
}

createNewCardContainer();

/*
                    <div class="book-card">
                        <div class="book-image">
                            <img src="hp.jpeg" alt="book-cover" class="book-cover">
                        </div>
                        <div class="about-book">
                            <h3>Harry Potter and the Deathly Hallows</h3> 
                            <div class="book-description">
                                <div class="book-title"><em>Title: </em>Harry Potter and the Deathly Hallows</div>
                                <div class="book-author"><em>Author: </em>J.K. Rolling</div>
                                <div class="book-page-num"><em>Number of pages: </em>322</div>
                            </div>
                            <div class="buttons-row">
                                <object data="star.svg" class="card-svg"></object>
                                <object data="follow.svg" class="card-svg"></object>
                                <object data="share.svg" class="card-svg"></object>
                            </div>
                        </div>
                    </div>
*/