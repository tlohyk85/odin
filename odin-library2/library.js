// 1. Book model class
class Book {
    constructor(title, author, category) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.category = category;
        this.pages = Math.floor(Math.random() * 500) + 100;
    }
}

// 2. Library collection class
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBooks() {
        return this.books;
    }
}

// Instantiate the Library
const library = new Library();

// add initial books
const initialBooks = [
    new Book("The Great Gatsbyy", "F. Scott Fitzgerald", "Fiction"),
    new Book("To Kill a Mockingbird", "Harper Lee", "Fiction"),
    new Book("1984", "George Orwell", "Dystopian"),
    new Book("Pride and Prejudice", "Jane Austen", "Romance"),
    new Book("The Catcher in the Rye", "J.D. Salinger", "Fiction")
];

initialBooks.forEach(book => library.addBook(book));

// Modal toggles
const modal = document.getElementById('bookModal');
newBookBtn.addEventListener('click', () => modal.classList.add('active'));
closeBtn.addEventListener('click', () => modal.classList.remove('active'));
cancelBtn.addEventListener('click', () => modal.classList.remove('active'));

// Display function
function displayBooks() {
    const container = document.getElementById('libraryContainer');
    const books = library.getBooks();

    if (books.length === 0) {
        container.innerHTML = '<div class="empty-message">No books in your library yet.</div>';
        return;
    }

    container.innerHTML = books.map(book => `
        <div class="book-card" data-id="${book.id}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Category:</strong> ${book.category}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
        </div>
    `).join('');
}

// Form Submission
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('bookTitle').value.trim();
    const author = document.getElementById('bookAuthor').value.trim();
    const category = document.getElementById('bookCategory').value.trim();

    if (!title || !author || !category) {
        alert("Please fill in all fields.");
        return;
    }

    const newBook = new Book(title, author, category);
    library.addBook(newBook);

    bookForm.reset();
    modal.classList.remove('active');
    displayBooks();
});


// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    displayBooks();
});