import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const [value, setValue] = useState({
    title: "",
    author: "",
    language: "",
  });
  const navigate = useNavigate();

  const updateHandler = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3000/books/${id}`, value)
      .then((res) => {
        console.log(res);

        navigate("/");
      })
      .catch((res) => console.log(res));
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setValue(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-50">
      <div className="w-1/2 bg-slate-200 border shadow-sm px-12 pt-4 pb-12 rounded-md">
        <h1 className="font-bold text-lg">Update User</h1>

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
              value={value.title}
              onChange={(e) => setValue({ ...value, title: e.target.value })}
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
              value={value.author}
              onChange={(e) => setValue({ ...value, author: e.target.value })}
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
              value={value.language}
              onChange={(e) => setValue({ ...value, language: e.target.value })}
              required
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center "
              onClick={updateHandler}
            >
              Update
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

export default Update;
