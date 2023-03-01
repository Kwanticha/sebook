import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { BookAll, BookAdd, BookEdit, BookDetail } from "./pages";

function App() {
  return (
    <div className="App">
      <h1> React SE Book CRUD</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookAll />} />
          <Route path="/books/create" element={<BookAdd />} />
          <Route path="/books/edit/:Isbn/" element={<BookEdit />} />
          <Route path="/books/detail/:Isbn/" element={<BookDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
