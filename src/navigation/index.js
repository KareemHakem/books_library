import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomeBooks from "../pages/HomeBooks";
import Book from "../pages/Book";
import Navbar from "../components/Navbar";

export default function Navigation() {
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState();
  const [orderBy, setOrderBy] = useState();

  return (
    <>
      <Navbar
        setSearch={setSearch}
        search={search}
        setFilter={setFilter}
        setOrderBy={setOrderBy}
      />
      <Routes>
        <Route
          path="/"
          element={
            <HomeBooks search={search} filter={filter} orderBy={orderBy} />
          }
        />
        <Route path="/books-pg/:pageNumber" />
        <Route path="book/:id" element={<Book />} />
      </Routes>
    </>
  );
}
