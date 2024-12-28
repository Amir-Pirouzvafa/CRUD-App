import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Read from "./pages/Read";
import PageNotFound from "./pages/404";
import BooksProvider from "./context/bookContext";

function App() {
  return (
    <BooksProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="update/:id" element={<Update />} />
        <Route path="read/:id" element={<Read />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BooksProvider>
  );
}

export default App;
