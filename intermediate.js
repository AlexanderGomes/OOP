class Library {
  constructor(name, address, books) {
    this.name = name;
    this.address = address;
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  getBook(title) {
    return this.books.find((book) => book.title === title);
  }

  getAllBooks() {
    return this.books;
  }

  lendBook(title, lender) {
    const book = this.getBook(title);

    if (book) {
      book.lender = lender;
      book.isLent = true;
      return "lent";
    } else {
      return `the book: ${title} not found`;
    }
  }

  returnBook(title) {
    const book = this.getBook(title);
    if (book) {
      book.isLent = false;
      book.lender = "";
    }
  }
}

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isLent = false;
    this.lender = "";
  }
}

const libraryInstance = new Library("stanford", "3600 sierra ridge", []);
libraryInstance.addBook(new Book("rich black family", "alex gomes"));
libraryInstance.addBook(
  new Book("first carioca billionaire in the us", "alex gomes")
);

