import { useState } from "react";
import { useBooks } from "../context/bookContext";

function SearchBox() {
  const getFilterItems = (query, books) => {
    if (!query) {
      return [];
    }
    return books.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  };

  const [query, setQuery] = useState("");

  const { books } = useBooks();
  console.log(books);

  const filterItems = getFilterItems(query, books);

  return (
    <div className="relative flex justify-center items-center">
      <div className="flex flex-col items-center gap-2 w-full max-w-md">
        <input
          type="text"
          className="w-full p-3 text-sm text-gray-700 border border-dashed border-blue-800 rounded-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search"
        />

        {/* نتایج جستجو */}
        {query && filterItems.length > 0 && (
          <ul className="absolute top-full mt-2 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-md z-10 max-h-60 overflow-y-auto">
            {filterItems.map((book) => (
              <li
                key={book.id}
                className="p-2 text-gray-800 border-b hover:bg-gray-100 cursor-pointer"
              >
                {book.title}
              </li>
            ))}
          </ul>
        )}
        {query && filterItems.length === 0 && (
          <p className="text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
}

export default SearchBox;
