import BookCard from "../components/BookCard";

// Define the Book interface
interface Book {
  title: string;
  author: string;
  cover: string;
  description?: string; // Make description optional
}

const books: Book[] = [
  { title: "1984", author: "George Orwell", cover: "/path/to/1984-cover.jpg", description: "A dystopian social science fiction novel." },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "/path/to/mockingbird-cover.jpg",
    description: "A novel about the serious issues of rape and racial inequality."
  },
  // Add more books as needed
];

function BrowseBooks() {
  return (
    <div className="browse-books">
      <h1>Browse Available Books</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            description={book.description} // Pass description if available
          />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
