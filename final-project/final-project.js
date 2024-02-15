const bookListElement = document.getElementById('books');
let books = [];

const displayBooks = () => {
  bookListElement.innerHTML = '';
  
  books.forEach(book => {
    const listItem = document.createElement('li');
    listItem.textContent = `${book.title} by ${book.author} (${book.genre}, ${book.publicationYear})`;
    bookListElement.appendChild(listItem);
  });
}

const addBook = async (event) => {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const publicationYear = parseInt(document.getElementById('publication-year').value);
  
  const newBook = { title, author, genre, publicationYear };
  
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    const temples = data.temples;
    
    bookListElement.innerHTML = '';
    temples.forEach(temple => {
      const listItem = document.createElement('li');
      listItem.textContent = temple.templeName;
      bookListElement.appendChild(listItem);
    });
    
    books.push(newBook);
    
    displayBooks();
    
    event.target.reset();
  } catch (error) {
    console.error('Error fetching temples data:', error);
  }
}

document.getElementById('add-book-form').addEventListener('submit', addBook);

document.getElementById('year').textContent = new Date().getFullYear();
