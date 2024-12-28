import SearchBox from "../components/SearchBox";
import Table from "../components/Table";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-50 h-dvh">
      <h1 className="text-3xl font-bold">List of Books</h1>
      <div className="w-9/12 rounded-sm bg-slate-200 border-solid shadow-md p-12 mt-2">
        <SearchBox />
        <div className="flex justify-end">
          <Link
            to="/create"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Add +
          </Link>
        </div>
        <Table />
      </div>
    </div>
  );
}

export default Home;
