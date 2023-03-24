let myLibrary = [];

function Book(title, author, pagesNumber, isRead, rating, firstPublicationYear, shortDescription, image) {
    this.title = title;
    this.author = author;
    this.pagesNumber = pagesNumber;
    this.isRead = isRead;
    this.rating = rating;
    this.firstPublicationYear = firstPublicationYear;
    this.shortDescription = shortDescription;
    this.image = image;
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

harryPotter = new Book("Harry Potter", "J.K. Rolling", 200, true, 7.8);
harryPotter2 = new Book("Harry Potter 2", "J.K. Rolling", 300, false, 8.2);

myLibrary.push(harryPotter2);

addBookToLibrary(harryPotter);


seeAllBooks();


formId = document.getElementById("insert-form");

showFormBtn = document.getElementById("new");
showFormBtn.addEventListener("click", function(event){
    formId.classList.toggle("hidden");
    body.classList.toggle("form-active");
});

closeFormBtn = document.getElementById("close-form")
closeFormBtn.addEventListener("click", function(event){
    if(!formId.classList.contains("hidden")){
        body.classList.toggle("form-active");
        formId.classList.toggle("hidden");
    }
});

function createNewBookCard(bookObject){
    let bookCardsContainer = document.getElementById("books-cards");

    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCardsContainer.appendChild(bookCard);

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
    title.textContent = "Trebuie modificat cu book.title";

    let bookDescription = document.createElement("div");
    bookDescription.classList.add("book-description");
    
    let bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");

    bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");

    let bookPageCount = document.createElement("div");
    bookPageCount.classList.add("book-page-num");
    bookDescription.appendChild(bookTitle);
    bookDescription.appendChild(bookAuthor);
    bookDescription.appendChild(bookPageCount);

    aboutBook.appendChild(bookDescription);

    let buttonsRow = document.createElement("div");
    buttonsRow.classList.add("buttons-row");

    let star = document.createElement("object");
    star.data = "star.svg";

    let follow = document.createElement("object");
    follow.data = "follow.svg";

    let share = document.createElement("object");
    share.data = "share.svg";

    let buttons = [star, follow, share];
    buttons.forEach(function (button) {
        button.classList.add("card-svg");
        buttonsRow.appendChild(button);
    });
    aboutBook.appendChild(buttonsRow);
}

createNewBookCard();

// de creat un obiect pe care il vom da ca param pentru createNewCardbookCardsContainer
// in createNewCardbookCardsContainer o sa punem textContent = obiect.key pt fiecare camp.


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