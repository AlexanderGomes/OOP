class Publication {
  constructor(title, author, publicationDate) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
  }
}

class Book extends Publication {
  constructor(title, author, publicationDate) {
    super(title, author, publicationDate);
    this.borrowed = false;
    this.dueDate = null;
  }

  borrow() {
    if (this.borrowed) {
      return "This book is already borrowed.";
    } else {
      this.borrowed = true;
      const today = new Date();
      const dueDate = new Date(today.setDate(today.getDate() + 30));
      this.dueDate = dueDate;
      return "Book borrowed successfully.";
    }
  }

  returnBook() {
    if (this.borrowed) {
      this.borrowed = false;
      this.dueDate = null;
      return "Book returned successfully.";
    } else {
      return "This book is not currently borrowed.";
    }
  }

  isAvailable() {
    return !this.borrowed;
  }

  getDueDate() {
    return this.dueDate;
  }
}

class Magazine extends Publication {
  constructor(title, author, publicationDate) {
    super(title, author, publicationDate);
    this.readOnly = true;
  }

  isAvailable() {
    return !this.readOnly;
  }
}

class User {
  constructor(name, libraryCardNumber) {
    this.name = name;
    this.libraryCardNumber = libraryCardNumber;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (this.borrowedBooks.length >= 3) {
      return "You have reached the maximum number of borrowed books.";
    } else if (!book.isAvailable()) {
      return "This book is not available.";
    } else {
      book.borrow();
      this.borrowedBooks.push(book);
      return "Book borrowed successfully.";
    }
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      book.returnBook();
      this.borrowedBooks.splice(index, 1);
      return "Book returned successfully.";
    } else {
      return "You have not borrowed this book.";
    }
  }
}

class Library {
  constructor() {
    this.books = [];
    this.magazines = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  addMagazine(magazine) {
    this.magazines.push(magazine);
  }

  displayAvailableBooks() {
    const availableBooks = this.books.filter((book) => book.isAvailable());
    console.log("Available books:");
    availableBooks.forEach((book) => console.log(book.title));
  }

  displayBorrowedBooks() {
    const borrowedBooks = this.books.filter((book) => !book.isAvailable());
    console.log("Borrowed books:");
    borrowedBooks.forEach((book) =>
      console.log(`${book.title} (due ${book.getDueDate()})`)
    );
  }
}

// Example usage:
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "1925");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "1960");
const book3 = new Book("rich black man", "Harper Lee", "1960");

const magazine1 = new Magazine(
  "National Geographic",
  "National Geographic Society",
  "1888"
);

const user1 = new User("Alice", "1234");
const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.addMagazine(magazine1);

user1.borrowBook(book1);
user1.borrowBook(book2);

console.log(library.displayAvailableBooks());
