const myLibrary = [];

// Book constructor
function Book(title, author, category) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.category = category;
    this.pages = Math.floor(Math.random() * 500) + 100; // Random pages between 100 and 600
}

// Function to add a book to the library
function addBookToLibrary(book) {
    // take params, create a book then store it in the array
    myLibrary.push(book);
}

const Book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
const Book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
const Book3 = new Book("1984", "George Orwell", "Dystopian");
const Book4 = new Book("Pride and Prejudice", "Jane Austen", "Romance");
const Book5 = new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction");

addBookToLibrary(Book1);
addBookToLibrary(Book2);
addBookToLibrary(Book3);
addBookToLibrary(Book4);
addBookToLibrary(Book5);

console.log(myLibrary);

const modal = document.getElementById('bookModal');
const newBookBtn = document.getElementById('newBookBtn');
const closeBtn = document.getElementById('closeBtn');
const cancelBtn = document.getElementById('cancelBtn');
const bookForm = document.getElementById('bookForm');
const submitBtn = document.getElementById('submitBtn');

newBookBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

cancelBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});




function DisplayBooks() {
    const container = document.getElementById('libraryContainer');
    container.innerHTML = ''; // Clear previous content

    if (!myLibrary || myLibrary.length === 0) {
        container.innerHTML = '<div class="empty-message">No books in your library yet.</div>';
        return;
    }

    container.innerHTML = myLibrary.map(book => `
        <div class="book-card">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
        </div>
    `).join('');

}

document.addEventListener('DOMContentLoaded', () => {
    DisplayBooks();
})

bookForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const bookTitle = document.getElementById('bookTitle').value.trim();
            const bookAuthor = document.getElementById('bookAuthor').value.trim();
            const bookCategory = document.getElementById('bookCategory').value.trim();
            
            if (!bookTitle || !bookAuthor || !bookCategory) {
                alert("Please fill in all fields.");
                return;
            }   

            const newBook = new Book(bookTitle, bookAuthor, bookCategory);
            
            addBookToLibrary(newBook);
            bookForm.reset();
            modal.classList.remove('active');
            DisplayBooks();
            

        });