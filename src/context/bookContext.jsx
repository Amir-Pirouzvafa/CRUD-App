import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const bookContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/books");
      setBooks(res);
    };

    fetchData();
  }, []);

  return (
    <bookContext.Provider value={{ books, setBooks }}>
      {children}
    </bookContext.Provider>
  );
}

const useBooks = () => {
  const books = useContext(bookContext);
  return books;
};

export default BooksProvider;
export { useBooks };
