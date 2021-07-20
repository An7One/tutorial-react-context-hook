import React from "react";
import BookContextProvider from "./context/BookContext";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
