const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST/PUT requests)
app.use(express.json());

// A simple GET route
app.get('/', (req, res) => {
  res.send('Welcome to the REST API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// ... (previous code for imports and app setup) ...
let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
];

// GET all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET a single book by ID
app.get('/api/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// POST (create) a new book
app.post('/api/books', (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  res.status(201).json(newBook); // 201 Created status
});

// ... (You would add PUT and DELETE routes similarly) ...

