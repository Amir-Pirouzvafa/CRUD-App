import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBooks } from "../context/bookContext";
import axios from "axios";

function Create() {
  const { books, setBooks } = useBooks();

  const [data, setData] = useState({
    title: "",
    author: "",
    language: "",
  });

  const [error, setError] = useState("");

  const getNextId = () => {
    const id = books.map((book) => Number(book.id));
    const maxId = Math.max(...id);
    const nextId = maxId + 1;
    return nextId.toString();
  };

  const navigate = useNavigate();

  const addHandler = (event) => {
    event.preventDefault();
    if (!data.title.trim() || !data.author.trim() || !data.language.trim()) {
      setError("Please fill in all fields!");
      return;
    }
    const newBook = { ...data, id: getNextId() };
    console.log(newBook);

    axios
      .post("http://localhost:3000/books", newBook)
      .then((res) => {
        setBooks([...books, res.data]);
        setError("");
        navigate("/");
      })
      .catch((res) => console.log(res));
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-50">
      <div className="w-1/2 bg-slate-200 border shadow-sm px-12 pt-4 pb-12 rounded-md">
        <h1 className="font-bold text-lg">Add User</h1>

        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-blue-600"
              placeholder="Enter Title"
              onChange={(e) => setData({ ...data, title: e.target.value })}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-blue-600"
              placeholder="Enter Author"
              onChange={(e) => setData({ ...data, author: e.target.value })}
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="language"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Lanquage
            </label>
            <input
              type="text"
              id="language"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 outline-blue-600"
              placeholder="Enter Language"
              onChange={(e) => setData({ ...data, language: e.target.value })}
              required
            />
          </div>
          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
          <div className="flex gap-2">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center "
              onClick={addHandler}
            >
              Add Book
            </button>
            <Link
              to="/"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
