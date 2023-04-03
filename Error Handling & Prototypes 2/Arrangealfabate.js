function arrangeInAlphabeticalOrder(books, callback) {
    const bookTitles = books.map(book => book.title);
    const sortedTitles = bookTitles.sort();
  
    callback(sortedTitles);
  }
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
  ];
  
  function logTitlesInAlphabeticalOrder(titles) {
    console.log("Book titles in alphabetical order:");
    console.log(titles.join(", "));
  }
  
  arrangeInAlphabeticalOrder(books, logTitlesInAlphabeticalOrder);

  
//   Book titles in alphabetical order:
//   1984, The Catcher in the Rye, The Great Gatsby, To Kill a Mockingbird
      