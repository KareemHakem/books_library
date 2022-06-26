import { Routes, Route } from "react-router-dom";
import HomeBooks from "../pages/HomeBooks";
import Book from "../pages/Book";
import Navbar from "../components/Navbar";

export default function Navigation() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeBooks />} />
        <Route path="/books-pg/:pageNumber" />
        <Route path="book/:id" element={<Book />} />
      </Routes>
    </>
  );
}
