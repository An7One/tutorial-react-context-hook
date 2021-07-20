import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetail from "./BookDetail";

const BookList = () => {
  const { books, setBooks } = useContext(BookContext);
  return books.length > 0 ? (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetail book={book} key={book.id} />
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No book to read. Hello free time.</div>
  );
};

export default BookList;
