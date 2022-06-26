import React from "react";
import image from "../../assets/bookImage2.jpg";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

export default function Navbar({
  search,
  sortingBy,
  setSearch,
  setFilter,
  setOrderBy,
  ...props
}) {
  const Categories = [
    "partial",
    "full",
    "free-ebooks",
    "paid-ebooks",
    "ebooks",
  ];

  const sorting = ["relevance", "newest"];

  return (
    <div className="search-book-navbar-reducer">
      <img src={image} alt="image_book" className="navbar-image" />
      <div className="search-book-navbar">
        <h1 className="search-book-p"> Search for books </h1>

        <div className="search-bar-components">
          <input
            className="form-input"
            placeholder="search for book"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <SearchIcon style={{ color: "#000", zIndex: 100 }} />
        </div>

        <div className="form-select-input-container">
          <form>
            <label for="lang" style={{ color: "#fff", marginRight: 10 }}>
              Categories
            </label>
            <select
              onChange={(e) => setFilter(e.target.value)}
              className="form-select"
              name="languages"
              id="lang"
            >
              {Categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </form>

          <form>
            <label for="lang" style={{ color: "#fff", marginRight: 10 }}>
              sorting by
            </label>
            <select
              onChange={(e) => setOrderBy(e.target.value)}
              className="form-select"
              name="languages"
              id="lang"
            >
              {sorting.map((sort) => (
                <option key={sort}>{sort}</option>
              ))}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
