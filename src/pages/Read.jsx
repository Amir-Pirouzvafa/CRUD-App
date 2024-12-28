import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        console.log(res);

        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-slate-50">
      <div className="w-1/2 bg-slate-200 border shadow-sm px-12 pt-4 pb-12 rounded-md">
        <h1 className="mb-5 text-lg font-bold">Detail Users</h1>
        <div className="mb-5">
          <p className="font-semibold">Title: {data.title}</p>
        </div>
        <div className="mb-5">
          <p className="font-semibold">Author: {data.author}</p>
        </div>
        <div className="mb-5">
          <p className="font-semibold">Language: {data.language}</p>
        </div>
        <div className="flex gap-2">
          <Link
            to={`/update/${id}`}
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center "
          >
            Edit
          </Link>
          <Link
            to="/"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded text-sm px-5 py-2.5 text-center"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;
