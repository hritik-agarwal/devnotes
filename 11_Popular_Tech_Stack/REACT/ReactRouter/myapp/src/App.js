import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";
import NewBook from "./pages/NewBook";
import BookList from "./pages/BookList";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";

const App = () => {
  return (
    <>
      <nav>
        <Link to={"/"} replace reloadDocument state={{}}>
          Home
        </Link>
        <Link to={"/books"}>Books</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/books/*" element={<BookLayout />} /> */}
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
