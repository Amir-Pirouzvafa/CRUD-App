import { Link, useNavigate } from "react-router-dom";
import { useBooks } from "../context/bookContext";
import { useEffect } from "react";
import api from "../services/config";
import axios from "axios";

function Table() {
  const { books, setBooks } = useBooks();

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/books")
      .then((res) => setBooks(res))
      .catch((err) => console.log(err));
  });

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-h-[400px] overflow-y-auto block">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">Id</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Author</th>
            <th className="px-4 py-2 border">Language</th>
            <th className="px-4 py-2 border">Comands</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="px-4 py-2 border">{item.id}</td>
              <td className="px-4 py-2 border">{item.title}</td>
              <td className="px-4 py-2 border">{item.author}</td>
              <td className="px-4 py-2 border">{item.language}</td>
              <td className="px-4 py-2 border">
                <Link
                  to={`/read/${item.id}`}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold p-1 me-1 rounded"
                >
                  Read
                </Link>
                <Link
                  to={`/update/${item.id}`}
                  className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-1 me-1 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={(e) => deleteHandler(item.id)} 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
